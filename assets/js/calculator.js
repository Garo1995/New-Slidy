(function () {
    const sliderP = document.getElementById('slider-presentations');
    const sliderH = document.getElementById('slider-hours');
    const sliderR = document.getElementById('slider-rate');

    const countP = document.getElementById('count-presentations');
    const countH = document.getElementById('count-hours');
    const countR = document.getElementById('count-rate');

    const resHours = document.getElementById('result-hours');
    const resHoursUnit = document.getElementById('result-hours-unit');
    const resHoursDetail = document.getElementById('result-hours-detail');

    const resMoney = document.getElementById('result-money');
    const resMoneyUnit = document.getElementById('result-money-unit');
    const resMoneyDetail = document.getElementById('result-money-detail');

    // Если у тебя есть отдельный элемент "заполнения" трека
    // например: <div class="slider-fill" id="fill-presentations"></div>
    const fillP = document.getElementById('fill-presentations');
    const fillH = document.getElementById('fill-hours');
    const fillR = document.getElementById('fill-rate');

    function formatNumber(value) {
        return Number(value).toLocaleString('ru-RU');
    }

    function hoursLabel(h) {
        const n = Math.abs(h) % 100;
        const n1 = n % 10;

        if (n > 10 && n < 20) return 'часов';
        if (n1 > 1 && n1 < 5) return 'часа';
        if (n1 === 1) return 'час';
        return 'часов';
    }

    function daysLabel(d) {
        const n = Math.abs(d) % 100;
        const n1 = n % 10;

        if (n > 10 && n < 20) return 'рабочих дней';
        if (n1 > 1 && n1 < 5) return 'рабочих дня';
        if (n1 === 1) return 'рабочий день';
        return 'рабочих дней';
    }

    function formatMoney(rub) {
        if (rub >= 1000000) {
            return {
                val: (rub / 1000000).toFixed(1).replace('.', ','),
                unit: 'млн'
            };
        }

        if (rub >= 1000) {
            return {
                val: (rub / 1000).toFixed(1).replace('.', ','),
                unit: 'тыс'
            };
        }

        return {
            val: formatNumber(rub),
            unit: '₽'
        };
    }

    function updateFill(slider, fill) {
        if (!fill) return;
        const min = Number(slider.min);
        const max = Number(slider.max);
        const val = Number(slider.value);
        const percent = ((val - min) / (max - min)) * 100;
        fill.style.width = percent + '%';
    }

    function calculate() {
        const presentations = Number(sliderP.value);
        const hoursEach = Number(sliderH.value);
        const rate = Number(sliderR.value);

        countP.textContent = formatNumber(presentations);
        countH.textContent = formatNumber(hoursEach);
        countR.textContent = formatNumber(rate);

        const totalHours = presentations * hoursEach;
        const workingDays = +(totalHours / 8).toFixed(1);
        const monthlyRub = totalHours * rate;
        const yearlyRub = monthlyRub * 12;

        resHours.textContent = formatNumber(totalHours);
        resHoursUnit.textContent = hoursLabel(totalHours);
        resHoursDetail.textContent = `${formatNumber(totalHours)} ${hoursLabel(totalHours)} в месяц = ${workingDays} ${daysLabel(workingDays)}`;

        const yearMoney = formatMoney(yearlyRub);
        resMoney.textContent = yearMoney.val;
        resMoneyUnit.textContent = yearMoney.unit;
        resMoneyDetail.textContent = `${formatNumber(monthlyRub)} ₽ в месяц = ${yearMoney.val} ${yearMoney.unit} в год`;

        updateFill(sliderP, fillP);
        updateFill(sliderH, fillH);
        updateFill(sliderR, fillR);
    }

    [sliderP, sliderH, sliderR].forEach(slider => {
        slider.addEventListener('input', calculate);
    });

    calculate();
})();






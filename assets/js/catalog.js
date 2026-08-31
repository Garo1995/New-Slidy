(function () {
    function initSlider() {
        const minRange = document.getElementById('minRange');
        const maxRange = document.getElementById('maxRange');
        const minLabel = document.getElementById('minLabel');
        const maxLabel = document.getElementById('maxLabel');
        const activeTrack = document.getElementById('activeTrack');

        // если блока нет на странице — просто выходим, ошибок не будет
        if (!minRange || !maxRange || !minLabel || !maxLabel || !activeTrack) {
            return false;
        }

        // защита от повторной инициализации, если функция вызовется ещё раз
        if (minRange.dataset.sliderInit) {
            return true;
        }
        minRange.dataset.sliderInit = 'true';

        const gap = 1; // минимальное расстояние между ползунками

        function updateSlider(e) {
            let minVal = parseInt(minRange.value, 10);
            let maxVal = parseInt(maxRange.value, 10);

            const triggeredBy = e ? e.target : null;

            // не даём ползункам пересекаться / меняться местами
            if (maxVal - minVal < gap) {
                if (triggeredBy === minRange) {
                    minRange.value = maxVal - gap;
                    minVal = maxVal - gap;
                } else {
                    maxRange.value = minVal + gap;
                    maxVal = minVal + gap;
                }
            }

            minLabel.textContent = minVal;
            maxLabel.textContent = maxVal;

            const rangeMin = parseInt(minRange.min, 10);
            const rangeMax = parseInt(minRange.max, 10);

            const percentMin = ((minVal - rangeMin) / (rangeMax - rangeMin)) * 100;
            const percentMax = ((maxVal - rangeMin) / (rangeMax - rangeMin)) * 100;

            activeTrack.style.left = percentMin + '%';
            activeTrack.style.right = (100 - percentMax) + '%';
        }

        minRange.addEventListener('input', updateSlider);
        maxRange.addEventListener('input', updateSlider);

        updateSlider();
        return true;
    }

    // если блок уже есть при загрузке
    function tryInit() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initSlider);
        } else {
            initSlider();
        }
    }

    tryInit();

    const observer = new MutationObserver(() => {
        initSlider();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
})();






(function () {
    function initFilterCategory() {
        const scrollBox = document.getElementById('filterScroll');
        const nextBtn = document.getElementById('filterNextBtn');

        if (!scrollBox || !nextBtn) return false;
        if (scrollBox.dataset.filterInit) return true;
        scrollBox.dataset.filterInit = 'true';

        const scrollStep = 200;

        function updateNextButton() {
            const maxScroll = scrollBox.scrollWidth - scrollBox.clientWidth;
            nextBtn.classList.toggle('is-disabled', scrollBox.scrollLeft >= maxScroll - 2);
        }

        nextBtn.addEventListener('click', () => {
            scrollBox.scrollBy({ left: scrollStep, behavior: 'smooth' });
        });

        scrollBox.addEventListener('scroll', updateNextButton);
        window.addEventListener('resize', updateNextButton);
        updateNextButton();

        // --- drag-to-scroll мышью ---
        let isDragging = false;
        let startX = 0;
        let startScrollLeft = 0;
        let hasMoved = false;

        scrollBox.addEventListener('mousedown', (e) => {
            isDragging = true;
            hasMoved = false;
            startX = e.pageX;
            startScrollLeft = scrollBox.scrollLeft;
            scrollBox.classList.add('is-dragging');
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();

            const delta = e.pageX - startX;

            // если сдвинули мышь больше чем на 3px — считаем это драгом, а не кликом
            if (Math.abs(delta) > 3) hasMoved = true;

            scrollBox.scrollLeft = startScrollLeft - delta;
        });

        window.addEventListener('mouseup', () => {
            if (!isDragging) return;
            isDragging = false;
            scrollBox.classList.remove('is-dragging');
        });

        // блокируем клик по кнопке category, если это был драг, а не клик
        scrollBox.addEventListener('click', (e) => {
            if (hasMoved) {
                e.preventDefault();
                e.stopPropagation();
            }
        }, true);

        return true;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFilterCategory);
    } else {
        initFilterCategory();
    }

    const observer = new MutationObserver(() => initFilterCategory());
    observer.observe(document.body, { childList: true, subtree: true });
})();












let startY = 0;
let endY = 0;
let threshold = 50;
let canClose = false;

$('.touchstart').on('touchstart', function (e) {
    const isDragZone = $(e.target).closest('.modal-drag-zone').length > 0;

    canClose = isDragZone;
    startY = e.originalEvent.touches[0].clientY;
});

$('.touchstart').on('touchmove', function (e) {
    endY = e.originalEvent.touches[0].clientY;
});

$('.touchstart').on('touchend', function () {

    if (!canClose) return;

    if (endY - startY > threshold) {
        $(this).removeClass('touchstart-open');
        $('body').removeClass('body-fon modal-open');
        $('.modal-overlay').removeClass('active');
        $('.select-property').removeClass('select-property-open');
    }
});


$('.open-estate-filter').on('click', function () {
    $('.catalog-filters-main').addClass('touchstart-open');
    $('body').addClass('body-fon');
})


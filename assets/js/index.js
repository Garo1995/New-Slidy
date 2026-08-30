document.addEventListener('gesturestart', function (e) {
  e.preventDefault();
});

document.addEventListener('gesturechange', function (e) {
  e.preventDefault();
});

document.addEventListener('gestureend', function (e) {
  e.preventDefault();
});













const reviewsItemsBlock = document.querySelector('.reviews-items');

if (reviewsItemsBlock) {
  const macyReviewsGrid = Macy({
    container: '.reviews-items',
    margin: 10,
    columns: 3,
    breakAt: {
      1100: 2,
      768: 1,
    }
  });
}


const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  const headerTop = document.querySelector("header");
  if (window.scrollY > 0) {
    headerTop.classList.add("moved");
  } else {
    headerTop.classList.remove("moved");
  }
});


const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");

const currentTheme = savedTheme || (prefersDark ? "dark" : "light");
document.documentElement.setAttribute("data-theme", currentTheme);
updateImages(currentTheme);

function updateImages(theme) {
  const images = document.querySelectorAll("img[data-light][data-dark]");
  images.forEach(img => {
    img.src = theme === "dark" ? img.dataset.dark : img.dataset.light;
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".animate-item");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const index = [...items].indexOf(entry.target);
        entry.target.style.transitionDelay = `${0.15}s`;
        entry.target.classList.add("visible");

        observer.unobserve(entry.target);
      }),
    { threshold: 0.1 }
  );

  items.forEach((item) => observer.observe(item));
});

document.addEventListener("DOMContentLoaded", () => {
  const animatedItems = document.querySelectorAll(
    ".fade-left, .fade-right, .fade-top, .fade-bottom"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
        
        }
      });
    },
    {
      threshold: 0.15, 
    }
  );

  animatedItems.forEach((item) => observer.observe(item));
});


$(function () {
  let Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;
    let links = this.el.find(".link");
    links.on("click", { el: this.el, multiple: this.multiple }, this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    let $el = e.data.el;
    let $this = $(this),
      $next = $this.next();

    $next.slideToggle();

    if (!e.data.multiple) {
      $el.find(".submenu").not($next).slideUp();
    }

    if (!$this.hasClass("open")) {
      $(".link").removeClass("open");
      $this.addClass("open");
    } else {
      $this.removeClass("open");
    }
  };
  let accordion = new Accordion($("#accordion"), false);

});



document.addEventListener('DOMContentLoaded', () => {
  const languageModalBlock = document.querySelector('.language-modal');
  const languageModalWrapper = document.querySelector('.language-modal-wrapper');
  const languageModalCloseButton = document.querySelector('.language-modal .icon-close');
  const languageOpenButtons = document.querySelectorAll('.language-select-wrapper');
  const languageItems = document.querySelectorAll('.language-sub-item');

  if (
    !languageModalBlock ||
    !languageModalWrapper ||
    !languageOpenButtons.length ||
    !languageItems.length
  ) {
    return;
  }

  const closeLanguageModal = () => {
    languageModalBlock.classList.remove('active');

    languageOpenButtons.forEach((languageOpenButton) => {
      languageOpenButton.classList.remove('active');
      document.body.style.overflow = 'unset'
    });
  };

  const openLanguageModal = (currentLanguageButton) => {
    languageModalBlock.classList.add('active');
    document.body.style.overflow = 'hidden'

    languageOpenButtons.forEach((languageOpenButton) => {
      languageOpenButton.classList.remove('active');
       document.body.style.overflow = 'unset'
    });

    if (currentLanguageButton) {
      currentLanguageButton.classList.add('active');
      document.body.style.overflow = 'hidden'
    }
  };

  const setActiveLanguageItem = (selectedLanguageItem) => {
    languageItems.forEach((languageItem) => {
      languageItem.classList.remove('active');
        document.body.style.overflow = 'unset'
    });

    selectedLanguageItem.classList.add('active');
     document.body.style.overflow = 'hidden'
  };

  const updateAllLanguageSelectors = (selectedLanguageItem) => {
    const selectedLanguageTextElement = selectedLanguageItem.querySelector('p');
    const selectedLanguageImageElement = selectedLanguageItem.querySelector('img');

    if (!selectedLanguageTextElement || !selectedLanguageImageElement) return;

    const selectedLanguageText = selectedLanguageTextElement.textContent.trim();
    const selectedLanguageImageSrc = selectedLanguageImageElement.getAttribute('src');
    const selectedLanguageImageAlt =
      selectedLanguageImageElement.getAttribute('alt') || selectedLanguageText;

    languageOpenButtons.forEach((languageOpenButton) => {
      const currentLanguageTextElement = languageOpenButton.querySelector('p');
      const currentLanguageImageElement = languageOpenButton.querySelector('img');

      if (currentLanguageTextElement) {
        currentLanguageTextElement.textContent = selectedLanguageText;
      }

      if (currentLanguageImageElement) {
        currentLanguageImageElement.setAttribute('src', selectedLanguageImageSrc);
        currentLanguageImageElement.setAttribute('alt', selectedLanguageImageAlt);
      }
    });
  };

  languageOpenButtons.forEach((languageOpenButton) => {
    languageOpenButton.addEventListener('click', () => {
      openLanguageModal(languageOpenButton);
    });
  });

  languageItems.forEach((languageItem) => {
    languageItem.addEventListener('click', () => {
      setActiveLanguageItem(languageItem);
      updateAllLanguageSelectors(languageItem);
      closeLanguageModal();
    });
  });

  if (languageModalCloseButton) {
    languageModalCloseButton.addEventListener('click', () => {
      closeLanguageModal();
    });
  }

  languageModalBlock.addEventListener('click', (event) => {
    if (!languageModalWrapper.contains(event.target)) {
      closeLanguageModal();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const catalog = document.querySelector("[data-catalog]");
    if (!catalog) return;

    const tabButtons = catalog.querySelectorAll("[data-tab-btn]");
    const tabPanels = catalog.querySelectorAll("[data-tab-content]");

    const subtabButtons = catalog.querySelectorAll("[data-subtab-btn]");
    const subtabPanels = catalog.querySelectorAll("[data-subtab-content]");

    tabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const target = this.getAttribute("data-tab-btn");

        tabButtons.forEach((btn) => btn.classList.remove("is-active"));
        this.classList.add("is-active");

        tabPanels.forEach((panel) => {
          panel.classList.toggle(
            "is-active",
            panel.getAttribute("data-tab-content") === target
          );
        });
      });
    });

    subtabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const target = this.getAttribute("data-subtab-btn");

        subtabButtons.forEach((btn) => btn.classList.remove("is-active"));
        this.classList.add("is-active");

        subtabPanels.forEach((panel) => {
          panel.classList.toggle(
            "is-active",
            panel.getAttribute("data-subtab-content") === target
          );
        });
      });
    });
  });













document.addEventListener("DOMContentLoaded", () => {
  const tabsWrapper = document.querySelector(".hero-task");
  const buttons = document.querySelectorAll(".hero-task-click");
  const columns = document.querySelectorAll(".hero-task-colum");

  if (!tabsWrapper || !buttons.length || !columns.length) return;

  function showTab(value) {
    buttons.forEach((button) => {
      button.classList.toggle("active", button.dataset.val === value);
    });

    columns.forEach((column) => {
      column.style.display = "none";
    });

    columns.forEach((column) => {
      if (column.dataset.val === value) {
        column.style.display = "flex";
      }
    });
  }

  const firstButton = buttons[0];
  const firstValue = firstButton.dataset.val;

  if (firstValue) {
    showTab(firstValue);
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.dataset.val;
      if (!value) return;

      showTab(value);
    });
  });
});










// =====-gallery-js-======



document.addEventListener("DOMContentLoaded", () => {
  const galleryWrapper = document.querySelector(".gallery-menu");
  const galleryButtons = document.querySelectorAll(".gallery-click");
  const galleryColumns = document.querySelectorAll(".gallery-js");

  if (!galleryWrapper || !galleryButtons.length || !galleryColumns.length) return;

  function showTab(value) {
    galleryButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.val === value);
    });

    galleryColumns.forEach((column) => {
      column.style.display = "none";
    });

    galleryColumns.forEach((column) => {
      if (column.dataset.val === value) {
        column.style.display = "flex";
      }
    });
  }

  const galleryFirstButton = galleryButtons[0];
  const galleryFirstValue = galleryFirstButton.dataset.val;

  if (galleryFirstValue) {
    showTab(galleryFirstValue);
  }

  galleryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const galleryValue = button.dataset.val;
      if (!galleryValue) return;

      showTab(galleryValue);
    });
  });
});




// =====-gallery-js-======






// =====-tools-menu-js-======



document.addEventListener("DOMContentLoaded", () => {
  const toolsWrapper = document.querySelector(".tools-menu");
  const toolsButtons = document.querySelectorAll(".tools-click");
  const toolsColumns = document.querySelectorAll(".tools-js");

  if (!toolsWrapper || !toolsButtons.length || !toolsColumns.length) return;

  function showTab(value) {
    toolsButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.val === value);
    });

    toolsColumns.forEach((column) => {
      column.style.display = "none";
    });

    toolsColumns.forEach((column) => {
      if (column.dataset.val === value) {
        column.style.display = "flex";
      }
    });
  }

  const toolsFirstButton = toolsButtons[0];
  const toolsFirstValue = toolsFirstButton.dataset.val;

  if (toolsFirstValue) {
    showTab(toolsFirstValue);
  }

  toolsButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const toolsValue = button.dataset.val;
      if (!toolsValue) return;

      showTab(toolsValue);
    });
  });
});




// =====-tools-menu-js-======



// =====-efficiency-tab--js-======

document.querySelectorAll('.efficiency-tab').forEach(function (tab) {
  tab.addEventListener('click', function () {
    var efficiency = document.querySelector('.efficiency');
    var target = tab.getAttribute('data-target');

    document.querySelectorAll('.efficiency-tab').forEach(function (t) {
      t.classList.remove('is-active');
    });
    tab.classList.add('is-active');

    efficiency.classList.toggle('is-right', target === 'right');
  });
});
// =====-efficiency-tab--js-======











document.addEventListener('DOMContentLoaded', () => {
  const compareMobileTabsButtons = document.querySelectorAll('.compare-tabs-mobile button');
  const compareTableBlock = document.querySelector('.compare-table');

  if (!compareMobileTabsButtons.length || !compareTableBlock) return;

  const compareFeatureColumn = compareTableBlock.querySelector('.compare-col--feature');
  const compareAccentColumn = compareTableBlock.querySelector('.compare-col--accent');
  const compareOtherColumn = compareTableBlock.querySelector('.compare-col--other');

  if (!compareFeatureColumn || !compareAccentColumn || !compareOtherColumn) return;

  const setCompareMobileActiveTab = (targetSelector) => {
    compareMobileTabsButtons.forEach((compareTabButton) => {
      compareTabButton.classList.toggle(
        'active',
        compareTabButton.dataset.target === targetSelector
      );
    });
  };

  const scrollCompareTableToColumn = (compareTargetColumn) => {
    if (!compareTargetColumn) return;

    compareTableBlock.scrollTo({
      left: compareTargetColumn.offsetLeft,
      behavior: 'smooth'
    });
  };

  const switchCompareMobileColumns = (targetSelector) => {
    setCompareMobileActiveTab(targetSelector);

    if (targetSelector === '.compare-col--other') {
      compareTableBlock.classList.add('show-other');

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollCompareTableToColumn(compareOtherColumn);
        });
      });

      return;
    }

    compareTableBlock.classList.remove('show-other');

    compareTableBlock.scrollTo({
      left: 0,
      behavior: 'smooth'
    });
  };

  const compareDefaultActiveButton =
    document.querySelector('.compare-tabs-mobile button.active') ||
    compareMobileTabsButtons[0];

  if (compareDefaultActiveButton) {
    switchCompareMobileColumns(compareDefaultActiveButton.dataset.target);
  }

  compareMobileTabsButtons.forEach((compareTabButton) => {
    compareTabButton.addEventListener('click', () => {
      const compareTargetSelector = compareTabButton.dataset.target;
      if (!compareTargetSelector) return;

      switchCompareMobileColumns(compareTargetSelector);
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const HEADER_HEIGHT = 100;

  const sideNavElement = document.getElementById("sideNav");
  const templatesSectionElement = document.getElementById("possibilities");
  const navItemElements = document.querySelectorAll(".side-nav__item");
  const sectionElements = document.querySelectorAll(
      "#possibilities, #gallery, #tools, #cases, #statistics, #efficiency, #compare,  #faq, #join"
  );

  if (!sideNavElement || !templatesSectionElement || !navItemElements.length) return;

  function toggleSideNavVisibility() {
    const templatesTop = templatesSectionElement.offsetTop;

    if (window.scrollY >= templatesTop - HEADER_HEIGHT) {
      sideNavElement.classList.add("show");
    } else {
      sideNavElement.classList.remove("show");
    }
  }

  function setActiveNavItem() {
    let currentSectionId = "";

    sectionElements.forEach((sectionElement) => {
      const sectionTop = sectionElement.offsetTop - HEADER_HEIGHT - 40;
      const sectionBottom = sectionTop + sectionElement.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        currentSectionId = sectionElement.id;
      }
    });

    navItemElements.forEach((navItemElement) => {
      navItemElement.classList.toggle(
          "active",
          navItemElement.dataset.target === currentSectionId
      );
    });
  }

  navItemElements.forEach((navItemElement) => {
    navItemElement.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.dataset.target;
      const targetElement = document.getElementById(targetId);

      if (!targetElement) return;

      const targetTop = targetElement.offsetTop - HEADER_HEIGHT;

      window.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });
    });
  });

  toggleSideNavVisibility();
  setActiveNavItem();

  window.addEventListener("scroll", function () {
    toggleSideNavVisibility();
    setActiveNavItem();
  });

  window.addEventListener("resize", function () {
    toggleSideNavVisibility();
    setActiveNavItem();
  });
});






$('.open_modal').on('click', function () {
  let attr = $(this).attr('data-val');
  let modal = $('#' + attr);
  modal.removeClass('out');
  modal.fadeIn();
  $('body').addClass('body_fix');
});

$('.close').on('click', function () {

  $('body').removeClass('body_fix');
  let prt = $(this).parents('.modal');

  prt.addClass('out')
  setTimeout(function () {
    prt.fadeOut();
  }, 100);
});

$(window).on('click', function (event) {
  $('.modal').each(function () {
    let gtattr = $(this).attr('id');
    let new_mod = $('#' + gtattr);
    let md_cnt = $(new_mod).find('.modal-content');
    if (event.target === $(md_cnt)[0]) {
      setTimeout(function () {
        $(new_mod).addClass('out');
        $(new_mod).fadeOut()
      }, 100)
      $('body').removeClass('body_fix');
    }
    if (event.target === this) {
      setTimeout(function () {
        $(new_mod).addClass('out');
        $(new_mod).fadeOut()
      }, 100)
    }
  })
});




document.addEventListener("DOMContentLoaded", function () {
  const heroGenerateElement = document.querySelector(".hero-generate");
  const heroGenerateInputElement = heroGenerateElement?.querySelector("input");

  if (!heroGenerateElement || !heroGenerateInputElement) return;

  heroGenerateInputElement.addEventListener("focus", function () {
    heroGenerateElement.classList.add("active");
  });

  heroGenerateInputElement.addEventListener("blur", function () {
    heroGenerateElement.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const mobileSideNavBlock = document.querySelector(".side-nav-mobile");
  const mobileSideNavScrollContainer = document.querySelector(".side-nav-mobile-wrapper ul");

  if (!mobileSideNavBlock || !mobileSideNavScrollContainer) return;

  const mobileSideNavLinks = mobileSideNavScrollContainer.querySelectorAll("a");
  const mobileHeaderOffsetValue = 100;

  if (!mobileSideNavLinks.length) return;

  const mobileSectionsData = [];

  mobileSideNavLinks.forEach((mobileLinkElement) => {
    const mobileSectionId =
        mobileLinkElement.getAttribute("data-target") ||
        mobileLinkElement.getAttribute("href")?.replace("#", "");
    if (!mobileSectionId) return;
    const mobileTargetSectionElement = document.getElementById(mobileSectionId);
    if (!mobileTargetSectionElement) return;
    mobileSectionsData.push({
      link: mobileLinkElement,
      section: mobileTargetSectionElement,
    });

    mobileLinkElement.addEventListener("click", (event) => {
      event.preventDefault();

      const mobileTargetTopPosition =
          mobileTargetSectionElement.getBoundingClientRect().top +
          window.pageYOffset -
          mobileHeaderOffsetValue;

      window.scrollTo({
        top: mobileTargetTopPosition,
        behavior: "smooth",
      });

      setTimeout(() => {
        scrollMobileActiveLinkIntoView(mobileLinkElement);
      }, 200);
    });
  });

  if (!mobileSectionsData.length) return;

  const mobileVisibilityTriggerSection = mobileSectionsData[0].section;

  const removeMobileActiveClasses = () => {
    mobileSectionsData.forEach((mobileItem) => {
      mobileItem.link.classList.remove("active");
    });
  };

  const scrollMobileActiveLinkIntoView = (mobileActiveLinkElement) => {
    if (!mobileActiveLinkElement) return;

    mobileActiveLinkElement.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  const updateMobileSideNavVisibility = () => {
    const mobileTriggerStartPoint =
        mobileVisibilityTriggerSection.offsetTop - mobileHeaderOffsetValue;

    if (window.scrollY >= mobileTriggerStartPoint) {
      mobileSideNavBlock.classList.add("active");
    } else {
      mobileSideNavBlock.classList.remove("active");
    }
  };

  const updateMobileHorizontalEdgeClasses = () => {
    const mobileCurrentScrollLeft = mobileSideNavScrollContainer.scrollLeft;
    const mobileVisibleWidth = mobileSideNavScrollContainer.clientWidth;
    const mobileFullScrollWidth = mobileSideNavScrollContainer.scrollWidth;

    mobileSideNavBlock.classList.remove("first", "last");

    if (mobileCurrentScrollLeft <= 2) {
      mobileSideNavBlock.classList.add("first");
    }

    if (mobileCurrentScrollLeft + mobileVisibleWidth >= mobileFullScrollWidth - 2) {
      mobileSideNavBlock.classList.add("last");
    }
  };

  let mobileLastActiveLinkElement = null;

  const updateMobileActiveLinkByScroll = () => {
    const mobileCurrentScrollPoint = window.scrollY + mobileHeaderOffsetValue + 20;
    let mobileNewActiveLinkElement = null;

    mobileSectionsData.forEach((mobileItem) => {
      const mobileSectionTopPoint = mobileItem.section.offsetTop;
      const mobileSectionBottomPoint =
          mobileSectionTopPoint + mobileItem.section.offsetHeight;
      if (
          mobileCurrentScrollPoint >= mobileSectionTopPoint &&
          mobileCurrentScrollPoint < mobileSectionBottomPoint
      ) {
        mobileNewActiveLinkElement = mobileItem.link;
      }
    });

    removeMobileActiveClasses();

    if (mobileNewActiveLinkElement) {
      mobileNewActiveLinkElement.classList.add("active");

      if (mobileLastActiveLinkElement !== mobileNewActiveLinkElement) {
        mobileLastActiveLinkElement = mobileNewActiveLinkElement;
        scrollMobileActiveLinkIntoView(mobileNewActiveLinkElement);
      }
    } else {
      mobileLastActiveLinkElement = null;
    }
  };

  const updateMobileSideNavAllStates = () => {
    updateMobileSideNavVisibility();
    updateMobileActiveLinkByScroll();
    updateMobileHorizontalEdgeClasses();
  };

  updateMobileSideNavAllStates();
  window.addEventListener("scroll", updateMobileSideNavAllStates);
  window.addEventListener("resize", updateMobileSideNavAllStates);
  mobileSideNavScrollContainer.addEventListener("scroll", updateMobileHorizontalEdgeClasses);
});














document.addEventListener('DOMContentLoaded', function () {
  const templatesTabsWrapper = document.querySelector('.templates-tabs');
  const templatesTabButtons = document.querySelectorAll('.templates-tabs button');
  const templatesContentItems = document.querySelectorAll('.templates-items');
  if (templatesTabsWrapper && templatesTabButtons.length && templatesContentItems.length) {
    function setActiveTemplateTab(templateId) {
      templatesTabButtons.forEach(function (singleTemplateButton) {
        singleTemplateButton.classList.toggle(
          'active',
          singleTemplateButton.dataset.id === templateId
        );
      });
      templatesContentItems.forEach(function (singleTemplateContent) {
        if (singleTemplateContent.dataset.id === templateId) {
          singleTemplateContent.style.display = 'grid'; 
        } else {
          singleTemplateContent.style.display = 'none';
        }
      });
    }
    const firstTemplateButton = templatesTabButtons[0];
    const firstTemplateId = firstTemplateButton.dataset.id;
    setActiveTemplateTab(firstTemplateId);
    templatesTabButtons.forEach(function (singleTemplateButton) {
      singleTemplateButton.addEventListener('click', function () {
        const currentTemplateId = this.dataset.id;
        setActiveTemplateTab(currentTemplateId);
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const customCategorySelect = document.querySelector('.c-categories-select');
  if (!customCategorySelect) return;
  const customCategoryHeader = customCategorySelect.querySelector('.c-select-header');
  const customCategoryHeaderText = customCategorySelect.querySelector('.c-select-header p');
  const customCategoryOptions = customCategorySelect.querySelectorAll('.c-select-options li');
  if (customCategoryHeader) {
    customCategoryHeader.addEventListener('click', function (e) {
      e.stopPropagation();
      customCategorySelect.classList.toggle('active');
    });
  }
  customCategoryOptions.forEach(function (customCategoryOption) {
    customCategoryOption.addEventListener('click', function (e) {
      e.stopPropagation();
      customCategoryOptions.forEach(function (item) {
        item.classList.remove('active');
      });
      customCategoryOption.classList.add('active');
      if (customCategoryHeaderText) {
        customCategoryHeaderText.textContent = customCategoryOption.querySelector('span').textContent;
      }
      customCategorySelect.classList.remove('active');
    });
  });
  document.addEventListener('click', function (e) {
    if (!customCategorySelect.contains(e.target)) {
      customCategorySelect.classList.remove('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const customCheckboxFilterLists = document.querySelectorAll('.checkbox-filters-list');
  const customColorFilterLists = document.querySelectorAll('.color-filters-list');
  const customResetAllButtons = document.querySelectorAll('.reset-all');
  if (customCheckboxFilterLists.length) {
    customCheckboxFilterLists.forEach(function (customCheckboxFilterList) {
      const customCheckboxFilterItems = customCheckboxFilterList.querySelectorAll('li');
      if (!customCheckboxFilterItems.length) return;
      customCheckboxFilterItems.forEach(function (customCheckboxFilterItem) {
        customCheckboxFilterItem.addEventListener('click', function () {
          customCheckboxFilterItem.classList.toggle('active');
        });
      });
    });
  }
  if (customColorFilterLists.length) {
    customColorFilterLists.forEach(function (customColorFilterList) {
      const customColorFilterItems = customColorFilterList.querySelectorAll('li');
      if (!customColorFilterItems.length) return;
      customColorFilterItems.forEach(function (customColorFilterItem) {
        customColorFilterItem.addEventListener('click', function () {
          customColorFilterItem.classList.toggle('active');
        });
      });
    });
  }
  if (customResetAllButtons.length) {
    customResetAllButtons.forEach(function (customResetAllButton) {
      customResetAllButton.addEventListener('click', function () {
        const customFiltersWrapper = customResetAllButton.closest('.catalog-filters-items');
        if (!customFiltersWrapper) return;
        const customActiveCheckboxItems = customFiltersWrapper.querySelectorAll('.checkbox-filters-list li.active');
        const customActiveColorItems = customFiltersWrapper.querySelectorAll('.color-filters-list li.active');
        customActiveCheckboxItems.forEach(function (customActiveCheckboxItem) {
          customActiveCheckboxItem.classList.remove('active');
        });
        customActiveColorItems.forEach(function (customActiveColorItem) {
          customActiveColorItem.classList.remove('active');
        });
      });
    });
  }
});



document.addEventListener('DOMContentLoaded', function () {
  const catalogTabs = document.querySelectorAll('.catalog-tabs');
  if (!catalogTabs.length) return;
  catalogTabs.forEach(function (catalogTab) {
    const buttons = catalogTab.querySelectorAll('button');
    if (!buttons.length) return;
    const allButton = buttons[0];
    const categoryButtons = [...buttons].slice(1);
    buttons.forEach(function (button) {

      button.addEventListener('click', function () {

        // Кнопка "Все шаблоны"
        if (button === allButton) {

          buttons.forEach(btn => {
            btn.classList.remove('active');
          });
          allButton.classList.add('active');
          return;
        }
        // Если нажали категорию
        allButton.classList.remove('active');

        button.classList.toggle('active');

        // Проверяем есть ли активные категории
        const hasActiveCategory = categoryButtons.some(btn =>
            btn.classList.contains('active')
        );

        // Если ничего не выбрано — включаем "Все шаблоны"
        if (!hasActiveCategory) {
          allButton.classList.add('active');
        }
      });
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const customSelectedCategoryButtons = document.querySelectorAll('.c-selected-categories button');

  if (!customSelectedCategoryButtons.length) return;

  customSelectedCategoryButtons.forEach(function (customSelectedCategoryButton) {
    customSelectedCategoryButton.addEventListener('click', function () {
      customSelectedCategoryButton.remove();
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const customTemplateModal = document.querySelector('.template-description-modal');
  const customTemplateModalWrapper = document.querySelector('.template-modal-wrapper');
  const customTemplateModalClose = document.querySelector('.template-modal-wrapper .icon-close');
  const customCatalogItems = document.querySelectorAll('.catalog-item');

  if (!customTemplateModal || !customTemplateModalWrapper || !customCatalogItems.length) return;
  customCatalogItems.forEach(function (customCatalogItem) {
    customCatalogItem.addEventListener('click', function (e) {
      e.preventDefault();
      customTemplateModal.classList.add('active');
      document.body.style.overflow = 'hidden'
    });
  });
  if (customTemplateModalClose) {
    customTemplateModalClose.addEventListener('click', function () {
      customTemplateModal.classList.remove('active');
      document.body.style.overflow = 'unset'
    });
  }
  customTemplateModal.addEventListener('click', function (e) {
    if (!customTemplateModalWrapper.contains(e.target)) {
      customTemplateModal.classList.remove('active');
      document.body.style.overflow = 'unset'
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const customTemplateModalMediaBlocks = document.querySelectorAll('.template-modal-media');
  if (!customTemplateModalMediaBlocks.length) return;
  customTemplateModalMediaBlocks.forEach(function (customTemplateModalMedia) {
    const customTemplateMainImage = customTemplateModalMedia.querySelector('.t-modal-main-img img');
    const customTemplatePreviewItems = customTemplateModalMedia.querySelectorAll('.t-modal-img');

    if (!customTemplateMainImage || !customTemplatePreviewItems.length) return;

    const customTemplateFirstPreview = customTemplateModalMedia.querySelector('.t-modal-img.active') || customTemplatePreviewItems[0];

    if (customTemplateFirstPreview) {
      const customTemplateFirstImageSrc = customTemplateFirstPreview.getAttribute('data-modal-img');

      customTemplatePreviewItems.forEach(function (item) {
        item.classList.remove('active');
      });

      customTemplateFirstPreview.classList.add('active');

      if (customTemplateFirstImageSrc) {
        customTemplateMainImage.src = customTemplateFirstImageSrc;
      }
    }
    customTemplatePreviewItems.forEach(function (customTemplatePreviewItem) {
      customTemplatePreviewItem.addEventListener('click', function () {
        const customTemplateNewImageSrc = customTemplatePreviewItem.getAttribute('data-modal-img');

        customTemplatePreviewItems.forEach(function (item) {
          item.classList.remove('active');
        });

        customTemplatePreviewItem.classList.add('active');

        if (customTemplateNewImageSrc) {
          customTemplateMainImage.src = customTemplateNewImageSrc;
        }
      });
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const tabsWrapper = document.querySelector(".slidy-catalog__tabs");
  const toggleButton = document.querySelector(".c-show-all");

  if (!tabsWrapper || !toggleButton) return;

  const hiddenTabs = tabsWrapper.querySelectorAll(".show-after-click");
  const buttonText = toggleButton.querySelector("span");

  if (!hiddenTabs.length) return;

  hiddenTabs.forEach(function (item) {
    item.style.display = "none";
  });

  toggleButton.addEventListener("click", function () {
    const isOpened = toggleButton.classList.contains("is-open");

    if (isOpened) {
      hiddenTabs.forEach(function (item) {
        item.style.display = "none";
      });

      toggleButton.classList.remove("is-open");

      if (buttonText) {
        buttonText.textContent = "Показать все";
      }
    } else {
      hiddenTabs.forEach(function (item) {
        item.style.display = "";
      });

      toggleButton.classList.add("is-open");

      if (buttonText) {
        buttonText.textContent = "Показать меньше";
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const catalog = document.querySelector("[data-catalog]");
  if (!catalog) return;

  const pagination = document.querySelector(".catalog-panel-pagination");
  if (!pagination) return;

  const paginationList = pagination.querySelector("ul");
  const prevBtn = pagination.querySelector(".panel-pagination-prev");
  const nextBtn = pagination.querySelector(".panel-pagination-next");

  if (!paginationList || !prevBtn || !nextBtn) return;

  let currentPage = 1;
  function getItemsPerPage() {
    if (window.innerWidth <= 767) return 1;
    if (window.innerWidth <= 991) return 2;
    return 999;
  }
  function getActivePanel() {
    return catalog.querySelector(".slidy-catalog__panel.is-active");
  }
  function getActiveCols() {
    const activePanel = getActivePanel();
    if (!activePanel) return [];
    return Array.from(activePanel.querySelectorAll(".slidy-catalog__col"));
  }
  function resetColsVisibility() {
    const allCols = catalog.querySelectorAll(".slidy-catalog__col");
    allCols.forEach((col) => {
      col.style.display = "";
    });
  }
  function renderPagination(totalPages) {
    paginationList.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement("li");
      const a = document.createElement("a");

      a.href = "#";
      a.textContent = i;

      if (i === currentPage) {
        a.classList.add("active");
      }

      a.addEventListener("click", function (e) {
        e.preventDefault();
        currentPage = i;
        updateCatalogPagination();
      });

      li.appendChild(a);
      paginationList.appendChild(li);
    }
  }
  function updateArrows(totalPages) {
    prevBtn.classList.toggle("disabled", currentPage <= 1);
    nextBtn.classList.toggle("disabled", currentPage >= totalPages);
  }

  function updateCatalogPagination() {
    const cols = getActiveCols();
    const itemsPerPage = getItemsPerPage();

    resetColsVisibility();

    if (!cols.length) {
      pagination.style.display = "none";
      return;
    }

    const totalPages = Math.ceil(cols.length / itemsPerPage);

    if (itemsPerPage >= cols.length) {
      pagination.style.display = "none";
      return;
    }

    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    cols.forEach((col, index) => {
      col.style.display = index >= start && index < end ? "" : "none";
    });

    pagination.style.display = "flex";
    renderPagination(totalPages);
    updateArrows(totalPages);
  }
  prevBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      updateCatalogPagination();
    }
  });
  nextBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const cols = getActiveCols();
    const totalPages = Math.ceil(cols.length / getItemsPerPage());
    if (currentPage < totalPages) {
      currentPage++;
      updateCatalogPagination();
    }
  });
  window.addEventListener("resize", function () {
    currentPage = 1;
    updateCatalogPagination();
  });
  const observer = new MutationObserver(function () {
    currentPage = 1;
    updateCatalogPagination();
  });
  const panels = catalog.querySelectorAll(".slidy-catalog__panel");
  panels.forEach((panel) => {
    observer.observe(panel, {
      attributes: true,
      attributeFilter: ["class"],
    });
  });

  updateCatalogPagination();
});



$('.collection-more').on('click', function (e) {
  $(this).addClass('collection-more-none')
  $('.collect-cnt-wrap').addClass('collect-cnt-opened')
})

$('.more-prompts').on('click', function (e) {
  $(this).addClass('more-prompts-none')
  $('.prompts-catalog-wrap').addClass('prompts-catalog-opened')
})


let rating = 0;

$('.this-star').hover(
    function () {
      const index = $(this).index();

      $('.this-star').removeClass('hover');

      $('.this-star').each(function (i) {
        if (i <= index) {
          $(this).addClass('hover');
        }
      });
    },
    function () {
      $('.this-star').removeClass('hover');
    }
);

$('.this-star').on('click', function () {
  rating = $(this).index() + 1;

  $('.this-star').removeClass('this-star-act');

  $('.this-star').each(function (i) {
    if (i < rating) {
      $(this).addClass('this-star-act');
    }
  });
});

$('.like-messages').on('click', function (e) {
  $(this).toggleClass('like-messages-act');
})

$('.select-rew').on('click', function (e) {
  $(this).toggleClass('select-active');
})


$('.more-starting-box').on('click', function (e) {
  $(this).addClass('more-starting-none')
  $('.author-topic').addClass('author-topic-opened')
})




document.querySelectorAll('.for-copy').forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    const card = this.closest('.prompts-catalog-box');

    const text = card.querySelector('.prompt-name-text p').innerText;

    navigator.clipboard.writeText(text);
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.methods-menu a');
  // Плавный скролл при клике
  menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetBlock = document.querySelector(targetId);
      if (targetBlock) {
        const offset = 120;
        const targetPosition =
            targetBlock.getBoundingClientRect().top +
            window.pageYOffset -
            offset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  // Активный пункт при скролле
  const sections = [];
  menuLinks.forEach(link => {
    const id = link.getAttribute('href');
    const section = document.querySelector(id);
    if (section) {
      sections.push({
        link,
        section
      });
    }
  });

  function setActiveMenu() {
    let currentSection = null;
    sections.forEach(item => {
      const rect = item.section.getBoundingClientRect();
      // Когда блок дошёл до экрана
      if (rect.top <= 350) {
        currentSection = item;
      }
    });
    if (currentSection) {
      menuLinks.forEach(link => {
        link.classList.remove('active');
      });
      currentSection.link.classList.add('active');
    }
  }
  // Первый активный сразу
  setActiveMenu();
  window.addEventListener('scroll', setActiveMenu);
});




$('.language-sub-item').on('click', function () {
  $('.text-for-all').removeClass('text-for-all-block')
  $('.text-for-ru').removeClass('text-for-ru-none')
})


$('.language-sub-all').on('click', function () {
  $('.text-for-ru').addClass('text-for-ru-none')
  $('.text-for-all').addClass('text-for-all-block')
})


const fileInput = document.getElementById('fileInput');
const fileName = document.getElementById('fileName');

if (fileInput && fileName) {
  fileInput.addEventListener('change', function () {
    if (this.files.length > 0) {
      fileName.textContent = `Вы выбрали: ${this.files[0].name}`;
    } else {
      fileName.textContent = '';
    }
  });
}





$('.for-copy').on('click', function () {
  $(this).addClass('for-copy-active');
})
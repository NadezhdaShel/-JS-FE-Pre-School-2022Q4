
//Burger Menu
class Burger {
    constructor(setting) {
        this.setting = setting;
        this.navigation = document.querySelector(this.setting.navigate);
        if (this.navigation === null) { return; }

        this.nav = {
            "navMini": this.navigation.querySelector(this.setting.navMini),
            "navList": this.navigation.querySelector(this.setting.navList),
        };
        this.class_active = this.setting.class_active;
        this.addEventListeners();
    }
    clickMiniMenu() {
        document.body.classList.toggle(this.class_active);
        this.navigation.classList.toggle(this.class_active);
    };

    clickMenuList(event) {
        if (event.target.tagName != "A")
            return;
        //Close burger
        if (window.matchMedia(`(max-width: ${this.setting.break_point}px)`).matches) {
            this.clickMiniMenu();
        }
    };
    addEventListeners() {
        if (this.nav.navMini !== null) {
            this.nav.navMini.addEventListener('click', () => {
                this.clickMiniMenu();
            });
        }
        if (this.nav.navList !== null) {
            this.nav.navList.addEventListener('click', (event) => {
                this.clickMenuList(event);
            });
        }
        document.addEventListener('click', (event) => {
            const target = event.target;
            const its_menu = target == this.navigation || this.navigation.contains(target);
            if (!its_menu && this.navigation.classList.contains("active-burger")) {
                this.clickMiniMenu();
            }
        });
    }
}

class Select {
    constructor(setting) {
        this.setting = setting;
        this.select = document.querySelector(this.setting.select);
        if (this.select === null) { return; }
        this.sel = {
            "button": this.select.querySelector(this.setting.selectButton),
            "selectList": this.select.querySelector(this.setting.selectList),
            "selectItem": this.select.querySelectorAll(this.setting.selectItem),
        };
        this.contentItem = document.querySelectorAll(this.setting.contentItem);
        this.class_active = this.setting.class_active;
        this.sectionAnim = document.querySelector(this.setting.sectionAnim);
        this.class_open_card = this.setting.class_open_card;

        this.addEventListeners();
    }

    clickSelect() {
        this.sel.selectList.classList.toggle(this.class_active);
        this.sel.button.classList.toggle(this.class_active);
    }

    clickItem(event) {
        this.sel.button.innerText = event.target.innerText;
        this.sel.button.focus();
        this.contentItem.forEach(element => {
            if (element.classList.contains(event.target.dataset.value)) {
                element.style.display = 'inline-block';
                setTimeout(() => {
                    element.classList.add(this.class_active);
                    this.sectionAnim.classList.add(this.class_open_card);
                }, 10);

            } else {
                element.style.display = 'none';
                element.classList.remove(this.class_active);
            }
        });
        this.sel.selectList.classList.remove(this.class_active);
    }

    closeSelect() {
        this.sel.button.classList.remove(this.class_active);
        this.sel.selectList.classList.remove(this.class_active);
    }

    addEventListeners() {
        //close-open
        this.sel.button.addEventListener('click', () => {
            this.clickSelect();
        });

        //Select item
        this.sel.selectList.addEventListener('click', (event) => {
            if (event.target.tagName != "LI") return;
            this.clickItem(event);
        });

        // Click out. Close select
        document.addEventListener('click', (event) => {
            if (event.target !== this.sel.button) {
                this.closeSelect();
            }
        });

        // Press Tab or Escape. Close select
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Tab' || event.key === 'Escape') {
                this.closeSelect();
            }
        });
    }
}

class detailsAccordion {
    constructor(setting) {
        this.setting = setting;
        this.accordion = document.querySelector(this.setting.accordion);
        if (this.accordion === null) { return; }
        this.items = this.accordion.querySelectorAll("details");
        this.addEventListeners();
    }

    onToggle(event) {
        if (event.target.open) {
            this.accordion.querySelectorAll("details[open]").forEach(elem => {
                if (elem === event.target) {
                    return;
                }
                elem.open = false;
            });
        }
    };

    addEventListeners() {
        this.items.forEach(element => {
            element.addEventListener("toggle", (event) => {
                this.onToggle(event);
            })
        });
    }
}

class buttonLinkAnchor {
    constructor(setting) {
        this.setting = setting;
        this.button = document.querySelectorAll(this.setting.button);
        if (this.button === null) { return; }
        this.addEventListeners();
    }
    clickButton = () => {
        let offsetTop = document.getElementById(this.setting.targetSection).offsetTop;
        scroll({
            top: offsetTop,
            behavior: "smooth",
        });
    };

    addEventListeners() {
        this.button.forEach(element => {
            element.addEventListener('click', () => {
                this.clickButton();
            });
        });
    }
}

new Burger({
    "navigate": ".nav",
    "navMini": ".nav__mini",
    "navList": ".nav__list",
    "class_active": "active-burger",
    "break_point": 599,
})


new Select({
    "select": ".select",
    "selectButton": ".select__button",
    "selectList": ".select__list",
    "selectItem": ".select__item",
    "contentItem": ".contacts__item",
    "class_active": "active",
    "sectionAnim": ".contacts__wrapper",
    "class_open_card": "open-card",
});


new buttonLinkAnchor({
    "button": ".prices__order-button",
    "targetSection": "contacts",
})


new detailsAccordion({
    "accordion": ".accordion",
})

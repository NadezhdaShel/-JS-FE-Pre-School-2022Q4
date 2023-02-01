console.log("1. При нажатии на кнопки: Gargens, Lawn, Planting происходит смена фокуса на услугах в разделе service +50\n - при выборе одной услуги, остальные карточки услуг принимают эффект blur, выбранная услуга остается неизменной + 20\n - пользователь может нажать одновременно две кнопки услуги, тогда эта кнопка тоже принимает стиль активной и карточки с именем услуги выходят из эффекта blur. При этом пользователь не может нажать одновременно все три кнопки услуг +20\n - анимации плавного перемещения кнопок в активное состояние и карточек услуг в эффект blur +10\n2. Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50\n - при нажатии на dropdown кнопку появляется описание тарифов цен в соответствии с макетом. Внутри реализована кнопка order, которая ведет на секцию contacts, при нажатии на нее Accordion все еще остается открытым +25\n - пользователь может самостоятельно закрыть содержимое нажав на кнопку dropup, но не может одновременно открыть все тарифы услуг, при открытии нового тарифа предыдущее автоматически закрывается +25\n3. В разделе contacts реализован select с выбором городов +25\n - в зависимости от выбора пользователя появляется блок с адресом и телефоном офиса в определенном городе +15\n - при нажатии на кнопку Call us реализован вызов по номеру, который соответствует выбранному городу +10");
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
            "button": this.select.querySelector(this.setting.targetButton),
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
    clickButton() {
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

class Filter {
    constructor(setting) {
        this.setting = setting;
        this.buttons = document.querySelectorAll(this.setting.buttons);
        this.items = document.querySelectorAll(this.setting.items);
        this.unactivButton = undefined;
        this.activButton = [];
        this.addEventListeners();
    }

    clickButton(event) {
        const targetButton = event.target;
        if (targetButton.disabled === true)
            return;
        const isSelectButton = targetButton.classList.contains(this.setting.class_select_button);
        const selectCategory = targetButton.dataset.filter;
        if (isSelectButton) {
            targetButton.classList.remove(this.setting.class_select_button);
            this.activButton.splice(this.activButton.indexOf(selectCategory), 1);
            this.changeClassItem();

        } else {
            targetButton.classList.add(this.setting.class_select_button);
            this.activButton.push(selectCategory);
            this.changeClassItem();
        }
        //if select max count button
        if (this.activButton.length >= this.setting.limit_select_button) {
            this.unactivButton = (Array.from(this.buttons)).find(elem => !elem.classList.contains(this.setting.class_select_button));
            this.unactivButton.disabled = true;

        } else if (this.unactivButton != undefined) {
            //button not disabled
            this.unactivButton.disabled = false;
            this.unactivButton = undefined;
        }
    };
    changeClassItem() {
        this.items.forEach((element) => {
            element.classList.remove(this.setting.class_out_focus);
            if (this.activButton.length !== 0) {
                let isSelectItem = false;
                this.activButton.forEach((e) => {
                    if (element.classList.contains(e)) {
                        isSelectItem = true;
                    }
                })
                if (isSelectItem === false) {
                    element.classList.add(this.setting.class_out_focus);
                }
            }
        });
    };

    addEventListeners() {
        if (this.buttons) {
            this.buttons.forEach(element => {
                element.addEventListener('click', (event) => {
                    this.clickButton(event);
                });
            });
        }
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
    "targetButton": ".select__button",
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

new Filter({
    "buttons": ".service__button",
    "items": ".service__item",
    "class_out_focus": "out-focus",
    "class_select_button": "select",
    "limit_select_button": 2,
})
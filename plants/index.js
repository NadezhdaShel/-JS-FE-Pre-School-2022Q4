
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

new Burger({
    "navigate": ".nav",
    "navMini": ".nav__mini",
    "navList": ".nav__list",
    "class_active": "active-burger",
    "break_point": 599,
})




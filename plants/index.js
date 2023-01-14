console.log("1. Вёрстка соответствует макету. Ширина экрана 768px +24\n - блок <header> +2\n - секция welcome +3\n - секция about +4\n - секция service +4\n - секция prices +4\n - секция contacts +4\n - блок <footer> + 3\n2. Вёрстка соответствует макету. Ширина экрана 380px +24\n - блок <header> +2\n - секция welcome +3\n - секция about +4\n - секция service +4\n - секция prices +4\n - секция contacts +4\n - блок <footer> +3\n3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n - нет полосы прокрутки при ширине страницы от 1440рх до 380px +7\n - нет полосы прокрутки при ширине страницы от 380px до 320рх +8\n4. На ширине экрана 380рх и меньше реализовано адаптивное меню +22\n - при ширине страницы 380рх панель навигации скрывается, появляется бургер-иконка +2\n - при нажатии на бургер-иконку плавно появляется адаптивное меню +4\n - адаптивное меню соответствует цветовой схеме макета +4\n - при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4\n - ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4\n - при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4");

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

        //Methods
        this.clickMiniMenu = () => {
            document.body.classList.toggle(this.class_active);
            this.navigation.classList.toggle(this.class_active);
        };

        this.clickMenuList = (event) => {
            if (event.target.tagName != "A")
                return;
            //Close burger
            if (window.matchMedia(`(max-width: ${setting.break_point}px)`).matches) {
                this.clickMiniMenu();
            }
        };

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




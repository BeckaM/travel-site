import _jquery from 'jquery';

class MobileMenu {
    constructor() {
        
        this.siteHeader = _jquery(".site-header");
        this.menuIcon = _jquery(".site-header__menu-icon");
        this.menuContent = _jquery(".site-header__menu-content");
        this.events();
        
    }
    
    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }
    
    toggleTheMenu() {
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("site-header__menu-icon--close-x");
    }
}

export default MobileMenu;
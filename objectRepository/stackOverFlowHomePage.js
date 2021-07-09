import { Selector } from 'testcafe';

export default class HomePage {
    constructor() {
        this.pageTitle = Selector("span").withText('Stack Overflow');
        this.menuItem = Selector("a[role='menuitem']");
    }

    async isVisible() {
        return this.pageTitle.visible;
    }

    async isMenuVisible() {
        return this.menuItem.visible;
    }
}
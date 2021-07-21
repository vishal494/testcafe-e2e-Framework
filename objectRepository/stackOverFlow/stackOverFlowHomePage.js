import { Selector } from 'testcafe';

/* If there is no unique ID to locate element and your app supports different
* languages you can use a regular expression like the "loginButton" and try using it.
*/
const loginButton = new RegExp([
    'Log in',
    'connexion',
    'Logáil isteach'].join('|'));

export default class HomePage {
    constructor() {
        this.pageTitle = Selector("span").withText('Stack Overflow');
        this.menuItem = Selector("a[role='menuitem']");
        this.loginButton = Selector('a').withText(loginButton);
    }

    async isVisible() {
        return this.pageTitle.visible;
    }

    async isMenuVisible() {
        return this.menuItem.visible;
    }
}
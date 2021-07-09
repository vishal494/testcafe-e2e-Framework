import { Selector } from 'testcafe';

export default class HomePage {
    constructor() {
        this.homeImage = Selector('div > img');
        this.apps = Selector("div > a[aria-label='Google apps']");
        this.aboutApp = Selector("div > a").withText('About');
    }

    async isVisible() {
        return this.homeImage.visible;
    }
}
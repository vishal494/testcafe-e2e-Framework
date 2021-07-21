import { Selector } from 'testcafe';

export default class LoginPage {
    constructor() {
        this.email = Selector("input#email");
        this.password = Selector("input#password");
        this.submitButton = Selector("button#submit-button");
        this.errorMessage = Selector("p[class*='error-message']");
        this.captcha = Selector("")
    }
}
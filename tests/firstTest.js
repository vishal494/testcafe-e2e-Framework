import StackOverFlowHomePage from '../objectRepository/stackOverFlow/stackOverFlowHomePage';
import LoginPage from '../objectRepository/stackOverFlow/loginPage';

const stackOverFlowHomePage = new StackOverFlowHomePage();
const loginPage = new LoginPage();
const appURL = "https://stackoverflow.com";


fixture`First test page on stack overflow`
    .page`${appURL}`
    .beforeEach(async t => {
        await t.maximizeWindow();
    });

//This page tests one basic flow on stackoverflow page
test("My first test", async t => {
    await stackOverFlowHomePage.isVisible();
    await t.click(stackOverFlowHomePage.menuItem);
});

test("Login test", async t => {
    await stackOverFlowHomePage.isVisible();
    await t.click(stackOverFlowHomePage.loginButton);
    await t.typeText(loginPage.email, "dummy@gmail.com");
    await t.typeText(loginPage.password, "abcd");
    await t.click(loginPage.submitButton);
    await t.expect(loginPage.errorMessage.visible).ok('Error message not visible');
});

test("Login Test - Method 2", async t => {
    await stackOverFlowHomePage.isVisible();
    await t.click(stackOverFlowHomePage.loginButton);
    //Checking the input field and then entering value
    //Post entering checking whether the entered value is displayed
    await t.expect(loginPage.email.value).eql('', 'email input empty as expected')
        .typeText(loginPage.email, "dummy@gmail.com")
        .expect(loginPage.email.value).contains('dummy@gmail.com', 'Entered email not displayed');

    await t.typeText(loginPage.password, "abcd");
    await t.click(loginPage.submitButton);
    await t.expect(loginPage.errorMessage.visible).ok('Error message not visible');
});
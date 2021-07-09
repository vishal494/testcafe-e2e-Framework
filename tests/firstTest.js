import StackOverFlowHomePage from '../objectRepository/stackOverFlowHomePage';

const stackOverFlowHomePage = new StackOverFlowHomePage();
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
    await t.takeElementScreenshot();
});
import HomePage from '../objectRepository/homePage';

const HomePageElements = new HomePage();

fixture`First test page`
    .page`${process.env.APP_URL}`
    .beforeEach(async t => {
        await t.maximizeWindow();
    });

test("My first test", async t => {
    await t.click(HomePageElements.aboutApp);
});
import { ClientFunction, t } from 'testcafe';

//Returns the URL of the current web page
const getPageUrl = ClientFunction(() => {
    return window.location.href;
});

// Navigate back to the previous page
const goBack = ClientFunction(() => {
    window.history.back();
});

// Navigate forward to the next page
const goForward = ClientFunction(() => {
    window.history.forward();
});

// Reload a page
const reloadPage = ClientFunction(() => {
    window.location.reload();
});

/**
 * @summary Hover and click the given Selector
 * @param {Object} selector - Selector Object
 */
const hoverAndClick = async (selector) => {
    await t.hover(selector);
    await t.click(selector);
};

const browserOperations = {
    getPageUrl,
    goBack,
    goForward,
    reloadPage,
    hoverAndClick
};

module.exports = browserOperations;
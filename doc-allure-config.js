const DOC_ALLURE_CONFIG = {
    CLEAN_REPORT_DIR: false,
    COPY_HISTORY: true,
    RESULT_DIR: '/allure-results',
    REPORT_DIR: '/allure-report',
    META: {
        STORY_ID: 'STORY',
        TEST_ID: 'ID',
        SEVERITY: 'SEVERITY',
        TEST_RUN: 'TEST_RUN'
    },
    labels: {
        screenshotLabel: 'Screenshot',
        browserLabel: 'Browser',
        userAgentLabel: 'User Agent',
        allureStartMessage: 'Allure reporter started...',
        allureClosedMessage: 'Allure reporter closed...'
    }
};

module.exports = DOC_ALLURE_CONFIG;
const createTestCafe = require('testcafe');
const path = require('path');
const args = require('minimist')(process.argv.slice(2));

const help = 'Usage: node runner.js \n' +
    'OPTIONAL ARGUMENTS: \n' +
    '-b argument specifies the list of browsers (separated by commas) \n' +
    '-c concurrency count \n';

// Command line object destructuring
const { b, c, f, t } = args;

let browsers = 'chrome';
let concurrency = 1;
let fixtureNamePattern = '.*page';
let testNamePattern = '';

process.env.APP_URL = "www.google.com"

//Help
if (args.h === true) {
    console.log(help);
    process.exit(0);
}

// Browser list is overridden
if (b !== undefined) {
    const givenBrowserList = b.split(",");
    browsers = givenBrowserList;
}

// Concurrency count overridden
if (c !== undefined) {
    concurrency = c;
    console.log("concurrency count ", concurrency);
}

// Fixture pattern is overridden
if (f !== undefined) {
    fixtureNamePattern = f;
    console.log("Fixture pattern ", fixtureNamePattern);
}

// Test pattern is overridden
if (t !== undefined) {
    testNamePattern = t;
    console.log('Test pattern ', testNamePattern);
}

createTestCafe()
    .then(tc => {
        testcafe = tc;
        const runner = testcafe.createRunner();
        runner.filter((testName, fixtureName, fixturePattern, testMeta, fixtureMeta) => {
            const fixtureTestMatched = fixtureName.match(fixtureNamePattern) && testName.match(testNamePattern);
            console.group(`Matched testcase name ${testName} status ${fixtureTestMatched === null ? false : true}`);
            console.groupEnd();
            return fixtureTestMatched;
        });

        return runner
            .src([path.resolve('tests')])
            .browsers(browsers)
            .concurrency(concurrency)
            .reporter([{
                "name": "allure",
                "output": "allure.txt"
            }])
            .run();
    })

    .then(failedCount => {
        console.log('Tests failed: ' + failedCount);
        testcafe.close();
    });
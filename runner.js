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
let integrationTests = path.resolve("./tests");

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
        runner.filter((testName, fixtureName) => {
            const testFixtureMatched = fixtureName.match(fixtureNamePattern) && testName.match(testNamePattern);
            console.group(`Testcase name ${testName} status ${testFixtureMatched === null ? false : true}`);
            console.groupEnd();
            return testFixtureMatched;
        });

        return runner
            .src([integrationTests])
            .browsers(browsers)
            .concurrency(concurrency)
            .run();
    })

    .then(failedCount => {
        console.log('Tests failed: ' + failedCount);
        testcafe.close();
    });
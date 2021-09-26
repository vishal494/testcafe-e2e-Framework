TestCafe web automation framework

Steps to execute locally:

1. Navigate to a location in your machine and git clone <repo URL> <i> Hopefully you have git installed in your machine </i>
2. Install dependencies with $npm i

<h1> Explaining folder structure <h1>
  
<h3> Using npm command:</h3>
   </br>
   <b>
   <h4>
     npm run help --> To list down available options
 </br>
     npm run test:report --> To generate reporter
   </h4>
   </br>
  
<h4>
     Folder structure
 </h4>
  <pre>
 MyTestCafeWebFramework
├── README.md
├── allure.txt
├── doc-allure-config.js
├── jenkins.xml
├── objectRepository
│   ├── homePage.js
│   └── stackOverFlow
│       ├── loginPage.js
│       └── stackOverFlowHomePage.js
├── package-lock.json
├── package.json
├── res.xml
├── runner.js
├── teamcity.txt
├── tests
│   └── firstTest.js
└── util
    ├── browserOperation.js
    └── dataFile.js
  </pre>

You can create a config folder and keep your app URL there and call it in your program, I am using multiple website to test so I am calling in in the respective pages.

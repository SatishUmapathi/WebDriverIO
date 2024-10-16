exports.config = {
  services: [
    [
      "lambdatest",
      {
        tunnel: false,
        lambdatestOpts: {
          logFile: "tunnel.log"
        }
      }
    ]
  ],
  user: process.env.LT_USERNAME || "satishumapathi",
  key: process.env.LT_ACCESS_KEY || "ndeW5tPC3b22DwpTcleeT44Xcdk58kRA8yF1rfA8atgbxMFm0l",
  specs: [
    '../tests/specs/multiple_test.js'
  ],
  exclude: [],
  capabilities: [{
    browser: 'chrome',
    name: 'Multiple Sample Test',
    build: 'WebDriver Selenium Sample'
  }],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  path: '/wd/hub',
  hostname: 'hub.lambdatest.com',
  port: 80,
  framework: 'mocha',
  mochaOpts: {
      ui: 'bdd',
      timeout: 50000,
  }
}

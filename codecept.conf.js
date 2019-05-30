require('import-export');
require('events').EventEmitter.prototype._maxListeners = 100;
const selenium = require('selenium-standalone');

exports.config = {
    "tests": "./tests/*.test.js",
    timeout: 10000,
    output: "./output",
    helpers: {
        WebDriver: {
            "url": "https://dev.freedcamp.chat ",
            browser: "chrome",
            desiredCapabilities: {
                chromeOptions: {
                    args: ["--headless", "--disable-gpu", "--window-size=800,600"]
                }
            },
            windowSize: "1440x700",
            waitForNavigation: ["networkidle2", "domcontentloaded"]
        }
    },
    name: "webdriverio-codeceptjs-example",
    multiple: {
        parallel: {
            chunks: 2
        }
    },
    include: {
        I: "./custom_steps.js",
        homePage: './pages/home.js'
    }
}

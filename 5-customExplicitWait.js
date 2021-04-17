require('chromedriver');
const webdriver = require('selenium-webdriver'),
By =webdriver.By,
until= webdriver.until;

const driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('http://www.google.com/ncr');

var query = driver.wait(until.elementLocated(By.name('q')));
query.sendKeys('webdriver\n');

// driver.wait(until.titleIs('webdriver - Google Search'));

driver.wait(function() {
    return driver.getTitle().then(function(title) {
      return title === 'webdriver - Tìm trên Google';
    });
  }, 10000);
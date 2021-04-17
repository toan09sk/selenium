require('chromedriver');
const webdriver = require('selenium-webdriver'),
By =webdriver.By,
until= webdriver.until;

const driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('http://library-app.firebaseapp.com');
driver.findElement(By.css('input')).sendKeys('user@email.com');
driver.findElement(By.css('.btn-primary')).click();

driver.wait(until.elementLocated(By.css('.alert-success')), 10000).getText().then(function(txt){
    console.log("Alert success text is: " +txt);
    driver.quit();
});

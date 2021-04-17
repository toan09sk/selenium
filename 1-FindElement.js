require('chromedriver');
const webdriver = require('selenium-webdriver'),
By =webdriver.By,
until= webdriver.until;

const driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('http://library-app.firebaseapp.com');

driver.findElements(By.css('input')).then(function(el){
    console.log("success "+ el);
});

driver.findElements(By.css('.btn-lg')).then(function(el){
    console.log("found the button "+ el);
});

driver.findElements(By.css('nav li')).then(function(array){
    console.log("found the element you want "+ array);
});


// driver.sleep(10000);
// driver.quit();
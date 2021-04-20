require('chromedriver');
const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .withCapabilities({ 'browserName': 'chrome', "chromeOptions": { binary: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" } })
    .build();

driver.get('http://library-app.firebaseapp.com');

driver.findElements(By.css('input')).then(function(el) {
    console.log("success " + el);
});

driver.findElement(By.css('.btn-primary')).getText().then(function(txt) {
    console.log("The text of button is: " + txt);
});

driver.findElements(By.css('nav li a')).then(function(elements) {
    elements.map(function(el) {
        el.getAttribute('innerHTML').then(function(txt) {
            console.log("the text of the navbar element is: " + txt);
        });
    });
});
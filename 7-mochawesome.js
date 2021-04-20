require('chromedriver');
const { Builder, By, Key, until } = require('selenium-webdriver');
const driver = new Builder()
    .withCapabilities({ 'browserName': 'chrome', "chromeOptions": { binary: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" } })
    .build();

const expect = require('chai').expect;


describe('library app scenarios', function() {

    before(function() {
        // runs once before the first test in this block
    });

    after(() => {
        // runs once after the last test in this block
        driver.quit();
    });

    beforeEach(() => {
        // runs before each test in this block   
        driver.get('http://www.google.com');
    });

    afterEach(function() {
        // runs after each test in this block
    });

    it('works with mocha success', async() => {
        await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        await driver.wait(until.elementLocated(By.css('title')), 1000);
        const title = await driver.getTitle();
        expect(title).to.have.string("webdriver - Tìm trên Google");

    });

    it('works with mocha fail', async() => {
        await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        await driver.wait(until.elementLocated(By.css('title')), 1000);
        const title = await driver.getTitle();
        expect(title).to.have.string("webdriver - Google Search");
    });
});
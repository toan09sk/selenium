require('chromedriver');
const {Builder, By, Key, until} = require('selenium-webdriver');
const driver = new Builder().forBrowser('chrome').build();

// (async function example() {
//   try {
//     await driver.get('http://www.google.com');
//     await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
//     await driver.wait(until.elementLocated(By.css('title')), 1000);
//     let title = await driver.getTitle();
//     if (title === 'webdriver - Google Search') {
//       console.log('Test passed');
//     } else {
//       console.log('Test failed');
//     }
//     await driver.quit();
//   }
//   catch (e) {
//     console.log(e);
//   }
// })();

const assert = require('chai').assert;



describe('library app scenarios', function(){
       
        before(function() {
            // runs once before the first test in this block
        });

        after(()=>{
        // runs once after the last test in this block
         driver.quit();
        });

        beforeEach(()=>{     
             // runs before each test in this block   
            driver.get('http://www.google.com');
        });

        afterEach(function() {
            // runs after each test in this block
        });

        it('works with mocha fail', async()=>{

                await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
                await driver.wait(until.elementLocated(By.css('title')), 1000);
                const title = await driver.getTitle();
                assert.equal(title,'webdriver - Google Search', 'khong giong nhau');


        });

        it('works with mocha success', async()=>{

                await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
                await driver.wait(until.elementLocated(By.css('title')), 1000);
                const title = await driver.getTitle();
                assert.equal(title,'webdriver - Tìm trên Google', 'khong giong nhau');

            
        });
   
});
module.exports = {
    'e2e test' : function (browser) {
        browser
            .url('http://localhost:3000')
            .waitForElementVisible('body')
            .click('button[id=nav-center-button]')
            .pause(1000)
            .assert.containsText('div[id=moonRise]', 'Moon Rise')
            .assert.containsText('div[id=moonRise]', 'a.m.')

            .assert.containsText('div[id=moonSet]', 'Moon Set')
            .assert.containsText('div[id=moonSet]', 'p.m.')

            .click('button[id=nav-left-button')
            .pause(1000)
            .assert.containsText('div[id=sunrise]', 'Sunrise')
            .assert.containsText('div[id=sunrise]', 'a.m.')

            .assert.containsText('div[id=sunset]', 'Sunset')
            .assert.containsText('div[id=sunset]', 'p.m.')

            .end();
    }
};
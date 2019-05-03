module.exports = {
    'Demo test' : function (browser) {
        browser
            .url('http://localhost:3000')
            .waitForElementVisible('body')
            .click('button[id=nav-center-button]')
            .pause(1000)
            .assert.containsText('Moon Rise')
            .end();
    }
};
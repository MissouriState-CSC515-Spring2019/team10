const MoonContent = require("../src/components/moon");
const React = require("react");
const expect = require('expect');

module.exports = {
    '@unitTest' : true,

    'demo UnitTest' : function (done) {
        const component = MoonContent.create(
            <div></div>
        );
        const instance = component.getInstance();

        expect(instance.state.counter).toBe(0)
    }
};
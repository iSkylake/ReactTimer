var expect = require('expect'),
	React = require('react'),
	ReactDOM = require('react-dom'),
	TestUtils = require('react-addons-test-utils'),
	$ = require('jQuery');

var Controls = require('Controls');
describe('Controls', () => {
	it('should exist', () => {
		expect(Controls).toExist();
	});

	describe('render', () => {
		it('should render pause when started', () => {
			var controls = TestUtils.renderIntoDocument(<Controls status="started"/>);
			var $el = $(ReactDOM.findDOMNode(controls));
			var $pauseButton = $el.find('button:contains(Pause)');
			expect($pauseButton.length).toBe(1);
		});
	});	
	describe('render', () => {
		it('should render start when paused', () => {
			var controls = TestUtils.renderIntoDocument(<Controls status="paused"/>);
			var $el = $(ReactDOM.findDOMNode(controls));
			var $pauseButton = $el.find('button:contains(Start)');

			expect($pauseButton.length).toBe(1);
		});
	});
});
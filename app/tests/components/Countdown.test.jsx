var expect = require('expect'),
	React = require('react'),
	ReactDOM = require('react-dom'),
	TestUtils = require('react-addons-test-utils'),
	$ = require('jQuery');

var Countdown = require('Countdown');

describe('Countdown', () => {
	it('should exist', () => {
		expect(Countdown).toExist();
	});

	describe('handleSetCountdown', () => {
		it('should set state to started and countdown', (done) => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);
			countdown.handleSetCountdown(10);

			expect(countdown.state.count).toBe(10);
			expect(countdown.state.countdownStatus).toBe('started');

			setTimeout(() => {
				expect(countdown.state.count).toBe(9);
				done();
			}, 1000);
		});
	});	
	describe('handleSetCountdown', () => {
		it('should end in 0, no less than 0', (done) => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);
			countdown.handleSetCountdown(1);

			setTimeout(() => {
				expect(countdown.state.count).toBe(0);
				done();
			}, 3000);
		});
	});
});
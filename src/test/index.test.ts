import { expect } from 'chai';
import { JeopardyCalculator, JeopardyTypeResult } from '../index';

describe('it tests', () => {
	it('should calculate an automatic win if you are ahead by more than 2x', () => {
		// tslint:disable-next-line:typedef
		const result = JeopardyCalculator([100, 2000, 500], 1);
		expect(result.model.isFirstPlace).to.equal(true);
		expect(result.scenario).to.deep.equal([JeopardyTypeResult.AUTOMATIC_WIN]);
		expect(result.bet.max).to.equal(999);
		expect(result.bet.min).to.equal(0);
	});

	it('should calculate if you are ahead by less than 2x', () => {
		// tslint:disable-next-line:typedef
		const result = JeopardyCalculator([100, 2000, 1200], 1);
		expect(result.model.isFirstPlace).to.equal(true);
		expect(result.scenario).to.deep.equal([
			JeopardyTypeResult.WIN_IF_CORRECT,
			JeopardyTypeResult.WIN_IF_SECOND_PLACE_IS_INCORRECT,
		]);
		expect(result.bet.max).to.equal(1799);
		expect(result.bet.min).to.equal(401);
	});

	it('should calculate if you are ahead by exactly 2x', () => {
		// tslint:disable-next-line:typedef
		const result = JeopardyCalculator([100, 2000, 1000], 1);
		expect(result.model.isFirstPlace).to.equal(true);
		expect(result.scenario).to.deep.equal([
			JeopardyTypeResult.WIN_IF_CORRECT,
			JeopardyTypeResult.WIN_IF_SECOND_PLACE_IS_INCORRECT,
		]);
		expect(result.bet.max).to.equal(1799);
		expect(result.bet.min).to.equal(1);
	});

	it('should calculate if you are ahead by less than 2x to all places', () => {
		// tslint:disable-next-line:typedef
		const result = JeopardyCalculator([1100, 2000, 1200], 1);
		expect(result.model.isFirstPlace).to.equal(true);
		expect(result.scenario).to.deep.equal([
			JeopardyTypeResult.WIN_IF_CORRECT,
			JeopardyTypeResult.WIN_IF_SECOND_AND_THIRD_PLACE_IS_INCORRECT,
		]);
		expect(result.bet.max).to.equal(401);
		expect(result.bet.min).to.equal(401);
	});
});

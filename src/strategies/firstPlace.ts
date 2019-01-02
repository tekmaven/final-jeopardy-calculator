import { IJeopardyBetResult } from '../IJeopardyBetResult';
import { IJeopardyResult } from '../IJeopardyResult';
import { IPlayerModel } from '../IPlayerModel';
import { JeopardyTypeResult } from '../JeopardyTypeResult';

export function firstPlace(firstPlacePlayer: IPlayerModel, allPlayers: IPlayerModel[]): IJeopardyResult {
	const secondPlacePlayer: IPlayerModel = allPlayers[1];
	const thirdPlacePlayer: IPlayerModel = allPlayers[2];
	const bet: IJeopardyBetResult = { min: 0, max: 0 };
	const scenario: JeopardyTypeResult[] = [];
	if (firstPlacePlayer.score > secondPlacePlayer.maxWin) {
		// runaway victory
		bet.max = firstPlacePlayer.score - 1 - secondPlacePlayer.maxWin;
		scenario.push(JeopardyTypeResult.AUTOMATIC_WIN);
	} else {
		// not a runaway! you must get it right to win!
		bet.min = Math.max(0, secondPlacePlayer.maxWin + 1 - firstPlacePlayer.score);
		bet.max = Math.max(bet.min, Math.max(0, firstPlacePlayer.score - (thirdPlacePlayer.maxWin + 1)));
		scenario.push(JeopardyTypeResult.WIN_IF_CORRECT);
		if (firstPlacePlayer.score < thirdPlacePlayer.maxWin) {
			scenario.push(JeopardyTypeResult.WIN_IF_SECOND_AND_THIRD_PLACE_IS_INCORRECT);
		} else {
			scenario.push(JeopardyTypeResult.WIN_IF_SECOND_PLACE_IS_INCORRECT);
		}
	}
	return {
		bet,
		scenario,
		model: firstPlacePlayer,
	};
}

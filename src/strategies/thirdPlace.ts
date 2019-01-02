import { IJeopardyBetResult } from '../IJeopardyBetResult';
import { IJeopardyResult } from '../IJeopardyResult';
import { IPlayerModel } from '../IPlayerModel';
import { JeopardyTypeResult } from '../JeopardyTypeResult';
export function thirdPlace(thirdPlacePlayer: IPlayerModel, allPlayers: IPlayerModel[]): IJeopardyResult {
	const firstPlacePlayer: IPlayerModel = allPlayers[0];
	const bet: IJeopardyBetResult = { min: 0, max: 0 };
	const scenario: JeopardyTypeResult[] = [];
	if (thirdPlacePlayer.maxWin > firstPlacePlayer.score) {
		bet.min = firstPlacePlayer.score - thirdPlacePlayer.score;
		bet.max = thirdPlacePlayer.score;
		scenario.push(JeopardyTypeResult.WIN_IF_CORRECT_AND_FIRST_PLACE_IS_INCORRECT);
	} else {
		bet.max = thirdPlacePlayer.score;
		scenario.push(JeopardyTypeResult.NO_POSSIBLE_WIN);
	}
	return {
		bet,
		scenario,
		model: thirdPlacePlayer,
	};
}

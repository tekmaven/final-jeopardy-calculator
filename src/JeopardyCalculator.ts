import { IJeopardyResult } from './IJeopardyResult';
import { IPlayerModel } from './IPlayerModel';
import { errorPlace } from './strategies/errorPlace';
import { firstPlace } from './strategies/firstPlace';
import { secondPlace } from './strategies/secondPlace';
import { thirdPlace } from './strategies/thirdPlace';

export function JeopardyCalculator(scores: number[], playerIndex: number): IJeopardyResult {
	function createPlayer(i: number): IPlayerModel {
		return {
			player: i,
			isFirstPlace: false,
			isSecondPlace: false,
			isSelf: playerIndex === i,
			isThirdPlace: false,
			maxWin: scores[i] * 2,
			minWin: 0,
			score: scores[i],
			solve: errorPlace,
		};
	}
	const players: IPlayerModel[] = [createPlayer(0), createPlayer(1), createPlayer(2)];
	const currentPlayer: IPlayerModel = players[playerIndex];
	players.sort((a, b) => {
		if (a.score > b.score) {
			return -1;
		}
		if (a.score < b.score) {
			return 1;
		}
		return 0;
	});
	players[0].solve = firstPlace;
	players[0].isFirstPlace = true;
	players[1].solve = secondPlace;
	players[1].isSecondPlace = true;
	players[2].solve = thirdPlace;
	players[2].isThirdPlace = true;
	return currentPlayer.solve(currentPlayer, players);
}

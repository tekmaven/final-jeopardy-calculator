import { IJeopardyResult } from './IJeopardyResult';
import { IPlayer } from './IPlayer';

export interface IPlayerModel extends IPlayer {
	isFirstPlace: boolean;
	isSecondPlace: boolean;
	isThirdPlace: boolean;
	maxWin: number;
	minWin: number;
	solve(currentPlayer: IPlayerModel, allPlayers: IPlayerModel[]): IJeopardyResult;
}

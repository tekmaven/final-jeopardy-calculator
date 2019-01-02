import { IJeopardyResult } from '../IJeopardyResult';
import { IPlayerModel } from '../IPlayerModel';

export function errorPlace(currentPlayer: IPlayerModel, allPlayers: IPlayerModel[]): IJeopardyResult {
	throw new Error('Something happened');
}

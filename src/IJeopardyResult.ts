import { IJeopardyBetResult } from './IJeopardyBetResult';
import { IPlayerModel } from './IPlayerModel';
import { JeopardyTypeResult } from './JeopardyTypeResult';
export interface IJeopardyResult {
	bet: IJeopardyBetResult;
	scenario: JeopardyTypeResult[];
	model: IPlayerModel;
}

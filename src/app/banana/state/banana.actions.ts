import { Action } from '@ngrx/store';

export const GET_NEW_BANANA = 'Get New Banana';

export class GetNewBanana implements Action {  
  readonly type: string = GET_NEW_BANANA;

  constructor(public payload: any) {
    console.log('ACTION ' + GET_NEW_BANANA);
  }
}

export type BananaAction = GetNewBanana;

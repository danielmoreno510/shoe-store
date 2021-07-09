import {runSaga} from 'redux-saga';

import * as shoesListService from '../../../../services/api/shoesService';
import {putShoesList} from '../../../actions';
import {fetchShoesList} from '../shoesListSaga';

describe('fetchShoesList', () => {
  describe.each`
    action          | expectedService | response | name
    ${putShoesList} | ${'success'}    | ${[{}]}  | ${'putDesignProperties'}
    ${putShoesList} | ${'error'}      | ${[]}    | ${'putDesignProperties'}
  `(
    'WHEN fetchShoesList saga is called with “$expectedService“ response in the shoesService service',
    ({action, expectedService, response, name}) => {
      it(`THEN ${name} action should be dispatched`, async () => {
        const promise = expectedService === 'success' ? Promise.resolve(response) : Promise.reject(response);
        const shoesService = jest.spyOn(shoesListService, 'shoesService').mockImplementation(() => promise);

        const dispatched = [];
        const dispatch = {dispatch: actionDispatched => dispatched.push(actionDispatched)};
        await runSaga(dispatch, fetchShoesList, {operationId: 1});

        expect(shoesService).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([action(response)]);
        shoesService.mockClear();
      });
    },
  );
});

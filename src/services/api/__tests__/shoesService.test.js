import http from '../../http';
import {shoesService} from '../shoesService';

describe('Shoes service', () => {
  describe('WHEN the shooes service is called', () => {
    const request = 'urgent';
    const httpSpy = jest.spyOn(http, 'get').mockImplementation(() => ({data: {}}));

    it('THEN should send a get request', async () => {
      await shoesService(request);
      expect(httpSpy).toHaveBeenCalledWith(expect.stringMatching(/shoes/));
    });
  });
});

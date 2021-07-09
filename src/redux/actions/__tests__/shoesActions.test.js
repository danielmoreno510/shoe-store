import shoesActions from '../shoesActions';

describe('Shoes Actions', () => {
  const actionsArray = Object.keys(shoesActions);
  describe.each(actionsArray)('GIVEN %s action', action => {
    describe('WHEN the action is called', () => {
      const result = shoesActions[action]();
      it('THEN should be an object', () => {
        expect(typeof result).toBe('object');
      });
      it('AND should have a type as key', () => {
        expect(result).toHaveProperty('type');
      });
      it('AND type should be a string', () => {
        expect(typeof result.type).toBe('string');
      });
    });
  });
});

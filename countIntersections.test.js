const countIntersections = require('./index.js');

describe('countIntersections test suite', () => {
   it('should calculate correctly the intersections of segments from first example', () => {
      const startsAt = [1, 3];
      const endsAt = [4, 5];
      const expectedIntersections = [1, 1];

      const result = countIntersections(startsAt, endsAt);

      expect(result).toEqual(expectedIntersections);
   });
});

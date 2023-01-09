const countIntersections = require('./index.js');

describe('countIntersections test suite', () => {
   it('should calculate correctly the intersections of segments from first example', () => {
      const startsAt = [1, 3];
      const endsAt = [4, 5];
      const expectedIntersections = [1, 1];

      const result = countIntersections(startsAt, endsAt);

      expect(result).toEqual(expectedIntersections);
   });

   it('should calculate correctly the intersections of segments from second example', () => {
      const startsAt = [1, 3];
      const endsAt = [5, 4];
      const expectedIntersections = [1, 1];

      const result = countIntersections(startsAt, endsAt);

      expect(result).toEqual(expectedIntersections);
   });

   it('should calculate correctly the intersections of segments from second example', () => {
      const startsAt = [3, 1, 5];
      const endsAt = [3, 5, 6];
      const expectedIntersections = [1, 2, 1];

      const result = countIntersections(startsAt, endsAt);

      expect(result).toEqual(expectedIntersections);
   });
});

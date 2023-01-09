function countIntersections(startsAt = [3, 1, 5], endsAt = [3, 5, 6]) {
   const segments = [];
   const allSegments = [];

   startsAt.forEach((_init, index) => {
      segments.push([startsAt[index], endsAt[index]]);
   });

   segments.forEach((segment) => {
      const lines = [];
      for (let i = segment[0]; i <= segment[1]; i++) {
         lines.push(i);
      }
      allSegments.push(lines);
   });

   const allIntersections = [];

   allSegments.forEach((arr, currIndex) => {
      let repited = 0;

      allSegments.forEach((arr2, i) => {
         if (currIndex !== i) {
            let includes = false;

            arr.forEach((val) => {
               if (arr2.includes(val)) includes = true;
            });

            if (includes) repited += 1;
         }
      });

      allIntersections.push(repited);
   });

   return allIntersections;
}

module.exports = countIntersections;

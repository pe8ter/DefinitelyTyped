import * as R from 'ramda';

() => {
  R.flatten([[1, 2], [3, 4], [5, 6]]); // => [1, 2, 3, 4, 5, 6]
  R.flatten([1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
};

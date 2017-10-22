// export default class Utilities {
//   generateRandomNum(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
// }

export const generateRandomNum = (min, max) => (
  Math.floor(Math.random() * (max - min + 1) + min)
);
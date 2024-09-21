export function getRandomNumber(
  min: number,
  max: number,
  round: (num: number) => number
) {
  return round(min + Math.random() * max);
}

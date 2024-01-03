import health from '../game'
const dataList = [
    ['critical', {name: 'Маг', health: 10}],
    ['healthy', {name: 'Маг', health: 90}],
    ['wounded', {name: 'Маг', health: 20}],
  ];
  
test.each(dataList)('testing heal %s', (expected, params) => {
  const result = health(params);
  expect(result).toBe(expected);
})
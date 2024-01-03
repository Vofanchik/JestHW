import health from '../game'

let testData = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
]

test('Sort at decrease', () => {
  const decrease = [
    {
        "name": "маг",
        "health": 100
    },
    {
        "name": "лучник",
        "health": 80
    },
    {
        "name": "мечник",
        "health": 10
    }
]
  const result = health(testData);
  expect(result).toEqual(decrease);
});
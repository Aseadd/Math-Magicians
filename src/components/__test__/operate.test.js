import operate from '../../logic/operate';

it('should return 15 when 7+8=', () => {
  const result = operate('7', '8', '+');
  expect(result).toBe('15');
});

const numbers = ['7', '8', '4'];
it('should return 60 when 7+8= x 2=', () => {
  const result = numbers.reduce((acc, num) => operate(acc, num, '-'), '20');
  expect(result).toBe('1');
});

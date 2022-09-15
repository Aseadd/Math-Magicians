import operate from '../../logic/operate';

it('should return 15 when 7+8=', () => {
  const result = operate('7', '8', '+');
  expect(result).toBe('15');
});

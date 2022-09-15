import calculate from '../../logic/calculate';

const btns = [{ value: '7' }, { value: '+' }, { value: '8' }, { value: '=' }];
it('should return 15 when 7+8=', () => {
  const result = btns.reduce((acc, btn) => calculate(acc, btn.value), {});
  expect(result.total).toBe('15');
});

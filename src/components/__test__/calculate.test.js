import calculate from '../../logic/calculate';

const btns = [{ value: '7' }, { value: '+' }, { value: '8' }, { value: '=' }];
it('should return 15 when 7+8=', () => {
  const result = btns.reduce((acc, btn) => calculate(acc, btn.value), {});
  expect(result.total).toBe('15');
});

const btns2 = [
  { value: '7' },
  { value: '+' },
  { value: '8' },
  { value: '=' },
  { value: 'x' },
  { value: '2' },
  { value: '=' },
];
it('should return 30 when 7+8= x 2=', () => {
  const result = btns2.reduce((acc, btn) => calculate(acc, btn.value), {});
  expect(result.total).toBe('30');
});

const btns3 = [
  { value: '7' },
  { value: '+' },
  { value: '8' },
  { value: '=' },
  { value: 'AC' },
];
it('should return 0 when 7+8= AC', () => {
  const result = btns3.reduce((acc, btn) => calculate(acc, btn.value), {});
  expect(result.total).toBe(null);
});

const btns4 = [{ value: '7' }, { value: '+/-' }];
it('should return -7 when 7+/-', () => {
  const result = btns4.reduce((acc, btn) => calculate(acc, btn.value), {});
  expect(result.next).toBe('-7');
});

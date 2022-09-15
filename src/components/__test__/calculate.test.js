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

describe('Calculate File', () => {
  it('Testing AC', () => {
    const obj = '';
    const buttonName = 'AC';

    expect(calculate(obj, buttonName)).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('Testing obj.net & buttonName are 0', () => {
    const obj = { total: '', next: '0', operation: '' };
    const buttonName = '0';
    expect(calculate(obj, buttonName)).toEqual({});
  });

  it('Any "if" is true', () => {
    const obj = '0';
    const buttonName = '123';
    expect(calculate(obj, buttonName)).toEqual({
      next: buttonName,
      total: null,
    });
  });
});

import { validateOneRule } from '../form-model';

describe('form-model', () => {
  it(': date rule accepts any allowed delimiter', async () => {
    expect((await validateOneRule('2024/01/31', { date: true })).result).toBe(true);
    expect((await validateOneRule('2024-01-31', { date: true })).result).toBe(true);
  });
});

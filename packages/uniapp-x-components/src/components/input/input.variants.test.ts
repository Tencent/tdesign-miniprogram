import { describe, it, expect } from 'vitest';
import { inputVariants } from './input.variants';

describe('inputVariants (Input 变体)', () => {
  it('默认：t-input + size-medium + status-default', () => {
    expect(inputVariants({})).toBe('t-input t-input--medium t-input--status-default');
  });

  it.each([
    ['small', 't-input--small'],
    ['medium', 't-input--medium'],
    ['large', 't-input--large'],
  ] as const)('size=%s', (size, cls) => {
    expect(inputVariants({ size })).toContain(cls);
  });

  it.each([
    ['default', 't-input--status-default'],
    ['success', 't-input--status-success'],
    ['warning', 't-input--status-warning'],
    ['error', 't-input--status-error'],
  ] as const)('status=%s', (status, cls) => {
    expect(inputVariants({ status })).toContain(cls);
  });

  it('disabled=true 加 disabled 类', () => {
    expect(inputVariants({ disabled: true })).toContain('t-input--disabled');
  });

  it('readonly=true 加 readonly 类', () => {
    expect(inputVariants({ readonly: true })).toContain('t-input--readonly');
  });

  it('class 透传', () => {
    expect(inputVariants({ class: 'foo' })).toContain('foo');
  });
});

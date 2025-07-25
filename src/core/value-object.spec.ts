import { ValueObject } from './value-object';

class DummyValueObject extends ValueObject<{ foo: string; bar: number }> {}

describe('ValueObject', () => {
  it('should be equal when props are shallowly equal', () => {
    const vo1 = new DummyValueObject({ foo: 'hello', bar: 42 });
    const vo2 = new DummyValueObject({ foo: 'hello', bar: 42 });

    expect(vo1.equals(vo2)).toBe(true);
  });

  it('should not be equal when props differ', () => {
    const vo1 = new DummyValueObject({ foo: 'hello', bar: 42 });
    const vo2 = new DummyValueObject({ foo: 'world', bar: 42 });

    expect(vo1.equals(vo2)).toBe(false);
  });

  it('should return false when compared with undefined', () => {
    const vo1 = new DummyValueObject({ foo: 'hello', bar: 42 });

    expect(vo1.equals(undefined)).toBe(false);
  });

  it('should return false when compared with null', () => {
    const vo1 = new DummyValueObject({ foo: 'hello', bar: 42 });

    expect(vo1.equals(null as any)).toBe(false);
  });

  it('should return false when compared with object missing props', () => {
    const vo1 = new DummyValueObject({ foo: 'hello', bar: 42 });

    const broken = { props: undefined } as any;

    expect(vo1.equals(broken)).toBe(false);
  });

  it('should freeze props to prevent mutation', () => {
    const vo = new DummyValueObject({ foo: 'hello', bar: 42 });

    expect(Object.isFrozen(vo.props)).toBe(true);
  });
});

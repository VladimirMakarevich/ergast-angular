export type Spied<T> = {
  [Method in keyof T]?: jasmine.Spy | any;
};

export function createMock<T>(value: Partial<Spied<T>> = {}): T {
  return value as T;
}

export function patchMock<T>(mock: T, value: Partial<Spied<T>>): void {
  Object.assign(mock, value);
}

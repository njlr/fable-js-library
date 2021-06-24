import * as foo from 'foo';

test('add works as expected', () => {
  expect(foo.add(1, 1)).toBe(2);
  expect(foo.add(1, 2)).toBe(3);
  expect(foo.add(3, 4)).toBe(7);
});

test('twice works as expected', () => {
  expect(foo.twice("hello")).toBe("hellohello");
});

test('map works as expected', () => {
  expect(foo.map([ 1, 2, 3 ], x => x * 2)).toEqual([ 2, 4, 6 ]);
});

test('fooBar works as expected', () => {
  expect(foo.fooBar({ foo: 3, bar: 4 })).toEqual(12);
});

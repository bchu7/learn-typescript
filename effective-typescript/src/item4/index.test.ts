import { Item4 } from './index';

namespace Item4Test {
  test('getAuthors', () => {
    const authors = Item4.getAuthors({
      runQuery(sql: string) {
        return [['Toni', 'Morrison'], ['Maya', 'Angelou']];
      }
    });
    expect(authors).toEqual([
      { first: 'Toni', last: 'Morrison' },
      { first: 'Maya', last: 'Angelou' }
    ]);
  });
}
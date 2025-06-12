export namespace Item4 {
    export interface Author {
        first: string;
        last: string;
    }
    export interface DB {
        runQuery: (sql: string) => any[];
    }
    export function getAuthors(database: DB): Author[] {
        const authorRows = database.runQuery(`SELECT first, last FROM authors`);
        return authorRows.map(row => ({
            first: row[0], last: row[1]
        }));
    }

}

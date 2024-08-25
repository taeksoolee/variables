import { drizzle, BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { resolve } from 'path';

export const sqlite = new Database(resolve('server', 'database', 'db.sqlite'), { fileMustExist: true });
export const db: BetterSQLite3Database = drizzle(sqlite);
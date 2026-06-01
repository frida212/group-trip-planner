import { sql } from 'postgres';

let db: any = null;

export async function getDb() {
  if (!db) {
    const postgres = (await import('postgres')).default;
    db = postgres(process.env.DATABASE_URL || '');
  }
  return db;
}

export async function executeQuery(query: any) {
  const database = await getDb();
  return database(query);
}

export { sql };

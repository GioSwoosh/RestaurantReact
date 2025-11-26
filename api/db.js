import pg from "pg";

let pool;

// Use a singleton pattern to avoid creating multiple pools
if (!global.pgPool) {
  global.pgPool = new pg.Pool({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    ssl: { rejectUnauthorized: false },
  });
}

pool = global.pgPool;

pool.connect()
  .then(() => console.log("Connected to Supabase PostgreSQL"))
  .catch((err) => console.error("Database connection error:", err));

export default pool;

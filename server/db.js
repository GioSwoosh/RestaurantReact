import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new pg.Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  ssl: { rejectUnauthorized: false },
});

pool.connect()
  .then(() => console.log("Connected to Supabase PostgreSQL"))
  .catch((err) => console.error("Database connection error:", err));

export default pool;

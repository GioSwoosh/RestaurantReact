import pool from "./db.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, date, time, guests } = req.body;
    try {
      const result = await pool.query(
        `INSERT INTO reservations(name,email,phone,date,time,guests)
         VALUES($1,$2,$3,$4,$5,$6) RETURNING *`,
        [name, email, phone, date, time, guests]
      );
      res.status(200).json({ message: "Reservation added", data: result.rows });
    } catch (error) {
      console.error("DB error:", error);
      res.status(500).json({ error: "Failed to add reservation" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

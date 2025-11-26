import { supabase } from "../server/supabaseClient.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  console.log("POST /api/reservations received");
  console.log("Request body:", req.body);

  const { name, email, phone, date, time, guests } = req.body;

  try {
    const { data, error } = await supabase
      .from("reservations")
      .insert([{ name, email, phone, date, time, guests }]);

    if (error) throw error;

    return res.status(200).json({
      message: "Reservation added successfully!",
      data,
    });
  } catch (error) {
    console.error("Error inserting reservation:", error.message);
    return res.status(500).json({ error: "Failed to add reservation" });
  }
}

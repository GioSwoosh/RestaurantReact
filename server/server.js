import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/api/reservations", async (req, res) => {
  console.log("POST /api/reservations received");
  console.log("Request body:", req.body);
  const { name, email, phone, date, time, guests } = req.body;

  try {
    const { data, error } = await supabase
      .from("reservations")
      .insert([{ name, email, phone, date, time, guests }]);

    if (error) throw error;

    res.status(200).json({ message: "Reservation added successfully!", data });
  } catch (error) {
    console.error("Error inserting reservation:", error.message);
    res.status(500).json({ error: "Failed to add reservation" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

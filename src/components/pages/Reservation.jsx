import { useState} from "react"

function Reservation() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "1"
    })
    const handleChanges = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await fetch("http://localhost:5000/api/reservations", {
          method: "POST",
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          alert("Reservation made successfully");
        } else {
          alert("There was an issue making your reservation");
        }
      } catch(error) {
        console.error("Error", error);
        alert("Server error please try again")
      }
    }
    const genTimeSlots = () => {
        const slots = []
        for(let hour = 9; hour < 21; hour++) {
            const startHour = hour % 12 === 0 ? 12 : hour % 12
            const startPeriod = hour < 12 ? "AM" : "PM"

            const endHour = (hour + 1) % 12 === 0 ? 12 : (hour + 1) % 12
            const endPeriod = hour + 1 < 12 ? "AM" : "PM"

            slots.push(`${startHour}:00 ${startPeriod} - ${endHour}:00 ${endPeriod}`)
        }
        return slots
    }
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Reserve a Table</h2>
          <h1>
            Dine with Us <span>Reserve Now</span>
          </h1>
          <div>
            <div>
              <label htmlFor="">Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChanges} placeholder="Full Name" required />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChanges} placeholder="Email" required />
            </div>
            <div>
              <label htmlFor="">Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChanges} placeholder="Phone Number" required />
            </div>
            <div>
              <label htmlFor="">Reservation Date</label>
              <input type="date" name="date" value={formData.date} onChange={handleChanges} required />
            </div>
            <div>
              <label htmlFor="">Time of Reservation</label>
              <select name="time" value={formData.time} onChange={handleChanges} required>
                <option value="">Select Time</option>
                {genTimeSlots().map((slot, index) => (
                    <option key= {index} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="">Number of Guests</label>
              <select name="guests" value={formData.guests} onChange={handleChanges}>
                {[
                  ...Array(10).keys().map((i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} Guest(s)
                      </option>
                    )),
                ]}
              </select>
            </div>
            <button type="submit">Book Now</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Reservation
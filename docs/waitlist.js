document.getElementById("waitlistForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        reason: document.getElementById("reason").value
    };

    try {

        const res = await fetch("https://ike-elite-backend.onrender.com/api/waitlist", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const result = await res.json();

        alert(result.message || "Joined waitlist");

        e.target.reset();

    } catch (err) {
        alert("Failed to join waitlist");
    }
});
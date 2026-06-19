// LOAD STYLES INTO DROPDOWN
document.addEventListener("DOMContentLoaded", () => {

    const select = document.getElementById("styleSelect");

    // IMPORTANT: this must exist in styles.js or backend
    if (typeof allStyles !== "undefined") {

        select.innerHTML = `<option value="">Select Style</option>`;

        allStyles.forEach(style => {
            const opt = document.createElement("option");
            opt.value = style.name;
            opt.textContent = style.name;
            select.appendChild(opt);
        });

    } else {
        select.innerHTML = `<option>No styles found</option>`;
    }
});


// SUBMIT ENQUIRY
document.getElementById("enquiryForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        style: document.getElementById("styleSelect").value,
        date: document.getElementById("date").value,
        message: document.getElementById("message").value
    };

    try {

        const res = await fetch("https://ike-elite-backend.onrender.com/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await res.json();

        alert(result.message || "Sent successfully");

        e.target.reset();

    } catch (err) {
        console.error(err);
        alert("Failed to send enquiry");
    }
});
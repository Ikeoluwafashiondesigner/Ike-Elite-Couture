document.addEventListener("DOMContentLoaded", () => {

```
const form = document.getElementById("enquiryForm");

if (!form) return;

const styleName = localStorage.getItem("styleName");

if (styleName && document.getElementById("styleSelected")) {
    document.getElementById("styleSelected").value = styleName;
}

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        style:
            styleName ||
            document.getElementById("styleCategory").value,
        message: document.getElementById("message").value
    };

    try {

        const res = await fetch(
            "https://ike-elite-backend.onrender.com/api/enquiry",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        const result = await res.json();

        if (result.success) {
            alert("Enquiry Sent Successfully");
            form.reset();
        } else {
            alert("Failed To Send Enquiry");
        }

    } catch (err) {

        console.error(err);
        alert("Server Error");

    }

});
```

});

document.getElementById("waitlistForm").addEventListener("submit", async function(e){
e.preventDefault();

const data = {
name: document.getElementById("name").value,
email: document.getElementById("email").value,
phone: document.getElementById("phone").value,
interest: document.getElementById("interest").value
};

try {

const res = await fetch("https://ike-elite-backend.onrender.com/api/waitlist", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(data)
});

const result = await res.json();

alert(result.message || "Joined successfully!");

} catch (err) {
console.log(err);
alert("Failed to join waitlist");
}

});

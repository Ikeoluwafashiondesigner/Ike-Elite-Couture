const enquiryForm =
document.getElementById("enquiryForm");

if(enquiryForm){

enquiryForm.addEventListener("submit",
async function(e){

e.preventDefault();

const data = {

fullName:
document.getElementById("fullName").value,

email:
document.getElementById("email").value,

whatsapp:
document.getElementById("whatsapp").value,

eventDate:
document.getElementById("eventDate").value,

outfitType:
document.getElementById("outfitType").value,

delivery:
document.getElementById("delivery").value,

address:
document.getElementById("address").value,

info:
document.getElementById("info").value

};

try{

const res = await fetch(
"https://ike-elite-backend.onrender.com/api/enquiry",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
}
);

const result = await res.json();

alert(result.message);

}catch(err){

console.log(err);

alert("Failed to send enquiry");

}

});

}

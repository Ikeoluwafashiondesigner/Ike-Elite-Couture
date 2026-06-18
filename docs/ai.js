const floatBtn =
document.getElementById("ai-float-btn");

const chatbox =
document.getElementById("ai-chatbox");

const closeBtn =
document.getElementById("ai-close");

const messages =
document.getElementById("ai-messages");

const input =
document.getElementById("ai-input");

const sendBtn =
document.getElementById("ai-send");

/* OPEN */

floatBtn.onclick = () => {

chatbox.style.display = "flex";

floatBtn.style.display = "none";

if(messages.innerHTML === ""){

botReply(
"Hello 👋 Welcome to IKE-ELITE-COUTURE. How can I help you today?"
);

}

};

/* CLOSE */

closeBtn.onclick = () => {

chatbox.style.display = "none";

floatBtn.style.display = "flex";

};

/* SEND */

sendBtn.onclick = sendAI;

input.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){
sendAI();
}

});

function sendAI(){

let text = input.value.trim();

if(!text) return;

addMessage(text,"user");

input.value = "";

setTimeout(()=>{

addMessage(
getReply(text),
"ai"
);

},500);

}

/* MESSAGE */

function addMessage(text,type){

const div =
document.createElement("div");

div.className =
`msg ${type}`;

div.innerText = text;

messages.appendChild(div);

messages.scrollTop =
messages.scrollHeight;

}

function botReply(text){

addMessage(text,"ai");

}

/* AI BRAIN */

function getReply(msg){

msg =
msg.toLowerCase();

/* GREETINGS */

if(
msg.includes("hi") ||
msg.includes("hello") ||
msg.includes("hey") ||
msg.includes("how far")
){
return "Hello 👋 Welcome to IKE-ELITE-COUTURE.";
}

if(msg.includes("good morning")){
return "Good morning ☀️.";
}

if(msg.includes("good afternoon")){
return "Good afternoon 😊.";
}

if(msg.includes("good evening")){
return "Good evening 🌙.";
}

if(
msg.includes("how are you") ||
msg.includes("are you okay")
){
return "I'm doing great 😊. How can I help?";
}

if(
msg.includes("thank") ||
msg.includes("thanks")
){
return "You're welcome ❤️";
}

if(
msg.includes("bye") ||
msg.includes("goodbye")
){
return "Goodbye 👋";
}

if(msg.includes("joke")){
return "😂 Why did the tailor become famous? Because every stitch was perfect!";
}

if(
msg.includes("who made you") ||
msg.includes("who built this website")
){
return "This website was developed by Daniel Adepoju for IKE-ELITE-COUTURE.";
}

if(
msg.includes("price") ||
msg.includes("cost")
){
return "Prices depend on style, fabric and measurements. Please contact us on WhatsApp.";
}

if(
msg.includes("book") ||
msg.includes("order")
){
return "You can place your order through our booking page or WhatsApp.";
}

if(
msg.includes("delivery") ||
msg.includes("shipping")
){
return "Delivery time depends on your location and design.";
}

if(
msg.includes("location") ||
msg.includes("where are you")
){
return "We are based in Lagos, Nigeria 🇳🇬";
}

if(
msg.includes("services") ||
msg.includes("what do you sew")
){
return "We create Ankara styles, luxury gowns, bridal wear, corset dresses and custom outfits.";
}

return "I can help with bookings, prices, delivery information, fashion styles and customer support.";
}

/* WHATSAPP */

function openWhatsApp(){

window.open(
"https://wa.me/2348109174369",
"_blank"
);

}
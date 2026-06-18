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

let typing = document.createElement("div");

typing.className = "msg ai";

typing.innerText = "AI is typing...";

messages.appendChild(typing);

messages.scrollTop = messages.scrollHeight;

setTimeout(()=>{

typing.remove();

addMessage(
getReply(text),
"ai"
);

},1000);
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

msg = msg.toLowerCase().trim();

/* GREETINGS */

const greetings = [
"hi","hello","hey","how far","sup",
"what's up","wassup","yo","good day"
];

if(greetings.some(word => msg.includes(word))){
return "Hello 👋 Welcome to IKE-ELITE-COUTURE. How can I help you today?";
}

if(msg.includes("good morning")){
return "Good morning ☀️. Hope you're having a wonderful day.";
}

if(msg.includes("good afternoon")){
return "Good afternoon 😊. How may I assist you?";
}

if(msg.includes("good evening")){
return "Good evening 🌙. Welcome to IKE-ELITE-COUTURE.";
}

/* HOW ARE YOU */

if(
msg.includes("how are you") ||
msg.includes("are you okay") ||
msg.includes("are u okay") ||
msg.includes("you good")
){
return "I'm doing great 😄. Thanks for asking. How can I help you today?";
}

/* THANKS */

if(
msg.includes("thank") ||
msg.includes("thanks") ||
msg.includes("tnx") ||
msg.includes("thank you")
){
return "You're welcome ❤️. Happy to help.";
}

/* BYE */

if(
msg.includes("bye") ||
msg.includes("goodbye") ||
msg.includes("see you")
){
return "Goodbye 👋. We hope to see you again soon.";
}

/* JOKES */

if(msg.includes("joke")){
const jokes = [
"😂 Why did the tailor become famous? Because every stitch was perfect!",
"😂 Why don't fashion designers get lost? They always follow the latest trends.",
"😂 Our sewing machine works overtime because our styles are too beautiful."
];

return jokes[Math.floor(Math.random()*jokes.length)];
}

/* CREATOR */

if(
msg.includes("who made you") ||
msg.includes("who built this website") ||
msg.includes("developer")
){
return "This website and AI assistant were developed by Daniel Adepoju for IKE-ELITE-COUTURE.";
}

/* PRICES */

if(
msg.includes("price") ||
msg.includes("cost") ||
msg.includes("how much")
){
return "Prices depend on the style, fabric and measurements. Contact us on WhatsApp for an accurate quote.";
}

/* BOOKING */

if(
msg.includes("book") ||
msg.includes("order") ||
msg.includes("appointment")
){
return "You can place your order through our booking page or contact us directly on WhatsApp.";
}

/* DELIVERY */

if(
msg.includes("delivery") ||
msg.includes("shipping")
){
return "Delivery time depends on your location and outfit design requirements.";
}

/* LOCATION */

if(
msg.includes("location") ||
msg.includes("where are you") ||
msg.includes("address")
){
return "We are based in Lagos, Nigeria 🇳🇬.";
}

/* SERVICES */

if(
msg.includes("services") ||
msg.includes("what do you sew") ||
msg.includes("what do you make")
){
return "We create Ankara styles, luxury gowns, bridal wear, corset dresses, lace outfits and custom fashion designs.";
}

/* ANKARA */

if(msg.includes("ankara")){
return "Our Ankara collection features elegant styles for weddings, parties and special occasions.";
}

/* GOWNS */

if(
msg.includes("gown") ||
msg.includes("dress")
){
return "We offer luxury gowns, corset dresses and custom-made fashion pieces.";
}

/* BRIDAL */

if(
msg.includes("bridal") ||
msg.includes("wedding dress")
){
return "Our bridal collection is designed to make your special day unforgettable 👰.";
}

/* HUMAN SUPPORT */

if(
msg.includes("human") ||
msg.includes("agent") ||
msg.includes("customer care")
){
return "Sure 😊. I can connect you directly to our WhatsApp support.";
}

/* FUN QUESTIONS */

if(msg.includes("are you real")){
return "I'm an AI assistant created for IKE-ELITE-COUTURE to help customers quickly.";
}

if(msg.includes("i love you")){
return "❤️ Thank you. I'm always happy to help.";
}

if(msg.includes("who are you")){
return "I'm IKE ELITE AI 🤖, your fashion assistant.";
}

/* DEFAULT */

return "I can help with fashion styles, bookings, prices, delivery information, collections and customer support. Feel free to ask anything.";
}


/* WHATSAPP */

function openWhatsApp(){

window.open(
"https://wa.me/2348109174369",
"_blank"
);

}
document.addEventListener("click",(e)=>{

if(
chatbox.style.display === "flex" &&
!chatbox.contains(e.target) &&
e.target !== floatBtn
){

chatbox.style.display = "none";

floatBtn.style.display = "flex";

}

});
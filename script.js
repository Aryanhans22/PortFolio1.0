hamburger = document.querySelector(".hamburger");
nav = document.querySelector("nav");
hamburger.onclick = function () {
  nav.classList.toggle("active");
};
let vid = document.getElementById("myVideo");
vid.playbackRate = 0.5;

//---------------contact form-------------------

function sendEmail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  let body =
    "Name: " +
    name +
    "<br> Email: " +
    email +
    "<br> Mobile no: " +
    phone +
    "<br> Message: " +
    message;

//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "dev.aryanaviral@gmail.com",
//     Password: "2AA3F0918845C3ADD6C57130A72F3C756EDD",
//     To: "dev.aryanaviral@gmail.com",
//     From: "dev.aryanaviral@gmail.com",
//     Subject: "New Contact Form Enquiry",
//     Body: body
//   }).then((message) => alert("Message send successfully!!"));
// }
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formStatus.textContent = "Please fill in your name, email and message.";
    return;
  }

  formStatus.textContent = "Your message has been prepared successfully.";

  console.log({
    name,
    email,
    phone,
    service,
    message
  });

  contactForm.reset();
});
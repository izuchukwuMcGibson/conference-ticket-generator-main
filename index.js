// ticketForm
const ticketForm = document.getElementById("ticket-form");
if (ticketForm) {
  ticketForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const ticketFormData = new FormData(ticketForm);
    const name = ticketFormData.get("name");
    const email = ticketFormData.get("email");
    const imageFile = ticketFormData.get("image");

      if (imageFile && imageFile.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imageData = e.target.result;

    localStorage.setItem("ticketName", name);
    localStorage.setItem("ticketEmail", email);
    localStorage.setItem("ticketImage", imageData);

    window.location.href = "completed.html";
  };
      reader.readAsDataURL(imageFile); // Convert image to base64
    } else {
      alert("Please select a valid image file.");
    }
  });
}

// ticket display

const nameElements = document.querySelectorAll(".input-name");
const emailElements = document.querySelectorAll(".input-email");
const imageDisplay = document.getElementById("ticket-photo");


if (nameElements && emailElements&& imageDisplay) {
  const name = localStorage.getItem("ticketName");
  const email = localStorage.getItem("ticketEmail");
  const image = localStorage.getItem("ticketImage");

  nameElements.forEach(el => {
  el.textContent = name;
});
    emailElements.forEach(el => {
        el.textContent = email;
    });

      imageDisplay.src = image ||  ""

}

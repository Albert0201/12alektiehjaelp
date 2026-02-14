const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  msg.style.color = "black";
  msg.textContent = "Sender besked...";

  const data = new FormData(form);

  try {
    const response = await fetch("https://formsubmit.co/ajax/albertoarendt@gmail.com", {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      msg.style.color = "green";
      msg.textContent = "Tak! Din besked er sendt 👍";
      form.reset();
    } else {
      msg.style.color = "red";
      msg.textContent = "Noget gik galt. Prøv igen.";
    }

  } catch (error) {
    msg.style.color = "red";
    msg.textContent = "Forbindelsesfejl. Prøv igen.";
  }
});

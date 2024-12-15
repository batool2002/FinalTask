// Dynamic Greeting
const greetings = [
    "Welcome to My Restaurant!",
    "Experience the Best Cuisine!",
    "Enjoy a Fine Dining Experience!",
    "Taste the Difference!"
  ];
  
  let greetingIndex = 0;
  const greetingElement = document.getElementById("greeting");
  
  setInterval(() => {
    greetingIndex = (greetingIndex + 1) % greetings.length;
    greetingElement.textContent = greetings[greetingIndex];
  }, 4000);
  
  // Hover effect for price
  const prices = document.querySelectorAll(".price");
  prices.forEach(price => {
    price.addEventListener("mouseenter", () => {
      price.style.fontSize = "1.5em";
    });
  
    price.addEventListener("mouseleave", () => {
      price.style.fontSize = "1em";
    });
  });
  
  // Change image on button click
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    const button = card.querySelector("button");
    const img = card.querySelector("img");
  
    button.addEventListener("click", () => {
      img.src = "https://media.istockphoto.com/vectors/checkmark-vector-icon-put-a-green-symbol-on-the-white-background-vector-id1151872207?k=20&m=1151872207&s=170667a&w=0&h=NzKOi1fjRT-jYlohJ7a15LRWHC3wK0LjTu1fi9yOQYQ=";
    });
  });
  
  // Form submission handling
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const inputs = document.querySelectorAll("form input, form textarea");
  
    // Validate inputs
    let isValid = true;
    inputs.forEach(input => {
      if (!input.value) {
        isValid = false;
        input.style.borderColor = "red";
      } else {
        input.style.borderColor = "#ccc";
      }
    });
  
    if (!isValid) {
      alert("Please fill out all fields.");
      return;
    }
  
    // Change inputs to uppercase and text color
    inputs.forEach(input => {
      input.value = input.value.toUpperCase();
      input.style.color = "blue";
    });
  
    // Display success message
    const successMessage = document.createElement("p");
    successMessage.textContent = "Form submitted successfully!";
    successMessage.style.color = "green";
    document.querySelector("form").appendChild(successMessage);
  });
  
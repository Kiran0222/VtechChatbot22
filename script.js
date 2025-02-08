document.addEventListener("DOMContentLoaded", () => {
  const chatbotHeader = document.getElementById('chatbot-header');
  const chatbotMessages = document.getElementById('chatbot-messages');
  const chatbotInput = document.getElementById('chatbot-input');
  const chatbotSend = document.getElementById('chatbot-send');

  // Toggle chatbot open/close on header click
  chatbotHeader.addEventListener('click', () => {
    // Toggle visibility of messages and input container
    if (chatbotMessages.style.display === 'none' || chatbotMessages.style.display === '') {
      chatbotMessages.style.display = 'block';
      document.getElementById('chatbot-input-container').style.display = 'flex';
    } else {
      chatbotMessages.style.display = 'none';
      document.getElementById('chatbot-input-container').style.display = 'none';
    }
  });

  // Function to add a chat message
  function addMessage(message, sender = 'user') {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', sender);
    messageDiv.innerText = message;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }
  
  
  
  
  
  

  // Simple bot response based on keywords
  function botResponse(userMessage) {
    let response = "";
    const msg = userMessage.toLowerCase();

    if (msg.includes("hello") || msg.includes("hi")) {
      response = "Hello! How can I help you today?";
    } else if (msg.includes("Vtech")) {
      response = "Vtech is tech as well as Manifacturing Company";
    } else if (msg.includes("Company")) {
      response = "The company was founded in 1976 by Kiran Kamal Bahadur";
    } else if (msg.includes("help")) {
      response = "I’m here to help! What do you need assistance with?";
    } else {
      response = "I'm sorry, I didn't understand that. Could you please rephrase?";
    }

    // Simulate a short delay before the bot replies
    setTimeout(() => {
      addMessage(response, 'bot');
    }, 500);
  }

  // Send message on button click
  chatbotSend.addEventListener('click', () => {
    const userInput = chatbotInput.value.trim();
    if (userInput) {
      addMessage(userInput, 'user');
      chatbotInput.value = '';
      botResponse(userInput);
    }
  });

  // Allow sending the message with the Enter key
  chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      chatbotSend.click();
    }
  });
});

document.getElementById("enquiry-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Form Validation
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("form-message");

    if (name === "" || email === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.textContent = "All fields are required!";
        return;
    }

    if (!validateEmail(email)) {
        formMessage.style.color = "red";
        formMessage.textContent = "Invalid email format!";
        return;
    }

    formMessage.style.color = "green";
    formMessage.textContent = "Your enquiry has been submitted successfully!";
    
    // Reset the form after successful submission
    document.getElementById("enquiry-form").reset();
});

// Function to validate email format
function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}






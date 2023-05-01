// Get chatbot elements
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');
inputForm.addEventListener('submit', async function(event) {
  // Prevent form submission
  event.preventDefault();

  // Get user input
  const input = inputField.value;

  // Clear input field
  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

  // Add user input to conversation
  let message = document.createElement('div');
  message.classList.add('chatbot-message', 'user-message');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
  conversation.appendChild(message);

  // Generate chatbot response
  const response = await generateResponse(input);

  // Add chatbot response to conversation
  message = document.createElement('div');
  message.classList.add('chatbot-message','chatbot');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
  conversation.appendChild(message);
  message.scrollIntoView({behavior: "smooth"});
});

// Generate chatbot response function
async function generateResponse(input) {
  try {
    console.log(input)
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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',
        
      },
      body: JSON.stringify({
        input:input[input.lenght-1].content,
        prompt: input,
        max_tokens: 50,
        n: 1,
        stop: ['\n']
      })
    });
    const data = await response.json();
    console.log(data); // log the response data to inspect its structure
    const message = data.choices[0].text.trim();
    return message;
  } catch (error) {
    console.error(error);
    return "I'm sorry, I'm having trouble processing your request right now. Please try again later.";
  }
}

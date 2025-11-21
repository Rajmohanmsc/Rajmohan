document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        if (navLinks.style.display === 'flex') {
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '80px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
            navLinks.style.padding = '20px';
        }
    });
});

// Chat Bot functionality
document.addEventListener('DOMContentLoaded', () => {
  const chatToggle = document.getElementById('chat-toggle');
  const chatWindow = document.getElementById('chat-window');
  const chatClose = document.getElementById('chat-close');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const chatMessages = document.getElementById('chat-messages');

  // Open/close chat
  chatToggle.addEventListener('click', () => chatWindow.classList.toggle('hidden'));
  chatClose.addEventListener('click', () => chatWindow.classList.add('hidden'));

  // Simple bot responses (replace with API later)
  const botReply = (msg) => {
    const lowered = msg.toLowerCase();
    if (lowered.includes('hello') || lowered.includes('hi')) return "Hello! How can I assist you today?";
    if (lowered.includes('contact')) return "You can reach me at <a href='mailto:Rajmohanmsc@gmail.com'>Rajmohanmsc@gmail.com</a>.";
    return "I’m not sure how to answer that. Try asking something else.";
  };

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userMsg = chatInput.value.trim();
    if (!userMsg) return;
    // display user message
    const userDiv = document.createElement('div');
    userDiv.className = 'message user';
    userDiv.textContent = userMsg;
    chatMessages.appendChild(userDiv);
    chatInput.value = '';
    // bot reply after short delay
    setTimeout(() => {
      const botDiv = document.createElement('div');
      botDiv.className = 'message bot';
      botDiv.innerHTML = botReply(userMsg);
      chatMessages.appendChild(botDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 300);
  });
});

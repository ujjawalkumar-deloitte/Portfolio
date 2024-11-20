document.getElementById('contactForm').addEventListener('submit', function(event) {  
    event.preventDefault(); // Prevent the default form submission  

    const name = document.getElementById('name').value;  
    const email = document.getElementById('email').value;  
    const message = document.getElementById('message').value;  

    // Confirmation message  
    const responseMessage = document.getElementById('responseMessage');  
    responseMessage.style.display = 'block'; // Show the message div  
    responseMessage.textContent = `Thank you, ${name}! Your message has been sent.`;  
    
    // Clear the fields after submission  
    document.getElementById('contactForm').reset();  
});
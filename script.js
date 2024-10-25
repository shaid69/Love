// Get the buttons
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const popup = document.querySelector('.popup');
const loveMessage = document.querySelector('.love-message');

// Show love message when 'Yes' is clicked
yesBtn.addEventListener('click', () => {
    popup.style.opacity = '0'; // Fade out the popup
    setTimeout(() => {
        popup.style.display = 'none'; // Hide the popup after fade out
        loveMessage.style.display = 'block'; // Show the love message
        setTimeout(() => {
            loveMessage.style.opacity = '1'; // Fade in the love message
        }, 100); // Slight delay to make the transition smooth
    }, 500); // Wait for the popup to fully fade out
});

// Function to swap buttons on 'No' button hover
noBtn.addEventListener('mouseover', () => {
    const parent = noBtn.parentNode; // Get the parent of the button group
    parent.appendChild(yesBtn); // Move 'Yes' button to the end
    parent.insertBefore(noBtn, yesBtn); // Move 'No' button before 'Yes'
});

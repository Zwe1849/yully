const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const responseMessage = document.getElementById('responseMessage');
const gifImage = document.getElementById('gifImage');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

// Audio elements
const backgroundMusic = document.getElementById('backgroundMusic');
const yesAudio = document.getElementById('yesAudio');
const noAudio = document.getElementById('noAudio');

// Play background music when the "Click to Start" button is pressed
startButton.addEventListener('click', () => {
  backgroundMusic.play();
  startButton.style.display = "none"; // Hide the "Start" button after clicking
  stopButton.style.display = "inline-block"; // Show the "Stop" button
});

// Stop background music when the "Stop Music" button is pressed
stopButton.addEventListener('click', () => {
  backgroundMusic.pause();
  backgroundMusic.currentTime = 0; // Reset the song to the beginning
  stopButton.style.display = "none"; // Hide the "Stop" button
  startButton.style.display = "inline-block"; // Show the "Start" button
});

yesButton.addEventListener('click', () => {
  // Stop the background music and reset it
  backgroundMusic.pause();
  backgroundMusic.currentTime = 0;

  // Stop the "No" audio if it's playing
  noAudio.pause();
  noAudio.currentTime = 0;

  // Play the "Yes" audio
  yesAudio.play();

  // Update the message and show the GIF
  responseMessage.textContent = "Yay! I can't wait to spend Valentine's Day with you! 💖";
  gifImage.src = "yay.gif"; // Path to your "Yes" GIF
  gifImage.style.display = "block"; // Show the GIF
});

noButton.addEventListener('click', () => {
  // Stop the background music and reset it
  backgroundMusic.pause();
  backgroundMusic.currentTime = 0;

  // Stop the "Yes" audio if it's playing
  yesAudio.pause();
  yesAudio.currentTime = 0;

  // Play the "No" audio
  noAudio.play();

  // Update the message and show the GIF
  responseMessage.textContent = "Oh no! Please reconsider... I really want to be your Valentine! 😢 will u reconsidr?";
  gifImage.src = "no.gif"; // Path to your "No" GIF
  gifImage.style.display = "block"; // Show the GIF
});


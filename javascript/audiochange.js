// Function to start audio playback
function startPlayback() {
    let audioElement = document.getElementById('myAudio');

    // Check if the audio is paused, if so, play it; otherwise, pause it
    if (audioElement.paused) {
        audioElement.play();
    } else {
        audioElement.pause();
    }
}

// Function to update the audio source based on the selected song
function updateAudioSource() {
    let selectedSong = document.getElementById('songMenu').value;
    let audioSourceElement = document.getElementById('audioSource');

    // Update the source's src attribute
    audioSourceElement.src = selectedSong;

    // Reload the audio element to apply the changes
    let audioElement = document.getElementById('myAudio');
    audioElement.load();

    audioElement.volume = 0.4;

    // Start playback if it was playing before changing the song
    if (!audioElement.paused) {
        audioElement.play();
    }
}

// Add keydown event listener to the document
document.addEventListener('keydown', function (event) {
    // Check if the 'p' key is pressed
    if (event.key === 'p') {
        startPlayback();
    }
});

// Add change event listener to the song menu
document.getElementById('songMenu').addEventListener('change', updateAudioSource);
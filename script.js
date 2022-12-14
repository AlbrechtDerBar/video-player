let state = "paused";

function CreateVideos() {
    let videos = document.getElementById("videos").files;
    let container = document.getElementById("container");
    container.innerHTML = "";
    for(let i = 0; i < videos.length; i++) {
        let video = document.createElement('video');
        video.src = URL.createObjectURL(videos[i]);
        container.appendChild(video);
        video.style.height = `${100/maxSquare(videos.length)}%`
        video.className = "video";
    }
    videos = document.getElementById("videos").value = "";
}

function toggleVideos() {
    let videos = document.querySelectorAll('.video');
    let toggle = document.getElementById("toggle");
    if(videos.length != 0) {
        if(state == "playing") {
            state = "paused";
            toggle.innerText = "Play All";
            for(let i = 0; i < videos.length; i++) {
                videos[i].pause();
            }
        }
        else {
            state = "playing";
            toggle.innerText = "Pause All";
            for(let i = 0; i < videos.length; i++) {
                videos[i].play();
            }
        }
    }
}

function restartVideos() {
    let toggle = document.getElementById("toggle");
    state = "paused";
    toggle.innerText = "Play All";
    let videos = document.querySelectorAll('.video');
    for(let i = 0; i < videos.length; i++) {
        videos[i].load();
    }
}

function maxSquare(num) {
    // Start with 0 as the maximum square
    var max = 0;
  
    // Iterate through the possible squares
    for (var i = 1; i <= num; i++) {
      // Calculate the square of the current number
      var square = i * i;
  
      // If the square is less than or equal to the given number,
      // update the maximum square
      if (square <= num) {
        max = square;
      } else {
        // If the square is greater than the given number,
        // we have reached the maximum square, so we can break
        // out of the loop
        break;
      }
    }
  
    // Return the maximum square
    if(num == max) {
        return Math.sqrt(max);
    }
    else {
        return Math.sqrt(max) + 1;
    }
  }
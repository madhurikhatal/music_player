console.log("welcome to spotify");

// Initialize the variable
let songIndex = 0;
let audioElement = new Audio();
let masterPlay = document.getElementById('masterPlay');//for play pause button
let myProgressBar = document.getElementById('myProgressBar');//for progress bar
let gif = document.getElementById('gif');//for gif
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));//for song list

// CREATE SONG ARRAY
let songs = [
    { songName: "Ye Nain Mataka Tera", filePath: "songs/1.mp3", coverPath: "covers/1.webp" },
    { songName: "Mere Sapno ki Rani", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Make It Right", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Dimple", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Fake Love", filePath: "songs/5.mp3", coverPath: "covers/5.png" },
    { songName: "Filter", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Gal Karke", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Ijazzat Hai", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Ka Kha Ga", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Life Goes On", filePath: "songs/10.mp3", coverPath: "covers/10.png" },
]

songItems.forEach((element, i) => {
      element.getElementsByTagName("img")[0].src = songs[i].coverPath;
     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})



// HANDLE PLAY AND PAUSE CLICK
masterPlay.addEventListener('click', () => {

    if (audioElement.paused || audioElement.currentTim <= 0) {
        audioElement.play();//START SUCESSFULLY
        masterPlay.classList.remove('fa-circle-play');//DISABLE  PLAY BUTTON
        masterPlay.classList.add('fa-pause-circle');//ENABLE PAUSE BOTTON
        gif.style.opacity = 1;

    } else {
        audioElement.pause();//STOP SONG
        masterPlay.classList.remove('fa-pause-circle');//DISABLE PAUSE BUTTON
        masterPlay.classList.add('fa-circle-play');//ENABLE PLAY BUTTON
        gif.style.opacity = 0;
    }
})

// LISTEN TO EVENTS
// THIS CODE FOR SHOWING PROGRESS BAR STATUS
audioElement.addEventListener('timeupdate', () => {
  
    // UPDATE SEEKBAR

    // FORMULA FOR FIND HOW MANY PERCENT SONG COMPLETE
    //  PERCENTAGE =  CURRENTTIME / DURATION * 100 
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;

})
myProgressBar.addEventListener('change', () => {
    //  PERCENTAGE =  CURRENTTIME / DURATION * 100 
    // THERFORE  CURRENTTIME = PERCENTAGE * DURATION /100
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;


})



// THIS CODE FOR SONGS RADY TO PLAY
 const makeAllPlays = ()=>{
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        })
    }

Array.from(document.getElementsByClassName("songlistplay")).forEach((element) => {
    element.addEventListener('click', (e) => {
               makeAllPlays();
                songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerHTML = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-circle-play');
    })
})

// CODE FOR PLAY NEXT SONG
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= 9){
        songIndex =0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-circle-pause');
})

// CODE FOR PLAY PREVIOUS SONG
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 0 ){
        songIndex =0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-circle-pause');
})























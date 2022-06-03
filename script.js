console.log("Welcome to spotify")

// initialize the variable 
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
  

let songs = [
    { songName: "  Salam Rockey  ", filePath: "songs/1.mp3", coverPath: "1.jpg" },
    { songName: "  Suvvi Suvalli  ", filePath: "songs/2.mp3", coverPath: "2.jpg" },
    { songName: "  Nadeem Nadeem Thana  ", filePath: "songs/3.mp3", coverPath: "3.jpg" },
    { songName: "  Dheers Dheera  ", filePath: "songs/4.mp3", coverPath: "4.jpg" },
    { songName: "  Minchnagi Neenu  ", filePath: "songs/5.mp3", coverPath: "5.jpg" },
    { songName: "  Garbadi  ", filePath: "songs/6.mp3", coverPath: "6.jpg" },
    { songName: "  Akasha Este yakedeyo  ", filePath: "songs/7.mp3", coverPath: "7.jpg" },
    { songName: "  Anisudete  ", filePath: "songs/8.mp3", coverPath: "8.jpg" },
    { songName: "  Ahah E Bedurugombege  ", filePath: "songs/9.mp3", coverPath: "9.jpg" },
    { songName: "  Ondee samane  ", filePath: "songs/10.mp3", coverPath: "10.jpg" },
  
]
songItems.forEach((element,i)=>{
element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

// audioElement.play();

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;


    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }

})

// listen elements 
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    // console.log(progress);
    myProgressBar.value = progress;

})
myProgressBar.addEventListener('change',()=>{
   audioElement.currentTime=myProgressBar.value*audioElement.duration/100 ; 
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
})
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
       songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})
document.getElementById("next").addEventListener('click',()=>{
    if (songIndex>=9){
        songIndex=0
    }
    else{
    songIndex+=1;
    // console.log(songIndex)
    
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById("previous").addEventListener('click',()=>{
    if (songIndex<=0){
        songIndex=0
    }
    else{
    songIndex-=1;
    
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})





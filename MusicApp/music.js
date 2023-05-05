console.log("WELCOME");

let songindex=0;
let audioElement=new Audio('./songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let progressbar=document.getElementById('progressbar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname')
let previous=document.getElementById('previous')
let next=document.getElementById('next')
let songs=[
    {songname: "Love Story" , filepath: "./songs/1.mp3", coverpath: "lovestorycover.jpeg"},
    {songname: "Gorgeous" , filepath: "./songs/2.mp3", coverpath: "gorgeous.jpeg"},
    {songname: "ON AND ON" , filepath: "./songs/3.mp3", coverpath: "onandon.jpeg"},
    {songname: "Heroes" , filepath: "./songs/4.mp3", coverpath: "heroes.jpeg"},
    {songname: "Faded" , filepath: "./songs/5.mp3", coverpath: "faded.jpeg"},
    {songname: "Love Story" , filepath: "./lovestory.mp3", coverpath: "lovestorycover.jpeg"},
    {songname: "Love Story" , filepath: "./lovestory.mp3", coverpath: "lovestorycover.jpeg"},
]

audioElement.play();

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity= 1;
}
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity= 0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
console.log('timeupdate');
progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
console.log(progress);
progressbar.value=progress;
})

progressbar.addEventListener('change',()=>{
    audioElement.currentTime=(progressbar.value*audioElement.duration)/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('playbutton')).forEach(element => {
        element.classList.remove('fa-play-circle')
        element.classList.add('fa-pause-circle') 
    })

}

Array.from(document.getElementsByClassName('playbutton')).forEach((element) =>{
    element.addEventListener('click' , (e)=>{
        console.log(e.target)
        index=parseInt(e.target.id)
        console.log(e.target);
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        console.log(`/songs/${index+1}.mp3`)
        audioElement.src=`./songs/${index+1}.mp3`
        mastersongname.innerText= songs[songindex].songname
        audioElement.currentTime=0
        audioElement.play();
        playbutton.classList.remove('fa-play-circle');
        playbutton.classList.add('fa-pause-circle');
        
    })
;})

document.getElementById('previous').addEventListener('click' , ()=>
{
    if(songindex<=0){
        songindex=0
    }
    else{
        songindex-=1;
        index-=1;

    }
    audioElement.src=`./songs/${index+1}.mp3`
    mastersongname.innerText= songs[songindex].songname
        audioElement.currentTime=0
        audioElement.play();
        playbutton.classList.remove('fa-play-circle');
        playbutton.classList.add('fa-pause-circle');
        
})
document.getElementById('next').addEventListener('click' , ()=>
{
    if(songindex>=7){
        songindex=0
    }
    else{
        songindex+=1;
        index+=1;
    }
    audioElement.src=`./songs/${index+1}.mp3`
    mastersongname.innerText= songs[songindex].songname
        audioElement.currentTime=0
        audioElement.play();
        playbutton.classList.remove('fa-play-circle');
        playbutton.classList.add('fa-pause-circle');
})
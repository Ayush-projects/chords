setTimeout(() => {
	document.getElementById("Main").innerHTML = '<img src="icons/Main-Logo.png"></img>'
}, 2000)


const play = document.getElementById("play");
const music = document.querySelector("audio");
const image = document.querySelector("img");
const title = document.getElementById("track-name");
const artist = document.getElementById("artist");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress_bar = document.getElementById("progress_div");
const songs = [{
	name: "TestM1",
	artist: "TestA1",
	image: "TestI1"
}, {
	name: "TestM2",
	artist: "TestA2",
	image: "TestI2"
}, {
	name: "TestM3",
	artist: "TestA3",
	image: "TestI3"
}];
const loadsong = (songs) => {
	title.textContent = songs.name;
	artist.textContent = songs.artist;
	image.src = "/test-images/" + songs.image + ".jpg";
	music.src = "/test-music/" + songs.name + ".mp3";

}
window.onload=function()
{
var volumeControl = document.getElementById('vol-control');

var setVolume = function(){
    music.volume = this.value / 100;
};

volumeControl.addEventListener('change',setVolume);
volumeControl.addEventListener('input',setVolume);
}

loadsong(songs[0]);
window.onload = image.classList.add("anime");

var isPlaying = false;
//For Pause
const pauseMusic = () => {
	music.pause();
	isPlaying = false;
	if (!isPlaying)
		play.classList.replace('fa-play', 'fa-pause');
	image.classList.remove("anime");
}
//For Playing
var playMusic = () => {
	isPlaying = true;
	music.play();
	if (isPlaying)
		play.classList.replace('fa-pause', 'fa-play');
	image.classList.add("anime");
}
var songIndex = 0;
play.addEventListener('click', () => {
	if (isPlaying) {
		pauseMusic();
	} else {
		playMusic();
	}
})
next.addEventListener('click', () => {
	songIndex = songIndex + 1;
	songIndex = songIndex % (songs.length);
	loadsong(songs[songIndex]);
	music.play();
})
prev.addEventListener('click', () => {
	songIndex = songIndex - 1;
	if (songIndex < 0) {
		songIndex = songs.length - 1;
	}

	loadsong(songs[songIndex]);
	music.play();
})
progress_bar.addEventListener("click", (event) => {
	const {
		duration
	} = music;

	let move = event.offsetX / event.srcElement.clientWidth * duration;
	music.currentTime = move;

})

music.addEventListener('timeupdate', (event) => {
	const {
		currentTime,
		duration
	} = event.srcElement;
	var percentage = (currentTime / duration) * 100;
	var progress = document.getElementById("progress");
	progress.style.width = `${percentage}%`
	var c_time = document.getElementById("current_time");
	var t_duration = document.getElementById("duration");
	let c_min = Math.floor(currentTime / 60);
	let c_sec = Math.floor(currentTime % 60);

	if (duration) {
		let t_min = Math.floor(duration / 60);
		let t_sec = Math.floor(duration % 60);
		if (t_sec < 10) {
			t_duration.textContent = `${t_min}:0${t_sec}`;

		} else {
			t_duration.textContent = `${t_min}:${t_sec}`;
		}


	}

	if (c_sec < 10) {
		c_time.textContent = `${c_min}:0${c_sec}`;
	} else {
		c_time.textContent = `${c_min}:${c_sec}`;
	}
	if (music.duration == music.currentTime) {
		next.click();
	}


})
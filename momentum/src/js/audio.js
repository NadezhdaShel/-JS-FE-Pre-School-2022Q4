import playList from './playList.js';

const playListContainer = document.querySelector('.play-list');
const audio = document.querySelector('audio');
const prevBtn = document.querySelector('.play-prev');
const playBtn = document.querySelector('.play');
const nextBtn = document.querySelector('.play-next');
const soundBtn = document.querySelector('.play-sound');
const volumeBtn = document.querySelector('.play-volume');
const progress = document.querySelector('.play-progress');
const playCurrent = document.querySelector('.play-current');
const playDuration = document.querySelector('.play-duration');
const playTitle = document.querySelector('.play-title');
const volume = document.querySelector('.volume');
const volumeRange = document.querySelector('.volume-scale');
const playListBtn = document.querySelector('.play-list-open');
const playerError = document.querySelector('.player-error');

let isPlay = false;
let playNum;

if (playList) {
    playList.forEach((el, i) => {
        const li = document.createElement('li');
        li.classList.add('play-item');
        li.textContent = el.title;
        li.dataset.index = i;
        playListContainer.append(li);
        const button = document.createElement('button');
        button.classList.add('item-button');
        li.append(button);
    })
}

const playItem = playListContainer.querySelectorAll('li');
const itemBtn = document.querySelectorAll('.item-button');
const maxNum = playItem.length - 1;

function toggleBtn() {
    if (!isPlay) {
        playBtn.classList.remove('pause');
        itemBtn[playNum].classList.remove('pause');
    } else {
        playBtn.classList.add('pause');
        itemBtn[playNum].classList.add('pause');
    }
}

function playAudio() {
    playerError.textContent = '';
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play();
    playTitle.textContent = playList[playNum].title;
    playItem[playNum].classList.add('item-active');
    isPlay = true;
    toggleBtn();
}

function getPlayNext() {
    if (playNum < maxNum) {
        playNum++;
    } else {
        playNum = 0;
    }
}
function getPlayPrev() {
    if (playNum > 0) {
        playNum--;
    } else {
        playNum = maxNum;
    }
}

//Progress
function audioTime(time) {
    time = Math.floor(time);
    let min = Math.floor(time / 60);
    let sec = Math.floor(time - min * 60);
    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
}

function playProgress() {
    if (audio.currentTime === audio.duration) {
        onNextClick();
    }
    if (isNaN(audio.duration)) return;
    let progressNum = (Math.floor(audio.currentTime) / (Math.floor(audio.duration) / 100));
    progress.value = progressNum;
    playCurrent.textContent = audioTime(audio.currentTime);
    playDuration.textContent = audioTime(audio.duration);
}

function changeTime(event) {
    let mouse = Math.floor(event.pageX - progress.offsetLeft);
    let progressNum = mouse / (progress.offsetWidth / 100);
    audio.currentTime = audio.duration * (progressNum / 100);
}

//Sound
function muteSound() {
    if (audio.volume == 0) {
        soundBtn.classList.remove('play-soundless');
        volumeRange.value = 30;
        audio.volume = volumeRange.value / 100;
    } else {
        audio.volume = 0;
        soundBtn.classList.add('play-soundless');
    }
}

function volumeChange() {
    let volume = volumeRange.value / 100;
    audio.volume = volume;
    if (audio.volume == 0) {
        soundBtn.classList.add('play-soundless');
    } else {
        soundBtn.classList.remove('play-soundless');
    }
}


//On click buttons
function onPrevClick() {
    playItem[playNum].classList.remove('item-active');
    itemBtn[playNum].classList.remove('pause');
    getPlayPrev();
    playAudio();
}

function onNextClick() {
    playItem[playNum].classList.remove('item-active');
    itemBtn[playNum].classList.remove('pause');
    getPlayNext();
    playAudio();
}

function listClick(event) {
    let targetItem = event.target.closest('LI');
    if (!targetItem) return;
    if (event.target.tagName === "BUTTON") {
        if (playNum == targetItem.dataset.index) {
            onPlayBtnClick();
            return;
        }
    }
    itemBtn[playNum].classList.remove('pause');
    playItem[playNum].classList.remove('item-active');
    playNum = targetItem.dataset.index;
    playAudio();
}

function onPlayBtnClick() {
    if (!isPlay) {
        audio.play();
        isPlay = true;
    } else {
        audio.pause();
        isPlay = false;
    }
    toggleBtn();
}

function onVolumeBtnClick() {
    volume.classList.toggle('open');
}
function togglePlayList() {
    playListContainer.classList.toggle('close');
    playListBtn.classList.toggle('close');
}

//On load
function audioPlayer() {
    window.addEventListener('load', function () {
        playNum = 0;
        audio.src = playList[playNum].src;
        audio.currentTime = 0;
    });
}

//Event
nextBtn.addEventListener('click', onNextClick);
prevBtn.addEventListener('click', onPrevClick);
playBtn.addEventListener('click', onPlayBtnClick);
soundBtn.addEventListener('click', muteSound);
volumeBtn.addEventListener('click', onVolumeBtnClick);
playListBtn.addEventListener('click', togglePlayList);
volumeRange.addEventListener('change', volumeChange);
audio.addEventListener('timeupdate', playProgress);
progress.addEventListener('click', function (event) {
    changeTime(event);
});
playListContainer.addEventListener('click', function (event) {
    listClick(event);
});

//Error
audio.addEventListener('error', function (event) {
    let str = '';
    const err = audio.error;
    switch (err.code) {
        case MediaError.MEDIA_ERR_ABORTED:
            str += "The user canceled the audio"
            break;
        case MediaError.MEDIA_ERR_NETWORK:
            str += "A network error"
            break;
        case MediaError.MEDIA_ERR_DECODE:
            str += "An error occurred while decoding the audio"
            break;
        case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
            str += "The audio is missing";
            break;
        default:
            str += "An unknown error occurred";
            break;
    }
    if (str.length > 0) {
        playerError.textContent = str;
    }
});


export default audioPlayer;

// change Welcome window
const btnListen = document.getElementsByClassName('btnList')[0];
const musicConteiner = document.getElementsByClassName('contentsConteiner')[0];

btnListen.addEventListener('click', function(){
    musicConteiner.classList.toggle('open');
});


// Music Divs
const donToliver = document.getElementsByClassName('playList')[0];
const lilUzi = document.getElementsByClassName('playList2')[0];
const Offset = document.getElementsByClassName('playList3')[0];
const travis = document.getElementsByClassName('playList4')[0];

// Playlist Part
// Musics
const noIdea = document.getElementById('noIdea');
const XoTour = document.getElementById('XoTour');
const ricFlairDrip = document.getElementById('ricFlairDrip');
const theScotts = document.getElementById('theScotts');

// Comands of musics
// Previous
const previousMusic1 = document.getElementById('previou1');
const previousMusic2 = document.getElementById('previou2');
const previousMusic3 = document.getElementById('previou3');
const previousMusic4 = document.getElementById('previou4');

// Play
const play1 = document.getElementById('play1');
const play2 = document.getElementById('play2');
const play3 = document.getElementById('play3');
const play4 = document.getElementById('play4');

// Pause
const pause1 = document.getElementById('pause1');
const pause2 = document.getElementById('pause2');
const pause3 = document.getElementById('pause3');
const pause4 = document.getElementById('pause4');

// Replay
const replay1 = document.getElementById('replayDon');
const replay2 = document.getElementById('replayLil');
const replay3 = document.getElementById('replayOffset');
const replay4 = document.getElementById('replayTravis');

// Next
const nextMusic1 = document.getElementById('nextDon');
const nextMusic2 = document.getElementById('nextLil');
const nextMusic3 = document.getElementById('nextOffset');
const nextMusic4 = document.getElementById('nextTravis');

// Audios Icons Volume FULL
const audioNoIdeaFull= document.getElementById('audioDon');
const audioXoTourFull = document.getElementById('audioLil');
const audioRicFlairFull = document.getElementById('audioOffset');
const audioTheScottsFull = document.getElementById('audioTravis');

// Audios Icons Volume OFF
const audioNoIdeaOff = document.getElementById('audioDonOff');
const audioXoTourOff = document.getElementById('audioLilOff');
const audioRicFlairOff = document.getElementById('audioOffsetOff');
const audioTheScottsOff = document.getElementById('audioTravisOff');

// Volume Sliders
let volumeSliderDon = document.getElementById('volumeSliderDon');
let volumeSliderLil = document.getElementById('volumeSliderLil');
let volumeSliderOffset = document.getElementById('volumeSliderOffset');
let volumeSliderTravis = document.getElementById('volumeSliderTravis');

//Duration Sliders
let durationSliderDon = document.getElementById('durationSliderDon');
let durationSliderLil = document.getElementById('durationSliderLil');
let durationSliderOffset = document.getElementById('durationSliderOffset');
let durationSliderTravis = document.getElementById('durationSliderTravis');

// Duration Initial
let timeMusicIniDon = document.getElementById('timeMusicIniDon');
let timeMusicIniLil = document.getElementById('timeMusicIniLil');
let timeMusicIniOffset = document.getElementById('timeMusicIniOffset');
let timeMusicIniTravis = document.getElementById('timeMusicIniTravis');

// Duration End
let timeMusicEndDon = document.getElementById('timeMusicEndDon');
let timeMusicEndLil = document.getElementById('timeMusicEndLil');
let timeMusicEndOffset = document.getElementById('timeMusicEndOffset');
let timeMusicEndTravis = document.getElementById('timeMusicEndTravis');


// Comands No Idea -> Don Toliver


//  Button Previous
previousMusic1.addEventListener('click', replayDon);

//  Changing the icons ('play' and 'pause')
function changeIconsDon(){
    pause1.style.display = 'inline-block';
    play1.style.display = 'none';
};


// Function to Start the Music (NoIdea)
function noIdeaToPlay(){
    noIdea.play();
    changeIconsDon();
};

play1.addEventListener('click', noIdeaToPlay);


// Function to pause the Music (NoIdea)
function noIdeaToPause(){
    noIdea.pause();
    pause1.style.display = 'none';
    play1.style.display = 'inline-block';
};

pause1.addEventListener('click', noIdeaToPause);


// Function to back the music to the beginning (NoIdea)
function replayDon (){
    noIdea.currentTime = 0;
};

replay1.addEventListener('click', replayDon);


// Function To next Music (NoIdea to XoTourLif3)
function nextMusicToLil(){
    lilUzi.classList.toggle('playOpen');
    donToliver.classList.toggle('nextOpen');
    noIdeaToPause();
    xoTourToPause()
    replayDon();
    replayLil();
};

nextMusic1.addEventListener('click', nextMusicToLil);


// Function to the music duration slider (NoIdea)
noIdea.addEventListener('timeupdate', function(){
    durationSliderDon.value = this.currentTime;
    let minInitial = ~~((noIdea.currentTime % 3600) / 60);
    let seconInitial = ~~noIdea.currentTime % 60;
    timeMusicIniDon.innerHTML = minInitial + ':' + (seconInitial <10 ? '0' + seconInitial : seconInitial);
    durationSliderDon.max = noIdea.duration;
    let minEnd = ~~((noIdea.duration % 3600) / 60);
    let seconEnd = ~~noIdea.duration % 60;
    timeMusicEndDon.innerHTML = minEnd + ':' + (seconEnd <10 ? '0' + seconEnd : seconEnd);
    
    if (noIdea.currentTime === noIdea.duration){
        nextMusicToLil();
        };
});

durationSliderDon.addEventListener('input', function(){
    noIdea.currentTime = durationSliderDon.value;
});


// Function to changing the Volume Icons ('Full' to 'Zero')
function volumeToZeroDon(){
    audioNoIdeaFull.style.display = 'none';
    audioNoIdeaOff.style.display = 'inline-block';
    noIdea.muted = true;
    volumeSliderDon.value = 0.0;
};

audioNoIdeaFull.addEventListener('click', volumeToZeroDon);


// Function to The Volume Slider (NoIdea)
volumeSliderDon.oninput = function(){
    noIdea.volume = this.value;
    if(this.value == 0.0){
       noIdea.muted = true;
       noIdea.volume = 0.0;
       audioNoIdeaFull.style.display = 'none';
       audioNoIdeaOff.style.display = 'inline-block';
       volumeSliderDon.value = 0.0;
    }

    else{
        noIdea.muted = false;
        noIdea.volume = volumeSliderDon.value;
        audioNoIdeaFull.style.display = 'inline-block';
        audioNoIdeaOff.style.display = 'none';
    };  
};


// Function to changing the Volume Icons ('Zero' to 'Full')
function volumeToUpDon(){
    audioNoIdeaFull.style.display = 'inline-block';
    audioNoIdeaOff.style.display = 'none';
    noIdea.muted = false;
    noIdea.volume = 0.1;
    volumeSliderDon.value = 0.1;
};

audioNoIdeaOff.addEventListener('click', volumeToUpDon);


//  Comands XO Tour Lif3 -> Lil Uzi Vert


// Button Previous to NoIdea
previousMusic2.addEventListener('click', nextMusicToLil);


//  Changing the icons ('play' and 'pause')
function changeIconsLil(){
    pause2.style.display = 'inline-block';
    play2.style.display = 'none';
};


// Function to Start the Music (XoTourLif3)
function xoTourToPlay(){
    XoTour.play();
    changeIconsLil();
};

play2.addEventListener('click', xoTourToPlay);


// Function to pause the Music (XoTourLif3)
function xoTourToPause(){
    XoTour.pause();
    pause2.style.display = 'none';
    play2.style.display = 'inline-block';
};

pause2.addEventListener('click', xoTourToPause);


// Function to back the music to the beginning (XoTourLif3)
function replayLil (){
    XoTour.currentTime = 0;
};

replay2.addEventListener('click', replayLil);


// Function To next Music (XoTourLif3 to RicFlairDrip)
function nextMusicToOffset(){
    Offset.classList.toggle('playOpen2');
    lilUzi.classList.toggle('toRight');
    xoTourToPause();
    ricFlairDripToPause();
    replayLil();
    replayOffset();
};

nextMusic2.addEventListener('click', nextMusicToOffset);


// Function to the music duration slider (XoTourLif3)
XoTour.addEventListener('timeupdate', function(){
    durationSliderLil.value = this.currentTime;
    let minInitial = ~~((XoTour.currentTime % 3600) / 60);
    let seconInitial = ~~XoTour.currentTime % 60;
    timeMusicIniLil.innerHTML = minInitial + ':' + (seconInitial <10 ? '0' + seconInitial : seconInitial);
    durationSliderLil.max = XoTour.duration;
    let minEnd = ~~((XoTour.duration % 3600) / 60);
    let seconEnd = ~~XoTour.duration % 60;
    timeMusicEndLil.innerHTML = minEnd + ':' + (seconEnd <10 ? '0' + seconEnd : seconEnd);

    if (XoTour.currentTime === XoTour.duration){
        nextMusicToOffset();
        };
});

durationSliderLil.addEventListener('input', function(){
    XoTour.currentTime = durationSliderLil.value;
});


// Function to changing the Volume Icons ('Full' to 'Zero')
function volumeToZeroLil(){
    audioXoTourFull.style.display = 'none';
    audioXoTourOff.style.display = 'inline-block';
    XoTour.muted = true;
    volumeSliderLil.value = 0.0;
};

audioXoTourFull.addEventListener('click', volumeToZeroLil);


// Function to The Volume Slider (XoTourLif3)
volumeSliderLil.addEventListener('input', function(){
    XoTour.volume = this.value;
    if(this.value == 0.0){
        XoTour.muted = true;
        XoTour.volume = 0.0;
        audioXoTourFull.style.display = 'none';
        audioXoTourOff.style.display = 'inline-block';
        volumeSliderLil.value = 0.0;
    }

    else{
        XoTour.muted = false;
        XoTour.volume = volumeSliderLil.value;
        audioXoTourFull.style.display = 'inline-block';
        audioXoTourOff.style.display = 'none';
   };
});


// Function to changing the Volume Icons ('Zero' to 'Full')
function volumeToUpLil(){
    audioXoTourFull.style.display = 'inline-block';
    audioXoTourOff.style.display = 'none';
    XoTour.muted = false;
    volumeSliderLil.value = 0.1;
};

audioXoTourOff.addEventListener('click', volumeToUpLil);


// Comands Ric Flair Drip -> Offset


// Button Previous to XoTourLif3
previousMusic3.addEventListener('click', nextMusicToOffset);


//  Changing the icons ('play' and 'pause')
function changeIconsOffset(){
    pause3.style.display = 'inline-block';
    play3.style.display = 'none';
};


// Function to Start the Music (RicFlairDrip)
function ricFlairDripToPlay(){
    ricFlairDrip.play();
    changeIconsOffset();
};

play3.addEventListener('click', ricFlairDripToPlay);


// Function to pause the Music (RicFlairDrip)
function ricFlairDripToPause(){
    ricFlairDrip.pause();
    pause3.style.display = 'none';
    play3.style.display = 'inline-block';
};

pause3.addEventListener('click', ricFlairDripToPause);


// Function to back the music to the beginning (RicFlairDrip)
function replayOffset (){
    ricFlairDrip.currentTime = 0;
};

replay3.addEventListener('click', replayOffset);


// Function To next Music (RicFlairDrip to TheScotts)
function nextMusicToTravis(){
    travis.classList.toggle('playOpen3');
    Offset.classList.toggle('toRight2');
    ricFlairDripToPause();
    theScottsToPause()
    replayOffset();
    replayTravis();
};

nextMusic3.addEventListener('click', nextMusicToTravis);


// Function to the music duration slider (XoTourLif3)
ricFlairDrip.addEventListener('timeupdate', function(){
    durationSliderOffset.value = this.currentTime;
    let minInitial = ~~((ricFlairDrip.currentTime % 3600) / 60);
    let seconInitial = ~~ricFlairDrip.currentTime % 60;
    timeMusicIniOffset.innerHTML = minInitial + ':' + (seconInitial <10 ? '0' + seconInitial : seconInitial);
    durationSliderOffset.max = ricFlairDrip.duration;
    let minEnd = ~~((ricFlairDrip.duration % 3600) / 60);
    let seconEnd = ~~ricFlairDrip.duration % 60;
    timeMusicEndOffset.innerHTML = minEnd + ':' + (seconEnd <10 ? '0' + seconEnd : seconEnd);

    if (ricFlairDrip.currentTime === ricFlairDrip.duration){
        nextMusicToTravis();
        };
});

durationSliderOffset.addEventListener('input', function(){
    ricFlairDrip.currentTime = durationSliderOffset.value;
});


// Function to changing the Volume Icons ('Full' to 'Zero')
function volumeToZeroOffset(){
    audioRicFlairFull.style.display = 'none';
    audioRicFlairOff.style.display = 'inline-block';
    ricFlairDrip.muted = true;
    volumeSliderOffset.value = 0.0;
};

audioRicFlairFull.addEventListener('click', volumeToZeroOffset);


// Function to The Volume Slider (RicFlairDrip)
volumeSliderOffset.addEventListener('input', function(){
    ricFlairDrip.volume = this.value;
    if(this.value == 0.0){
        ricFlairDrip.muted = true;
        ricFlairDrip.volume = 0.0;
        audioRicFlairFull.style.display = 'none';
        audioRicFlairOff.style.display = 'inline-block';
        volumeSliderOffset.value = 0.0;
    }

    else{
        ricFlairDrip.muted = false;
        ricFlairDrip.volume = volumeSliderOffset.value;
        audioRicFlairFull.style.display = 'inline-block';
        audioRicFlairOff.style.display = 'none';
   };
});


// Function to changing the Volume Icons ('Zero' to 'Full')
function volumeToUpOffset(){
    audioRicFlairFull.style.display = 'inline-block';
    audioRicFlairOff.style.display = 'none';
    ricFlairDrip.muted = false;
    volumeSliderOffset.value = 0.1;
};

audioRicFlairOff.addEventListener('click', volumeToUpOffset);


// Comands The Scotts -> Travis Scott


//  Button Previous
previousMusic4.addEventListener('click', nextMusicToTravis);


//  Changing the icons ('play' and 'pause')
function changeIconsTravis(){
    pause4.style.display = 'inline-block';
    play4.style.display = 'none';
};


// Function to Start the Music (TheScotts)
function theScottsToPlay(){
    theScotts.play();
    changeIconsTravis();
};

play4.addEventListener('click', theScottsToPlay);


// Function to pause the Music (TheScotts)
function theScottsToPause(){
    pause4.style.display = 'none';
    play4.style.display = 'inline-block';
    theScotts.pause();
};

pause4.addEventListener('click', theScottsToPause);


// Function to back the music to the beginning (TheScotts)
function replayTravis (){
    theScotts.currentTime = 0;
};

replay4.addEventListener('click', replayTravis);


// Function To next Music (TheScotts to End)
function nextMusicToEnd(){
    alert('Sorry the playlist is over... :(');
};

nextMusic4.addEventListener('click', nextMusicToEnd);


// Function to the music duration slider (TheScotts)
theScotts.addEventListener('timeupdate', function(){
    durationSliderTravis.value = this.currentTime;
    let minInitial = ~~((theScotts.currentTime % 3600) / 60);
    let seconInitial = ~~theScotts.currentTime % 60;
    timeMusicIniTravis.innerHTML = minInitial + ':' + (seconInitial <10 ? '0' + seconInitial : seconInitial);
    durationSliderTravis.max = theScotts.duration;
    let minEnd = ~~((theScotts.duration % 3600) / 60);
    let seconEnd = ~~theScotts.duration % 60;
    timeMusicEndTravis.innerHTML = minEnd + ':' + (seconEnd <10 ? '0' + seconEnd : seconEnd);
});

durationSliderTravis.addEventListener('input', function(){
    theScotts.currentTime = durationSliderTravis.value;
});


// Function to changing the Volume Icons ('Full' to 'Zero')
function volumeToZeroTravis(){
    audioTheScottsFull.style.display = 'none';
    audioTheScottsOff.style.display = 'inline-block';
    theScotts.muted = true;
    volumeSliderTravis.value = 0.0;
};

audioTheScottsFull.addEventListener('click', volumeToZeroTravis);


// Function to The Volume Slider (TheScotts)
volumeSliderTravis.addEventListener('input', function(){
    theScotts.volume = this.value;
    if(this.value == 0.0){
        theScotts.muted = true;
        theScotts.volume = 0.0;
        audioTheScottsFull.style.display = 'none';
        audioTheScottsOff.style.display = 'inline-block';
        volumeSliderTravis.value = 0.0;
    }

    else{
        theScotts.muted = false;
        theScotts.volume = volumeSliderTravis.value;
        audioTheScottsFull.style.display = 'inline-block';
        audioTheScottsOff.style.display = 'none';
   };
});


// Function to changing the Volume Icons ('Zero' to 'Full')
function volumeToUpTravis(){
    audioTheScottsFull.style.display = 'inline-block';
    audioTheScottsOff.style.display = 'none';
    theScotts.muted = false;
    volumeSliderTravis.value = 0.1;
};

audioTheScottsOff.addEventListener('click', volumeToUpTravis);

import './style.css'

const body = document.querySelector('body');
const piano = document.querySelector('div.piano');


function KeyWB(nbWB) {
  for (let i = 0; i < nbWB; i++) {
    let Wkey = document.createElement("div");
    Wkey.classList.add("white");
    let Bkey = document.createElement("div");
    Bkey.classList.add("black");
    Wkey.appendChild(Bkey);
    piano.appendChild(Wkey);
  }
  let Wkey = document.createElement("div");
  Wkey.classList.add("white");
  piano.appendChild(Wkey);
}


function octave(octaveNB) {
  for (let i = 0; i < octaveNB; i++) {
    KeyWB(2);
    KeyWB(3);
  }
  let Wkey = document.createElement("div");
  Wkey.classList.add("white");
  piano.appendChild(Wkey);
}

octave(2);



navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);

function onMIDIMessage(event) {
  let str = `MIDI message received at timestamp ${event.timeStamp}[${event.data.length} bytes]: `;
  for (const character of event.data) {
    str += `0x${character.toString(16)} `;
  }
  console.log(str);
}

function onMIDISuccess(midiAccess) {
  midiAccess.inputs.forEach((entry) => {
    entry.onmidimessage = onMIDIMessage;
  });
}

function onMIDIFailure(msg) {
  console.error(`Failed to get MIDI access - ${msg}`);
}

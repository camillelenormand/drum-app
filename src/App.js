import './App.css';

function App() {

  return (
      <div className="drum-machine" id="drum-machine">
        <div className = "drum-left-side">
         <div className="power-container">
          <div className="power-box">
            <button className="power-btn"></button>
          </div>
        </div>
            <p id="display">Open HH</p>
              <div className="volume-slider">
                <label for="vol">Volume</label>
                  <br />
                <input type="range" min="5" max="10" step="0.01" id="vol" name="vol"></input>
              </div> 
        </div>
        <div className="drum-right-side">
            <div className="drum-pad-container">
              <div className="drum-pad" id="Q"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>Q</div>
              <div className="drum-pad" id="W"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>W</div>
              <div className="drum-pad" id="E"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>E</div>
              <div className="drum-pad" id="A"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>A</div>
              <div className="drum-pad" id="S"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>S</div>
              <div className="drum-pad" id="D"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>D</div>
              <div className="drum-pad" id="Z"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>Z</div>
              <div className="drum-pad" id="X"><audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>X</div>
              <div className="drum-pad" id="C"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>C</div>
            </div>  
        </div>
      </div>
  );
}

export default App;

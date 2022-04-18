import './../hero/hero.css';
import React, { useState } from "react";

function Hero() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  return (
    <section id="hero" className='animate__animated animate__fadeIn animate__slow '>
      <div>
        <h1>DRAW & GUESS</h1>
        <form action="http://efe3-193-40-160-13.ngrok.io/">
          <input className="input-get-started" placeholder='Enter your name'></input><br></br>
          <button className="btn-hover color-1">PLAY!</button>
        </form>
      </div>

      <h3 id="about" href="#about" onClick={() => setShow((s) => !s)}>About</h3>
      <div style={{ display: show ? "block" : "none" }} className="animate__animated animate__fadeIn ">
        <p className="blocktext">Draw&Guess - the name speaks itself, it is a free multiplayer drawing and guessing game.
          One game consists of a few rounds in which every round someone has to draw their chosen word and others have to guess it to gain points!
          The person with the most points at the end of game will then be crowned as the winner!</p>
      </div>

      <h3 id="rules" href="#rules" onClick={() => setShow2((s) => !s)}>Rules</h3>
      <div  style={{ display: show2 ? "block" : "none" }} className="animate__animated animate__fadeIn">
        <p className="blocktext">When its your turn to draw, you will have to choose a word from three options and visualize that word in 60 seconds,
          alternatively when somebody else is drawing you have to type your guess into the chat to gain points,
          be quick, the earlier you guess a word the more points you get!</p>
      </div>
    </section>
  );

}
export default Hero;
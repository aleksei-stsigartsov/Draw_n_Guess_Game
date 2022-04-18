import './../hero/hero.css';

function Hero() {
    return (
        <section id="hero">
            <div className='blockhero'>
                <h1>DRAW & GUESS</h1>
                <form action="http://efe3-193-40-160-13.ngrok.io/">
                    <input className="input-get-started" placeholder='Enter your name'></input><br></br>
                    <button className="btn-hover color-1">PLAY!</button>
                </form>
            </div>

            <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <h3 style="text-align:center;" href="#about" onclick="view('about'); ">About</h3>
          </div>
          <div class="col-xl-4"></div>
          <div id="about" style="display: none;" class="col-xl-4 animate__animated animate__fadeIn">
            <p>Draw&Guess - the name speaks itself, it is a free multiplayer drawing and guessing game.
              One game consists of a few rounds in which every round someone has to draw their chosen word and others have to guess it to gain points!
              The person with the most points at the end of game will then be crowned as the winner!</p>
          </div>
          <div class="col-xl-4"></div>
        </div>

        <div class="row">
          <div class="col-xl-12">
            <h3 id="rules" style="text-align:center;" href="#rules" onclick="view('rules'); ">Rules</h3>
          </div>
          <div class="col-xl-4"></div>
          <div id="rules" style="display: none;" class="col-xl-4 animate__animated animate__fadeIn">
            <p>When its your turn to draw, you will have to choose a word from three options and visualize that word in 60 seconds,
              alternatively when somebody else is drawing you have to type your guess into the chat to gain points,
              be quick, the earlier you guess a word the more points you get!</p>
          </div>
          <div class="col-xl-4"></div>
        </div>
      </div>
        </section>
    );

}
export default Hero;
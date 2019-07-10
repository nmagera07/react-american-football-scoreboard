//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect, useRef} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeCount, setHomeCount] = useState(0)
  const [awayCount, setAwayCount] = useState(0)
  
  
  


  return (
    
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2>Home</h2>
            <h2 className="home__name">Steelers</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeCount}</div>
          </div>
          <div className="timer">{<Timer />}</div>
          <div className="away">
            <h2>Away</h2>
            <h2 className="away__name">Browns</h2>
            <div className="away__score">{awayCount}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setHomeCount(homeCount + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHomeCount(homeCount + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setAwayCount(awayCount + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAwayCount(awayCount + 3)}>Away Field Goal</button>
        </div>
        
      </section>
    </div>
  );
}

const Timer = () => {
    const [time, setTime] = useState(new Date().getTime())
    const secondsPassed = useRef(900);

    useEffect(() => {
      const timeout= setTimeout(() => {
        const date = new Date()
        secondsPassed.current = secondsPassed.current - 1;
        setTime(date.getMilliseconds())
      }, 1000)
      return () => {
        clearTimeout(timeout)
      }
    }, [time])

    return (
    <div>
      <div>{time}</div>
      <div>{secondsPassed.current}</div>
    </div>
  )
  }

export default App;

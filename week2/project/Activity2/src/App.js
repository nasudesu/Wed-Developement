import React from "react";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>IdCard</h2>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={5} max={10} />
      <Random min={1} max={100} />
      <h1>BoxColor</h1>
      <BoxColor r={255} g={0} b={0} color="white">
        #FF0000
      </BoxColor>
      <BoxColor r={128} g={255} b={0} color="black">
        #80ff00
      </BoxColor>
    </div>
  );
}

export default App;

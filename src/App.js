import React, { useState } from "react";
import './App.css';

var sekunda = 0;
function Povecaj(){sekunda++; console.log(sekunda)}
setInterval(function(){Povecaj()}, 1000)

function App() {
  const [broj, sljedeciBroj] = useState(0);

if(sekunda == 5){document.getElementById('kontejner').style.display = "block"}
  return(
    <div>
      <div>
        <h1>{broj}</h1>
        <button onClick = {() => sljedeciBroj(broj + 1)}>Klikni</button>
    
      </div>

      <div id = "kontejner">
        <h1 id = "n">Tvoj rezultat</h1>
      <p id = "p">Tvoj broj kliktaja po sekundi iznosi {broj/sekunda}</p>
      </div>
    </div>
  )
}

export default App;

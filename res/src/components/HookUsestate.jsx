import { useState } from "react";

const HookUsestate = () => {
    const [numero, setnumero] = useState(0);
  function generarAleatorio() {
    const ve = Math.trunc(Math.random() * 10);
    setnumero(ve);
  }

  return (
    <div>
      El resultado : {numero}<br/>
      <button onClick={generarAleatorio}>Generar numero aleatorio</button>
    </div>
  );
};

export default HookUsestate;

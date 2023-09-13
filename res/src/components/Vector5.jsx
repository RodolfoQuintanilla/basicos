import { useState } from "react";

const Vector5 = () => {
  const [numero, setNumero] = useState([0, 0, 0, 0, 0]);
  function generar() {
    const vec = new Array(5);
    for (let x = 0; x < vec.length; x++) {
      vec[x] = Math.trunc(Math.random() * 10);
      setNumero(vec);
    }
  }

  return (
    <div>
      <p>Numero aleatorio:{numero}</p>
      <button onClick={generar}>Generera</button>
    </div>
  );
};

export default Vector5;

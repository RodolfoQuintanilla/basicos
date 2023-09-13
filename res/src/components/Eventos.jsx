import { useState } from "react";



const Eventos = () => {
    const [res, setRes] = useState(0);

    
  function precios(e) {
    e.preventDefault();
    const v1=parseInt(e.target.valor1.value, 10);
    const v2=parseInt(e.target.valor2.value, 10);
    const suma=v1+v2;
    setRes(suma);

//setRespuestas(suma)
    
  }

  return (
    <div>
      <form onSubmit={precios}>
        <p>
          Ingresa primer valor:
          <input type="number" name="valor1" />
        </p>
        <p>
          Ingrese segundo valor:
          <input type="number" name="valor2" />
        </p>
        <p>
          <input type="submit" value="sumar" />
        </p>
      </form>

    {res}
    </div>
  );
};

export default Eventos;

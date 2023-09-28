const Sub7 = ({setSuma}) => {
  function numeros(e) {
    e.preventDefault();
    const numero1 = parseInt(e.target.num.value);
    const numero2 = parseInt(e.target.num2.value);

    const suma = numero1 + numero2;
    setSuma(suma);
  }

  return (
    <div>
      <form onSubmit={numeros}>
        Ingresa Numero1
        <input type="number" name="num" />
        <br />
        Ingresa Numero 2
        <input type="number" name="num2" />
        <br />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Sub7;

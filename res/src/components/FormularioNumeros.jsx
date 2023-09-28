

const FormularioNumeros = (props) => {
  return (
    <div>
      <from onSubmit={props.onSumar}>
        <p>
          Ingrese primer valor: <input type="text" name="valor1" />
        </p>
        <p>
          Ingrese segundo valor: <input type="text" name="valor2" />{" "}
        </p>
        <input type="submit" value="sumar" />
      </from>
    </div>
  );
};

export default FormularioNumeros;

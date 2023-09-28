import { useEffect, useState } from "react";

const Proyecto9 = () => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    fetch("https://scratchya.com.ar/react/datos.php")
      .then((res) => {
        return res.json();
      })
      .then((articulos) => {
        setArticulos(articulos);
      });
  }, []);

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {articulos.map((art) => {
            const { codigo, descripcion, precio } = art;
            return (
              <tr key={codigo}>
                <td>{codigo}</td>
                <td>{descripcion}</td>
                <td>{precio}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Proyecto9;

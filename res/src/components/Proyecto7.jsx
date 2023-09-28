import { useState } from "react";
import Sub7 from "./Sub7";

const Proyecto7 = () => {
  const [suma, setSuma] = useState(0);
  
  return (
    <div>
      <Sub7 setSuma={setSuma} />
      {suma}
      <br />
     
    </div>
  );
};

export default Proyecto7;

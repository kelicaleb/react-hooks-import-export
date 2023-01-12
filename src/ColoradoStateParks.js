import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import {trees, wildlife, elevation} from "./parks/RockyMountain"

function ColoradoStateParks() {
  howManyParks();
  console.log(trees)
  wildlife();
  elevation();

  return (<><h1>Colorado State Parks!</h1><MesaVerde /></>
  );
}

export default ColoradoStateParks;

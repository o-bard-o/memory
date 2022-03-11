import { E, render } from "./core/react.js";

import App from "./App.js";

render(
  E(App), 
  document.getElementsByClassName("App")[0]
);

import * as functions from "./files/functions.js";

import "../scss/style.scss";
import burger from "./files/burger.js";
import sliders from "./files/sliders.js";
import map from "./files/map.js";
import anchor from "./files/anchor.js";

functions.isWebp();
functions.mediaAdaptive();

burger();
sliders();
map();
anchor();
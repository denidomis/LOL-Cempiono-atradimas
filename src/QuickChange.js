import PropTypes from "prop-types";
import Calculator from "./Calculator";

function QuickChange() {
  Burst = 5 - document.getElementById("DPS");
  Sustain = 5 - document.getElementById("TM");
  Hard = 5 - document.getElementById("CCS");
  Reposition = 5 - document.getElementById("ME");
  Offensive = 5 - document.getElementById("UD");
}

export default QuickChange;

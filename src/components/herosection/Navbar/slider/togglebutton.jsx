import "./Slider.scss";
import hamburger from "../../../pictures/hamburger.webp"
import cross from "../../../pictures/cross.png";

function Togglebutton({ open, setopen }) {
  return (
    <button
      className="togglebuttons"
      onClick={() => setopen(prev => !prev)}
    >
     {open ? "✕" : "☰"}
    </button>
  );
}

export default Togglebutton;
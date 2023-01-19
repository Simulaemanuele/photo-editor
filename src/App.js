import "./App.css";
import SidebarItem from "./SidebarItem";
import Slider from "./Slider";

const DEFAULT_OPTIONS = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Saturation",
    property: "saturation",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
];

function App() {
  return (
    <div className="container">
      <div className="main-image" />
      <div className="sidebar">
        <SidebarItem />
        <SidebarItem />
      </div>
      <Slider />
    </div>
  );
}

export default App;

import './App.css';
import Navbar from '../src/component/navbar/navbar';
import Slider from './component/slider/slider';
import Description from './component/description/description';
import Hover from './component/hover-state/hover';
import Item from './component/item-list/items';
function App() {
  return (
    <>
    <Navbar />
    <Slider />
    <Description />
    <Hover />
    <Item/>
    </>
  );
}

export default App;

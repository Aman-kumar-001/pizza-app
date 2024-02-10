import './App.css';
import Navbar from '../src/component/navbar/navbar';
import Slider from './component/slider/slider';
import Description from './component/description/description';
import Hover from './component/hover-state/hover';
import Item from './component/item-list/items';
import Contact from './component/contact-us/contact';
import Emplyoes from './component/cheffs-section/cheffs';
import Footer from './component/footer/footer';
function App() {
  return (
    <>
    <Navbar />
    <Slider />
    <Description />
    <Hover />
    <Item/>
    <Contact />
    <Emplyoes/>
    <Footer/>
    </>
  );
}

export default App;

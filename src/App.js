
import './App.css';
import About from "./about"
import Interest from "./interest"
import Info from "./info"
import Footer from "./footer"
function App() {
  return (
    <div className="App">
     <Info/>
     <div className='content'>
      <About/>
      <Interest/>
      </div>
      <Footer/>
    </div>

  );
}

export default App;

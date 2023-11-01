import './App.css';
import Footer from "./components/footer"
import Section1 from "./components/section1"
import Section2 from "./components/section2"

function App() {
  return (
    <div className="div1">
      <div className="div2">
        <Section1 />
        <Section2 />  
        <Footer />
      </div>
    </div>
  );
}

export default App;

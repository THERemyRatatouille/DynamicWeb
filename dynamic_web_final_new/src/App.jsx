import Nav from "./components/Nav";
import TrainModel from "./components/TrainModel";
import Body from "./components/Body";
import Map from "./components/Map";
import Subbody from "./components/Subbody";
import WebgiViewer from "./components/WebgiViewer";


function App() {

  return (
    <div className="App">
     
     <Nav/>
     <TrainModel/>
     <Map/>
     <Body/>
     <Subbody/>
    
    </div>
  );
}

export default App;

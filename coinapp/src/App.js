import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Table from './Components/Table/Table';
import "./App.css"
import MarketInfo from './Components/MarketInfo/MarketInfo';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MarketInfo/>
      <Table/>
    </div>
  );
}

export default App;

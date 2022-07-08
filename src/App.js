import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AddPayment from "./components/AddPayment";
import ShowPayment from "./components/ShowPayment";

// import Card from './components/Card';

function App() {
  return (
    <div className="container" >
      
       {/* <Card/>  */}
          
        <Header/>
        
      <Router>
        {/* <Header
          title="Cap eBranding Store"
          description="This is a online store website for cap employees"
        />  */}
        <Link to={`/`}>Get Payment</Link>
        <br />
        <Link to={`/payment/add`}> Add payment</Link>
        <br></br>

        <Routes>
          {/* <Route exact path="/" component={ShowPayment} /> */}
          <Route exact path="/" element={<ShowPayment />} />
           <Route exact path="/payment/add" element={<AddPayment />} /> 
           
        </Routes>
  </Router>    

    </div>
  );
}

export default App;

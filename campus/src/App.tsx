// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Delivery from "./components/Homepage/Delivery";
import {mock_delivery, mock_newDelivery, mock_user} from "./common/mock_data";
import DeliveryList from "./components/Homepage/DeliveryList";
import DeliveryAddinng from "./components/Homepage/DeliveryAddinng";
import {INewDelivery} from "./common/models/INewDelivery";
import LoggedUserField from "./components/Homepage/LoggedUserField";

function App() {


    return (
    <div className="App">

        <LoggedUserField user={mock_user}/>
      {/*<DeliveryList deliveries={mock_delivery}/>*/}
      {/*  <DeliveryAddinng newDelivery={mock_newDelivery}/>*/}
      {/*  <DeliveryList deliveries={mock_delivery}/>*/}


    </div>
  );
}

export default App;

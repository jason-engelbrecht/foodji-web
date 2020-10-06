import React from 'react';
import './App.scss';
import * as mdb from 'mdb-ui-kit';
import 'mdb-ui-kit/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import TopNavBar from "../components/navigation/top_navbar/TopNavbar";

function App() {
  return (
    <div className="App">
      <TopNavBar/>
    </div>
  );
}

export default App;

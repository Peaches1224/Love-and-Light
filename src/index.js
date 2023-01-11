import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import 'semantic-ui-css/semantic.min.css'
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';



// import Home from './Components/Home';
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { BrowserRouter as Router } from "react-router-dom";
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import About from './Components/About';
// import Games from './Components/Games';
// import Products from './Components/Products';
// import Readings from './Components/Readings';
// import NoPage from './Components/NoPage'; 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);










// function App() {
//   return (
//     <div>
//    {/* <Home />  */}
//      <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Navbar />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="products" element={<Products />} />
//           <Route path="readings" element={<Readings />} />
//           <Route path="games" element={<Games />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter> 
//     </div>
//   );
// }

// export default App;

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <Router> */}
//       {/* <AuthProvider> */}
//         <App />
//       {/* </AuthProvider> */}
//     {/* </Router> */}
//   </React.StrictMode>,
//   document.getElementById("root")
// );


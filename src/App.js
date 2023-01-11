import React from 'react';
import './App.css';
// import Header from './components/Header'
import Navbar from './Components/Navbar';

import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <>
      {/* <Header /> */}
      <Router>
        <Navbar />
      </Router>


     
    </>
  );
}








// import logo from './logo.svg';
// import './App.css';
// import React from 'react'; 
// import Home from './Components/Home';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import Navbar from './Components/Navbar';
// // import Home from './Components/Home';
// import About from './Components/About';
// import Games from './Components/Games';
// import Products from './Components/Products';
// import Readings from './Components/Readings';
// import NoPage from './Components/NoPage'; 

// function App() {
//   return (
//     <div>
//    {/* <Home />  */}
//     <BrowserRouter>
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

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import One from '../images/1.jpeg';
import Two from '../images/two.jpeg';
import Three from '../images/3.jpeg';
import CarouselHome from './CarouselHome';
import './Home.css';
import Footer from './Footer';
import Card from 'react-bootstrap/Card';




function Home() {

  return (
    <main>
    <h1>
      Welcome to Love & Light
      {/* <img src='https://cdn.shopify.com/s/files/1/0156/0137/products/Lavender_plant_1200x960_c5a8afe8-38a9-4679-8769-1c0805dd5aec.jpg'></img> */}
    </h1>


   <CarouselHome /> 
   
{/* <div class="bg-image"></div>

<div class="bg-text">
  <h1>Services</h1>
  <p>Love and Light offers various types of healing techniques to help you reach your highest self. We range anywhere from reiki healing, yoga, movement therapy and so much more. We even show you mantras and rituals you can do to help heal your mind,body and soul. </p>
  
<h2>Sound healing</h2>
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXbrja_gm_QznMmHAg_eKvb-xRgII92RLxcg&usqp=CAU'></img> 
<p>Sound healing is a great way to stregthen and maintain medidation. Sound healing also helps with guiding the body to heal itself.</p>


<h2>Yoga/Dance Class  </h2>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE072fx4j0AF66WU5Mh1V1fpfRhMuWW4L9Eg&usqp=CAU'></img>
 <p> Yoga and movement lubricate your joints (synovial fliud) and helps release the body of any tension and unheald trauma</p>

<h2>Chakra Healing</h2>
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ24agWWx1Vb_osTbRd8SBUSRgyDaqt9A51RiMA3jwykNMCLTsFF9Ht_NgK2w98pfQsRHA&usqp=CAU'></img> 
   <p> Chakra healing is an extrodinary way to reach your highest self and heal any past regression,traumas and curses. </p>
 */}


   
 <p>
  Love and Light offers various types of healing techniques to help you reach your highest self. We range anywhere from reiki healing, yoga, movement therapy and so much more. We even show you mantras and rituals you can do to help heal your mind,body and soul. 
</p> 
 <div className='Categories'> 
<div className='Category'>
 
       <h2>Sound healing</h2>
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXbrja_gm_QznMmHAg_eKvb-xRgII92RLxcg&usqp=CAU'></img> 
<p>Sound healing is a great way to stregthen and maintain medidation. Sound healing also helps with guiding the body to heal itself.</p>
</div>


<div className='Category'>
   <h2>Yoga/Dance Class  </h2>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE072fx4j0AF66WU5Mh1V1fpfRhMuWW4L9Eg&usqp=CAU'></img>
 <p> Yoga and movement lubricate your joints (synovial fliud) and helps release the body of any tension and unheald trauma</p>
</div>
  
  <div className='Category'>
  
  <h2>Chakra Healing</h2>
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ24agWWx1Vb_osTbRd8SBUSRgyDaqt9A51RiMA3jwykNMCLTsFF9Ht_NgK2w98pfQsRHA&usqp=CAU'></img> 
   <p> Chakra healing is an extrodinary way to reach your highest self and heal any past regression,traumas and curses. </p>

</div>
   </div> 

   <Footer />
     </main>
  );
}

export default Home;

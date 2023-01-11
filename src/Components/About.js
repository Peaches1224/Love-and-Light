import React from 'react'; 
import NaturalHealing from '../images/NaturalHealing.jpeg'
import Footer from './Footer';

function About() {
  return (
    <div>
      <h1>About Love & Light</h1>
    <p>
      Love and Light is a spritual and natural healing boutique that helps individuals reach their fullest potential. We strive and dedicate
      ourselves to helping and healing others. Love and light is born and raised in San Franscisco and has a dynamic practice from all 
      religons and natural healing methods alike. 
    </p>

    {/* <div className='Category'>
      <img id="uniqueId" src={NaturalHealing} alt="" />
    </div>
 
  <div className='Catergory'>

  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl0Ud8V-38lGzCJqnC59TQilKM_-CcKHa0Ww&usqp=CAU'></img> 
</div> */}

<div className='Categories'> 
<div className='Category'>
  
       <h2>Herbal Books</h2>
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7IlAUq4LcKHFNqR7hkYM7NxGzm6Xv0mLxeQ&usqp=CAU'></img> 

<p>Herbal books are a great resource to help heal and find remedies to fit your everyday needs and assist you in your sprirtual journey</p> 
</div>


<div className='Category'>
   <h2>Dr. Sebi  </h2>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJryUtFtl_R037ngLX8caMWQ7GRrOuMwcJTw&usqp=CAU'></img>
      <p>Dr. Sebi was a great doctor and herbalist. He has many rememdies to heal diseases.</p>
</div>
  
  <div className='Category'>
  
  <h2>Self Refelection</h2>
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-MFW1Qh4VU2yiwD-gNCXd5noUHWQfDTlFig&usqp=CAU'></img>
<p> Education is important to us at Love and Light. We offer a range of educational self help books so you can reach your fullest potential.</p>
</div>
   </div>
   <Footer />
    </div>

    
  );
}

export default About;

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdODG3KB9iBvF1RZOEOVaU5ONCtbxvfNP_g&usqp=CAU
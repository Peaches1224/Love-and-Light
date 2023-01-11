import React from 'react'; 
import Incents from '../images/Incents.jpeg'
import Crystals from '../images/Crystals.jpeg'; 
import PaloSanto from '../images/PaloSanto.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';


function Products() {
  return (
<div>
  <h1> All Collections </h1>
    <p>
We have products that help with your spirtual journey,books, natural herbs, oils and more. 
    </p>

    {/* <div className='Category'>
      <img id="uniqueId" src={NaturalHealing} alt="" />
    </div>
 
  <div className='Catergory'>

  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl0Ud8V-38lGzCJqnC59TQilKM_-CcKHa0Ww&usqp=CAU'></img> 
</div> */}

<div className='Categories'> 
<div className='Category'>
  
       <h2>Natural herbs</h2>
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnp36o-JuId9bwCuDRLQRcbYstdrXImNJafg&usqp=CAU'></img> 
  <p>Natural herbs and rememdies are the most efficant way to heal the body.</p>
</div>


<div className='Category'>
   <h2>Incents </h2>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo78awCIngNQQ6pMaYFWZZ6a18qwf0FIDiBA&usqp=CAU'></img>
  <p>Incents are a great purification tool to cleanse yourself and the air.</p>
</div>
  
  <div className='Category'>
  
  <h2>Anointing Oils</h2>
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpEumn2leKbrc2rj3L5f2v8W0KM9pWAHCdRg&usqp=CAU'></img>
 <p>Anointing oil can be used on yoursef and you candles. It is used to bless the space, body and tools you may be working with</p>
</div>


<div className='Category'>
   <h2>Candles</h2>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Ns9t2tvlP1xTvoOQJPFo1RjnZehIoTs2gcIexXzB8xHI10XWZ8MsI3CUz-CqEWj6KhQ&usqp=CAU'></img>
  <p>Ritual candles are a great way to magnify your intentions and are great for cleansing.</p>
</div>

<div className='Category'>
   <h2>Tarot Decks</h2>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbxg2yfNBAyLtTmdRowNHWCxGc0uLRXJASfmzZWLSGZwrLDOuYsfTt11AoJkiGe3h8A6U&usqp=CAU'></img>
  <p> Tarot decks are a great way to get the answers you need from the universe and your ancestors.</p>
</div>

<div className='Category'>
   <h2>Crystals</h2>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5WPczxza7llyU2wY9_eLk2am5Bjg87-0KvjGiL_AwJZdC1-hWIcM9CLP6rE62KZO3OkI&usqp=CAU'></img>
  <p> We have an array of crystals to help with your healing journey</p>
</div> 


   </div>

   <Footer /> 
    </div>

  );
}

export default Products;


// <img id="uniqueId" src={Incents} alt="Icents" />


// <img id="uniqueId" src={Crystals} alt="Crystals" />
// <img id="uniqueId" src={PaloSanto} alt="Palo Santo" />


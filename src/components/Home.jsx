import React from "react";
import bg from "../assets/havelock1jpg.jpg"
import ele from "../assets/elephanta.jpg"
import kala from "../assets/kalaphathar.jpg"
import a from "../assets/limestone.jpg"
import b from "../assets/marina-park-and-aquarium.jpg"
import c from "../assets/main-entrance.jpg"
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  return (
    <>
      <div className="Home" id="home">
        <main>
          <h1>Your Gateway to Andaman and Nicobar Islands!</h1>
          <p>Discover Paradise, Explore Andaman.</p>
        </main>
      </div>

      

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
          At the heart of our company is a team of passionate travel enthusiasts who call 
          the Andaman and Nicobar Islands home. We are locals who have dedicated ourselves to showcasing the
           hidden gems, pristine beaches, vibrant cultures, and rich history of this tropical paradise.
            <br></br>
           Why choose TRIPISLE ANDAMAN?
           <li>Local Expertise</li>
           <li>Tailored Experiences</li>
           <li>Sustainable Tourism</li>
           <li>Exceptional Service</li>
           <li>Memorable Experiences</li>
           Contact us today to start planning your Andaman and Nicobar adventure!
          </p>
        </div>
      </div>

      <div className="home2">
      <h1>Activities</h1>
      <div>
        <div className="activity">
          <img src={require('../assets/scubadiv.jpg')} /> 
          <div className="text-image">
         <h2>Scuba Diving</h2>
         </div>
        </div>
        <div className="activity">
          <img src={require('../assets/kaya.jpg')} />
          <div className="text-image">
         <h2>Kayaking</h2>
         </div>
        </div>
        <div className="activity">
          <img src={require('../assets/dolphin.jpg')} />
          <div className="text-image">
         <h2>Dolphins Visit</h2>
         </div>
        </div>
        <div className="activity">
          <img src={require('../assets/parasail.jpg')} />
          <div className="text-image">
         <h2>Parasailing</h2>
         </div>
        </div>
        </div> 
      </div>
    
    <div className="home4a" >
      <h1>Tourist Attractions</h1>
    </div>

    <div className="home4">
    <div>
    <div className="card">
         <img src={bg} alt="beach" />
         <div className="text-image" >
          <h2>Havelock Island</h2>
          </div>
      </div>
      <div className="card">
        <img src={kala} alt="beachh"/>
        <div className="text-image">
        <h2>Kalaphathar Beach</h2>
        </div>
      </div>
      <div className="card">
      <img src={a} alt="a" />
         <div className="text-image">
         <h2>Limestone Caves</h2></div>
      </div>
      
    </div>
    </div>

    <div className="home5">
        <div>
      <div className="card">
      <img src={b} alt="b" />
         <div className="text-image">
         <h2>Marina Park</h2>
         </div>
      </div>
      <div className="card">
      <img src={ele} alt="beache" />
         <div className="text-image">
         <h2>Elephant Beach</h2>
         </div>
      </div>
      <div className="card">
      <img src={c} alt="c" />
         <div className="text-image">
         <h2>Cellular Jail</h2>
         </div>
      </div>
        </div>
      </div>

     <div className="home5a">
     <h1>Resorts</h1>
     </div>

     <div className="home6">
      <Carousel className="crsl" autoPlay infiniteLoop interval={1000}  
      showThumbs={false} showIndicators={false} >
          <img src={require('../assets/pic2.jpg')} alt="img2" />
          <img src={require('../assets/pic4.jpg')} alt="img2" />
          <img src={require('../assets/pic5.jpg')} alt="img3" />
          <img src={require('../assets/pic6.webp')} alt="img4" />

      </Carousel>
      </div>
     
     <div className="home7">
      <div className="textt">
        <h2>Try Andaman local cuisine!</h2>
      <div className="grid-wrapper">
      <div className="chillifish">
      <img src={require('../assets/chiliifish.webp')} alt="photo" />
      </div>
      <div className="food1">
      <img src={require('../assets/food1.webp')} alt="photo" />
      </div>
      <div className="food2">
      <img src={require('../assets/food2.webp')} alt="photo" />
      </div>
      <div className="food4">
      <img src={require('../assets/fish.jpg')} alt="photo" />
      </div>
      
      </div>
      </div>
     </div>

    </>
  );
};

export default Home;

import React from "react";
import image1 from "../Pics/bharatnatyam.jpg"
import Gif from "../Pics/Online gif.gif"
import image2 from "../Pics/Hip_1.jpg"
import image3 from "../Pics/contemp_2.jpg"
import image4 from "../Pics/bharat_3.jpg"
import image5 from "../Pics/ballet_4.jpg"
import image6 from "../Pics/Salsa_5.jpg"
import image7 from "../Pics/Kathak_6.jpg"
import image8 from "../Pics/K pop_7.jpg"
import image9 from "../Pics/popping_8.jpg"
import image10 from "../Pics/Kathak_9.jpg"
import image11 from "../Pics/Jazz_10.jpg"
import image12 from "../Pics/Locking_11.jpg"
import image13 from "../Pics/Lite_feet_12.jpg"
import gallery1 from "../Pics/gallery_1.jpg"
import gallery2 from "../Pics/Gallery_2.jpg"
import gallery3 from "../Pics/gallery_3.jpg"
import gallery4 from "../Pics/gallery_4.jpg"
import gallery5 from "../Pics/gallery_5.webp"
import gallery6 from "../Pics/gallery_6.jpg"
import gallery7 from "../Pics/gallery_7.png"
import gallery8 from "../Pics/gallery_8.jpg"
import gallery9 from "../Pics/gallery_9.jpg"
import {FiInstagram} from "react-icons/fi"
import{FaFacebookSquare,FaTwitter} from "react-icons/fa"
import {BsYoutube} from "react-icons/bs"



const Home = () => {
  return (
    <div id="home-div">
      <div id="first-home">
         <h2>Welcome to....</h2>
         <h1>Dance For Change Academy</h1>
         <h3>Every Pro Once was A Beginner!</h3>
         <p>Turn Yourself into a Pro</p>
      </div>
      <h2 id="overview-heading">Overview</h2>
      <section id="home-overview">
        
        <div id="baratnatyam">
            <img src={image1} alt="" />
        </div>
        <div id="overview">
          <p>Learn the basics of some of the world’s most famous and favourite dances. Sample the exotic rhythms of Tango one week and find yourself immersed in a crazy Charleston the next.
Designed for people who have never taken a dance class before, the dance instructor will teach not only the basic moves but the styling and rhythms of each dance so that at the end of the eight weeks, you will have the confidence to take to the dance floor. Suitable for people who are interested in ballroom dancing and Latin dancing. This course is suitable for individuals as well as couples.</p>
<p id="note"><strong>Note:</strong> Our short courses are non refundable and there is no cooling off period.</p>
        </div>
      </section>

      <section>
        <p id="step-main">Step-by-Step Learning For All Levels</p>
        <p id="step-sub">Whether you’re just starting out or you’ve got some training under your belt – we got you covered.</p>
<div id="start">
  <div id="block1">
      <h3 className="title">BRAND NEW</h3>
      <p className="content">Got Two Left feet? Start with our 10-day intro Program</p>
  </div>
  <div id="block2">
    <h3 className="title">BEGINNER</h3>
    <p className="content">Got the basics down? Level up with new moves and routines</p>

  </div>
  <div id="block3">
<h3 className="title">INTERMEDIATE</h3>
<p className="content">Feel pretty Confident? Learn more challenging skills and pieces</p>
  </div>
  <div id="block4">
<h3 className="title">ADVANCED</h3>
<p className="content">Already killing it? Train with the top choreographers in the game</p>
  </div>
</div>
      </section>

      <section id="online-section">
        <div id="divflex">
        <div id="online-div">
          <h1 id="online-head">Not Your Average Online Tutorial</h1>
          <p id="online-para">Dance for Change tools make your online learning experience just like a class at a physical studio – but better.</p>
        </div>
        <div id="gif">
          <img src={Gif} alt="" />
        </div>
        </div>

        <div id="online-box">
          <div className="box1">
            <h3>SWITCH VIEWS</h3>
            <p>Watch the class from the front or back</p>
          </div>
          <div className="box1">
            <h3>LOOP MOVES</h3>
            <p>Play any Section of the class on repeat while you practice</p>
          </div>
          <div className="box1">
            <h3>MIRROR VIDEO</h3>
            <p>No need to remember right from left in your head - just copy the instructor</p>
          </div>
          <div className="box1">
            <h3>CONTROL SPEED</h3>
            <p>Play the video at whatever tempo works for you</p>
          </div>
          <div className="box1">
            <h3>VIEW SECTIONS</h3>
            <p>Easily jump to any section of the class thanks to labels and time stamps</p>
          </div>
          <div className="box1">
            <h3> CAMERA MODE</h3>
            <p>Use your webcam as a virtual mirror and dance next to the instructor.</p>
          </div>
        </div>
      </section>

      <section id="dance-forms">
        <p>Learn A Variety of Dance Styles</p>
        <div id="dance-variety">
          <figure className="figure">
            <img src={image2} alt="" />
            <figcaption>Hip Hop</figcaption>
          </figure>
          <figure className="figure">
            <img src={image3} alt="" />
            <figcaption>Contemporary</figcaption>
          </figure>
          <figure className="figure">
            <img src={image4} alt="" />
            <figcaption>Bharatanatyam</figcaption>
          </figure>
          <figure className="figure">
            <img src={image5} alt="" />
            <figcaption>Ballet</figcaption>
          </figure>
          <figure className="figure">
            <img src={image6} alt="" />
            <figcaption>Salsa</figcaption>
          </figure>
          <figure className="figure">
            <img src={image7} alt="" />
            <figcaption>Kathakali</figcaption>
          </figure>
          <figure className="figure">
            <img src={image8} alt="" />
            <figcaption>K Pop</figcaption>
          </figure>
          <figure className="figure">
            <img src={image9} alt="" />
            <figcaption>Popping</figcaption>
          </figure>
          <figure className="figure">
            <img src={image10} alt="" />
            <figcaption>Kathak</figcaption>
          </figure>
          <figure className="figure">
            <img src={image11} alt="" />
            <figcaption>Jazz</figcaption>
          </figure>
          <figure className="figure">
            <img src={image12} alt="" />
            <figcaption>Locking</figcaption>
          </figure>
          <figure className="figure">
            <img src={image13} alt="" />
            <figcaption>Lite Feet</figcaption>
          </figure>

        </div>
      </section>

      <section id="gallery">
        <p>Gallery</p>
        <div id="photos">
          <img src={gallery1} alt="" />
          <img src={gallery2} alt="" />
          <img src={gallery3} alt="" />
          <img src={gallery4} alt="" />
          <img src={gallery5} alt="" />
          <img src={gallery6} alt="" />
          <img src={gallery7} alt="" />
          <img src={gallery8} alt="" />
          <img src={gallery9} alt="" />
        </div>
      </section>

      <footer id="home-footer">
        <div id="footer-div1">
          <ul id="ul-div">
            <li className="li-div">FAQS</li>
            <li className="li-div">BLOG</li>
            <li className="li-div">CONTACT US</li>
            <li className="li-div">SUPPORT</li>
            <li className="li-div">PRIVACY</li>
            <li className="li-div">TERMS</li>
          </ul>
          <p>© 2023 DANCE FOR CHANGE ACADEMY All Rights Reserved</p>
        </div>
        <div id="footer-div2">
            <h4>FOLLOW US ON</h4>
            <div id="logo">

            
            <div className="logo-div">
              <span>
              <FiInstagram/>
              </span>
              <span>
                INSTAGRAM
              </span>
            </div>

            <div className="logo-div">
              <span>
              <FaFacebookSquare/>
              </span>
              <span>
                    FACEBOOK
              </span>
            </div>

            <div className="logo-div">
              <span>
              <FaTwitter/>
              </span>
              <span>
                TWITTER
              </span>
            </div>

            <div className="logo-div">
              <span>
                 <BsYoutube/>
              </span>
              <span>
                YOUTUBE
              </span>
            </div>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Home

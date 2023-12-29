import React from 'react'
import {FiInstagram} from "react-icons/fi"
import{FaFacebookSquare,FaTwitter} from "react-icons/fa"
import {BsYoutube} from "react-icons/bs"
import { Link } from 'react-router-dom'
import image from "../Pics/dance-grroup.jpg"
import image1 from "../Pics/founder_pic.jpg"
import image2 from "../Pics/cofounder-pic.jpg"
import image3 from "../Pics/award_1.jpg"
import image4 from "../Pics/award_2.jpg"
import image5 from "../Pics/award_3.jpg"
import image6 from "../Pics/award_4.jpg"
import video1 from "../videos/Calm_down.mp4"
import video2 from "../videos/Desi_hoppers.mp4"
import video3 from "../videos/Fuego_dance.mp4"
import video4 from "../videos/Groove_interbatch.mp4"
import video5 from "../videos/Shiva_shambho.mp4"


const About = () => {
  return (
    <div id="about-main">
      <section id="section-1">
        <div id="about-us">
      
      
        <h1>ABOUT US</h1>
        </div>
        <div id="second-div">

       
        <div id="dance-group">
          <img src={image} alt="" />
        </div>
        <div id="about-para">
       <p>The <strong>Dance for Change Academy</strong> (voted India’s Number 1 dance company) and the its Professional Training Institute are widely-acknowledged as the country’s most popular and reputed dance organisations.

Together with the Dance for Change Academy's Scholarship Foundation Trust, they make up the DFC brand, which fosters creative excellence in the talented, enthusiastic dancer (or aspiring dancer), raising the standards of dance in India and beyond.

We work together, towards professional excellence in exploring dance in various forms such as educational, research, artistic and commercial ventures. We constantly strive for efficiency and customer satisfaction.

Our talented team of professional dancers and instructors have all been handpicked and personally trained by our founders Terence Lewis and Mahrukh Dumasia; and receive ongoing coaching and regular assessments to ensure that that their skills are up-to-date.</p>
        </div>
        </div>
      </section>

      <section id="section-2">
        <h2>About Terence Lewis</h2>
         <div id="founder-div">
           <div id="founder-para">
         <p> Our Founder and Artistic Director Master Terence Lewis is widely-recognised as India’s leading choreographer, dancer and TV judge and a multiple Guinness Book of World Records winner. He is a Doctor in the Performing Arts (Dance), an honorary title awarded by the National Institute of Education and Research, New Delhi, in recognition of his achievements in the dance sector.</p>
         <p>Terence is a self-taught artist, who honed his skills mid-career with workshops at the Alvin Ailey School of Dance, New York. He was the first Indian to receive a fully-funded scholarship to study at Impulstanz, Vienna (the world’s leading contemporary dance festival) and is the only regular Indian teacher at Impulstanz. He developed a new style of dance, Indo-Contemporary, using his background in Indian dance and Bollywood with contemporary technique. He was the first Indian member of the UNESCO- International Dance Council - CID- Conseil International de la Danse.</p>
         <p>Terence has judged India’s top dance-based television shows, including  India's Best Dancer, Dance Champions, Dance India Dance, Nach Baliye and So You Think You Can Dance! He has choreographed films including Lagaan and Jhankaar Beats; musicals including Children of the Sea and Finding Marina (both with children of the 2005 Tsunami disaster, presented at the Edinburgh Fringe Festival 2006, where Terence won the Best Choreographer Award) and Disney India’s pioneering stage musical The Beauty and the Beast.</p>
         <p>Terence Lewis has entered the Guinness Book of World Records on four occassions – for conducting the largest Bollywood Dance Class in the world and the largest Indo-Contemporary Dance Class, both held in Mumbai, India! His campaign for FBB won the World’s Largest Photobook award. He has received multiple awards in India and internationally for both, his artistic merit and entreprenuership achievements.</p>
           </div>
            <div id="founder-pic">
              <img src={image1} alt="" />
            </div>
         </div>
      </section>

      <section id="section-3">
<h2>About Mahrukh Dumasia</h2>
<div id="cofounder-div">
<div id="cofounder-pic">
  <img src={image2} alt="" />
  </div>
  <div id="cofounder-para">
    <p>Mahrukh Dumasia is the Creative Head and Chief Choreographer of DFC and the Program Head of DFCTI.</p>
    <p>Along with Terence Lewis, Mahrukh has been the founding member of the Company and the Institute and is a force to reckon with, owing to her multi faceted talent, keen eye for artistic detailing, and high standards in providing quality, be it in the fields of entertainment or instruction. She was one of the first Indians (along with Terence Lewis) to receive the prestigious Dance Web Scholarship, at the Impulstanz – Vienna International Dance Festival. Mahrukh is a multi-lingual writer, fluent in English, Hindi & French. With a technical background in dance and choreography, a passion for creative writing, and a natural gift for dramatic visualisation, she ably marries art and entertainment and transforms her beautifully expressed scripts into a magical reality on stage. Her background and experience as a French teacher (she taught at St. Xavier’s College, Mumbai) makes her well-equipped to head the DFCTI.</p>

  </div>
</div>
      </section>

      <section id="section-4">
        <h1>Awards and Achievements</h1>
        <div id="award-divs">
          <div className='award-drama'>
             <img src={image3} alt="" />
             <p>Our Team DFC Dance Academy won awards in different categories at the 2019 GTB World Finals in Bangkok, Thailand.</p>
          </div>
          <div className='award-drama'>
          <img src={image4} alt="" />
             <p>Our DFC Dance Academy tean secured second place in 'Golden Feet International Competetion-2021' held at Derby in Hip Pop dance category</p>
          </div>
          <div className='award-drama'>
          <img src={image5} alt="" />
             <p>Our DFC Dance Team performed very well in 'Rhythm Rave Dance Competetion-2022' held in Australia and won many awards in different categories.</p>
          </div>
          <div className='award-drama'>
          <img src={image6} alt="" />
             <p>Our one of the finest dancers Mr.Abhay Shetty and Ms.Sushma Rao won the '8th National Golden Star Award-2022' for their amazing performance held in Mumbai</p>
          </div>

        </div>

      </section>

      <section id="section-5">
        <h1>Watch some of Our Best Performances</h1>
        <div className='video-div'>
          <div className='video-size'>
            <video src={video1} controls muted loop ></video>
          </div>
          <div className='video-para'>
            <p>Our Team's performance in Album Group Dance-2020 with classical touch.</p>
            <button>Read More</button>
          </div>
        </div>

        <div className='video-div'>
         <div className='video-para'>
            <p>Our Team performed in <strong>World of Dance Finals-2015</strong> and secured 1st Place</p>
            <button>Read More</button>
          </div>
          <div className='video-size'>
            <video src={video2} controls muted loop></video>
          </div>
        </div>

        <div className='video-div'>
          <div className='video-size'>
            <video src={video3} controls muted loop></video>
          </div>
          <div className='video-para'>
            <p>Fuego Dance Crew Performance in Gasolina Routine Competetion</p>
            <button>Read More</button>
          </div>
        </div>

        <div className='video-div'>
         <div className='video-para'>
            <p>Our Team's Best performance in Groove Interbatch Dance Championship-2021</p>
            <button>Read More</button>
          </div>
          <div className='video-size'>
            <video src={video4} controls muted loop></video>
          </div>
        </div>
        
        <div className='video-div'>
          <div className='video-size'>
            <video src={video5} controls muted loop></video>
          </div>
          <div className='video-para'>
            <p>Best of Indian classical Dance performance by top classical dancers of our Academy</p>
            <button>Read More</button>
          </div>
        </div>
        <p>Watch More Dance Performance in our YouTube Channel</p>
        <Link id="link-video">Subscribe Now</Link>



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

export default About
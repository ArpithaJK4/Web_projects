import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../Helpers/axiosInstance'
import {FiInstagram} from "react-icons/fi"
import{FaFacebookSquare,FaTwitter} from "react-icons/fa"
import {BsYoutube} from "react-icons/bs"
import course1 from '../Pics/Course_YMP_Level-1.jpeg'
import course2 from "../Pics/Course_DPLC.jpeg"
import course3 from "../Pics/Course_Burn_the_floor.jpeg"
import course4 from "../Pics/Online1.png"
import course5 from "../Pics/Online2.webp"

const Courses = () => {
  let token=window.localStorage.getItem("token")
  let [users,setUsers]=useState([])
 
  useEffect(()=>{
   let fetchData=async()=>{
     try{
     let response =await axiosInstance.get("/dancecourses/getall",{
       headers:{
         Authorization:`Bearer ${token}`,
       },
     });
     setUsers(response.data.data)
   }
   catch(err){
     alert("Unable to connect the server")
 
   }
   }
   fetchData()
 },[])
  return (
    <div id="course-div">
      <section id="course-section1">
        <p>Specially Crafted Dance Classes in our main Studio</p>
        <h1>Courses which are available in our Academy</h1>
        <div id="course-mode">
          <span className='mode'>
            <p>OFFLINE MODE</p>
          </span>
          <span className='mode'>
            <p>ONLINE MODE</p>
          </span>
        </div>

      </section>

      <section id="course-section2">
        <p>Young Masters Program</p>
        <div id="course1">
          <div>
          <p>YMP - Young Master Program for kids is back ONGROUND <br />
For our Young Dancing Stars (8 to 14 years) <br />
Starting Date: 9th September 2023 <br />
End Date: 29th October 2023</p>
<p>2 Months Certificate Onground Course,16 sessions for Kids</p>
<p id="p-bold">TWICE A WEEK</p>
          <p>Total Fees: Rs. 16000/- <br />
Early bird discount: Rs. 14000/- <br />
Centers:Khar: Khar (W) - Nateshwar Bhavan Studio <br />
Days: Saturday & Sunday (2 months, 16 sessions) <br />
Time: 3 pm to 4:30 pm <br />
Dance Disciplines: Hip-Hop & Jazz Funk 
</p>
<p id="p-bold">COURSE BENEFITS</p>
<ol type='1' id="course-benefits">
  <li>Individual Attention & Personal Feedback to the kids</li>
  <li>Progressive Syllabus</li>
  <li>Focus on Technique Application & Performance Value</li>
  <li>Experienced Instructors - trained by Terence Sir himself + Mahrukh ma’am & International Faculty</li>
  <li>Systematic Breakdown & Teaching in a fun way to kids</li>
  <li>Fun & Positive Atmosphere</li>
  <li>Certificate Onground Course</li>
</ol>
          <button className='book-btn'>ENQUIRE NOW</button>
          <button className='book-btn'>BOOK NOW</button>
          </div>
         
          <div id="course1">
            <img src={course1} alt="" />
          </div>
        </div>

      </section>
      
      <section id="course-section3">
        <p>Dance Pe Lo Chance</p>
        <div id="course2-div">
        <div id="course2">
            <img src={course2} alt="" />
          </div>
        
          <div>
      <p>A DFCTI top seller!!</p>
<p>DPLC - A-of-its-kind course with a specially designed format, offering 3 of the most globally Trending Styles - Hip Hop, Contemporary & Bollywood. <br />Systematically structured, with a crystal clear breakdown, this course starts with the basics but keeps the interest levels high!</p>
<p>Top of line Instructors bring you technique plus super exciting choreographies.</p>
<p>DPLC - One of the best courses for beginners plus all dance lovers!</p>
<p><strong>The Course Highlights-</strong></p>
          <p>Master Class with Terence Lewis- learn Contemporary from the Guru himself - Terence Sir in an exclusive Master Class.
</p>
<p>The End of Course Showcase- Special Solos for each student- mentored by the Instructors and presented before the Guru himself - Master Terence Lewis, with an exclusive chance to meet, interact and receive feedback from Terence Sir himself !!!</p>
<p><strong>For DPLC LEVEL 1:</strong></p>
<p>Age: 15+ yrs <br />
Join us at "ONGROUND" with Terence Lewis
Dance styles-Hip Hop| Contemp | Bollywood <br />
Venue: Khar
Nateshwar Bhavan Studio</p>
          <button className='book-btn'>ENQUIRE NOW</button>
          <button className='book-btn'>BOOK NOW</button>
          </div>
         
          
        </div>

      </section>

      <section id="course-section4">
        <p>Burn The Floor - Onground</p>
        <div id="course3-div">
          <div>
        <p id="p-bold">Burn The Floor - Burn The Floor ONGROUND & REELS</p>

          <p>TLPTI presents: <br />
BTF REELS & more in Mumbai, get to learn some really cool trending REELS CHOREOS in a very simplified manner from our excellent instructors !!! <br />
It's time to up your social media game.</p>
<p>Ongoing Classes</p>
<p>Course: <br />
2 MONTHS, 16 SESSIONS <br />
(Twice a Week)
</p>
          <p><strong>Styles:</strong> <br />
1) HIP-HOP <br />
2) AFRO <br />
3) BOLLYWOOD <br />
4) CONTEMPORARY <br />
</p>

<p><strong>Centre:</strong> <br />
Borivali: Midass Studio <br />
Start: 24th May 2023 <br />
Days:Wednesday and Friday <br />
Time:7:15 to 8:15 pm</p>
<p>Khar: Nateshwar Bhavan Studio <br />
Start: 27th May 2023 <br />
Saturday - 8:15 to 9:15 pm <br />
Sunday - 4:30 to 5:30 pm</p>
<p><strong>Fees:</strong> <br />
Full Fees - Rs. 8000/- 
Special Discounted Fees: Rs. 7400/-
(To avail this discount, we would just need to verify if you’ve been a part of Dance For Change Academy 2023.)</p>
          <button className='book-btn'>ENQUIRE NOW</button>
          <button className='book-btn'>BOOK NOW</button>
          </div>
         
          <div id="course3">
            <img src={course3} alt="" />
          </div>
        </div>

      </section>

      <div id="online-course">
      <section id="course-section5">
        <div id="course4-div">
        <div id="course4">
            <img src={course4} alt="" />
          </div>
        
          <div>
      <p>TLPTI presents SPECIAL NEW YEAR DANCE DHAMAKA BUMPER OFFER for our ONLINE DANCE CLASSES BURN THE FLOOR!!!</p>
<p>Burn The Floor ONLINE on ZOOM platform Get to learn Mashup of Trending Dance Styles on Trending Songs & REELS CHOREOS !!!Open Level Dance Course for everyone.</p>
<p><strong>Course:</strong></p>
<p>1 month : 1,400/- (Early bird discount: 1,200/-)  <br />
3 months : 3,600/- (Earlybird Discount : 2,700/-)</p>
<p><strong>Mashup Styles:</strong></p>
          <p>HIPHOP <br />
AFRO <br />
BOLLYWOOD <br />
CONTEMPORARY
</p>
<p><strong>Days & Timings:</strong></p>
<p>Tuesday & Thursday <br />
(7 to 8:15 pm)  <br />
LIVE SESSIONS + TUTORIALS <br />
ZOOM Platform</p>
<p>E-Certificate - Yes!!!</p>
          <button className='book-btn'>ENQUIRE NOW</button>
          <button className='book-btn'>BOOK NOW</button>
          </div>
         
          
        </div>

      </section>

      <section id="course-section6">
        <div id="course5-div">
          <div>
        <p id="p-course5">Special Dance Course Only for Schools - WWF (Wellness With Fun)</p>

          <p>The Dance for Change Training Institute, celebrating its 24th year in Dance Education, is proud to announce a *Special Dance Course exclusively for Schools* for their Students for the Summer of 2024 WWF (Wellness With Fun)</p>

          <p><strong>WWF Aim:</strong> <br/>
          We aim to engage the children mentally & physically , to pique their interest in Dance & increase their physical activity.
</p>
<p>WWF gives the children and young teenagers a HAPPY GO-TO PLACE - a release from daily stress, to develop multiple other faculties. <br />
We want to encourage Terence Lewis's Mantra - <br />
ABCD - Any Body Can Dance...and should!!!</p>

<p>*WWF - Unique Structure - An Online Hybrid Model*- <br />
The WWF follows a carefully planned Online Hybrid Model- combining Tutorials and Live sessions online. <br />
The Pre recorded classes (Tutorials ) dispense instruction inreal time , with crystal clear breakdown and repetitions , thus giving the students the sense of learning live.</p>
<p>The Live sessions then are the perfect culmination of the techniques taught in the pre recorded classes- and keep the children's energies soaring high.</p>
<p><strong>Wellness With Fun (WWF) COURSE:</strong></p>
<p>Online Course Duration: 3 Months <br />

Age Group: 8 TO 15 YRS <br />

Platform: On ZOOM (Tutorials + LIVE) <br />

The Course will focus on honing the kids Musicality skills & Directional Sense along with their Motor Coordination. <br />

Dance Disciplines - <br />
JazzFunk, HipHop & Contemporary.</p>
          <button className='book-btn'>ENQUIRE NOW</button>
          <button className='book-btn'>BOOK NOW</button>
          </div>
         
          <div id="course5">
            <img src={course5} alt="" />
          </div>
        </div>

      </section>
      </div>

      <div id="course-manager">
    <p id="user-color">Other Course Details</p>
    <div id="view-block">
      {users.map((x)=>{
        return(
          <div id="course-usercard" >
            <p>{`Course Duration (in months): ${x.courseDurationInMonths}`}</p>
            <p>{`Fees (in Rupees): ${x.fee}`}</p>
            <p>{`Type: ${x.type}`}</p>
            <div id="view-button">
            <Link><button id='view-link'>Book Now</button></Link>
            </div>


          </div>    
        )
      })}
    </div>
  </div>

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

export default Courses

import Swal from 'sweetalert2'
import './Navbar.css'
import { useEffect, useState } from 'react'

export default function Navbar({setCategory})
{

  const showAlert = ()=>{
    Swal.fire({
      title: "Searching!",
      text: `Fetching ${query} news for you..`,
      imageUrl: "https://cdn-icons-gif.flaticon.com/17905/17905741.gif",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      timer:1500
    });

  }
    const[query,setQuery]=useState("")
    // const mobileBreakOut = 700;
    const [showMenu,setShowMenu]=useState(false)
    const toggleMenu =()=>
    {
    // const toggleMenuf(window.innerWidth>=mobileBreakOut && showMenu===true)
        // {
        //     setShowMenu(false)
        // }
        // else
       setShowMenu(prev=>!prev)
    }
    
    const [mode,setMode]= useState("Night Mode")


    const changeMode=()=>{
        setMode((prev)=>(prev==="Night Mode"?"Day Mode" : "Night Mode"));
    }
    useEffect(() => {
        document.body.classList.toggle("darkMode")
      }, [mode]);

    return(
        <>
       <nav id='nav'>
        <div className="title"><h1>News.</h1></div>
        <div className="navOptionDiv">

  <div className="generalDiv btnBigDiv">
    <button onClick={() => { setCategory("General"); showAlert(); }}>General</button>
    <div className="navSubDiv">
      <button onClick={() => { setCategory("world-news"); showAlert(); }}>World News</button>
      <button onClick={() => { setCategory("local-news"); showAlert(); }}>Local News</button>
      <button onClick={() => { setCategory("technology"); showAlert(); }}>Technology</button>
      <button onClick={() => { setCategory("health"); showAlert(); }}>Health</button>
      <button onClick={() => { setCategory("science"); showAlert(); }}>Science</button>
      <button onClick={() => { setCategory("business"); showAlert(); }}>Business</button>
      <button onClick={() => { setCategory("environment"); showAlert(); }}>Environment</button>
      <button onClick={() => { setCategory("sports"); showAlert(); }}>Sports</button>
      <button onClick={() => { setCategory("culture"); showAlert(); }}>Culture</button>
      <button onClick={() => { setCategory("politics"); showAlert(); }}>Politics</button>
      <button onClick={() => { setCategory("entertainment"); showAlert(); }}>Entertainment</button>
      <button onClick={() => { setCategory("education"); showAlert(); }}>Education</button>
      <button onClick={() => { setCategory("travel"); showAlert(); }}>Travel</button>
      <button onClick={() => { setCategory("food"); showAlert(); }}>Food</button>
      <button onClick={() => { setCategory("lifestyle"); showAlert(); }}>Lifestyle</button>
      <button onClick={() => { setCategory("tech-trends"); showAlert(); }}>Tech Trends</button>
      <button onClick={() => { setCategory("finance"); showAlert(); }}>Finance</button>
      <button onClick={() => { setCategory("art"); showAlert(); }}>Art</button>
      <button onClick={() => { setCategory("gaming"); showAlert(); }}>Gaming</button>
    </div>
  </div>

  <div className="educationDiv btnBigDiv">
    <button onClick={() => { setCategory("Education"); showAlert(); }}>Education</button>
    <div className="navSubDiv">
      <button onClick={() => { setCategory("online-courses"); showAlert(); }}>Online Courses</button>
      <button onClick={() => { setCategory("higher-education"); showAlert(); }}>Higher Education</button>
      <button onClick={() => { setCategory("k-12-education"); showAlert(); }}>K-12 Education</button>
      <button onClick={() => { setCategory("teaching-resources"); showAlert(); }}>Teaching Resources</button>
      <button onClick={() => { setCategory("studying-tips"); showAlert(); }}>Studying Tips</button>
      <button onClick={() => { setCategory("students-life"); showAlert(); }}>Student Life</button>
      <button onClick={() => { setCategory("education-policy"); showAlert(); }}>Education Policy</button>
      <button onClick={() => { setCategory("scholarships"); showAlert(); }}>Scholarships</button>
      <button onClick={() => { setCategory("e-learning"); showAlert(); }}>E-Learning</button>
      <button onClick={() => { setCategory("distance-learning"); showAlert(); }}>Distance Learning</button>
      <button onClick={() => { setCategory("special-education"); showAlert(); }}>Special Education</button>
      <button onClick={() => { setCategory("teacher-training"); showAlert(); }}>Teacher Training</button>
      <button onClick={() => { setCategory("curriculum-design"); showAlert(); }}>Curriculum Design</button>
      <button onClick={() => { setCategory("student-assessment"); showAlert(); }}>Student Assessment</button>
      <button onClick={() => { setCategory("classroom-management"); showAlert(); }}>Classroom Management</button>
      <button onClick={() => { setCategory("study-abroad"); showAlert(); }}>Study Abroad</button>
      <button onClick={() => { setCategory("college-admissions"); showAlert(); }}>College Admissions</button>
      <button onClick={() => { setCategory("internships"); showAlert(); }}>Internships</button>
      <button onClick={() => { setCategory("education-research"); showAlert(); }}>Education Research</button>
    </div>
  </div>

  <div className="politicsDiv btnBigDiv">
    <button onClick={() => { setCategory("Politics"); showAlert(); }}>Politics</button>
    <div className="navSubDiv">
      <button onClick={() => { setCategory("international-politics"); showAlert(); }}>International Politics</button>
      <button onClick={() => { setCategory("local-politics"); showAlert(); }}>Local Politics</button>
      <button onClick={() => { setCategory("elections"); showAlert(); }}>Elections</button>
      <button onClick={() => { setCategory("government"); showAlert(); }}>Government</button>
      <button onClick={() => { setCategory("policy"); showAlert(); }}>Policy</button>
      <button onClick={() => { setCategory("political-debates"); showAlert(); }}>Political Debates</button>
      <button onClick={() => { setCategory("parties"); showAlert(); }}>Political Parties</button>
      <button onClick={() => { setCategory("activism"); showAlert(); }}>Activism</button>
      <button onClick={() => { setCategory("law"); showAlert(); }}>Law</button>
      <button onClick={() => { setCategory("human-rights"); showAlert(); }}>Human Rights</button>
      <button onClick={() => { setCategory("political-scandals"); showAlert(); }}>Political Scandals</button>
      <button onClick={() => { setCategory("public-policy"); showAlert(); }}>Public Policy</button>
      <button onClick={() => { setCategory("social-justice"); showAlert(); }}>Social Justice</button>
      <button onClick={() => { setCategory("corruption"); showAlert(); }}>Corruption</button>
      <button onClick={() => { setCategory("political-theories"); showAlert(); }}>Political Theories</button>
      <button onClick={() => { setCategory("voter-rights"); showAlert(); }}>Voter Rights</button>
      <button onClick={() => { setCategory("geopolitics"); showAlert(); }}>Geopolitics</button>
      <button onClick={() => { setCategory("government-reform"); showAlert(); }}>Government Reform</button>
      <button onClick={() => { setCategory("campaigns"); showAlert(); }}>Campaigns</button>
    </div>
  </div>

  <div className="sportsDiv btnBigDiv">
    <button onClick={() => { setCategory("Sports"); showAlert(); }}>Sports</button>
    <div className="navSubDiv">
      <button onClick={() => { setCategory("cricket"); showAlert(); }}>Cricket</button>
      <button onClick={() => { setCategory("football"); showAlert(); }}>Football</button>
      <button onClick={() => { setCategory("basketball"); showAlert(); }}>Basketball</button>
      <button onClick={() => { setCategory("tennis"); showAlert(); }}>Tennis</button>
      <button onClick={() => { setCategory("baseball"); showAlert(); }}>Baseball</button>
      <button onClick={() => { setCategory("hockey"); showAlert(); }}>Hockey</button>
      <button onClick={() => { setCategory("rugby"); showAlert(); }}>Rugby</button>
      <button onClick={() => { setCategory("golf"); showAlert(); }}>Golf</button>
      <button onClick={() => { setCategory("volleyball"); showAlert(); }}>Volleyball</button>
      <button onClick={() => { setCategory("boxing"); showAlert(); }}>Boxing</button>
      <button onClick={() => { setCategory("mma"); showAlert(); }}>MMA</button>
      <button onClick={() => { setCategory("athletics"); showAlert(); }}>Athletics</button>
      <button onClick={() => { setCategory("swimming"); showAlert(); }}>Swimming</button>
      <button onClick={() => { setCategory("table-tennis"); showAlert(); }}>Table Tennis</button>
      <button onClick={() => { setCategory("badminton"); showAlert(); }}>Badminton</button>
      <button onClick={() => { setCategory("cycling"); showAlert(); }}>Cycling</button>
      <button onClick={() => { setCategory("handball"); showAlert(); }}>Handball</button>
      <button onClick={() => { setCategory("wrestling"); showAlert(); }}>Wrestling</button>
      <button onClick={() => { setCategory("skiing"); showAlert(); }}>Skiing</button>
      <button onClick={() => { setCategory("surfing"); showAlert(); }}>Surfing</button>
    </div>
  </div>

  <div className="entertainmentDiv btnBigDiv">
    <button onClick={() => { setCategory("Entertainment"); showAlert(); }}>Entertainment</button>
    <div className="navSubDiv">
      <button onClick={() => { setCategory("movies"); showAlert(); }}>Movies</button>
      <button onClick={() => { setCategory("tv-shows"); showAlert(); }}>TV Shows</button>
      <button onClick={() => { setCategory("celebrity-news"); showAlert(); }}>Celebrity News</button>
      <button onClick={() => { setCategory("music"); showAlert(); }}>Music</button>
      <button onClick={() => { setCategory("theater"); showAlert(); }}>Theater</button>
      <button onClick={() => { setCategory("gaming"); showAlert(); }}>Gaming</button>
      <button onClick={() => { setCategory("books"); showAlert(); }}>Books</button>
      <button onClick={() => { setCategory("comedy"); showAlert(); }}>Comedy</button>
      <button onClick={() => { setCategory("fashion"); showAlert(); }}>Fashion</button>
      <button onClick={() => { setCategory("dance"); showAlert(); }}>Dance</button>
      <button onClick={() => { setCategory("reality-tv"); showAlert(); }}>Reality TV</button>
      <button onClick={() => { setCategory("podcasts"); showAlert(); }}>Podcasts</button>
      <button onClick={() => { setCategory("animation"); showAlert(); }}>Animation</button>
      <button onClick={() => { setCategory("art-exhibitions"); showAlert(); }}>Art Exhibitions</button>
      <button onClick={() => { setCategory("music-festivals"); showAlert(); }}>Music Festivals</button>
      <button onClick={() => { setCategory("streaming"); showAlert(); }}>Streaming</button>
      <button onClick={() => { setCategory("indie-music"); showAlert(); }}>Indie Music</button>
      <button onClick={() => { setCategory("comic-books"); showAlert(); }}>Comic Books</button>
      <button onClick={() => { setCategory("virtual-reality"); showAlert(); }}>Virtual Reality</button>
    </div>
  </div>

</div>




        <div className="navRight">
            <button onClick={changeMode} className='utilityButton'>{mode}</button>
            <button className='utilityButton MOptionBtn' onClick={toggleMenu} >{showMenu ? "X" :  "☰" } </button>
        </div>


        {showMenu && (
  <div className="MmenuDiv">
    <div className="MnavOptionDiv">
      <button onClick={() => { setCategory("General"); toggleMenu(); }}>General</button>
      <button onClick={() => { setCategory("Education"); toggleMenu(); }}>Education</button>
      <button onClick={() => { setCategory("Politics"); toggleMenu(); }}>Politics</button>
      <button onClick={() => { setCategory("Sports"); toggleMenu(); }}>Sports</button>
      <button onClick={() => { setCategory("Entertainment"); toggleMenu(); }}>Entertainment</button>
    </div>
  </div>
)}


          </nav>
<div className="searchDiv">
        <input className='colorText' type="search" name="" id="" onChange={(e)=>setQuery(e.target.value)} placeholder='Search News...' /> 
        
        <div className="searchIcon">
        <button className='colorText' onClick={() => {
  setCategory(query);  // This sets the category state to the value of 'query'
  showAlert();         // This triggers the alert function (perhaps showing a message)
}}>search</button>

            </div>
        </div>



       <div className="goToTopDiv">
        <a href="#nav"></a>
       </div>
            
        </>
    )
}
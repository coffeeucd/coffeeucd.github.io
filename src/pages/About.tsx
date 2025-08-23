import './About.css';
//placeholder image
import img1 from './blankPFP.jpg';
import img2 from './blankPFP.jpg';
import img3 from './blankPFP.jpg';
import img4 from './blankPFP.jpg';
import img5 from './blankPFP.jpg';
import img6 from './blankPFP.jpg';
import img7 from './blankPFP.jpg';
import img8 from './blankPFP.jpg';
import img9 from './blankPFP.jpg';
import img10 from './blankPFP.jpg';
import img11 from './blankPFP.jpg';
import img12 from './blankPFP.jpg';
const people1 = [
  { img: img1, position: "position", name: "name", major: "major" },
  { img: img2, position: "position", name: "name", major: "major" },
  { img: img3, position: "position", name: "name", major: "major" },
  { img: img4, position: "position", name: "name", major: "major" },
  { img: img5, position: "position", name: "name", major: "major" },
  { img: img6, position: "position", name: "name", major: "major" },
  { img: img7, position: "position", name: "name", major: "major" },
  { img: img8, position: "position", name: "name", major: "major" },
  { img: img9, position: "position", name: "name", major: "major" },
  { img: img10, position: "position", name: "name", major: "major" },
  { img: img11, position: "position", name: "name", major: "major" },
  { img: img12, position: "position", name: "name", major: "major" }
];

function About() {
  
  return (
    <div className="text-center ">
      <h1 className="dm-serif">about page</h1>
        <p className="inter-reg "> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      <h1 className="dm-serif">leadership</h1>
      <p className="inter-reg "> Hover over each photo to learn about the officer's position, name, and major!


        </p>
      {/*
      <div className = "row">
        <div className = "container group ">
          <img src = {img} alt = "Image 1" className = "image transition-opacity duration-300 group-hover:opacity-40"/>
          <div className = "overlay">
            <div className = "inter-reg text"> 
              <p><b> Position</b></p> 
              <p> Name</p> 
              <p> Major</p> 
              </div>
          </div>
          
        </div>

        <div className = "container group ">
          <img src = {img} alt = "Image 2" className = "image transition-opacity duration-300 group-hover:opacity-40"/>
          <div className = "overlay">
            <div className = "inter-reg text"> 
              <p><b> Position</b></p> 
              <p> Name</p> 
              <p> Major</p> 
            </div>
          </div>
          
        </div>

        <div className = "container group ">
          <img src = {img} alt = "Image 3" className = "image transition-opacity duration-300 group-hover:opacity-40"/>
          <div className = "overlay">
            <div className = "inter-reg text"> 
              <p><b> Position</b></p> 
              <p> Name</p> 
              <p> Major</p> 
            </div>
          </div>
          
        </div>

        <div className = "container group ">
          <img src = {img} alt = "Image 4" className = "image transition-opacity duration-300 group-hover:opacity-40"/>
          <div className = "overlay">
            <div className = "inter-reg text"> 
              <p><b> Position</b></p> 
              <p> Name</p> 
              <p> Major</p> 
            </div>
          </div>
          
        </div>

      </div> 
      */}
      
      <div className="flex flex-wrap justify-center gap-6">
        {people1.map((person, i) => (
          <div key={i} className="container group">
            <img
              src={person.img}
              alt={`Image ${i + 1}`}
              className="image object-cover transition-opacity duration-300 group-hover:opacity-40"
            />
            <div className="overlay">
              <div className="text inter-reg">
                <p><b>{person.position}</b></p>
                <p>{person.name}</p>
                <p>{person.major}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
        
      
  
    </div>
      
  )
}

export default About
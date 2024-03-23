import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(true)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="/src/assets/avatar.jpg" />

        <Title title="Sarisa Samrit (Pin)">
          <h3>Position : Graphic Design</h3>
        </Title>

        <Title title="Contact">
     
          <p>current date: {moment().format("D MMM YYYY")}</p>
          <p>Date of Birth: {moment("2003/04/25").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : +66825752775
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'hide'}
          </button>
          <p>Email : sarisa.samrit@hotmai.com</p>
          <p>www.sarisa_samrit.com</p>
        </Title>
    
        <Title title="Education">
          <p>2564-2566</p>
          <p>Bachelor of Science in Information Technology (IT)</p>
          <p>Suan Sunandha Rajabhat University</p> 
          <p>(Gpa : 3.67)</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>Creative Graphic Designer with a strong portfolio in logo design, print media, digital media, user interface, and website design.</p>
        </Title>

        <Title title="Experience">
          <p>Project: Graphic Design for Community Tourism Maps Collaborated with a friend to design 11 tourism maps for a local community.Maps were submitted to the Department of Tourism.Additionally, shot a video introducing tourist attractions in Bangsaen.</p>
        </Title>

        <Title title="Skills">
          <p>• Adobe Photoshop</p>
          <p>• Adobe Illustrator</p>
          <p>• Canva</p>
          <p>• Adobe Premiere Pro</p>
          <p>• Microsoft Office / Word /Excel / powerpoint</p>
          <p>• Graph design</p>
        </Title>

        <Title title="Soft Skills">
          <p>• Communication Skills</p>
          <p>• Teamwork Skills</p>
          <p>• Problem-Solving Skills</p>
          <p>• Time Management Skills</p>
          <p>• Emotional Skills</p>
          <p>• You can get along well with others.</p>
        </Title>

      </div>
    </main>
  )
}

export default App

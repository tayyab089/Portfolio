import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
          <div className="Banner">
                <Link to='/'><h1>Tayyab</h1></Link>
                <div className="Banner-Links-Box">
                    <Link to='/'><p style={{color: 'black'}}>Projects</p></Link>
                    <Link to='/about'><p style={{color: 'blue'}}>About</p></Link>
                    <Link to='/contact'><p style={{color: 'black'}}>Contact</p></Link>
                </div>
            </div>
            <div className="About-Container">
                <img src = {require('../Assets/Images/Me.jpg')} className = 'Me'/>
                <div>
                    <p className="Self-Description">
                     Hi! I am Tayyab Qamar who is mainly a front-end developer who can also work on back-end projects and databases. <br /><br />
                     I am a self learned software developer who loves to code <br /><br />
                     Have worked on various self developed and freelance based projects lately<br /><br />
                     Have mainly worked on React and React-Native projects in the recent past and am very keen to develop myself further in the React-Native area.<br /><br />
                     I consider myself a full stack js developer but am mostly focused on front end these days
                    </p>
                </div>
            </div>
            <div className="Footer">
                <p className="Footer-Text">Contact: tayyab089@gmail.com</p>
                <p className="Footer-Text">© M.Tayyab Qamar 2022. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default About;
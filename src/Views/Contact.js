import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div>
            <div className="Banner">
                <Link to='/'><h1>Tayyab</h1></Link>
                <div className="Banner-Links-Box">
                    <Link to='/'><p style={{color: 'black'}}>Projects</p></Link>
                    <Link to='/about'><p style={{color: 'black'}}>About</p></Link>
                    <Link to='/contact'><p style={{color: 'blue'}}>Contact</p></Link>
                </div>
            </div>
            <div className="Footer">
                <p className="Footer-Text">Contact: tayyab089@gmail.com</p>
                <p className="Footer-Text">© M.Tayyab Qamar 2022. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Contact;
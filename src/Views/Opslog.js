
import { Link } from "react-router-dom";
import { Card, Carousel} from 'antd';

import opslog from '../Assets/Images/OpsLogL.jpeg';

const { Meta } = Card;

const contentStyle = {
    height: '500px',
    margin: '20px auto',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#18A558',
};

const contentStyle2 = {
    height: '100px',
    lineHeight: '100px',
    textAlign: 'center',
    background: '#18A558',
};

const onChange = (currentSlide) => {
    console.log(currentSlide);
};

const Opslog =() => {
    const images = [1,2,3,4,5,6,7,8,9,10]

    return (
        <div>
             <div className="Banner">
                <Link to='/'><h1>Tayyab</h1></Link>
                <div className="Banner-Links-Box">
                    <Link to='/'><p style={{color: 'black'}}>Projects</p></Link>
                    <Link to='/about'><p style={{color: 'black'}}>About</p></Link>
                    <Link to='/contact'><p style={{color: 'black'}}>Contact</p></Link>
                </div>
            </div>
            <div className="Description-Card-Container">
            <Card
                hoverable
                className= 'Description-Card'
                cover={<img className = 'Description-Card-Image' alt="example" src={opslog} />}
            >
                <div className='Heading-Box'>
                    <h1 className='Card-Title'>OpsLog</h1>
                    <p className='Card-Description'>
                        Opslog is a data logging app that can be used by field operators at power plants to collect data from their field rounds. It enables them to take various readings and observations for each KKS coded instrument (Temperatures, Pressures, Flows etc.) either  via a drill down menu or directly via QR code scanning. Following are the apps key features:<br /><br />
                            • Take Data Input from user and store it in a local database.<br />
                            • Send Data to the back-end server where it is stored stored into a master database<br />
                            • Data validation while input i.e. it gives errors on minimum/maximum value breached for each input etc.<br />
                            • Display of Data tables and historical trends of locally stored data<br /><br />
                        
                            The UI for front end is mainly designed in react-native-paper, whereas react-navigation has been used for navigation purposes. Other notable libraries used include react-native-camera for QR code scanning, react-native-keychain for local authentication token storage, react-native-chartkit for trends and graphs, react-native-sqlite-storage for local data storage.<br />
                            The back-end login and authentication server was created in nodeJS and uses mongoDB as the database and JWT to generate JSON web tokens.<br />
                            The back-end server for master database was designed in DJANGO.<br />
                    </p>
                </div>
            </Card>
            </div>
            {/* <div className='Carousel'>
            <h3 style={contentStyle2}>App Screenshots</h3>
            <Carousel afterChange={onChange}  autoplay>
                    <div className="Carousel-Item">
                        <img style={contentStyle} src={require('../Assets/Images/Opslog1.jpeg')}/>
                        <h3 style={contentStyle2}>1</h3>
                    </div>
                    <div>
                        <img style={contentStyle} src={require('../Assets/Images/Opslog2.jpeg')}/>
                        <h3 style={contentStyle2}>2</h3>
                    </div>
                    <div>
                        <img style={contentStyle} src={require('../Assets/Images/Opslog3.jpeg')}/>
                        <h3 style={contentStyle2}>3</h3>
                    </div>
                    <div>
                        <img style={contentStyle} src={require('../Assets/Images/Opslog4.jpeg')}/>
                        <h3 style={contentStyle2}>4</h3>
                    </div>
                </Carousel>
                </div> */}
                <div className='Carousel'>
                    <h3 style={contentStyle2}>App Screenshots</h3>
                    <Carousel autoplay>
                        {images.map(item => {
                            return(
                                <div className="Carousel-Item">
                                    <img style={contentStyle} src={require(`../Assets/Images/Opslog${item}.jpeg`)}/>
                                    <h3 style={contentStyle2}>{item}</h3>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
        </div>
    )
}

export default Opslog;
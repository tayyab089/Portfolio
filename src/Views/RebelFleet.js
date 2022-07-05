
import { Link } from "react-router-dom";
import { Card, Carousel} from 'antd';

import rebelfleet from '../Assets/Images/RebelFleetL.jpeg';

const { Meta } = Card;

const contentStyle = {
    height: '500px',
    margin: '20px auto',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#f4511e',
};

const contentStyle2 = {
    height: '100px',
    lineHeight: '100px',
    textAlign: 'center',
    background: '#f4511e',
};

const onChange = (currentSlide) => {
    console.log(currentSlide);
};

const RebelFleet =() => {
    const images = [1,2,3,4,5,6,7,8]

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
                cover={<img className = 'Description-Card-Image' alt="example" src={rebelfleet} />}
            >
                <div className='Heading-Box'>
                    <h1 className='Card-Title'>RebelFleet</h1>
                    <p className='Card-Description'>
                    This is a fleet management app whereby someone who owns more than one cars can manage its mileage and fuel data for all the cars via this app. Following are the key features:<br/><br/>
                        • Development of Cards for each app where you can capture and place customized pictures of the cars on each card<br/>
                        • Fuel and Mileage Data input for each car<br/>
                        • Trend of Fuel filled and Mileage driven for a car w.r.t the dates<br/>
                        • Export the fuel and/or mileage data to an excel file feature<br/><br/>
                        
                            The UI for front end is mainly designed in react-native-paper, whereas react-navigation has been used for navigation purposes. Other notable libraries used include react-native-image-picker for car image capture or selection, react-native-fs to output an excel data file, react-native-keychain for local authentication token storage, react-native-chartkit for trends and graphs, react-native-sqlite-storage for local data storage.<br />
                            The back-end login and authentication server was created in nodeJS and uses mongoDB as the database and JWT to generate JSON web tokens.<br />
                    </p>
                </div>
            </Card>
            </div>
            <div className='Carousel'>
                <h3 style={contentStyle2}>App Screenshots</h3>
                <Carousel autoplay>
                    {images.map(item => {
                        return(
                            <div className="Carousel-Item">
                                <img style={contentStyle} src={require(`../Assets/Images/rebelfleet${item}.jpeg`)}/>
                                <h3 style={contentStyle2}>{item}</h3>
                            </div>
                        )
                    })}
                </Carousel>
            </div>
            <div className="Footer">
                <p className="Footer-Text">Contact: tayyab089@gmail.com</p>
                <p className="Footer-Text">© M.Tayyab Qamar 2022. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default RebelFleet;
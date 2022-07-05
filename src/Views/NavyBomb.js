
import { Link } from "react-router-dom";
import { Card, Carousel} from 'antd';

import navybomb from '../Assets/Images/gamble.jpeg';

const { Meta } = Card;

const contentStyle = {
    height: '500px',
    margin: '20px auto',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#2553e8',
};

const contentStyle2 = {
    height: '100px',
    lineHeight: '100px',
    textAlign: 'center',
    background: '#172963',
};

const onChange = (currentSlide) => {
    console.log(currentSlide);
};

const NavyBomb =() => {
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
                cover={<img className = 'Description-Card-Image' alt="example" src={navybomb} />}
            >
                <div className='Heading-Box'>
                    <h1 className='Card-Title'>Navy Bomb</h1>
                    <p className='Card-Description'>
                        A betting game where you select where to place your ships and based on that if you win or lose <br />
                        The UI for front end is mainly designed in React and using Styled Components Library<br />
                    </p>
                </div>
            </Card>
            </div>
                {/* <div className='Carousel'>
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
                </div> */}
                <div className="Footer">
                    <p className="Footer-Text">Contact: tayyab089@gmail.com</p>
                    <p className="Footer-Text">© M.Tayyab Qamar 2022. All Rights Reserved</p>
                </div>
        </div>
    )
}

export default NavyBomb;
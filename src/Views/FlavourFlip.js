
import { Link } from "react-router-dom";
import { Card, Carousel} from 'antd';

import flavourflip from '../Assets/Images/FlavourFlip.jpg';

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

const FlavourFlip =() => {
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
                cover={<img className = 'Description-Card-Image' alt="example" src={flavourflip} />}
            >
                <div className='Heading-Box'>
                    <h1 className='Card-Title'>Flavour Flip</h1>
                    <p className='Card-Description'>
                        It is a react based app where you select your cooking preferences and then get matching recepies. <br />
                        The UI for front end is mainly designed in React, HTML and CSS<br />
                    </p>
                </div>
                <div className='Link-Box'>
                    <a className='Links' href='https://flavourflip.com/' target = '_blank'>Live Demo</a>
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
        </div>
    )
}

export default FlavourFlip;
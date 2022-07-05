import CardComponent from "../Components/Card";

import { Link} from "react-router-dom";

import opslog from '../Assets/Images/OpsLogL.jpeg';
import rebelfleet from '../Assets/Images/RebelFleetL.jpeg';
import flavourflip from '../Assets/Images/FlavourFlip.jpg';
import gamble from '../Assets/Images/gamble.jpeg';

const Home = () => {
    return (
        <div>
            <div className="Banner">
                <Link to='/'><h1>Tayyab</h1></Link>
                <div className="Banner-Links-Box">
                    <Link to='/'><p style={{color: 'blue'}}>Projects</p></Link>
                    <Link to='/about'><p style={{color: 'black'}}>About</p></Link>
                    <Link to='/contact'><p style={{color: 'black'}}>Contact</p></Link>
                </div>
            </div>
            <div className="Card-Container">
                <CardComponent
                title="OpsLog"
                image={opslog}
                description="React-Native/RN-Paper/React-Navigation More.."
                destination="/data"
                width = '31vw'
                code = 'https://github.com/tayyab089/OpsLog'
                route = '/opslog'
                />
                <div>
                    <div style = {{marginBottom: 15}}>
                    <CardComponent
                    title="Flavour Flip"
                    image={flavourflip}
                    description="React/Styling Read More..."
                    destination="/data"
                    width = '31vw'
                    code ='https://github.com/ZehraRiz/flavor-flip'
                    route = '/flavourflip'
                    />
                    </div>
                    <CardComponent
                    title="Navy Bomb"
                    image={gamble}
                    description="React/Styled Components More.."
                    destination="/data"
                    width = '31vw'
                    code = 'https://github.com/tayyab089/RebelFleet'
                    route = '/navybomb'
                    />
                </div>
                <CardComponent
                title="Rebel Fleet"
                image={rebelfleet}
                description="React-Native/RN-Paper/React-Navigation More.."
                destination="/data"
                width = '31vw'
                code = 'https://github.com/tayyab089/RebelFleet'
                route = '/rebelfleet'
                />
            </div>
        </div>
    )
};

export default Home;
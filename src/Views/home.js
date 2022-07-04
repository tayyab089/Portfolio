import CardComponent from "../Components/Card";

import opslog from '../Assets/Images/OpsLogL.jpeg';
import rebelfleet from '../Assets/Images/RebelFleetL.jpeg';
import flavourflip from '../Assets/Images/FlavourFlip.jpg';
import gamble from '../Assets/Images/gamble.jpeg';

const Home = () => {

    return (
        <div>
            <div className="Banner">
                <h1>Tayyab</h1>
                <div className="Banner-Links-Box">
                    <p>Projects</p>
                    <p>About</p>
                    <p>Contact</p>
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
                />
                <div>
                    <div style = {{marginBottom: 15}}>
                    <CardComponent
                    title="Flavor Flip"
                    image={flavourflip}
                    description="React/Styling Read More..."
                    destination="/data"
                    width = '31vw'
                    code ='https://github.com/ZehraRiz/flavor-flip'
                    />
                    </div>
                    <CardComponent
                    title="Gambling Game"
                    image={gamble}
                    description="React/Styled Components More.."
                    destination="/data"
                    width = '31vw'
                    code = 'https://github.com/tayyab089/RebelFleet'
                    />
                </div>
                <CardComponent
                title="Rebel Fleet"
                image={rebelfleet}
                description="React-Native/RN-Paper/React-Navigation More.."
                destination="/data"
                width = '31vw'
                code = 'https://github.com/tayyab089/RebelFleet'
                />
            </div>
        </div>
    )
};

export default Home;
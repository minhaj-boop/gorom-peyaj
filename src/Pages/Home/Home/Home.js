import { Navbar } from 'react-bootstrap';
import Breakfasts from '../Breakfasts/Breakfasts';
import Dinners from '../Dinners/Dinners';
import Lunches from '../Lunches/Lunches';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className="gp-center">
                <Navbar.Brand className="gp-color" href="#">All Items</Navbar.Brand>
            </div>
            <Breakfasts></Breakfasts>
            <Lunches></Lunches>
            <Dinners></Dinners>
        </>

    );
};

export default Home;
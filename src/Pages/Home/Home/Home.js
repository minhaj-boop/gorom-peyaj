import { Container, Nav, Navbar } from 'react-bootstrap';
import Breakfasts from '../Breakfasts/Breakfasts';
import Dinners from '../Dinners/Dinners';
import Lunches from '../Lunches/Lunches';
import Banner from '../Banner/Banner';
import { Link, Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import './Home.css';

const Home = () => {
    let { path, url } = useRouteMatch();

    return (
        <>
            <Banner></Banner>
            <div className="gp-center">
                <Navbar.Brand className="gp-color" href="#">All Items</Navbar.Brand>
            </div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={`${url}/breakfast`}>Breakfast</Nav.Link>
                        <Nav.Link as={Link} to={`${url}/lunch`}>Lunch</Nav.Link>
                        <Nav.Link as={Link} to={`${url}/dinner`}>Dinner</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Breakfasts></Breakfasts>
            <Lunches></Lunches>
            <Dinners></Dinners>
            {/* <Switch>
                <Route exact path={path}>
                    <Breakfasts></Breakfasts>
                </Route>
                <Route exact path={path}>
                    <Lunches></Lunches>
                </Route>
                <Route exact path={path}>
                    <Dinners></Dinners>
                </Route>
            </Switch> */}
        </>

    );
};

export default Home;
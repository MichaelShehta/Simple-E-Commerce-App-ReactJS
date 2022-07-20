import {useLocation} from 'react-router-dom';

const Home = (props) => {
    const location = useLocation();
    console.log(location);
    return ( <h3>Welcome To My Website</h3> );
}
 
export default Home;
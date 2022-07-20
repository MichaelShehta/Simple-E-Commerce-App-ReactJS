import {useParams,useLocation} from 'react-router-dom';
import queryString from 'query-string'
const ProductPage = () => {


    //  Task1 How To Use .. Hooks (useLocation - useParams & QueryString To search)
     // Using Query String 
     const location = useLocation();
     const querystring = queryString.parse(location.search);
     console.log(querystring);

    // To Print id & Price OF Product 
    const {id,price} = useParams();
    return ( <h2> Product No : {id} & Price : {price} </h2> );

   
}
 
export default ProductPage;


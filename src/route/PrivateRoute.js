import ProductDetailpage from "../page/ProductDetailpage";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({authenticate}) => {
    return !!authenticate ? <ProductDetailpage /> : <Navigate to='/login' />
}

export default PrivateRoute;
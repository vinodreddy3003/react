import { replace, useNavigate } from "react-router-dom";

const Home =()=>{
    const navigate=useNavigate()

    return (
        <div>
            <h1>Home page</h1>
            <button onClick={()=>{navigate('orderSummary',{replace:true})}}>place order</button>
        </div>
    )

}
export default Home;
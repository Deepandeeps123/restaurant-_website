import { Link } from "react-router-dom"

let Nav=()=>{
    return(
        <div className="bar">
             <div className="left">
                <h1>MyApp</h1>
             </div>
             <div className="right">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/menu">Menu</Link></li>
             </div>
        </div>
    )
}

export default Nav
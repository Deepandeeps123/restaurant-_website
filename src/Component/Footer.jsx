import { Link } from "react-router-dom"



let Footer=()=>{
    return(
        <div>
            <div className="D">
                <div className="D1">
                    <div className="d">
                        <h1 id="d">Company</h1>
                    </div>
                    <div className="d1">
                        <ul type='circle'>
                            <li ><Link id="d1" to=""><span></span>About</Link></li>
                            <li ><Link id="d1" to=""><span></span>Contact Us</Link></li>
                            <li><Link id="d1" to=""><span></span>Reservation</Link></li>
                            <li><Link id="d1" to=""><span></span>Privacy Policy</Link></li>
                            <li><Link id="d1" to=""><span></span>Terms & Condition</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="D2">
                    <div className="dd">
                        <h1 id="d">Contact</h1>
                    </div>
                    <div className="dd1">
                        <h5>123 Street, New York, USA</h5>
                        <h5>+012 345 67890</h5>
                        <h5>mail@domain.com</h5>
                    </div>
                </div>
                <div className="D3">
                    <div className="ddd">
                        <h1 id="d">Opening</h1>
                    </div>
                    <div className="ddd1">
                        <h3>Monday - Saturday</h3>
                        <h3>09AM - 09PM</h3>
                        <h3>Sunday</h3>
                        <h3>10AM - 08PM</h3>
                    </div>
                </div>
                <div className="D4">
                    <div className="dddd">
                        <h1 id='d'>Newsletter</h1>
                    </div>
                    <div className="dddd1">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, esse!</p>
                    </div>
                    <input type="text" placeholder="Your Email" />
                    <button>Signup</button>
                </div>
            </div>
        </div>
    )
}

export default Footer
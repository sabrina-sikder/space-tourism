import { Outlet,NavLink } from "react-router-dom";


export default function Destination(){
    const activeStyle = {
        textDecoration: "underline",
        color: "white"
     }

    return(
        <div className="destination-container">
            <h2 className="page-title up"><span>01</span>Pick your destination</h2>
            <nav className="destination-nav up">
                <NavLink 
                className="blue"
                style={({isActive})=>isActive?activeStyle:null}
                end
                to='.'>Moon</NavLink>
                <NavLink
                className="blue"
                style={({isActive})=>isActive?activeStyle:null} 
                to='mars'>Mars</NavLink>
                <NavLink
                 className="blue"
                 style={({isActive})=>isActive?activeStyle:null}
                 to='europa'>Europa</NavLink>
                <NavLink
                 className="blue"
                 style={({isActive})=>isActive?activeStyle:null} 
                 to='titan'>Titan</NavLink>
            </nav>
            <Outlet/>
        </div>    
    )
}
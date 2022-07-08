import { NavLink } from "react-router-dom"
export const NavBar = () => {

    const navLinkStyles = ({isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none': 'underline'

        }
    }

    return (
        <nav className="primary-nav">
            <NavLink style ={navLinkStyles}to = '/'>Home</NavLink> 
            <NavLink style ={navLinkStyles} to ='/orders'>Show Orders</NavLink>
            <NavLink style ={navLinkStyles} to ='/orders/add'>Show Products</NavLink>

        </nav>
    )
}
import { NavLink } from "react-router-dom"

interface IProps {

}

const Nav = ({}:IProps) => {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/learn">learn</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Nav
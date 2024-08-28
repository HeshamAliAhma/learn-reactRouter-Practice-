import { NavLink } from "react-router-dom"


const Aside = () => {
    return (
        <aside>
            <ul>
                <li>
                    <NavLink to="/learn">Quick Start</NavLink>
                </li>
                <li>
                    <NavLink to="/learn/Thinking-in-react">Thinking in React</NavLink>
                </li>
                <li>
                    <NavLink to="/learn/installation">Installation</NavLink>
                </li>
            </ul>
        </aside>
    )
}

export default Aside
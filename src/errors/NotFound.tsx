import { Link } from "react-router-dom"

interface IProps {

}

const NotFound = ({ }: IProps) => {
    return (
        <div>
            <div>
                <h1>404</h1>
                <p>Uh-oh!</p>
                <p>We can't find that page.</p>
                <Link to="/"> Go Back Home </Link>
            </div>
        </div>

    )
}

export default NotFound
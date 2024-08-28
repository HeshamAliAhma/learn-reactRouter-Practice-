import { Outlet } from "react-router-dom"
import Nav from "../components/Nav"

interface IProps {

}

const rootLayout = ({}:IProps) => {
  return (
      <div>
            <Nav/>
            <div>Root Layout</div>
            <Outlet/>
        </div>
  )
}

export default rootLayout
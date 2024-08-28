import { Outlet } from "react-router-dom"
import Nav from "../../components/Nav"
import Aside from "../../components/Aside"

interface IProps {

}

const LearnLayout = ({}:IProps) => {
  return (
      <div>
            <Nav/>
            <Aside/>
            <div>Learn Layout</div>
            <Outlet/>
        </div>
  )
}

export default LearnLayout
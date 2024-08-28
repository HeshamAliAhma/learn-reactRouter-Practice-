import { ReactNode } from "react"
import { Navigate } from "react-router-dom"

interface IProps {
isLogin:boolean,
RedirectPath:string,
children:ReactNode
}

const Prodect = ({isLogin,RedirectPath,children}:IProps) => {
    if(!isLogin) return <Navigate to={RedirectPath} />
    return children;
}

export default Prodect
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "../views/Layout"
import ContactPage from "../views/Contact";
import AboutPage from "../views/About";
import HomePage from "../views/Index";
import LearnLayout from "../views/learn/Layout";
import QuickStart from "../views/learn";
import ThinkingInReact from "../views/learn/Thinking";
import Installation from "../views/learn/Installation";
import Cont from "../views/Cont";
import Login from "../views/Login";
import Prodect from "../auth/Prodect";

const isLogin = false

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="learn" element={<LearnLayout />} />
            <Route path="cont"
                element={<Prodect isLogin={isLogin} RedirectPath={"/login"}>
                    <Cont />
                </Prodect>} />
            <Route path="login"
                element={<Prodect isLogin={!isLogin} RedirectPath={"/cont"}>
                    <Login />
                </Prodect>} />

        </Route>

        <Route path="/learn" element={<LearnLayout />}>
            <Route index element={<QuickStart />} />
            <Route path="Thinking-in-react" element={<ThinkingInReact />} />
            <Route path="installation" element={<Installation />} />
        </Route>

    </>

));

export default router
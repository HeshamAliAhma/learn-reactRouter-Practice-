import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "../views/Layout"
import ContactPage from "../views/Contact";
import AboutPage from "../views/About";
import HomePage from "../views/Index";
import LearnLayout from "../views/learn/Layout";
import QuickStart from "../views/learn";
import ThinkingInReact from "../views/learn/Thinking";


const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="learn" element={<LearnLayout />} />

        </Route>

        <Route path="/learn" element={<LearnLayout />}>
            <Route index element={<QuickStart />} />
            <Route path="/Thinking-in-react" element={<ThinkingInReact />} />
        </Route>

    </>

));

export default router
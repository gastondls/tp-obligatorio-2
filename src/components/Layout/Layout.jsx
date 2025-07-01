import Header from "../header.jsx"
import Footer from "../Footer.jsx"
const Layout = (props) => {
    return (
        <>
        <Header/>
        {props.children}
        <Footer/>
        </>
    )
}

export default Layout
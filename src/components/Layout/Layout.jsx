import Header from "../Header/Header.jsx"
import Footer from "../Footer/Footer.jsx"
import './Layout.css'
const Layout = (props) => {
    return (
        <>
        <div className="layout">
        <Header/>
        {props.children}
        <Footer/>
        </div>
        </>
    )
}

export default Layout
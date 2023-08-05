import unifatecie_5estrelas from '../../assets/unifatecie_5estrelas.png';
import './Navbar.css';


const Navbar = ({ sidebarOpen, openSidebar}) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars" aria-hidden= "true"></i>
            </div>

            <div className="navbar__left">
                <a href="#" className="active_link">Home</a>
            </div>

            <div className="navbar__right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>

                <a href="#">
                    <i className="fa fa-clock-o"></i>
                </a>

                <a href="#">
                    <img width="60" src={unifatecie_5estrelas} alt="unifatecie_5estrelas"/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;
import './Sidebar.css';
import logo from '../../assets/logo.jpg';
import unifatecielogo from '../../assets/unifatecie_logo.png';
import {FaHouseUser, FaGraduationCap, FaBookOpen, FaLandmark, FaFileDownload, FaRegClock, FaCommentDots, FaReceipt, FaArrowAltCircleLeft, FaUserTie, FaUserGraduate,
FaUserShield, FaUserAlt, FaPaperPlane } from 'react-icons/fa';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo"/>
                    <h1>UniFatecie</h1>
                </div>
                <i onClick={() => closeSidebar()}
                className="fa fa-times"
                id="sidebarIcon"
                aria-hidden="true"
                ></i>
            </div>
            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i><FaHouseUser size={25}/></i>
                    <a href= "#">Home</a>
                </div>
                <h2>ADMIN</h2>
                <div className="sidebar__link">
                    <i><FaGraduationCap size={25}/></i>
                    <a href= "#">Área do Aluno</a>
                </div>
                <div className="sidebar__link">
                    <i><FaBookOpen size={25}/></i>
                    <a href= "#">Matérias</a>
                </div>
                <div className="sidebar__link">
                    <i><FaLandmark size={25}/></i>
                    <a href= "#">Classes</a>
                </div>
                <div className="sidebar__link">
                    <i><FaFileDownload size={25}/></i>
                    <a href= "#">Comprovante de Matrícula</a>
                </div>
                <div className="sidebar__link">
                    <i><FaRegClock size={25}/></i>
                    <a href= "#">Horários</a>
                </div>
                <div className="sidebar__link">
                    <i><FaCommentDots size={25}/></i>
                    <a href= "#">Atendimentos</a>
                </div>
                <div className="sidebar__link">
                    <i><FaReceipt size={25}/></i>
                    <a href= "#">Boletim</a>
                </div>
                <div className="sidebar__link">
                    <i><FaPaperPlane size={25}/></i>
                    <a href= "#">Notas</a>
                </div>
                <h2>PESSOAS</h2>
                <div className="sidebar__link">
                    <i><FaUserGraduate size={25}/></i>
                    <a href= "#">Alunos</a>
                </div>
                <div className="sidebar__link">
                    <i><FaUserAlt size={25}/></i>
                    <a href= "#">Professores</a>
                </div>
                <div className="sidebar__link">
                    <i><FaUserShield size={25}/></i>
                    <a href= "#">Pedagogos</a>
                </div>
                <div className="sidebar__link">
                    <i><FaUserTie size={25}/></i>
                    <a href= "#">Diretoria</a>
                </div>
                <div className="sidebar__logout">
                    <i><FaArrowAltCircleLeft size={25}/></i>
                    <a href= "#">Log out</a>
                </div>
                <div className="sidebar__logout">
                    <i><FaArrowAltCircleLeft size={25}/></i>
                    <a href= "#">Log out</a>
                </div>
            </div>
        </div>
    )

}

export default Sidebar;
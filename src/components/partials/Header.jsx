import NavTab from '../Header/NavTab';
import NavBar from '../Header/NavBar';
import HeaderTop from '../Header/HeaderTop';
import '../CSS/Header.css'


function Header() {

    return (
        <div className='headerContainer'>
            <HeaderTop />
            <NavBar />
            <NavTab />
        </div>
    );
}

export default Header;
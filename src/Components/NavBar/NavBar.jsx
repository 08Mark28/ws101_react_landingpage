import './NavBar.css';

function NavBar(){
    return (
        <div className='container'>
            <nav className="navbar">
                <h1 className="nav-title">Mark's-Dev</h1>
                    <ul>
                        <li className='btn1'><a href="#home">Home</a></li>
                        <li className='btn2'><a href="#about">About</a></li>
                        <li className='btn3'><a href="#importance">Importance</a></li>
                    </ul>
                </nav>
        </div>
    )
}

export default NavBar;
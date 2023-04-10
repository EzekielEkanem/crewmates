import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <nav className="sidenav">
                <ul>
                    <li>
                        <Link 
                            style={{color: "white"}}
                            to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            style={{color: "white"}}
                            to="/CreatePost">
                            Create a Player!
                        </Link>
                    </li>
                    <li>
                        <Link 
                            style={{color: "white"}}
                            to="/ReadPost">
                            Player Gallery
                        </Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout;
import Link from "next/link"
const Navbar = (props) => {
    return (
        <div>
            {/* Navbar */}
            {(props.transparent) ? (
                <nav className="navbar navbar-expand-lg navbar-light">
                    {/* Container wrapper */}
                    <div className="container-fluid">
                        {/* Navbar brand */}
                        <Link href="" className="navbar-brand">
                            <div style={{ display: "flex" }}>
                                <img className="logo" src="" alt="Team Overc's Architects" />
                                {/* <h2 id="logo-text">Team Over CS Architects</h2> */}
                            </div>
                        </Link>
                        {/* Toggle button */}
                        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i id="header-bars" className="fas fa-bars" />
                        </button>
                        {/* Collapsible wrapper */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Left links */}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link href="" className="nav-link active t-none">HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="" className="nav-link t-none">ABOUT</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="" className="nav-link t-none">SERVICES</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="" className="nav-link t-none">OUR PROJECTS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="" className="nav-link t-none">OUR CERTIFICATION</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="" className="nav-link t-none">CONTACT US</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="" className="nav-link t-none">COMPANY PROFILE</Link>
                                </li>
                            </ul>
                            {/* Left links */}
                        </div>
                        {/* Collapsible wrapper */}
                    </div>
                    {/* Container wrapper */}
                </nav>
            ) : (
                <nav className="navbar navbar-expand-lg bg-dark navbar-light">
                    {/* Container wrapper */}
                    <div className="container-fluid">
                        {/* Navbar brand */}
                        <Link href="" className="navbar-brand">
                            <div style={{ display: "flex" }}>
                                <img className="logo" src={logo} alt="Team Overc's Architects" />
                                {/* <h2 id="logo-text">Team Over CS Architects</h2> */}
                            </div>
                        </Link>
                        {/* Toggle button */}
                        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i id="header-bars" className="fas fa-bars" />
                        </button>
                        {/* Collapsible wrapper */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Left links */}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link href="" className="nav-link active t-none">HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="" className="nav-link t-none">ABOUT</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="" className="nav-link t-none">SERVICES</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="" className="nav-link t-none">OUR PROJECTS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="" className="nav-link t-none">OUR CERTIFICATION</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="" className="nav-link t-none">CONTACT US</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="" className="nav-link t-none">BLOG</Link>
                                </li>
                            </ul>
                            {/* Left links */}
                        </div>
                        {/* Collapsible wrapper */}
                    </div>
                    {/* Container wrapper */}
                </nav>
            )}
            {/* Navbar */}
        </div >
    )
}

export default Navbar;
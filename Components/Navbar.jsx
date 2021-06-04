import { useEffect } from 'react'
import Link from "next/link";

const Navbar = (props) => {

    useEffect(() => {
        // The debounce function receives our function as a parameter
        const debounce = (fn) => {
            // This holds the requestAnimationFrame reference, so we can cancel it if we wish
            let frame;
            // The debounce function returns a new function that can receive a variable number of arguments
            return (...params) => {
                // If the frame variable has been defined, clear it now, and queue for next frame
                if (frame) {
                    cancelAnimationFrame(frame);
                }
                // Queue our function call for the next frame
                frame = requestAnimationFrame(() => {
                    // Call our function and pass any params we received
                    fn(...params);
                });
            }
        };

        // Reads out the scroll position and stores it in the data attribute
        // so we can use it in our stylesheets
        const storeScroll = () => {
            document.documentElement.dataset.scroll = window.scrollY;
        }

        // Listen for new scroll events, here we debounce our `storeScroll` function
        document.addEventListener('scroll', debounce(storeScroll), { passive: true });

        // Update scroll position for first time
        storeScroll();
    })

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
                        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars" />
      </button>           {/* Collapsible wrapper */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Left links */}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link t-none"><Link href="/">HOME</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link t-none">  <Link href="/">ABOUT</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link t-none"><Link href="/">SERVICES</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link t-none"> <Link href="/">OUR PROJECTS</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link t-none"><Link href="/">OUR CERTIFICATION</Link></a>

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link t-none"><Link href="/">CONTACT US</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link t-none"><Link href="/">BLOG</Link></a>
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
                                <img className="logo" src="" alt="Team Overc's Architects" />
                                {/* <h2 id="logo-text">Team Over CS Architects</h2> */}
                            </div>
                        </Link>
                        {/* Toggle button */}
                        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars" />
      </button>
                        {/* Collapsible wrapper */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Left links */}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link t-none"><Link href="/">HOME</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link t-none">  <Link href="/">ABOUT</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link t-none"><Link href="/">SERVICES</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link t-none"> <Link href="/">OUR PROJECTS</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link t-none"><Link href="/">OUR CERTIFICATION</Link></a>

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link t-none"><Link href="/">CONTACT US</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link t-none"><Link href="/">BLOG</Link></a>
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
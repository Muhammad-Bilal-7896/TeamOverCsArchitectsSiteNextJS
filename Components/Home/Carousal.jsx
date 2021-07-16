import React, { useState, useEffect } from 'react';

const Carousal = (props) => {

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
        <>
            {/* Carousel wrapper */}
            <div id="carouselBasicExample" className="carousel slide carousel-fade" data-mdb-ride="carousel">
                {/* Indicators */}
                <div className="carousel-indicators">
                    <button id="btn-indicator" data-mdb-target="#carouselBasicExample" data-mdb-slide-to={0} aria-label="Slide 1" ><i className="far fa-circle btn-indicatorInside"></i></button>
                    <button id="btn-indicator" data-mdb-target="#carouselBasicExample" data-mdb-slide-to={1} aria-label="Slide 2" ><i className="far fa-circle btn-indicatorInside"></i></button>
                    <button id="btn-indicator" data-mdb-target="#carouselBasicExample" data-mdb-slide-to={2} aria-label="Slide 3" ><i className="far fa-circle btn-indicatorInside"></i></button>
                </div>
                {/* Inner */}
                <div className="carousel-inner">
                    {/* Single item */}
                    <div className="carousel-item active" data-mdb-interval="3000">
                        <img className="slide-image" src="/slide1.jpg" alt="A beautiful House" />
                        <div className="carousel-caption">
                            <h5 className="TitleCarousal">Team Overc's Architects</h5>
                            <p className="DiscCarousal">An Architect Company in Pakistan.</p>
                        </div>
                    </div>
                    {/* Single item */}
                    <div className="carousel-item" data-mdb-interval="3000">
                        {/* <div className="slide-image2"></div> */}
                        <img className="slide-image" src="/slide2.jpg" alt="A beautiful House" />
                        <div className="carousel-caption">
                            <h5 className="TitleCarousal">Second slide label</h5>
                            <p className="DiscCarousal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    {/* Single item */}
                    <div className="carousel-item" data-mdb-interval="3000">
                        {/* <div className="slide-image3"></div> */}
                        <img className="slide-image" src="/slide3.jpg" alt="A beautiful House" />
                        <div className="carousel-caption">
                            <h5 className="TitleCarousal">Third slide label</h5>
                            <p className="DiscCarousal">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </div>
                </div>
                {/* Inner */}
                {/* Controls */}
                <span className="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
                    <i className="fas fa-chevron-left left-right-icon left-right-icon"></i>
                </span>
                <span className="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
                    <i className="fas fa-chevron-right left-right-icon left-right-icon"></i>
                </span>
            </div>
            {/* Carousel wrapper */}
        </>
    )
}

export default Carousal;
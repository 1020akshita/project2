import React from 'react';
import './Home.css';
import img2 from '../images/img2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'
import img7 from '../images/7.jpg'
import img8 from '../images/8.jpg'
import img9 from '../images/9.jpg'




const Home = () => {
    return (
        <div className="homepage">
            <header className="hero">
                <div className="hero-content">
                    <h1>The Tailor Is In</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nam praesentium eius, tenetur animi soluta!</p><hr />

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nam praesentium eius, tenetur animi soluta!</p>
                    <a href="#about" className="btn">Book An Apointment</a>
                </div>
            </header>

            <section id="Sec-2" className="about-section">
                <div className="container">
                    {/* <div className="div-box"> */}
                    <h2>The Made To Measure Difference</h2>
                    <div className="line"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a href='' className='btn '>See The Suits</a>

                </div>
                {/* </div> */}
            </section>

            {/* <section id="about" className="about-section">
                <div className="container">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero at turpis elementum, eget accumsan arcu luctus. Ut auctor, nisi vel consectetur malesuada, nisi mi feugiat dolor, id tempus eros libero sed leo.</p>
                </div>
            </section> */}
            {/* <section className="services-section"> */}
            <div className="container">
                <h2>Our Services</h2>

                <div className="services-grid">
                    <div className="service">
                        <h3>Web Design</h3>
                        <i class="fa-solid fa-user-tie"></i>
                        <div className="line"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="service">
                        <h3>Graphic Design</h3>
                        <i class="fa-solid fa-cart-flatbed-suitcase"></i>
                        <div className="line"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="service">
                        <h3>Marketing</h3>
                        <i class="fa-solid fa-suitcase "></i>
                        <div className="line"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
            {/* </section> */}

            <section className="services-section">
                <div className="container">
                    <div className="sec-3">
                        <h2>Visit Us as a Chinkoos Center</h2>
                        <p>Mon to sat - 9am-9:30pm</p>
                        <p>sun- 11am-7pm</p>
                        <p>Across from Lululemon on level 1</p>
                        <p>Grand Opening on April 6.</p>
                        <a href='' className='btn '>See The Suits</a>
                    </div>
                </div>
            </section>

            <section className="services-section">
                <div className="container">
                    <div className="gallery">
                        <h1>Gallery Section</h1>
                        <div className="image-container ">
                            <a target="_blank" href="../images/img2.jpg">
                                <img className='imgEffect' src={img2} />
                            </a>

                            <a target="_blank" href="../images/3.jpg">
                                <img className='imgEffect' src={img3} />
                            </a>

                            <a target="_blank" href="../images/4.jpg">
                                <img className='imgEffect' src={img4} />
                            </a>

                            <a target="_blank" href="../images/5.jpg">
                                <img className='imgEffect' src={img5} />
                            </a>

                            <a target="_blank" href="../images/6.jpg">
                                <img className='imgEffect' src={img6} />
                            </a>
                            <a target="_blank" href="../images/7.jpg">
                                <img className='imgEffect' src={img7} />
                            </a>

                            <a target="_blank" href="../images/8.jpg">
                                <img className='imgEffect' src={img8} />
                            </a>

                            <a target="_blank" href="../images/9.jpg">
                                <img className='imgEffect' src={img9} />
                            </a>

                            {/* Add more images as needed */}
                        </div>
                    </div>
                </div>
            </section>

            <section className="services-section">
                <div className="container">
                    <div className="sec-3">
                        <p> <b>Visit Us as a Chinkoos Center</b></p>
                        <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, incidunt?</i><br /><br />
                        <a href='' className='btn '>BOOK AN APPOINTMENT</a>
                    </div>
                </div>
            </section>



        </div>
    );
};

export default Home;

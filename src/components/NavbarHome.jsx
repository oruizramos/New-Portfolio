import { Typewriter } from 'react-simple-typewriter';
import { MdArrowOutward } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa6";
import { FaSquareJs } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { SiThreedotjs } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiBlender } from "react-icons/si";
import { SiRemix } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FaArtstation } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { SiBlockchaindotcom } from "react-icons/si";
import { motion } from 'framer-motion'
import Slider from './Slider';
import { MdDownload } from "react-icons/md";
import Tabs from './Tabs';
import gsap from 'gsap';
import { useEffect, useState, useRef } from 'react';
import emailjs from "emailjs-com";
import './styles/Home.css'


const NavbarHome = ({ secRef, isMobile }) => {
  const form = useRef();
  const [status, setStatus] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ipm45jj', 'template_yy4ei5j', form.current, '01-4Aq_YbG-cULFS4')
      .then(
        () => {
          console.log('SUCCESS!');
          setStatus({
            color: '#33d433b5',
            msg: 'Thanks.. I\'ll be in touch soon'
          })
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message.');
          setStatus({
            color: '#851101',
            msg: `Error: ${error.text}`
          })
        }
      );
  };



  useEffect(() => {
    gsap.set(".cursor-circle", { xPercent: -50, yPercent: -50 });

    let xTo = gsap.quickTo(".cursor-circle", "x", { duration: 0.5, ease: "expo.out" });
    let yTo = gsap.quickTo(".cursor-circle", "y", { duration: 0.5, ease: "expo.out" });

    // Add mousemove event listener to move the cursor circle
    const moveCursor = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    gsap.from(".navhome:before",

      {
        x: 0,                // Move to the original position
        borderRadius: "0",   // Set border radius back to 0
        border: "1px solid", // Change the border color
        duration: 2,
      });
    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);


  return (
    <>
      <div className="cursor-circle"></div>
      <div className="navhome">
        <h1 className='h2'>OARR</h1>
        <div className='navbar-nav ul-nav'>
          <a className='nav-link rotate-link pl-2 pr-2' href="#section1" style={{ marginBottom: "-15px", marginTop: '-7px' }}>Home</a>
          <a className='nav-link rotate-link pl-2 pr-2' href="#section-2" >About</a>
          <a className='nav-link rotate-link pl-2 pr-2' href="#section-3" >3D</a>
          <a className='nav-link rotate-link pl-2 pr-2' href="#section-4" >Web Dev</a>
          <a className='nav-link rotate-link pl-2 pr-2' href="#section-5" >Contact</a>
          <a className='nav-link rotate-link pl-2 pr-2' href="#section6" >Connect</a>
          {/* <a className='nav-link rotate-link pl-2 pr-2' target='_blank' href="https://" style={{ marginTop: "-13px" }}>CV<MdArrowOutward /></a>  */}
        </div>

        <div className="col-4">
          <div id="list-example" className="list-group fontsm">
            <a className="list-group-item list-group-item-action" aria-label="Section-Navigation" href="#section1"><SiBlockchaindotcom />
              <span className='child-active'>Powering On</span></a>
            <a className="list-group-item list-group-item-action" aria-label="Section-Navigation" href="#section-2"><SiBlockchaindotcom />
              <span className='child-active'>My Operating Manual</span></a>
            <a className="list-group-item list-group-item-action" aria-label="Section-Navigation" href="#section-3"><SiBlockchaindotcom />
              <span className='child-active'>Rendered in three dimensions</span></a>
            <a className="list-group-item list-group-item-action" aria-label="Section-Navigation" href="#section-4"><SiBlockchaindotcom />
              <span className='child-active'>Code-Powered Creations</span></a>
            <a className="list-group-item list-group-item-action" aria-label="Section-Navigation" href="#section-5"><SiBlockchaindotcom />
              <span className='child-active'>Send Signal</span></a>
          </div>
        </div>
      </div>

      <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example " tabIndex="0">
        <motion.div
          initial={isMobile ? undefined : { opacity: 0, y: "-100px" }}
          whileInView={isMobile ? undefined : { opacity: 1, y: "0px" }}
          viewport={isMobile ? undefined : { margin: "-400px", once: false }}
          transition={isMobile ? undefined : { delay: 0.3 }} // Wait for 2 seconds before fading in
          className="hero"
          id="section1"
          ref={secRef.sectionRef1}
        >
          <p className='top-status'>
            Omar Alejandro Ruiz Ramos</p>

          <div className="hero-container">
  <div className="hero-content">
    <p className="hero-text">3D Front End Developer</p>
    
    {/* Typewriter effect  */}
    <h1 className="hero-heading gradient-title1 g-grey">
      {' '}
      <span style={{ color: '#e63946', fontFamily: 'inherit' }}>
        <Typewriter
          words={['React', 'Three.JS', 'Typescript', 'Node JS']}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={40}
          delaySpeed={1200}
        />
      </span>
    </h1>

{/* 
  <h1>
    <a
      href="https://www.linkedin.com/in/omarruizramos"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Linkedin Profile"
      className="mt-2 d-inline-block hero-text"
      style={{ fontSize: 'inherit', fontWeight: 'inherit' }}
    >
      LinkedIn <MdArrowOutward />
    </a>
  </h1> 
*/}

  </div>
</div>
        </motion.div>


        <div className="p-relative" id="section-2">


          <motion.div
            initial={isMobile ? undefined : { opacity: 0, y: "-100px" }}
            whileInView={isMobile ? undefined : { opacity: 1, y: "0px" }}
            viewport={isMobile ? undefined : { margin: "-400px", once: false }}
            transition={isMobile ? undefined : { delay: 0.3 }}
            exit={isMobile ? undefined : { opacity: 0, y: "400px" }}
            className="hero p-sticky"
            id="section2"
            ref={secRef.sectionRef2}
          >

            <div className="hero-container hero-container-new" bis_skin_checked="1">
              <div className="hero-content hero-content-new" bis_skin_checked="1">
                <div bis_skin_checked="1"></div>
                <div className="hero-text-new d-flex" bis_skin_checked="1">
                  <div className='d-flex gap-3'>
                    <FaHtml5 className='icon-blur' />
                    <FaCss3Alt className='icon-blur' />
                    <FaSquareJs className='icon-blur' />
                  </div>
                  <div className='d-flex gap-3'>
                    <SiTypescript className='icon-blur' />
                    <FaNodeJs className='icon-blur' />
                    <FaReact className='icon-blur' />
                  </div>
                  <div className='d-flex gap-3'>
                    <SiRemix className='icon-blur' />
                    <SiReactquery className='icon-blur' />
                    <SiGraphql className='icon-blur' />
                  </div>
                  <div className='d-flex gap-3'>
                    <SiThreedotjs className='icon-blur' />
                    <FaFigma className='icon-blur' />
                    <SiBlender className='icon-blur' />
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-container">
              <div className="hero-content">
                <div
                />
                <p className="" style={{ color: "#8a3535" }}>Greetings, fellow humans!</p>
                <h1 className="hero-heading gradient-title1 g-redish hero-bannerr">
                  Who am I?

                  {/*
                  <a href="https://github.com/oruizramos" target="_blank" aria-label="github-profile"> GitHub <MdArrowOutward color='red' /></a>
                  */}

                </h1>
                <p className="hero-text gradient-title1 g-redish opacity-75">
                  I am originally from Mexico, and currently based in Cologne, Germany. I have always been deeply passionate about the powerful discourse that emerges when strong coding, compelling visual design, and impactful narrative converge across all forms of media, technology, and art.  
                </p>
               <div className="d-flex justify-content-center text-light mt-3">
  <img
    src="/assets/AboutMe.jpg"
    alt="About Visual"
    className="img-fluid"
    style={{
      width: "100%",
      maxWidth: "500px",
      height: "auto",
      objectFit: "cover",
      borderRadius: "1rem"
    }}
  />
</div>
              </div>
            </div>
          </motion.div>
        </div>


        <div className="p-relative" id="section-3">
          <motion.div
            initial={isMobile ? undefined : { opacity: 0, y: "-100px" }}
            whileInView={isMobile ? undefined : { opacity: 1, y: "0px" }}
            viewport={isMobile ? undefined : { margin: "-400px", once: false }}
            transition={isMobile ? undefined : { delay: 0.3 }}
            exit={isMobile ? undefined : { opacity: 0, y: "400px" }}
            className="hero p-sticky"
            id="section3"
            ref={secRef.sectionRef3}
          >

            <div className="hero-container left-side">
              <div className="hero-content">
                <p className="hero-text" style={{ color: "#3aa0ff70" }}>Beyond Flatland</p>
                <h1 className="hero-heading gradient-title1 g-blue">
                  Three.JS

                  {/*
                  <a href="https://github.com/oruizramos" target="_blank" aria-label="Behance Profile Link"> Github <MdArrowOutward color='blue' /></a>
                  */}

                </h1>
                <p className="hero-text gradient-title1 g-blue opacity-100">

                  I absolutely love crafting immersive experiences and bringing ideas into a 3D space. There's something truly fascinating about transforming lines of code into interactive, visually stunning environments that users can explore and enjoy. It's where creativity meets computation, and the possibilities are endless.
                </p>
                <div className="parabox-list">
                  <Tabs />
                </div>
              </div>
            </div>
          </motion.div>
        </div>


        <section id="section-4">

          <Slider secRef={secRef} isMobile={isMobile} />

        </section>


        <section className='p-relative' id='section-5'>
          <motion.div
            initial={isMobile ? undefined : { opacity: 0, y: "-100px" }}
            whileInView={isMobile ? undefined : { opacity: 1, y: "0px" }}
            viewport={isMobile ? undefined : { margin: "-400px", once: false }}
            transition={isMobile ? undefined : { delay: 0.3 }}
            exit={isMobile ? undefined : { opacity: 0, y: "400px" }}
            className="hero p-sticky"
            id="section5"
            ref={secRef.sectionRef5}
          >
            <div className="hero-container right-side">
              <div className="hero-content">
                <div
                />
                <p className="" style={{ color: "#ffffff80" }}>Initiate Communication Protocol</p>
                <h1 className="hero-heading gradient-title1 g-grey hero-bannerr">
                  Let's connect!
                </h1>
                <p className="hero-text gradient-title1 g-grey opacity-100 mt3">
                  Have a project in mind, or just want to chat about the latest in web development/3D modelling? Feel free to reach out. I'd love to hear from you!

                </p>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-3 mt-4" data-bs-theme='dark'>
                    <input type="email" pattern='^\w+@[a-zA-z]+\.(com|in)' className="form-control form-control-sm bg-transparent gradient-title1 g-grey" id="exampleFormControlInput1" name='email' placeholder="name@example.com" onInvalid={(e) => {
                      e.target.setCustomValidity("Please enter a valid email address with .com or .in domain.");
                    }} onInput={(e) => {
                      e.target.setCustomValidity("");  // Reset custom message when user starts typing
                    }} required />
                  </div>
                  <div className="mb-3" data-bs-theme='dark'>
                    <textarea className="form-control form-control-sm bg-transparent gradient-title1 g-grey" id="exampleFormControlTextarea1" rows="6" name='message' placeholder="Your Message" required></textarea>
                  </div>
                  <div className="mt-2 d-flex gap-2 align-items-center">
                    <button type="submit" className=" btn btn-sm btn-outline-secondary">Send Message</button>
                    <button type="reset" className=" btn btn-sm btn-outline-secondary">Reset</button>
                    {status && <span style={{ color: status.color, marginLeft: '5px', fontSize: '13px' }}>{status.msg}</span>}
                  </div>
                </form>
              </div>
            </div></motion.div>
        </section>

        <section id="section6" style={{ height: "100vh", position: "relative", zIndex: "99", color: "#ffb7a1" }} ref={secRef.sectionRef6}>


          <motion.div
            initial={isMobile ? undefined : { opacity: 0, y: "-100px" }}
            whileInView={isMobile ? undefined : { opacity: 1, y: "0px" }}
            viewport={isMobile ? undefined : { margin: "-400px", once: false }}
            transition={isMobile ? undefined : { delay: 0.3 }}
            exit={isMobile ? undefined : { opacity: 0, y: "400px" }}
            className="hero-container right-side">
            <div className="hero-content d-flex gap-2 flex-direction-col">
              <div>
                <a target='_blank' aria-label='linkedin-account-link' href="https://www.linkedin.com/in/omarruizramos"><BsLinkedin className='icon-blur footericons' /></a>
                <a target='_blank' aria-label='github-profile-link' href="https://github.com/oruizramos"><FaGithubSquare className='icon-blur footericons' /></a>
                <a target='_blank' aria-label='artstation' href="https://omarramos5.artstation.com/"><FaArtstation className='icon-blur footericons' /></a>
                <a target='_blank' aria-label='email' href="mailto:omarruizramos@gmail.com"><MdOutlineMail className='icon-blur footericons' /></a>
                <div>
                </div>

                <p className="hero-text gradient-title1 g-orange opacity-100 mt-3">

                  For the best experience, including interactive 3D content, please view this website on a desktop device. The cute Robot 3D model credit goes to <a target='_blank' aria-label="model-creditor-profile" style={{ borderBottom: '1px solid #ff572261' }} href="https://sketchfab.com/3d-models/arc-43-189ba3fce2344b5d8cdf2b477cd1090a">kencanbreath from Sketchfab.</a>
                </p>

                <p className="hero-text gradient-title1 g-orange opacity-100 border-top foot-border pt-2 pb-2 border-bottom">
                  © 2025. Omar Alejandro Ruiz Ramos.
                </p>
              </div>

            </div>

          </motion.div>


        </section>

      </div>
    </>
  );
};

export default NavbarHome;

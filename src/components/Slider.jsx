import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CardItem from "./CardItem";
import './styles/Slider.css'
import { MdArrowOutward } from "react-icons/md";



const Slider = ({ secRef,isMobile }) => {
  const projectsData = [
    {
      cardTitle: "Online Mock Shop",
      cardUrl: "https://mock-shopping-app.netlify.app/",
      cardcodeUrl: "https://github.com/oruizramos/Mock-Shopping-Cart",
      cardImg: "/assets/ShoppingApp.jpg" 

    },
    {
      cardTitle: "Rick & Morty Memory Game",
      cardUrl: "https://react-typescript-memory-card-game.netlify.app/",
      cardcodeUrl: "https://github.com/oruizramos/Mock-Shopping-Cart",
      cardImg: "/assets/RMMemoryGame.jpg",

    },
    {
      cardTitle: "CV Builder",
      cardUrl: "https://react-typescript-cv-builder.netlify.app/",
      cardcodeUrl: "https://github.com/oruizramos/react-typescript-cv-builder",
      cardImg: "/assets/CVbuilder.jpg",

    },
    {
      cardTitle: "Escape Room",
      cardUrl: "https://oruizramos.github.io/Escape-Room-Pure-CSS-/",
      cardcodeUrl: "https://github.com/oruizramos/Escape-Room-Pure-CSS-",
      cardImg: "/assets/EscapeRoom.png",

    },
    {
      cardTitle: "Galeana(Puzzle Game)",
      cardUrl: "https://codepen.io/oruizramos/full/VwKvGYV",
      cardcodeUrl: "https://github.com/oruizramos/Galeana",
      cardImg: "/assets/Galeana.jpg",

    },
    {
      cardTitle: "Designer Portfolio Webpage",
      cardUrl: "https://oruizramos.github.io/",
      cardcodeUrl: "https://github.com/oruizramos/oruizramos.github.io",
      cardImg: "/assets/DesignPortfolio.jpg",

    },
    {
      cardTitle: "Pomodoro Timer with Background Gradiant Creator",
      cardUrl: "https://oruizramos.github.io/Gradient-Background-Generator-with-simple-Pomodoro-Timer/",
      cardcodeUrl: "https://github.com/oruizramos/Gradient-Background-Generator-with-simple-Pomodoro-Timer",
      cardImg: "/assets/Pomodoro.jpg",

    },
  ];

  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (

    <section ref={targetRef} className="slider-container" style={{

      position: "relative", height: "300vh"
    }}>
      <div className="slider" style={{ position: "sticky", top: 0, display: "flex", height: "100vh", overflow: "hidden" }}>


        <a href="https://github.com/oruizramos" aria-label="behance-profile-link" className="slideritem know gradient-title1 g-yellow">Read more about the projects<MdArrowOutward /></a>
        
        <motion.div className="d-flex slideritem gap-3" style={{ x }}>

          {projectsData.map((item, index) => (
            <CardItem key={index} cardTitle={item.cardTitle} cardImg={item.cardImg} cardUrl={item.cardUrl} cardcodeUrl={item.cardcodeUrl} />
          ))}

        </motion.div>

        <motion.div
          initial={isMobile ? undefined :{ opacity: 0, y: "-100px" }}
          whileInView={isMobile ? undefined :{ opacity: 1, y: "0px" }}
          viewport={isMobile ? undefined :{ margin:"-200px",once: false }}
          transition={{ delay: 0.3 }}
          exit={isMobile ? undefined :{ opacity: 0, y: "400px" }} 
          className="text-slider-bottom" ref={secRef.sectionRef4} id="section4">
          <div className="hero-content w-31 ">
            <p className="hero-text gradient-title1 g-yellow">Crafting Digital Realities</p>
            <h1 className="hero-heading gradient-title1 g-yellow smdesk-slider-heading">
              Web Frontend Developments
            </h1>
          </div>
          <div className="hero-content w-31">
            <p className="hero-text gradient-title1 g-yellow">Engineering the Internet</p>
            <h1 className="hero-heading gradient-title1 g-yellow smdesk-slider-heading">
              Web Frontend Developments
            </h1>
          </div>
        </motion.div>




      </div>



    </section>
  );
};

export default Slider;

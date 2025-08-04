import React,{useState} from 'react';
import './styles/Tabs.css';
import { MdArrowOutward } from "react-icons/md";

const Tabs = () => {
  // State to track which tab (index) is currently active
  const [activeIndex, setActiveIndex] = useState(0);

  // Array of tab titles and content
  const tabs = [
    { title: '1', content: '3D visualization featuring a custom OBJ model, mouse-responsive shader effects, dynamic sprite-based background, vertex displacement, color shading, and interactivity to create a visually appealing and engaging experience.', link:'https://3dmodelshattering.netlify.app/' },
   
    { title: '2', content: 'Simple browser-based 3D simulation that showcases real-time physics interactions, using Rapier for physics computations. Users can interact with a dynamic environment where multiple objects respond to physics laws, and a custom 3D cursor enhances the immersive experience', link:'https://3d-physics-experiment.netlify.app/' },

    { title: '3', content: 'Visual experiment built using a custom MeshLine implementation, featuring animated 3D lines rendered using custom geometry, shaders, and materials, along with post-processing effects such as bloom to enhance visual aesthetics.', link:'https://threejsartgeneration.netlify.app/' },
   
  ];

  // Toggle the active tab index
  const toggleTab = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // If the clicked tab is already active, hide the content
    } else {
      setActiveIndex(index); // Show the clicked tab content
    }
  };

  return (
    <div className="accordions d-flex mt-3" >
      {tabs.map((tab, index) => (
        <div key={index} className="accordion-items">
          {/* Title Section */}
          <h3
            onClick={() => toggleTab(index)} // Toggle content on title click
            className={activeIndex === index ? 'bgactive' : ''}
          >
            <span className='rotation w-100'>{tab.title}</span>
          </h3>

          {/* Content Section (visible only if this tab is active) */}
          {activeIndex === index && <p className='gradient-title1 g-blue'><a aria-label="company-experience-link" target='_blank' href={tab.link} className='exp-links'>See Project<MdArrowOutward color='blue' /></a> <br/><br/>{tab.content}</p>}
        </div>
      ))}
    </div>
  );
};



export default Tabs

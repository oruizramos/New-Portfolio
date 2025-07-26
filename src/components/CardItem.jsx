import React from 'react'
import { motion } from "framer-motion";

import Button from './Button';
import './styles/CardItem.css'

const CardItem = ({cardImg,cardTitle,cardUrl,cardcodeUrl}) => {
  return (
 <>
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.05 }} 
  className="card first-childern"
>
  <img
    src={cardImg}
    width="400"
    height="250"
    className="card-img-top position-absolute h-100 object-fit-cover"
    alt="previous-projects-done-by-omar-ramos"
    loading="lazy"
  />

  <div
    className="card-body z-3 d-flex justify-content-end flex-column"
    style={{ boxShadow: "inset 0px -50px 100px -27px #000000" }}
  >
    <h5 className="card-title opacity-100 gradient-title1 g-yellow">
      {cardTitle}
    </h5>

    {/* Button Row */}
    <div className="d-flex gap-2 mt-2">
      <Button
        text="See Project"
        link={cardUrl}
        classes="transparent-btn"
        bgcolor="transparent"
        color="yellow"
      />
      <Button
        text="Source Code"
        link={cardcodeUrl}
        classes="transparent-btn"
        bgcolor="transparent"
        color="yellow"
      />
    </div>
  </div>
</motion.div>

 
 </>
  )
}

export default CardItem

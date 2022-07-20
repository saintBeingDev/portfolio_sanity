import React, { useState, useEffect } from "react";
import "./About.scss";
import {urlFor, client} from '../../client'
import { motion } from "framer-motion";
import { AppWrap,MotionWrap } from "../../wrapper";
import { images } from "../../constants";
// const abouts = [
//   {
//     title: "Web Development",
//     description: "I am Good web developer",
//     imgUrl: images.about01,
//   },
//   {
//     title: "UI/UX",
//     description: "I am Good UI/UX developer",
//     imgUrl: images.about02,
//   },
//   {
//     title: "Full Stack",
//     description: "I am Good full stack developer",
//     imgUrl: images.about03,
//   },
//   {
//     title: "MERN Stack",
//     description: "I am Good MERN stack developer",
//     imgUrl: images.about04,
//   },
// ];

const About = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About,'app__about'),'about',"app__whitebg");

import React from 'react'
import { assets, certificateData } from '@/assets/assets';
import Image from 'next/image';
import { motion } from "motion/react";

const Certifications = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full px-[12%] py-10 scroll-mt-20"
          id="certificate"
        >
          <motion.h4
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mb-2 text-lg font-Ovo"
          >
            Verified Expertise
          </motion.h4>
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center text-5xl font-Ovo"
          >
            Professional Achievements
          </motion.h2>
    
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
          >
            Welcome to my certifications.Explore my certifications showcasing expertise in full-stack development, mobile apps, and software solutions.
          </motion.p>
    
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="grid grid-cols-auto my-10 gap-5 dark:text-black"
          >
            {certificateData.map((project, index) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
                key={index}
                style={{ backgroundImage: `url(${project.bgImage})` }}
              >
                <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                  <div>
                    <h2 className="font-semibold">{project.title}</h2>
                    <p className="text-sm text-gray-700">{project.description}</p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
                  >
                    <Image
                      src={assets.send_icon}
                      alt="icon"
                      className="w-5"
                    />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
  )
}

export default Certifications
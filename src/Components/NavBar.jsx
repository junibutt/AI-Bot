import React, { useState } from 'react';
import { motion } from 'framer-motion';  // Import motion
import { RiChatNewLine } from "react-icons/ri";
import { AiFillRobot } from "react-icons/ai";

const NavBar = ({ clearChatHistory }) => {
  return (
    <div className='fixed top-0 left-0 right-0 z-10'>
      <div className='flex justify-between p-4'>
        <h1 onClick={clearChatHistory} className='text-xl md:text-2xl font-bold cursor-pointer flex items-center'>
          Ai Bot <AiFillRobot className='ml-2' />
        </h1>

        {/* Motion button for New Chat */}
        <motion.button
          className='flex items-center md:text-lg cursor-pointer font-semibold bg-pink-100 hover:bg-pink-200 transition-all duration-300 rounded-sm p-1'
          onClick={clearChatHistory}
          whileHover={{ scale: 1.2 }}  // Scale on hover
          whileTap={{ scale: 0.8 }}    // Scale on tap
        >
          New Chat <RiChatNewLine className='ml-2' />
        </motion.button>
      </div>
    </div>
  );
};

export default NavBar;

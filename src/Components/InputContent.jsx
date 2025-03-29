import React from 'react';
import { IoSendSharp } from "react-icons/io5";

const InputContent = ({inputText, setInputText, handleGenerateContent}) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleGenerateContent();
    }
  };

  return (
    <div className="w-[86%] md:w-[60%] mx-auto">
      <div className="relative w-full text-center">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full p-3 pl-4 pr-12 border border-gray-200 outline-none rounded-lg"
          placeholder="Ask AI Bot"
        />
        <IoSendSharp 
          onClick={handleGenerateContent} 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl cursor-pointer hover:text-gray-600" 
        />
      </div>
      <p className="w-full text-center mt-2 font-semibold text-sm">Developed By M. Junaid</p>
    </div>
  );
};

export default InputContent;
import { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import './App.css';
import InputContent from './Components/InputContent';
import NavBar from './Components/NavBar';
import Chats from './Components/Chats';

function App() {
  const ApiKey = "AIzaSyBnVbCEw2E6wqLC8yXwgL0YOej29zw9-Mo";
  

  const [inputText, setInputText] = useState("");  
  const [ChatHistory, setChatHistory] = useState([]); 

  const clearChatHistory = () => {
    setChatHistory([]);  
  };

  const handleGenerateContent = async () => {
    if (inputText.trim()) {
      try {
        
        if (inputText.toLowerCase() === "who developed you") {
          setChatHistory((prevHistory) => [
            ...prevHistory,
            { user: inputText, ai: "I was developed by M. Junaid." }
          ]);
          setInputText(""); 
          return; 
        }

        const ai = new GoogleGenAI({
          apiKey: ApiKey,
        });
        const response = await ai.models.generateContent({
          model: "gemini-2.0-flash",
          contents: inputText,
        });

        const fullResponse = response.text;

        setChatHistory((prevHistory) => [
          ...prevHistory,
          { user: inputText, ai: fullResponse }
        ]);
        setInputText(""); 
      } catch (error) {
        setChatHistory((prevHistory) => [
          ...prevHistory,
          { user: inputText, ai: "Error generating content." }
        ]);
        setInputText(""); 
      }
    } else {
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { user: inputText, ai: "Please enter some text." }
      ]);
      setInputText(""); 
    }
  };

  return (
    <div className="bg-[#d69aa5] max-w-full min-h-screen flex flex-col">
      <NavBar className="mb-10" clearChatHistory={clearChatHistory} />

      
      <div className="flex-1 overflow-y-auto px-4 py-4 pb-20"> 
        <Chats ChatHistory={ChatHistory} />
      </div>

      
      <div className="fixed bottom-0 left-0 right-0 bg-[#d69aa5] p-4">
        <InputContent 
          inputText={inputText} 
          setInputText={setInputText} 
          handleGenerateContent={handleGenerateContent} 
        />
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useRef } from 'react';

const Chats = ({ ChatHistory }) => {
  const endOfChatRef = useRef(null);

  useEffect(() => {
    if (endOfChatRef.current) {
      endOfChatRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [ChatHistory]);

  return (
    <div className="mx-auto w-[80%] flex flex-col space-y-5 relative  md:px-26 lg:px-45 mb-10 mt-22">
      {ChatHistory.map((chat, index) => (
        <React.Fragment key={index}>
          <div className="self-end bg-red-100 rounded-2xl p-2 md:text-lg shadow-lg">
            <p>{chat.user}</p>
          </div>
          <div className="self-start bg-red-100 rounded-2xl p-2 shadow-lg">
            <p>{chat.ai}</p>
          </div>
        </React.Fragment>
      ))}
      <div ref={endOfChatRef} />
    </div>
  );
};

export default Chats;

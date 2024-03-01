import React, { useState, useEffect } from 'react';

const RollingText = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let intervalId;

    if (!isHovered) {
      intervalId = setInterval(() => {
        // Your logic to update the scrolling text
        // For simplicity, I'm just appending the current time
        const newText = document.getElementById('rolling-text').textContent + ' ' ;
        document.getElementById('rolling-text').textContent = newText;
      }, 1000); // Change the interval as needed
    }

    return () => clearInterval(intervalId);
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="rolling-container h-12 overflow-hidden   hover:cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div id="rolling-text" className={`rolling-text ${isHovered ? 'animate-none' : 'animate-roll-up'}`}>
        {/* Initial text */}
        <p className=' my-2' >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.   </p> 

               
      </div>
    </div>
  );
};

export default RollingText;

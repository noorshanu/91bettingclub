import React, { useState, useEffect } from 'react';
import WinCard from '../components/WinCard'; // Assuming WinCard component is in a separate file

function WinInfo() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setAnimate(true);

    // Reset animation after 5 seconds (adjust duration as needed)
    const timeout = setTimeout(() => {
      setAnimate(false);
    }, 2000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>

  
    <div className=' py-3'>
        <h1 className="text-2xl font-semibold">Winning Information</h1>
      </div>
    <section className=' overflow-hidden'>
      

      <div className="mt-6 animate-roll-up overflow-hidden">
        {[1, 2, 3, 4, 5].map((index) => (
          <WinCard key={index} animate={animate} />
        ))}
      </div>
    </section>
    </div>
  );
}

export default WinInfo;

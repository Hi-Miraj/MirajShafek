import React, { useEffect, useRef } from 'react';

const RobotAnimation = () => {
  const robotRef = useRef<HTMLDivElement>(null);
  const ambientRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const robot = robotRef.current;
    const ambient = ambientRef.current;
    if (!robot || !ambient) return;
    
    // Add enhanced floating animation with slight rotation for robot only
    const floatInterval = setInterval(() => {
      const yPos = Math.sin(Date.now() / 1000) * 8;
      const rotation = Math.sin(Date.now() / 1500) * 2;
      robot.style.transform = `translateY(${yPos}px) rotate(${rotation}deg)`;
      
      // Keep ambient effect with subtle pulse but fixed position
      const scale = 1 + Math.sin(Date.now() / 1200) * 0.05;
      ambient.style.transform = `scale(${scale})`;
    }, 50);
    
    return () => {
      clearInterval(floatInterval);
    };
  }, []);
  
  return (
    <div className="relative w-full max-w-[340px] mx-auto h-[420px]">
      {/* Container to keep the ambient glow fixed and centered */}
      <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center pointer-events-none">
        {/* Reddish ambient glow effect - fixed position */}
        <div 
          ref={ambientRef}
          className="w-[320px] h-[320px] rounded-full bg-gradient-to-r from-miraj-red/40 to-primary/30 blur-2xl opacity-70 dark:opacity-40 transition-all duration-700 ease-in-out"
          style={{
            position: 'absolute',
            zIndex: 0
          }}
        ></div>
      </div>
      
      <div 
        ref={robotRef} 
        className="transition-transform duration-700 ease-in-out relative z-10"
      >
        {/* Robot Head */}
        <div className="relative">
          <div className="w-[150px] h-[110px] bg-[#444] dark:bg-[#333] rounded-t-[75px] mx-auto relative overflow-hidden">
            <div className="absolute left-0 right-0 top-[35px] flex justify-center space-x-12">
              {/* Eyes with enhanced glow */}
              <div className="w-5 h-10 rounded-sm bg-miraj-red dark:bg-miraj-red/80 animate-pulse shadow-[0_0_10px_rgba(255,59,48,0.7)] dark:shadow-[0_0_15px_rgba(255,59,48,0.5)]"></div>
              <div className="w-5 h-10 rounded-sm bg-miraj-red dark:bg-miraj-red/80 animate-pulse delay-75 shadow-[0_0_10px_rgba(255,59,48,0.7)] dark:shadow-[0_0_15px_rgba(255,59,48,0.5)]"></div>
            </div>
            {/* Simple shading - only in light mode */}
            <div className="absolute left-0 top-0 w-1/2 h-full bg-black opacity-10 dark:opacity-0 rounded-tl-[75px]"></div>
          </div>
        </div>
        
        {/* Robot Body */}
        <div className="w-[180px] h-[180px] mx-auto bg-[#555] dark:bg-[#444] rounded-[50%] relative mt-1 shadow-md dark:shadow-none">
          {/* Center circle with subtle glow */}
          <div className="absolute left-0 right-0 top-0 bottom-0 m-auto w-[100px] h-[100px] bg-[#444] dark:bg-[#333] rounded-full overflow-hidden">
            {/* Pulsing core */}
            <div className="absolute left-0 right-0 top-0 bottom-0 m-auto w-[60px] h-[60px] bg-miraj-red/30 dark:bg-miraj-red/20 rounded-full animate-pulse shadow-[0_0_20px_rgba(255,59,48,0.4)] dark:shadow-[0_0_25px_rgba(255,59,48,0.3)]"></div>
          </div>
          
          {/* Arms with subtle movement */}
          <div className="absolute left-[-24px] top-[60px] w-[12px] h-[70px] bg-[#555] dark:bg-[#444] rounded-l-lg origin-right animate-[wiggle_4s_ease-in-out_infinite_alternate]"></div>
          <div className="absolute right-[-24px] top-[60px] w-[12px] h-[70px] bg-[#555] dark:bg-[#444] rounded-r-lg origin-left animate-[wiggle_4s_ease-in-out_infinite_alternate-reverse]"></div>
          
          {/* Shadow - only in light mode */}
          <div className="absolute bottom-[-18px] left-[20%] w-[60%] h-[18px] bg-gray-400 rounded-[50%] blur-md opacity-30 dark:opacity-0"></div>
        </div>
      </div>
    </div>
  );
};

export default RobotAnimation;

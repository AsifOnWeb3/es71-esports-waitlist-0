import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
      document.body.classList.add('cursor-hover');
    };
    
    const handleMouseLeave = () => {
      setIsHovering(false);
      document.body.classList.remove('cursor-hover');
    };

    // Add event listeners
    window.addEventListener('mousemove', updateCursorPosition);
    
    // Use event delegation for better performance and dynamic elements
    const handleGlobalMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, input, [role="button"], .hover-this') || 
          target.closest('a, button, input, [role="button"], .hover-this')) {
        handleMouseEnter();
      }
    };

    const handleGlobalMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, input, [role="button"], .hover-this') || 
          target.closest('a, button, input, [role="button"], .hover-this')) {
        handleMouseLeave();
      }
    };

    document.addEventListener('mouseover', handleGlobalMouseOver);
    document.addEventListener('mouseout', handleGlobalMouseOut);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseover', handleGlobalMouseOver);
      document.removeEventListener('mouseout', handleGlobalMouseOut);
      document.body.classList.remove('cursor-hover');
    };
  }, []);

  return (
    <div
      className={`cursor ${isHovering ? 'scale-[3]' : 'scale-100'}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;
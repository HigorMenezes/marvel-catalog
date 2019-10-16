import { useState, useEffect, useCallback } from 'react';

const useScrollBarAtBottom = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = useCallback(() => {
    setIsAtBottom(
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
    );
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return isAtBottom;
};

export default useScrollBarAtBottom;

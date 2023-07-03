import { useEffect, useRef } from "react";

const useInfiniteScroll = (callback, observerElement) => {
  const pageRef = useRef(0);
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { threshold: 1 });
    observer.observe(document.querySelector(`.${observerElement}`));
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      pageRef.current++;
      callback(pageRef.current)
    }
  };
}

export default useInfiniteScroll;
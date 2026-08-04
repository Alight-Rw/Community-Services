import { useRef } from "react";

export const useDragScroll = () => {
  const ref = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
   
    if (e.target.closest("button, a, input, select, textarea")) return;

    isDown.current = true;
    if (ref.current) {
      ref.current.classList.add("dragging");
      startX.current = e.pageX - ref.current.offsetLeft;
      scrollLeft.current = ref.current.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    if (ref.current) ref.current.classList.remove("dragging");
  };

  const handleMouseUp = () => {
    isDown.current = false;
    if (ref.current) ref.current.classList.remove("dragging");
  };

  const handleMouseMove = (e) => {
    if (!isDown.current || !ref.current) return;
    e.preventDefault(); 
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; 
    ref.current.scrollLeft = scrollLeft.current - walk;
  };

  return {
    ref,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onMouseMove: handleMouseMove,
  };
};
import { useEffect, useState, useMemo } from "preact/hooks";
import styled from "styled-components";

const CustomMouse = () => {
  const [MouseCoords, SetMouseCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const MouseMove = (event: any) => {
      SetMouseCoords({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", MouseMove);
    return () => {
      window.removeEventListener("mousemove", MouseMove);
    };
  }, []);

  const memoizedMouseCoords = useMemo(() => MouseCoords, [MouseCoords]);

  const Mouse = styled.div`
    position: fixed;
    top: ${memoizedMouseCoords.y}px;
    left: ${memoizedMouseCoords.x}px;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    pointer-events: none;
    backdrop-filter: invert(100%);
    z-index: 1;

    @media (max-width: 1000px) {
      display: none;
    }
  `;

  return <Mouse />;
};

export default CustomMouse;

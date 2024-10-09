// ./components/YellowLines/YellowLines.jsx or YellowLines.tsx
import React, { ReactNode, forwardRef } from 'react';
import './YellowLines.css';

interface YellowLinesProps {
  children: ReactNode;
}

const YellowLines = forwardRef<HTMLDivElement, YellowLinesProps>(({ children }, ref) => {
  return (
    <div className="containerLines" ref={ref}>
      <div className="line left"></div>
      <div className="content">{children}</div>
      <div className="line right"></div>
    </div>
  );
});

// Optional: Set a display name for better debugging
YellowLines.displayName = 'YellowLines';

export default YellowLines;

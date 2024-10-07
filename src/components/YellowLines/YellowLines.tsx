import React, { ReactNode } from 'react';
import './YellowLines.css';

interface YellowLinesProps {
  children: ReactNode;
}

const YellowLines: React.FC<YellowLinesProps> = ({ children }) => {
  return (
    <div className="container">
      <div className="line left"></div>
      <div className="content">{children}</div>
      <div className="line right"></div>
    </div>
  );
};

export default YellowLines;

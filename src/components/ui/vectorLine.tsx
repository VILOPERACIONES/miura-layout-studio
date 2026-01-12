interface VectorLineProps {
  width?: number;
  top?: string;
  left?: string;
  color?: string;
}

export const VectorLine: React.FC<VectorLineProps> = ({
  width = 209,
  top = "0px",
  left = "0px",
  color = "#12181D",
}) => {
  return (
    <svg
      width={width}
      viewBox={`0 0 ${width} 1`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute`}
      style={{ top, left }}
    >
      <path
        d={`M0 0.5H${width}`}
        stroke={color}
        strokeWidth={2}
      />
    </svg>
  );
};

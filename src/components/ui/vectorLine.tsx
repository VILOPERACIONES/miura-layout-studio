interface VectorLineProps {
  width?: number;
  color?: string;
  className?: string;
}

export const VectorLine: React.FC<VectorLineProps> = ({
  width = 209,
  color = "#12181D",
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={2}
      viewBox={`0 0 ${width} 2`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d={`M0 1H${width}`}
        stroke={color}
        strokeWidth={2}
      />
    </svg>
  );
};

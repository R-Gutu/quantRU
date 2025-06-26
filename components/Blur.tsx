
type BlurProps = {
  color: 'blue' | 'purple' | string;
  height?: string;
  width?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  filter: string;
  className?: string
};


const Blur = ({ color, height, width, top, bottom, left, right, filter, className } : BlurProps ) => {
  const getColor = () => {
    switch (color) {
      case "purple":
        return "radial-gradient(circle, rgba(156, 8, 255, 0.8156512605042017) -10%, rgba(156, 8, 255, 0) 70%)";
      case "blue":
        return "radial-gradient(circle, rgba(30, 80, 255, 0.7904411764705882) -30%, rgba(30, 80, 255, 0) 70%)";

      default:
        return color;
    }
  };

  return (
    <div
      style={{
        transform: "translate3d(0, 0, 0)",
        top: top,
        bottom: bottom,
        left: left,
        right: right,
        width: width,
        height: height,
        background: getColor(),
        filter: filter,
        WebkitFilter: filter,
      }}
      className={`${className} absolute rounded-full -z-20 max-[800px]:w-[100px]  max-[800px]:h-[100px] animate-pulse `}
    />
  );
};

export default Blur;
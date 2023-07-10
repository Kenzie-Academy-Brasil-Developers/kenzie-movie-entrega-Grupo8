export const Loading = () => {
  return (
    <div className="bg-default text-white w-full max-w-40 mx-auto my-15">
      <span>L</span>
      <span>O</span>
      <span>A</span>
      <span>D</span>
      <span>I</span>
      <span>N</span>
      <span>G</span>
      <div className="relative w-40 mx-auto text-white font-roboto-condensed font-bold text-lg bg-gradient-to-b from-black to-gray-700 shadow-2xl">
        <div className="absolute h-full w-full flex">
          <div className="w-1/7 bg-gradient-to-b from-white to-gray-300 animate-pulse delay-200"></div>
          <div className="w-1/7 bg-gradient-to-b from-white to-gray-300 animate-pulse delay-400"></div>
          <div className="w-1/7 bg-gradient-to-b from-white to-gray-300 animate-pulse delay-600"></div>
          <div className="w-1/7 bg-gradient-to-b from-white to-gray-300 animate-pulse delay-800"></div>
          <div className="w-1/7 bg-gradient-to-b from-white to-gray-300 animate-pulse delay-1000"></div>
          <div className="w-1/7 bg-gradient-to-b from-white to-gray-300 animate-pulse delay-1200"></div>
          <div className="w-1/7 bg-gradient-to-b from-white to-gray-300 animate-pulse delay-1400"></div>
        </div>
      </div>
    </div>
  );
};
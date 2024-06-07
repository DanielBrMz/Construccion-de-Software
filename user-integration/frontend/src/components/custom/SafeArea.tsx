import React from "react";

interface SafeAreaProps {
  children?: React.ReactNode;
}

const SafeArea = ({ children }: SafeAreaProps) => {
  return (
    <div className="w-full min-w-screen flex items-center justify-center col-span-6">
      <div className="w-full max-w-8xl">{children}</div>
    </div>
  );
};

export default SafeArea;
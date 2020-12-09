import React from "react";

const LoadingFailed = () => {
  return (
    <section className="container mx-auto px-8">
      <div className="flex justify-between my-2">
        <h2 className="font-barlow font-bold text-red-900 text-xl leading-none">
          Loading Failed!
        </h2>
      </div>
    </section>
  );
};

export default LoadingFailed;

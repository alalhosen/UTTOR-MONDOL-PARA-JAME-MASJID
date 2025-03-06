const Connection = () => {
  return (
    <div className="hero bg-base-200 min-h-screen mt-6">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w- rounded-full shadow-xl"
        />
        <div>
          <h1 className="text-6xl font-bold mb-8">ইমাম</h1>
          <h2 className="text-4xl">হাফেজ মোঃ হাবিবুল্লা ইসলাম</h2>
          <p className="py-6 bg-red-200 rounded-2xl px-2 my-8">
            একজন ভাল ইমাম হতে হলে যা যা গুণাগুণ থাকা দরকার- সব গুণাগুণ তিনার মধ্যে আছে।
          </p>
          <button className="btn btn-primary">বিস্তারিত জানতে</button>
        </div>
      </div>
    </div>
  );
};

export default Connection;

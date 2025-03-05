const Connection = () => {
  return (
    <div className="hero bg-base-200 min-h-screen mt-6">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img 
        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
        className="max-w- rounded-full shadow-xl" />
      <div>
        <h1 className="text-5xl font-bold">ইমাম</h1>
        <h2>হাফেজ মোঃ হাবিবুল্লা ইসলাম</h2>
        <p className="py-6">
  একজন ভাল ইমাম হতে হলে যা যা গুণ থাকা দরকার- সব গুণ তিনার মধ্যে আছে।
        </p>
        <button className="btn btn-primary">বিস্তারিত জানতে</button>
      </div>
    </div>
  </div>
  );
};

export default Connection;

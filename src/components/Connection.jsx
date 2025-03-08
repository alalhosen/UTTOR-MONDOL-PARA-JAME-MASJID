const Connection = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen mt-6">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="" className="max-w- rounded-full shadow-xl bg-lime-300" />
          <div>
            <h1 className="text-6xl font-bold mb-8">ইমাম</h1>
            <h2 className="text-4xl">হাফেজ মোঃ হাবিবুল্লা ইসলাম</h2>
            <p className="py-6 bg-red-200 rounded-2xl px-2 my-8">
              একজন ভাল ইমাম হতে হলে যা যা গুণাগুণ থাকা দরকার- সব গুণাগুণ তিনার
              মধ্যে আছে।
            </p>
            <button className="btn btn-primary">বিস্তারিত জানতে</button>
          </div>
        </div>
      </div>
      {/* <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/AxkRp3yHiVU?si=K97uN05XGxYwmP_Z"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div> */}
    </div>
  );
};

export default Connection;

const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen mt-9 rounded-xl"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/hFXzcBwS/IMG-20250302-134402.jpg)",
        }}
      >
        {/* <div className="hero-overlay"></div> */}
        <div className="hero-content text-neutral-content text-center -mt-20">
          <div className="max-w-md">
            <h1 className="text-gray-200 mb-5 text-5xl font-bold">Welcome to our website</h1>
            <p className="text-xl font-bold text-lime-300">
            May Allah grant all of us the taufiq to be a masque.
            </p>
            <button className="btn btn-primary mt-4">Get Started</button>
          </div>
        </div>
      </div>
      <div>
        <div className="carousel w-full mt-20">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co.com/23wNJDZT/IMG-20250302-134226.jpg"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co.com/0RVmsPTH/IMG-20250302-134819.jpg"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co.com/Z6Htp4Y9/IMG-20250302-134619.jpg"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co.com/hFXzcBwS/IMG-20250302-134402.jpg"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>

        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div className="bg-lime-400">
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

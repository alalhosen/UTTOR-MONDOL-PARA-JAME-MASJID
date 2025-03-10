import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="px-4">
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
            <h1 className="text-gray-200 mb-5 text-5xl font-bold">
              Welcome to our website
            </h1>
            <p className="text-xl font-bold text-lime-300">
              May Allah grant all of us the taufiq to be a masque.
            </p>
            <button className="btn btn-primary mt-4">Get Started</button>
          </div>
        </div>
      </div>

      {/* Home page slide     Home page slide */}

      <div className="carousel w-[100%] h-[100%]  mt-20 rounded-2xl">
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

      {/* Card  Card  Card  Card  Card  Card   */}
      <div className="hero bg-gray-200 my-20 rounded-2xl">
        <div>
          <p className="text-xl lg:text-3xl p-8 font-bold text-center bg-pink-200 mt-8 rounded-full">
            রোজার বিধিনিষেধগুলো মেনে চলা প্রতিটি মুসলমানের উচিৎ।
          </p>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co.com/zVNpbyHj/image-18931-1707797104.jpg"
              className=" w-3/4lg:max-w-2xl rounded-lg"
            />
            <div className="bg-lime-400 p-2 lg:p-12 rounded-xl my-12 font-bold">
              <h1 className="text-2xl lg:text-3xl text-center">
                রোজার বিধিনিষেধ
              </h1>
              <div>
                <ul className="underline py-6 text-purple-600 text-2xl">
                  বিধিনিষেধঃ-
                </ul>
                <div className=" lg:text-xl">
                  <li>
                    দেহগহ্বরের মধ্যে কোনো কিছু প্রবেশ করা থেকে বিরত থাকা;
                    <li>যৌন ক্রিয়াকলাপে জড়ানো থেকে বিরত থাকা;</li>
                    <li>পরনিন্দার মতো অনৈতিক কাজ থেকে বিরত থাকা;</li>
                    <li>
                      সূর্যোদয় থেকে সূর্যাস্ত পর্যন্ত পানাহার থেকে বিরত থাকা ;
                    </li>
                    <li>উপবাস বা রোজার নিয়তের সহিত থাকা ;</li>
                    <li>
                      উপবাসের জন্য অনুমোদিত ব্যক্তিদের নৈকট্য থেকে বিরত থাকা।
                    </li>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 111111111111111 */}
      {/* <div className="pl-4">
        <p>আহমদুল্লার রমজানের ওয়াজ জানতে ক্লিক </p>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/watch?v=Vri8Ci0z3SM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div> */}

      {/* 22222222222222222 */}

      {/* <div className="pl-4">
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

export default Home;

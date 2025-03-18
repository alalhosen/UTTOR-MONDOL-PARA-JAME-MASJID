import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="px-4">
      {/* Home page single hero img */}
      <div
        className="hero min-h-screen mt-44 rounded-xl "
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/hFXzcBwS/IMG-20250302-134402.jpg)",
        }}
      >
        <div className="hero-content text-neutral-content text-center -mt-20">
          <div className="max-w-md">
            <h1 className="text-gray-200 mb-5 text-5xl font-bold">
              Welcome to our website
            </h1>
            <p className="text-xl font-bold text-lime-300">
              May Allah grant all of us the taufiq to be a masque.
            </p>
            <div className="btn btn-primary rounded-2xl">
              <NavLink to="https://www.youtube.com/watch?v=NZGuFf2lRDE ">
                <button>আযান শুনুন .....</button>
              </NavLink>
            </div>
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

      {/* Hero single card img  Hero single card img   */}
      <div className="mt-12">
        <h2
          className="text-center p-6 font-extrabold text-2xl lg:text-4xl
"
        >
          দোয়া কবুলের উত্তম সময়!!
        </h2>
        <div
          className="hero min-h-screen rounded-2xl"
          style={{
            backgroundImage:
              "url(https://i.ibb.co.com/ynf0fs2H/1733289536-85e3ade1d5814df1084430e4b687bdf1.jpg)",
          }}
        >
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="text-3xl lg:text-5xl text-gray-600 font-bold">
                দোয়া কবুলের মাস
              </h1>
              <p className="my-5 text-black">
                রমজানে দোয়া কবুলের শ্রেষ্ঠ সময় জেনে নিন!
              </p>
              <button className="btn btn-primary">জানতে ক্লিক করুন</button>
            </div>
          </div>
        </div>
      </div>

      {/* Card  Card  Card  Card  Card  Card   */}
      <div className="hero bg-gray-200 my-20 rounded-2xl">
        <div>
          <p className="text-lg lg:text-3xl p-4 lg:p-8 font-bold text-center bg-pink-200 mt-8 rounded-full">
            রোজার বিধিনিষেধগুলো মেনে চলা প্রতিটি মুসলমানের উচিৎ।
          </p>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co.com/KzGV78wL/image-18931-1707797104.jpg"
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

          <div className="btn btn-primary rounded-2xl">
            <NavLink to="https://www.amarbarta.com.bd/religion-and-life/">
              <button>আরো জানতে .....</button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* card single vedio   card single vedio   card single vedio   */}
      <div className=" lg:flex">
        <div className="hero bg-base-200 min-h-screen bg-red-200 rounded-tr-full  ">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6 text-xl">
                রোজা নিয়ে ১৫ টি জরুরি প্রশ্নের উত্তর
              </p>
              <NavLink
                className="btn btn-primary rounded-2xl"
                to="https://www.youtube.com/watch?v=Vri8Ci0z3SM"
              >
                <button className="p-4 text-xl">রোজার বিস্তারিত দেখুন</button>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="hero bg-sky-200 min-h-screen rounded-ss-full">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6 text-xl">
                কী কারণে রোজা ভেঙ্গে যায়? রোজা নিয়ে আরও কিছু প্রশ্নের জবাব
              </p>
              <NavLink
                className="btn btn-primary rounded-2xl"
                to="https://www.somoynews.tv/news/2023-03-24/%E0%A6%B0%E0%A7%8B%E0%A6%9C%E0%A6%BE-%E0%A6%AD%E0%A6%99%E0%A7%8D%E0%A6%97%E0%A7%87%E0%A6%B0-%E0%A7%A7%E0%A7%AB-%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%A3"
              >
                <button className="p-4 text-xl">জানতে ক্লিক করুন</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* card hero quran  card hero quran   */}
      <div className="hero bg-red-100 min-h-screen mb-24 rounded-2xl mt-12">
        <div className="hero-content flex-col lg:flex-row mb-12 mt-8">
          <img
            src="https://i.ibb.co.com/4Z6yXsT0/asian-muslim-children-smile-face-260nw-452365450.webp"
            className="min-w-s rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              বেস্ট কোরআন তেলাওয়াত ৩০তম পারা
            </h1>
            <p className="py-6">৩০ পারা হিফজুল কোরআন ক্বারী আবু রায়হান</p>
            <NavLink
              className="btn btn-secondary rounded-2xl"
              to="https://www.youtube.com/watch?v=Vri8Ci0z3SM"
            >
              <button className="p-4 text-xl">কুরআন তেলাওয়াত</button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* single card fitra adai  single card fitra adai   */}
      <div className="hero bg-base-200 min-h-screen mb-12">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">ফিতরা আদায়ের সঠিক নিয়ম</h1>
            <p className="py-6">
              যাকাতুল ফিতর বা ফিতরা,ফেতরা কি কেনো ও সংক্ষেপে |
            </p>

            <NavLink
              className="btn btn-primary rounded-2xl mb-4"
              to="https://www.youtube.com/watch?v=tOJAmVa0bB0"
            >
              <button className="p-4 text-xl">ফিতরা কি, কেন ?</button>
            </NavLink>
            <NavLink
              className="btn btn-secondary rounded-2xl"
              to="https://www.youtube.com/watch?v=rj6daq2k07A"
            >
              <button className="p-4 text-xl">ফিতরার দেওয়ার নিয়ম</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

const Home = () => {


  return (
    <div
      className="hero min-h-screen mt-9 rounded-xl"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/spy78vbc/famous-abu-dhabi-sheikh-zayed-mosque.jpg)",
      }}
    >
      {/* <div className="hero-overlay"></div> */}
      <div className="hero-content text-neutral-content text-center -mt-20">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

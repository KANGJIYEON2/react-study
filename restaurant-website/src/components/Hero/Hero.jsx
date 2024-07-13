import { IoCartOutline } from "react-icons/io5";

function Hero() {
  return (
    <main>
      <div className="container min-h-[600px] flex justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap12 lg:gap-24 place-items-center justify-between">
          <div className="space-y-3 mt-14 text-center md:text-left md:mt-0 ">
            <h1 className="relative text-5xl lg:text-7xl xl:text-8xl font-bold uppercase">
              Yummy
            </h1>
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold uppercase">
              BREAKFAST
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque eum quas sequi nostrum distinctio facere vero ipsam
              cum, cumque velit harum maiores magnam, natus sit, et similique?
              Earum, magnam facere!
            </p>
            <button className="btn-primary py-1.5 flex align-middle">
              <IoCartOutline />
              Order Now
            </button>
          </div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2023/08/12/02/56/sushi-8184633_1280.png"
              className="w-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;

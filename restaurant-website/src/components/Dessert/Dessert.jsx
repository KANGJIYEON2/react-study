const DessertData = [
  {
    id: 1,
    name: "우동",
    img: "https://cdn.pixabay.com/photo/2018/12/28/13/25/noodle-3899589_1280.png",
    price: "5000원",
    delay: 0.4,
  },
  {
    id: 2,
    name: "초밥",
    img: "https://cdn.pixabay.com/photo/2019/12/09/14/53/sushi-4683661_1280.png",
    price: "12000원",
    delay: 0.8,
  },
  {
    id: 3,
    name: "라멘",
    img: "https://cdn.pixabay.com/photo/2023/07/19/23/11/ai-generated-8138069_1280.png",
    price: "11000원",
    delay: 1.2,
  },
];

function Dessert() {
  return (
    <section>
      <div className="container py-12">
        <h3 className="text-2xl font-semibold text-ligjtGray uppercase py-8">
          food
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {DessertData.map((item, index) => {
            return (
              <div
                key={index}
                className="group bg-white/50 shadow-md p-3 flex items-center gap-3"
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-24 rounded-full group-hover:scale-125 transition-all duration-700 group-hover:rotate-[50deg]"
                />
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-xl text-darkNavy">{item.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Dessert;

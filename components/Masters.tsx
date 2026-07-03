import Image from "next/image";

const masters = [
  {
    name: "Мария Некрасова",
    style: "Реализм и графика",
    image: "/images/master1.jpg",
  },
  {
    name: "Алексей Морозов",
    style: "Blackwork и минимализм",
    image: "/images/master2.jpg",
  },
  {
    name: "Александр Липатов",
    style: "Реализм и масштабные проекты",
    image: "/images/master3.jpg",
  },
];

export default function Masters() {
  return (
    <section className="masters" id="masters">
      <div className="section-head">
        <p className="subtitle">Команда студии</p>
        <h2>Наши мастера</h2>
      </div>

      <div className="masters-grid">
        {masters.map((master) => (
          <div className="master-card" key={master.name}>
            <div className="master-image">
              <Image
                src={master.image}
                alt={master.name}
                fill
                className="master-img"
              />
            </div>

            <h3>{master.name}</h3>
            <p>{master.style}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
const services = [
  {
    number: "01",
    title: "Индивидуальный эскиз",
    text: "Создаём уникальный дизайн под вашу идею, стиль и анатомию.",
  },
  {
    number: "02",
    title: "Художественная татуировка",
    text: "Работаем в стилях реализм, графика, blackwork, minimal и fine line.",
  },
  {
    number: "03",
    title: "Перекрытие тату",
    text: "Аккуратно обновляем старые работы и превращаем их в новый дизайн.",
  },
  {
    number: "04",
    title: "Консультация",
    text: "Помогаем выбрать место, размер, стиль и подготовиться к сеансу.",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="section-head">
        <p className="subtitle">Что мы делаем</p>
        <h2>Наши услуги</h2>
      </div>

      <div className="services-list">
        {services.map((service) => (
          <div className="service-row" key={service.number}>
            <span>{service.number}</span>

            <div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>

            <a href="#booking">Записаться</a>
          </div>
        ))}
      </div>
    </section>
  );
}
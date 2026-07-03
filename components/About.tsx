import Image from "next/image";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-image">
        <Image
          src="/images/studio.jpg"
          alt="Наша студия"
          fill
          className="about-photo"
        />
      </div>

      <div className="about-content">
        <p className="subtitle">О студии</p>

        <h2>Искусство на теле</h2>

        <p>
          «Золотое сечение» — это современная тату-студия,
         где каждая работа создаётся с вниманием к деталям,
         композиции и индивидуальности клиента.
        </p>

        <p>
          Атмосфера нашей студии сочетает комфорт, стерильность
          и творческий подход. Мы помогаем воплотить идею,
          которая останется с вами на всю жизнь.
        </p>

        <a href="#booking" className="button">
          Записаться
        </a>
      </div>
    </section>
  );
}
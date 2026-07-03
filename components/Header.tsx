import Image from "next/image";

export default function Header() {
  return (
    <header className="hero" id="home">
      <Image
        src="/images/hero.jpg"
        alt="Тату-мастер за работой"
        fill
        priority
        className="hero-bg"
      />

      <div className="hero-dark"></div>

      <nav className="navbar">
        <a href="#home" className="logo">
          <span className="logo-symbol">φ</span>
          <span className="logo-text">
            ЗОЛОТОЕ
            <small>СЕЧЕНИЕ</small>
          </span>
        </a>

        <div className="menu">
          <a href="#services">Услуги</a>
          <a href="#about">О студии</a>
          <a href="#gallery">Работы</a>
          <a href="#masters">Мастера</a>
          <a href="#booking">Запись</a>
        </div>
      </nav>

      <div className="hero-text">
        <p className="heroSubtitle">Авторская тату-студия</p>

        <h1>
          Золотое <br />
          Сечение
        </h1>

        <p className="heroDescription">
          Татуировки, созданные по принципам гармонии, эстетики
          и индивидуальности. Мы превращаем идеи в настоящее искусство.
        </p>

        <div className="hero-stats">
          <div>
            <strong>15+</strong>
            <span>лет опыта</span>
          </div>

          <div>
            <strong>5000+</strong>
            <span>работ</span>
          </div>

          <div>
            <strong>100%</strong>
            <span>стерильность</span>
          </div>
        </div>

        <div className="heroButtons">
          <a href="#booking" className="button">
            Записаться
          </a>

          <a href="#gallery" className="button secondary">
            Смотреть работы
          </a>
        </div>
      </div>

      <div className="heroInfo">
        <span>Москва</span>
        <span>Since 2026</span>
        <span>Custom Tattoo</span>
      </div>
    </header>
  );
}
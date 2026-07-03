export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3>Золотое сечение</h3>
          <p>
            Авторская тату-студия.
            Индивидуальные эскизы и качественная работа.
          </p>
        </div>

        <div>
          <h4>Навигация</h4>

          <ul>
            <li><a href="#home">Главная</a></li>
            <li><a href="#services">Услуги</a></li>
            <li><a href="#gallery">Работы</a></li>
            <li><a href="#booking">Запись</a></li>
          </ul>
        </div>

        <div>
          <h4>Контакты</h4>

          <p>📍 Москва</p>
          <p>📞 +7 (991) 625-30-19</p>
          <p>✉ cool@tattoo.ru</p>
        </div>
      </div>

      <div className="copyright">
        © 2026 Tattoo Studio. Все права защищены.
      </div>
    </footer>
  );
}
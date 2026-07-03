import BookingForm from "./BookingForm";

export default function Booking() {
  return (
    <section className="booking" id="booking">
      <div className="booking-text">
        <p className="subtitle">Запишитесь прямо сейчас</p>

        <h2>Оставьте заявку</h2>

        <p>
          Заполните форму ниже, и мы свяжемся с вами для консультации
          и подбора удобной даты.
        </p>
      </div>

      <BookingForm />
    </section>
  );
}
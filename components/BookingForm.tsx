"use client";

export default function BookingForm() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Ошибка отправки");
        return;
      }

      alert("Спасибо! Ваша заявка отправлена.");
      form.reset();
    } catch (error) {
      alert("Произошла ошибка. Проверьте консоль.");
      console.error(error);
    }
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Ваше имя" required />
      <input name="phone" type="tel" placeholder="Телефон" required />
      <textarea name="message" placeholder="Опишите вашу идею..." />
      <button type="submit">Записаться</button>
    </form>
  );
}
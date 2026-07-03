"use client";

export default function AdminContent({ bookings }: any) {
  return (
    <main className="admin-page">
      <h1>Заявки</h1>

      <div className="admin-table">
        <table>
          <thead>
            <tr>
              <th>Имя</th>
              <th>Телефон</th>
              <th>Идея</th>
              <th>Дата</th>
            </tr>
          </thead>

          <tbody>
            {bookings?.map((b: any) => (
              <tr key={b.id}>
                <td>{b.name}</td>
                <td>{b.phone}</td>
                <td>{b.message || "—"}</td>
                <td>{new Date(b.created_at).toLocaleString("ru-RU")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
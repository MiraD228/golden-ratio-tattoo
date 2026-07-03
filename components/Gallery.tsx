"use client";

import Image from "next/image";
import { useState } from "react";

const works = [
  { src: "/images/tattoo1.jpg", title: "Blackwork" },
  { src: "/images/tattoo2.jpg", title: "Realism" },
  { src: "/images/tattoo3.jpg", title: "Fine Line" },
  { src: "/images/tattoo4.jpg", title: "Floral" },
  { src: "/images/tattoo6.jpg", title: "Graphic" },
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="gallery" id="gallery">
      <div className="section-head">
        <p className="subtitle">Работы мастеров</p>
        <h2>Галерея</h2>
      </div>

      <div className="gallery-masonry">
        {works.map((work, index) => (
          <button
            className={`work-card work-${index + 1}`}
            key={work.src}
            onClick={() => setActiveImage(work.src)}
          >
            <Image src={work.src} alt={work.title} fill className="work-image" />
          </button>
        ))}
      </div>

      {activeImage && (
        <div className="lightbox" onClick={() => setActiveImage(null)}>
          <button className="lightbox-close">×</button>

          <div className="lightbox-image">
            <Image src={activeImage} alt="Работа мастера" fill />
          </div>
        </div>
      )}
    </section>
  );
}
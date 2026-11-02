// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Gallery lightbox
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector("img");
document.querySelectorAll(".gallery__item").forEach((item) => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    lightboxImg.src = item.dataset.full;
    lightboxImg.alt = img.alt;
    lightbox.showModal();
  });
});
lightbox.querySelector(".lightbox__close").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.close();
});

// Copy booking email
document.querySelectorAll("[data-copy]").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const original = btn.textContent;
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      btn.textContent = "Copied!";
    } catch {
      btn.textContent = btn.dataset.copy;
    }
    setTimeout(() => (btn.textContent = original), 2000);
  });
});

// Reveal on scroll
const revealTargets = document.querySelectorAll(
  ".about__media, .about__text, .section-head, .gallery__item, .card, .booking__inner"
);
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealTargets.forEach((el) => {
    el.classList.add("reveal");
    io.observe(el);
  });
}

// Theme toggle, modal, contact form validation and simple modal renderer
(function () {
  const html = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const yearEls = document.querySelectorAll(
    "#year, #year-about, #year-works, #year-connect, #year-contact"
  );

  // set year
  yearEls.forEach((e) => {
    if (e) e.textContent = new Date().getFullYear();
  });

  // load theme
  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = stored || (prefersDark ? "dark" : "light");

  function setTheme(t) {
    html.setAttribute("data-theme", t);
    localStorage.setItem("theme", t);
    if (toggle) toggle.textContent = t === "light" ? "☀️" : "🌙";
  }

  // Initialize theme
  setTheme(initialTheme);

  if (toggle) {
    toggle.addEventListener("click", () => {
      const currentTheme = html.getAttribute("data-theme");
      setTheme(currentTheme === "light" ? "dark" : "light");
    });
  }

  // Modal for project details
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  const modalClose = document.querySelectorAll(".modal-close");
  function openModal(data) {
    if (!modal) return;
    modal.removeAttribute("aria-hidden");
    modalContent.innerHTML = renderProject(data);
  }
  function closeModal() {
    if (!modal) return;
    modal.setAttribute("aria-hidden", "true");
    modalContent.innerHTML = "";
  }
  modalClose.forEach((b) => b && b.addEventListener("click", closeModal));
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });

    // Close modal with Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
        closeModal();
      }
    });
  }

  function renderProject(p) {
    try {
      const obj = typeof p === "string" ? JSON.parse(p) : p;
      return `
    <h2>${obj.title}</h2>
    <p class="muted">${obj.tech}</p>
    <p>${obj.desc}</p>
    <img src="${obj.img}" alt="${obj.title}" style="width:100%;margin-top:12px;border-radius:10px" />
    `;
    } catch (e) {
      return "<p>Unable to show project</p>";
    }
  }

  document.querySelectorAll(".card[data-project]").forEach((card) => {
    card.addEventListener("click", () =>
      openModal(card.getAttribute("data-project"))
    );
  });

  // Contact form: basic validation and mailto fallback
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const mailtoBtn = document.getElementById("mailto-fallback");
  if (mailtoBtn) {
    mailtoBtn.addEventListener("click", () => {
      const name = document.getElementById("name").value || "";
      const email = document.getElementById("email").value || "";
      const message = document.getElementById("message").value || "";
      const subject = encodeURIComponent(`Contact from ${name || "Website"}`);
      const body = encodeURIComponent(
        `Name: ${name}%0AEmail: ${email}%0A%0A${message}`
      );
      window.location.href = `mailto:hello@alexdoe.com?subject=${subject}&body=${body}`;
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      status.style.display = "block";

      if (name.length < 2) {
        status.textContent =
          "❌ Please enter a valid name (at least 2 characters).";
        status.style.color = "#ef4444";
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        status.textContent = "❌ Please enter a valid email address.";
        status.style.color = "#ef4444";
        return;
      }
      if (message.length < 10) {
        status.textContent = "❌ Message is too short (minimum 10 characters).";
        status.style.color = "#ef4444";
        return;
      }

      // since we can't send email from static site, show success and offer mailto
      status.textContent =
        "✅ Thanks! Your message is validated. Click 'Open email' to send it via your email client.";
      status.style.color = "#10b981";
      form.reset();
    });

    // Add real-time validation feedback
    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.addEventListener("blur", () => {
        if (input.value.trim() === "") {
          input.style.borderColor = "#ef4444";
        } else {
          input.style.borderColor = "var(--border)";
        }
      });

      input.addEventListener("focus", () => {
        input.style.borderColor = "var(--accent)";
      });
    });
  }

  // Add smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add scroll reveal animation
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll(".card, .skills-list li").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(el);
  });
})();

/**
 * Bindala Tech - Interactive Scripts
 * Handles mobile sidebar, navigation, scroll animations, and UX enhancements.
 */

document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 1. MOBILE SIDEBAR / DRAWER NAVIGATION
  // ==========================================
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const closeBtn = document.getElementById("close-btn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const sidebarLinks = document.querySelectorAll(".sidebar-link");

  function openSidebar() {
    if (!sidebar || !overlay) return;
    sidebar.classList.remove("-translate-x-full");
    overlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    if (hamburgerBtn) hamburgerBtn.setAttribute("aria-expanded", "true");
  }

  function closeSidebar() {
    if (!sidebar || !overlay) return;
    sidebar.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
    document.body.style.overflow = "";
    if (hamburgerBtn) hamburgerBtn.setAttribute("aria-expanded", "false");
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", openSidebar);
    hamburgerBtn.setAttribute("aria-expanded", "false");
  }
  if (closeBtn) closeBtn.addEventListener("click", closeSidebar);
  if (overlay) overlay.addEventListener("click", closeSidebar);

  sidebarLinks.forEach((link) => {
    link.addEventListener("click", closeSidebar);
  });

  // Close sidebar on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sidebar && !sidebar.classList.contains("-translate-x-full")) {
      closeSidebar();
    }
  });

  // ==========================================
  // 2. SCROLL PROGRESS BAR
  // ==========================================
  const scrollProgressBar = document.getElementById("scroll-progress");

  function updateScrollProgress() {
    if (!scrollProgressBar) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgressBar.style.width = `${Math.min(100, Math.max(0, scrollPercent))}%`;
  }

  // ==========================================
  // 3. BACK TO TOP & FLOATING MOBILE CTA
  // ==========================================
  const backToTopBtn = document.getElementById("back-to-top");
  const mobileFloatingCta = document.getElementById("mobile-floating-cta");
  const contactSection = document.getElementById("contact");

  function handleFloatingElements() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    // Back to top button toggle
    if (backToTopBtn) {
      if (scrollY > 380) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    }

    // Hide mobile floating CTA when reaching contact section or footer
    if (mobileFloatingCta && contactSection) {
      const contactTop = contactSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      // If contact section is in view, hide floating CTA to avoid blocking form
      if (contactTop < windowHeight * 0.7) {
        mobileFloatingCta.classList.add("hide");
      } else {
        mobileFloatingCta.classList.remove("hide");
      }
    }
  }

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Combined optimized scroll listener
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateScrollProgress();
        handleFloatingElements();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Initial call
  updateScrollProgress();
  handleFloatingElements();

  // ==========================================
  // 4. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
  // ==========================================
  const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealElements.forEach((el) => {
      revealObserver.observe(el);
    });
  } else {
    // Fallback for very old browsers
    revealElements.forEach((el) => el.classList.add("is-visible"));
  }

  // ==========================================
  // 5. ACTIVE NAVIGATION LINK ON SCROLL
  // ==========================================
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a[href^='#']");

  function updateActiveNavLink() {
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("text-brand", "font-bold");
            link.classList.remove("text-gray-600");
          } else if (!link.classList.contains("bg-brand")) {
            link.classList.remove("text-brand", "font-bold");
            link.classList.add("text-gray-600");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", updateActiveNavLink, { passive: true });

  // ==========================================
  // 6. CONTACT FORM INTERACTION (WhatsApp Connect)
  // ==========================================
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameInput = contactForm.querySelector('input[type="text"]');
      const emailInput = contactForm.querySelector('input[type="email"]');
      const messageInput = contactForm.querySelector('textarea');

      const name = nameInput ? nameInput.value.trim() : "";
      const email = emailInput ? emailInput.value.trim() : "";
      const message = messageInput ? messageInput.value.trim() : "";

      if (!name || !message) {
        alert("Mohon lengkapi nama dan pesan Anda sebelum mengirim.");
        return;
      }

      const waText = encodeURIComponent(
        `Halo Minda & Tim Bindala Tech,\n\nNama: ${name}\nEmail: ${email || "-"}\n\nPesan: ${message}\n\nSaya mau konsultasi pembuatan website.`
      );

      // Open WhatsApp with prefilled message
      window.open(`https://wa.me/62882006438151?text=${waText}`, "_blank");
    });
  }
});

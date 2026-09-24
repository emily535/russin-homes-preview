"use client";

import { useEffect } from "react";

export function MotionSystem() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const header = document.querySelector<HTMLElement>(".site-header");
    const marker = document.createElement("span");
    marker.className = "header-scroll-marker";
    marker.setAttribute("aria-hidden", "true");
    document.body.append(marker);

    const headerObserver = new IntersectionObserver(([entry]) => {
      header?.classList.toggle("is-scrolled", !entry.isIntersecting);
    });
    headerObserver.observe(marker);

    if (reducedMotion.matches) {
      return () => {
        headerObserver.disconnect();
        marker.remove();
      };
    }

    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main > section, .project-grid > *, .process li, .credential-list > *",
      ),
    );
    revealItems.forEach((item, index) => {
      item.classList.add("reveal-item");
      item.style.setProperty("--reveal-delay", `${(index % 4) * 80}ms`);
    });
    document.documentElement.classList.add("motion-ready");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).classList.add("is-revealed");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -24px" },
    );
    revealItems.forEach((item) => revealObserver.observe(item));

    return () => {
      revealObserver.disconnect();
      headerObserver.disconnect();
      marker.remove();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return null;
}

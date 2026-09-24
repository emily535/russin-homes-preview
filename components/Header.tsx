"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "@/data/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const groupRef = useRef<HTMLDivElement>(null);
  const locationsButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        const locationsWasOpen = locationsOpen;
        const menuWasOpen = menuOpen;
        setLocationsOpen(false);
        setMenuOpen(false);
        if (locationsWasOpen) locationsButtonRef.current?.focus();
        else if (menuWasOpen) menuButtonRef.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (!groupRef.current?.contains(event.target as Node)) setLocationsOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
    };
  }, [locationsOpen, menuOpen]);

  const closeAll = () => {
    setMenuOpen(false);
    setLocationsOpen(false);
  };

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Russin Homes home" onClick={closeAll}>
        <Image src={assets.headerLogo} alt="Russin Homes" width={200} height={60} priority />
      </Link>
      <button
        ref={menuButtonRef}
        className="menu-button"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-nav"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <nav
        id="primary-nav"
        className={`primary-nav ${menuOpen ? "open" : ""}`}
        aria-label="Primary navigation"
      >
        <Link href="/" onClick={closeAll}>
          Home
        </Link>
        <Link href="/portfolio" onClick={closeAll}>
          Portfolio
        </Link>
        <Link href="/opportunities" onClick={closeAll}>
          Opportunities
        </Link>
        <Link href="/parade-of-homes" onClick={closeAll}>
          Parade of Homes
        </Link>
        <div
          className="nav-group"
          ref={groupRef}
          onMouseEnter={() => setLocationsOpen(true)}
          onMouseLeave={() => setLocationsOpen(false)}
          onBlur={(event) => {
            if (!groupRef.current?.contains(event.relatedTarget)) setLocationsOpen(false);
          }}
        >
          <button
            ref={locationsButtonRef}
            type="button"
            aria-expanded={locationsOpen}
            aria-controls="location-nav"
            onClick={() => setLocationsOpen((open) => !open)}
          >
            Where We Build <ChevronDown aria-hidden="true" size={15} />
          </button>
          <div id="location-nav" className="nav-dropdown" hidden={!locationsOpen}>
            <Link href="/locations/youngsville" onClick={closeAll}>
              Youngsville
            </Link>
            <Link href="/locations/wake-forest" onClick={closeAll}>
              Wake Forest
            </Link>
            <Link href="/locations/raleigh" onClick={closeAll}>
              Raleigh
            </Link>
          </div>
        </div>
        <Link href="/about" onClick={closeAll}>
          About
        </Link>
        <Link href="/contact" onClick={closeAll}>
          Contact
        </Link>
      </nav>
      <a className="persistent-call" href="tel:+19195207342">
        Call Jeremy
      </a>
    </header>
  );
}

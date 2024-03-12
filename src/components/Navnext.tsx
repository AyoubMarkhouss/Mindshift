import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

export default function Navnext() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // const menuItems = ["À propos", "Services", "Expertises", "Blog", "Contact"];
  const menuItems = [
    { label: "À propos", link: "/" },
    { label: "Services", link: "/services" },
    { label: "Expertises", link: "/expertises" },
    { label: "Blog", link: "/blog" },
    { label: "Contact", link: "/contact" },
  ];

  const [navbarBlur, setNavbarBlur] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setNavbarBlur(true);
      } else {
        setNavbarBlur(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      className={navbarBlur ? "blurred" : "trans"}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="semibold sm:text-2xl text-xl  text-inherit">
            MINDSHIFT
          </p>
          
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-3 " justify="center">
        <NavbarItem>
          <Button as={Link} className="bg-transparent text-xl" href="/">
            À propos
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} className="bg-transparent text-xl" href="services">
            Services
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="bg-transparent text-xl"
            href="expertises"
          >
            Expertises
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} className="bg-transparent text-xl" href="/blog">
            Blog
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            href="contact"
            variant="flat"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-medium font-medium text-slate-50 backdrop-blur-3xl">
              Contact
            </span>
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-black/30 backdrop-blur-md">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.label}>
            <Link
              className="medium w-full  text-black text-3xl pt-5"
              href={item.link}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

import { GlassNavbar } from "../components/GlassEffect";
import logo from "../assets/images/logo.png";

export const Navbar = () => {
  const links = ["Home", "About", "Services", "Testimonials", "Contact"];
  return (
    <GlassNavbar className="w-full max-w-4xl">
      <div className="w-12 h-12">
        <img src={logo} alt="The Meta Mile Logo" className="object-cover" />
      </div>
      <div className="flex gap-4 items-center">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[#004d40] hover:text-[#004d40]/70 neue font-medium transition-all duration-300 ease"
          >
            {link}
          </a>
        ))}
      </div>
    </GlassNavbar>
  );
};

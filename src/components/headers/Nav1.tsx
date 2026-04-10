import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

export default function Nav1() {
  const { pathname } = useLocation();
  const { lang } = useLanguage();
  const nav = translations.nav;

  const menuItems = [
    { label: nav.home[lang], href: "#home", isLink: false, hasDropdown: false, submenu: [] as { href: string; label: string }[] },
    { label: nav.about[lang], href: "#about", isLink: false, hasDropdown: false, submenu: [] as { href: string; label: string }[] },
    { label: nav.experience[lang], href: "#resume-section", isLink: false, hasDropdown: false, submenu: [] as { href: string; label: string }[] },
    { label: nav.portfolio[lang], href: "#portfolio", isLink: false, hasDropdown: false, submenu: [] as { href: string; label: string }[] },
    { label: nav.contact[lang], href: "#contacts", isLink: false, hasDropdown: false, submenu: [] as { href: string; label: string }[] },
  ];

  const renderMenu = (items: typeof menuItems, className: string) => (
    <ul className={className}>
      {items.map((item, index) => (
        <li
          key={index}
          className={`${item.hasDropdown ? "has-dropdown" : ""} ${
            item.submenu?.some((elm) => elm.href.split("/")[1] == pathname.split("/")[1])
              ? "menu-item-open"
              : ""
          }`}
        >
          {item.isLink ? (
            <Link
              className={`${item.href.split("/")[1] == pathname.split("/")[1] ? "active" : ""}`}
              to={item.href}
            >
              {item.label}
            </Link>
          ) : (
            <a href={item.href}>
              {item.label}
              {item.hasDropdown && <i className="fa-regular fa-chevron-down" />}
            </a>
          )}
          {item.hasDropdown && (
            <ul className="submenu">
              {item.submenu.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link
                    className={`${subItem.href.split("/")[1] == pathname.split("/")[1] ? "active" : ""}`}
                    to={subItem.href}
                  >
                    {subItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {renderMenu(menuItems, "tmp-mainmenu dark-content")}
      {renderMenu(menuItems, "tmp-mainmenu light-content")}
    </>
  );
}

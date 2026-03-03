import { footerColumns, footerPolicies, footerSocial } from "../../data/footerData";
import Icon from "../Icon";

export default function SiteFooter() {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-[3.5rem]">
                <img
                  src="/images/logo.jpg"
                  alt="Mosalam logo"
                  className="w-full h-full rounded-[4px]"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing enterprise-grade IT solutions and hosting services for
              forward-thinking businesses.
            </p>
            <div className="flex space-x-4">
              {footerSocial.map((social) => (
                <a
                  key={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:scale-110 transform transition-all"
                  href="#"
                  aria-label={social.label}
                >
                  <Icon name={social.icon} className="text-white/90" size={16} />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-bold mb-6">{column.title}</h3>
              {!column.contacts ? (
                <ul className="space-y-4 text-sm text-gray-400">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        className="hover:text-primary hover:translate-x-1 inline-block transition-all"
                        href="#"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="space-y-4 text-sm text-gray-400">
                  {column.contacts.map((contact) => (
                    <li key={contact.label} className="flex items-start gap-3">
                      <Icon name={contact.icon} className="text-primary mt-0.5" size={14} />
                      <span className="hover:text-white transition-colors cursor-pointer">
                        {contact.label}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>(c) 2024 Mosalam IT Services. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {footerPolicies.map((policy) => (
              <a key={policy} className="hover:text-white transition-colors" href="#">
                {policy}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

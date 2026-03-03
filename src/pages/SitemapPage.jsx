import { sitemapGroups } from "../data/sitemapData";
import Icon from "../components/Icon";

export default function SitemapPage() {
  return (
    <>
      <main className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
              Sitemap
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              A comprehensive directory of our enterprise services and
              resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-12 reveal reveal-delay-2">
            {sitemapGroups.map((group) => (
              <div key={group.title} className="flex flex-col space-y-4">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white border-b-2 border-primary pb-2 w-fit">
                  {group.title}
                </h2>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        className="sitemap-link flex items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all group"
                        href="#"
                      >
                        <Icon
                          name="arrow_forward"
                          className="link-arrow mr-2 opacity-0 -translate-x-2 transition-all duration-300"
                          size={14}
                        />
                        {link}
                        {group.badgeTarget === link ? (
                          <span className="ml-2 text-[10px] bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                            {group.badge}
                          </span>
                        ) : null}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20 reveal reveal-delay-3">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-surface-dark dark:to-background-dark rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-white/5">
              <div className="px-6 py-12 md:px-12 md:flex md:items-center md:justify-between">
                <div className="mb-6 md:mb-0">
                  <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Looking for something specific?
                  </h2>
                  <p className="mt-2 text-gray-300">
                    Our team is available 24/7 to help you navigate our services.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition-all hover:scale-105"
                    href="#"
                  >
                    <Icon name="search" className="mr-2" size={16} />
                    Search Site
                  </a>
                  <a
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-opacity-90 transition-all hover:scale-105 shadow-lg"
                    href="#"
                  >
                    Contact Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

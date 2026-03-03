import ClientLogo from "../components/ClientLogo";
import { clientStats, clients } from "../data/clientsData";

export default function ClientsPage() {
  return (
    <>
      <div className="relative overflow-hidden bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark">
        <div className="absolute inset-0 grid-bg-pattern opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4 reveal">
            Trusted by{" "}
            <span className="text-primary inline-block hover:scale-105 transition-transform duration-300">
              Leading Organizations
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-subtext-light dark:text-subtext-dark reveal reveal-delay-1">
            We empower businesses across industries with robust hosting,
            security, and custom ERP solutions. Join the network of excellence.
          </p>
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-border-light dark:border-border-dark max-w-5xl mx-auto overflow-hidden reveal reveal-delay-2">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
              {clientStats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 text-center hover:-translate-y-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer"
                >
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm font-medium text-subtext-light dark:text-subtext-dark mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className={`client-card reveal reveal-delay-${
                (index % 4) + 1
              } bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-8 flex flex-col items-center justify-between text-center group h-64 relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex-1 flex items-center justify-center w-full">
                <div className="w-32 h-20 relative flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:scale-110">
                  <ClientLogo logo={client.logo} clientName={client.name} />
                </div>
              </div>

              <div className="relative z-10 mt-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                  {client.name}
                </h4>
                <p className="text-xs text-subtext-light dark:text-subtext-dark">
                  {client.type}
                </p>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                  <p className="text-xs text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100 font-medium">
                    {client.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-primary/10 dark:bg-primary/5 rounded-2xl p-10 md:p-16 text-center border border-primary/20 reveal">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-subtext-light dark:text-subtext-dark max-w-2xl mx-auto mb-8">
            Experience the same premium service quality that powers these
            industry leaders. Let us build your digital infrastructure together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-opacity-90 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300"
              href="#"
            >
              Start Your Project
            </a>
            <a
              className="inline-flex justify-center items-center px-6 py-3 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-base font-medium rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300"
              href="#"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

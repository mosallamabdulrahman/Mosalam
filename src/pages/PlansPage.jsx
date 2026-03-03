import { useState } from "react";
import {
  addons,
  comparisonColumns,
  comparisonCtas,
  comparisonRows,
  pricingPlans,
} from "../data/plansData";
import Icon from "../components/Icon";

function isIconValue(value) {
  return value === "check_circle" || value === "verified";
}

export default function PlansPage() {
  const [yearly, setYearly] = useState(true);

  return (
    <>
      <section className="relative pt-20 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6 tracking-tight reveal-element delay-100">
            Enterprise-Grade <span className="text-primary">Hosting Infrastructure</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500 dark:text-slate-400 reveal-element delay-200">
            Scalable, secure, and lightning-fast solutions for businesses that
            demand excellence. Choose the plan that powers your growth.
          </p>
          <div className="mt-12 flex justify-center items-center gap-4 reveal-element delay-300">
            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
              Monthly
            </span>
            <label className="relative inline-flex items-center cursor-pointer" htmlFor="billing-toggle">
              <input
                id="billing-toggle"
                type="checkbox"
                className="sr-only peer"
                checked={yearly}
                onChange={(event) => setYearly(event.target.checked)}
              />
              <div className="w-14 h-7 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all duration-300 ease-in-out peer-checked:bg-primary shadow-inner" />
            </label>
            <span className="text-sm font-semibold text-slate-900 dark:text-white">
              Yearly
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary dark:text-teal-300 dark:bg-primary/20 animate-pulse">
              Save 20%
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative flex flex-col p-8 rounded-2xl shadow-xl hover-card-pop ${
                  plan.featured
                    ? "bg-surface-light dark:bg-surface-dark border-2 border-primary shadow-2xl z-10 transform md:-translate-y-4 reveal-element delay-200"
                    : "bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 group reveal-element"
                } ${index === 0 ? "delay-100" : index === 2 ? "delay-300" : index === 3 ? "delay-400" : ""}`}
              >
                {plan.ribbon && (
                  <div className="ribbon">
                    <div className="ribbon-content shadow-md">{plan.ribbon}</div>
                  </div>
                )}
                <div className="mb-4">
                  <span className={plan.iconWrap}>
                    <Icon name={plan.icon} size={18} />
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 h-10">
                  {plan.description}
                </p>
                <div className="flex items-baseline mb-6">
                  <span
                    className={`font-bold text-slate-900 dark:text-white ${
                      plan.featured ? "text-4xl" : "text-3xl"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.suffix && (
                    <span className="text-slate-500 dark:text-slate-400 ml-1">
                      {plan.suffix}
                    </span>
                  )}
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Icon name="check_circle" className="text-primary mr-2" size={18} />
                      <span className="text-sm text-slate-600 dark:text-slate-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  className={`block w-full py-3 px-6 text-center rounded-lg font-semibold transition-all duration-300 btn-hover-effect ${
                    plan.featured
                      ? "bg-primary text-white hover:bg-secondary shadow-lg shadow-primary/25"
                      : "border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary hover:bg-primary/5"
                  }`}
                  href="#"
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-10 text-center reveal-element">
            Compare All Features
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg bg-surface-light dark:bg-surface-dark reveal-element delay-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                  <th className="p-6 font-display font-semibold text-slate-900 dark:text-white w-1/4">
                    Hardware & Resources
                  </th>
                  {comparisonColumns.map((column, index) => (
                    <th
                      key={column}
                      className={`p-6 font-semibold text-center w-1/5 ${
                        index === 1
                          ? "text-primary bg-primary/5"
                          : "text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                {comparisonRows.map((section) => (
                  <FragmentRows key={section.section} section={section} />
                ))}
                <tr className="bg-white dark:bg-surface-dark">
                  <td className="p-4 pl-6" />
                  {comparisonCtas.map((cta, index) => (
                    <td
                      key={cta}
                      className={`p-6 text-center ${index === 1 ? "bg-primary/5" : ""}`}
                    >
                      {index === 1 ? (
                        <a
                          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                          href="#"
                        >
                          {cta}
                        </a>
                      ) : (
                        <a
                          className="text-sm font-semibold text-primary hover:text-secondary transition-colors duration-200"
                          href="#"
                        >
                          {cta}
                        </a>
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white mb-8 reveal-element">
            Enhance Your Hosting
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addons.map((addon, index) => (
              <div
                key={addon.name}
                className={`flex p-6 bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group reveal-element ${
                  index === 0 ? "delay-100" : index === 1 ? "delay-200" : "delay-300"
                }`}
              >
                <div className="flex-shrink-0 mr-4">
                  <div className={addon.iconWrap}>
                    <Icon name={addon.icon} size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {addon.name}
                  </h4>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {addon.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-slate-900 dark:text-white">
                      {addon.price}
                      <span className="text-sm font-normal text-slate-500 dark:text-slate-400">
                        /mo
                      </span>
                    </span>
                    <button className="text-sm font-semibold text-primary hover:text-secondary transition-colors">
                      Add to plan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FragmentRows({ section }) {
  return (
    <>
      {section.section === "Security & Support" ? (
        <tr className="bg-slate-50 dark:bg-slate-800/80 border-t border-b border-slate-200 dark:border-slate-700">
          <th className="p-4 pl-6 font-display font-semibold text-slate-900 dark:text-white" colSpan={5}>
            {section.section}
          </th>
        </tr>
      ) : null}
      {section.rows.map((row) => (
        <tr
          key={`${section.section}-${row[0]}`}
          className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-200"
        >
          <td className="p-4 pl-6 text-slate-600 dark:text-slate-400">{row[0]}</td>
          {row.slice(1).map((cell, cellIndex) => (
            <td
              key={`${row[0]}-${String(cell)}-${cellIndex}`}
              className={`p-4 text-center ${
                cellIndex === 1 ? "bg-primary/5 font-bold text-slate-900 dark:text-white" : "text-slate-900 dark:text-white"
              }`}
            >
              {isIconValue(cell) ? (
                <Icon name={cell} className="text-primary inline-flex" size={20} />
              ) : (
                cell
              )}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

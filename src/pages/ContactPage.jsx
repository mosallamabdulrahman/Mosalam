import { contactTopics, officeContacts } from "../data/contactData";
import Icon from "../components/Icon";

export default function ContactPage() {
  return (
    <>
      <header className="bg-surface-light dark:bg-surface-dark pt-16 pb-12 lg:pt-24 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 reveal">
            Let us Start a Conversation
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto reveal reveal-delay-1">
            Whether you need enterprise hosting solutions, custom ERP
            implementation, or dedicated technical support, our team is ready to
            assist you.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="bg-surface-light dark:bg-surface-dark p-8 md:p-10 rounded-2xl shadow-lg shadow-gray-200/50 dark:shadow-none border border-border-light dark:border-border-dark reveal reveal-delay-2 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <span className="bg-primary/10 p-2 rounded-lg text-primary hover:scale-110 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
                <Icon name="mail_outline" className="text-current" size={18} />
              </span>
              Send us a message
            </h2>

            <form
              action="#"
              className="space-y-6"
              method="POST"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-focus-within:text-primary transition-colors"
                    htmlFor="first-name"
                  >
                    First Name
                  </label>
                  <input
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary hover:border-primary/50 transition-all duration-300 outline-none"
                    id="first-name"
                    name="first-name"
                    placeholder="John"
                    required
                    type="text"
                  />
                </div>

                <div className="relative group">
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-focus-within:text-primary transition-colors"
                    htmlFor="last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary hover:border-primary/50 transition-all duration-300 outline-none"
                    id="last-name"
                    name="last-name"
                    placeholder="Doe"
                    required
                    type="text"
                  />
                </div>
              </div>

              <div className="relative group">
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-focus-within:text-primary transition-colors"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary hover:border-primary/50 transition-all duration-300 outline-none"
                  id="email"
                  name="email"
                  placeholder="john@company.com"
                  required
                  type="email"
                />
              </div>

              <div className="relative group">
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-focus-within:text-primary transition-colors"
                  htmlFor="subject"
                >
                  Topic
                </label>
                <div className="relative">
                  <select
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary hover:border-primary/50 transition-all duration-300 outline-none appearance-none cursor-pointer"
                    id="subject"
                    name="subject"
                    defaultValue=""
                  >
                    <option className="text-gray-400" disabled value="">
                      Select a topic
                    </option>
                    {contactTopics.map((topic) => (
                      <option
                        key={topic.value}
                        className="dark:bg-surface-dark"
                        value={topic.value}
                      >
                        {topic.label}
                      </option>
                    ))}
                  </select>
                  <Icon
                    name="expand_more"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-hover:text-primary transition-colors"
                    size={20}
                  />
                </div>
              </div>

              <div className="relative group">
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-focus-within:text-primary transition-colors"
                  htmlFor="message"
                >
                  How can we help?
                </label>
                <textarea
                  className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary hover:border-primary/50 transition-all duration-300 outline-none resize-none"
                  id="message"
                  name="message"
                  placeholder="Tell us about your project or inquiry..."
                  required
                  rows={5}
                />
              </div>

              <div className="pt-2">
                <button
                  className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 flex items-center justify-center gap-2 group text-base"
                  type="submit"
                >
                  Send Message
                  <Icon
                    name="send"
                    className="group-hover:translate-x-2 transition-transform duration-300"
                    size={14}
                  />
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-8 lg:sticky lg:top-32">
            {officeContacts.map((office, index) => (
              <div
                key={office.title}
                className={`bg-surface-light dark:bg-surface-dark rounded-2xl shadow-lg shadow-gray-200/50 dark:shadow-none border border-border-light dark:border-border-dark overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 reveal ${
                  index === 0 ? "reveal-delay-1" : "reveal-delay-2"
                } cursor-default`}
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-60">
                    <img
                      alt={`Abstract map pattern representing ${office.title}`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      src={office.mapImage}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                    <h3 className="text-white text-xl font-bold flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                      <Icon
                        name={office.titleIcon}
                        className="text-primary group-hover:animate-bounce"
                        size={20}
                      />
                      {office.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2.5 rounded-lg shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon
                        name="place"
                        className="text-primary group-hover:text-white transition-colors"
                        size={18}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-lg">
                        {office.company}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 leading-relaxed">
                        {office.lines[0]}
                        <br />
                        {office.lines[1]}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-2.5 rounded-lg shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon
                        name="phone"
                        className="text-primary group-hover:text-white transition-colors"
                        size={18}
                      />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 hover:text-primary hover:translate-x-1 cursor-pointer transition-all duration-300 font-medium">
                      {office.phone}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-2.5 rounded-lg shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon
                        name="email"
                        className="text-primary group-hover:text-white transition-colors"
                        size={18}
                      />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 hover:text-primary hover:translate-x-1 cursor-pointer transition-all duration-300 font-medium">
                      {office.email}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

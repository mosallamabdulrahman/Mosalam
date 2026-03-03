import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { offices, storyStats, teamMembers } from "../data/aboutData";
import Icon from "../components/Icon";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function AboutPage() {
  return (
    <>
      <section
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
        id="hero-section"
      >
        <div className="absolute inset-0 pattern-grid pointer-events-none opacity-50 dark:opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center reveal-on-scroll">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-6 border border-primary/20">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-heading-light dark:text-white mb-6 leading-tight reveal-on-scroll stagger-delay-1">
            Empowering Enterprise <br className="hidden md:block" />
            Through <span className="text-primary">Digital Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-text-light dark:text-text-dark max-w-3xl mx-auto mb-10 leading-relaxed reveal-on-scroll stagger-delay-2">
            Since 2010, Mosalam has been redefining IT infrastructure and
            hosting services. We bridge the gap between complex technology and
            business growth, serving clients from London to Cairo.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-surface-dark/50" id="mission-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 reveal-on-scroll">
              <div>
                <h2 className="text-3xl font-display font-bold text-heading-light dark:text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-text-light dark:text-text-dark leading-relaxed">
                  To provide robust, scalable, and secure IT ecosystems that
                  enable businesses to innovate without boundaries. We believe in
                  technology that serves humanity, simplifying the complex and
                  securing the future.
                </p>
              </div>

              <div className="w-full h-px bg-gray-200 dark:bg-gray-700" />

              <div>
                <h2 className="text-3xl font-display font-bold text-heading-light dark:text-white mb-4">
                  Our Vision
                </h2>
                <p className="text-lg text-text-light dark:text-text-dark leading-relaxed">
                  To be the leading bridge for digital transformation in the EMEA
                  region, recognized for our integrity, technical mastery, and
                  unwavering commitment to client success.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6">
                {storyStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-xl bg-background-light dark:bg-background-dark border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="text-3xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs font-medium uppercase text-text-light dark:text-text-dark">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative reveal-on-scroll stagger-delay-2">
              <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-xl animate-pulse" />
              <img
                alt="Team meeting in a modern office"
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out hover:scale-[1.02]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuApYxYMUjyYUIp-0z3wnfNOewtmTPRzaOJ-ir7RDEkV1YL3Xwrv3qO5EPo8ZfWEquua9GJ6d71xLVjZpNjGdiPRm9u5t8MpmrT1Ovoy0WSBUIEtHx0u6nZUI9hwnMipkWchPIIBsBE4orqE_v-VEXFJwknldjK38oXWSEfXSVXsuxsO3QSXRyOdjpzqK6sdouAOVzIzvmmL57tHF-gRewO3lqvIYmGNt5KEhIHVbUtYHxW6XOmiI-XeSNZO9wzOPK81xWcdTAd4sqw"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-background-light dark:bg-background-dark relative"
        id="offices-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-heading-light dark:text-white mb-4">
              Global Presence
            </h2>
            <p className="text-lg text-text-light dark:text-text-dark max-w-2xl mx-auto">
              Operating strategically from two major hubs to serve our
              international client base with 24/7 support and local expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <div
                key={office.title}
                className={`group relative bg-white dark:bg-surface-dark rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden reveal-on-scroll ${
                  index === 0 ? "stagger-delay-1" : "stagger-delay-2"
                } hover:-translate-y-2`}
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110">
                  <Icon name={office.cityIcon} className="text-primary" size={96} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon name={office.badgeIcon} className="text-current" size={20} />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-heading-light dark:text-white">
                      {office.title}
                    </h3>
                  </div>
                  <p className="text-text-light dark:text-text-dark mb-6">
                    {office.description}
                  </p>
                  <div className="space-y-3">
                    {office.details.map((detail) => (
                      <div
                        key={detail.text}
                        className="flex items-center text-sm text-text-light dark:text-text-dark"
                      >
                        <Icon
                          name={detail.icon}
                          className="text-primary mr-3"
                          size={16}
                        />
                        {detail.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-surface-dark/30" id="team-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
            <span className="text-primary font-semibold tracking-wider text-sm uppercase">
              The Experts
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-heading-light dark:text-white mt-2 mb-6">
              Meet Our Team
            </h2>
            <p className="text-text-light dark:text-text-dark text-lg">
              A collective of passionate engineers, architects, and strategists
              dedicated to your digital success.
            </p>
          </div>

          <div className="reveal-on-scroll stagger-delay-1 px-4">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={30}
              loop
              speed={600}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true, dynamicBullets: true }}
              navigation
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
                1280: { slidesPerView: 4, spaceBetween: 30 },
              }}
              slidesPerView={1}
              className="!pb-14"
            >
              {teamMembers.map((member, index) => (
                <SwiperSlide key={`${member.name}-${index}`} className="h-auto">
                  <div className="group bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 dark:border-gray-800 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 w-full flex flex-col h-full cursor-pointer">
                    <div className="h-64 overflow-hidden relative flex-shrink-0">
                      <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
                      <img
                        alt={`${member.name} Portrait`}
                        className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                        src={member.image}
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow relative">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full -mr-10 -mt-10 transition-all duration-500 group-hover:bg-primary/10" />
                      <h4 className="text-xl font-bold text-heading-light dark:text-white mb-1 relative z-10">
                        {member.name}
                      </h4>
                      <p className="text-primary font-medium text-sm mb-4 relative z-10">
                        {member.role}
                      </p>
                      <p className="text-sm text-text-light dark:text-text-dark mb-4 line-clamp-3 flex-grow relative z-10">
                        {member.bio}
                      </p>
                      <div className="flex space-x-3 mt-auto relative z-10">
                        <a
                          className="text-text-light dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors hover:scale-110 transform"
                          href="#"
                        >
                          <Icon name="link" size={14} />
                        </a>
                        <a
                          className="text-text-light dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors hover:scale-110 transform"
                          href="#"
                        >
                          <Icon name="email" size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

import BusinessWoman from "../../assets/businesswoman.jpg";

function DigitalResidencyInfo() {
  const features = [
    "Professional Website (UI/UX Optimized)",
    "Custom Domain & Hosting (1 Year)",
    "Mental Wellness Support Guides",
  ];

  return (
    <section className="w-full bg-welcome-gradient py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* Left Column */}
        <div className="relative group p-1 flex justify-center md:justify-start">
          {/* The Gradient Border Effect */}
          <div className="relative p-1.5 rounded-[40px] bg-hero-border-gradient">
            {/* Inner Image Container */}
            <div className="relative bg-white rounded-[2.4rem] overflow-hidden w-137.5 h-150">
              <img
                src={BusinessWoman}
                alt="Unlock Wealth Digital Residency"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Accent */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-40 bg-brand-blue/20 blur-2xl -z-10"></div>
          </div>
        </div>

        {/* Text and Features */}
        <div className="space-y-12">
          {/* Main Title */}
          <div className="space-y-3">
            <h2 className="text-[64px] font-black text-[#1a1a1a] tracking-tight leading-[1.1]">
              Start Your <br />
              Journey: <br />
              International <br />
              Digital Residency
            </h2>
          </div>

          {/* Features Box with Bullet List */}
          <div className="border-t border-features-soft pt-10">
            <div className="border border-features-soft rounded-4xl p-12 bg-white/40 shadow-sm">
              <ul className="space-y-3 list-outside pl-5">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-xl text-gray-800 font-medium relative flex items-center"
                  >
                    {/* Square black bullet */}
                    <span className="inline-block w-2.5 h-2.5 bg-black mr-4 shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Availability Text */}
          <div className="pt-2">
            <p className="text-3xl text-hero-dark/90 font-bold leading-tight max-w-lg">
              Only 2 slots available this month to ensure quality care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DigitalResidencyInfo;

function Welcome() {
  return (
    <section className="w-full bg-welcome-gradient py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Welcome Header & Description */}
        <div className="space-y-10">
          <h2 className="text-7xl font-black text-[#1a1a1a] tracking-tighter uppercase italic">
            Welcome!
          </h2>

          <div className="space-y-6 text-xl text-gray-800 leading-relaxed font-medium max-w-4xl">
            <p>
              "In a world of noise and uncertainty, your digital presence should
              be your sanctuary. We believe that your career and business are
              extensions of your inner peace."
            </p>
            <p>
              Unlock Wealth Resort Academy was founded to harmonize professional
              excellence with holistic well-being. We don’t just build websites;
              we curate digital spaces that protect your energy and reflect your
              true potential."
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-10">
          {/* Our Mission */}
          <div className="space-y-6">
            <h3 className="text-5xl font-black text-[#1a1a1a] tracking-tighter uppercase italic">
              Our mission
            </h3>
            <div className="w-full border-soft-blue pt-6">
              <p className="text-lg text-gray-700 leading-relaxed max-w-md">
                "To empower individuals by building high-quality digital
                identities that harmonize professional success with mental
                well-being."
              </p>
            </div>
          </div>

          {/* Our Vision */}
          <div className="space-y-6">
            <h3 className="text-5xl font-black text-[#1a1a1a] tracking-tighter uppercase italic">
              Our vision
            </h3>
            <div className="w-full border-soft-blue pt-6">
              <p className="text-lg text-gray-700 leading-relaxed max-w-md">
                "A world where every visionary has a serene digital home to
                thrive, regardless of the chaos in the physical world."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;

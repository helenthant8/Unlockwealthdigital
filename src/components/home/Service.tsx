import Service1 from "../../assets/sevice1.jpg";
import Service2 from "../../assets/service2.jpg";
import Service3 from "../../assets/service3.jpg";

function Service() {
  const images = [Service1, Service2, Service3];

  return (
    <section className="max-w-7xl mx-auto py-18 px-6 space-y-14">
      {/* Title */}
      <h2 className="text-[80px] font-medium text-center text-gray-900 tracking-tight">
        Our Service
      </h2>

      {/* Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div key={index} className="relative group">
            {/* The Gradient Border Effect */}
            <div className="absolute -inset-0.5 service-card-glow rounded-[2.5rem] opacity-80"></div>

            {/* White Content Box */}
            <div className="relative bg-white rounded-[2.4rem] overflow-hidden h-60 flex items-center justify-center p-1">
              <img
                src={img}
                alt={`Service ${index + 1}`}
                className="w-full h-full object-cover rounded-[2.2rem]"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pricing Banner */}
      <div className="max-w-5xl mx-auto mt-12">
        <div className="relative border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
          {/* Background Blue Fade */}
          <div className="absolute inset-0 bg-banner-soft-blue w-1/2 pointer-events-none"></div>

          {/* Text Content */}
          <div className="relative px-12 py-10 flex flex-col gap-2">
            {/* Start Your Journey */}
            <h3 className="text-[52px] font-black text-[#1a1a1a] tracking-tighter uppercase italic leading-none">
              Start Your Journey: $300{">>"}
              <span className="text-[#3B82F6]">$200</span>
            </h3>

            {/* International Digital Residency */}
            <p className="text-[52px] font-black text-[#1a1a1a] tracking-tighter uppercase italic leading-none">
              International Digital Residency
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;

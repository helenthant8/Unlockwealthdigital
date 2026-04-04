import HelenPhoto from "../../assets/helen.jpg";
import LogoCircle from "../../assets/logo.jpg";
import {
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-resort-gradient pt-24 pb-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Header & Divider Line */}
        <div className="mb-12">
          <h2 className="text-[100px] font-black text-blue-600 tracking-tighter uppercase italic leading-none">
            Let's connect
          </h2>
          {/* Horizontal Line Divider */}
          <div className="w-full h-px bg-gray-200 mt-10"></div>
        </div>

        {/* Middle Section: Guide Info */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-10">
            Your Guide at the Resort
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Logo */}
            <div className="lg:col-span-3 flex justify-start">
              <div className="w-64 h-64 shrink-0">
                <img
                  src={LogoCircle}
                  alt="Resort Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Helen's Introduction */}
            <div className="lg:col-span-5">
              <p className="text-2xl text-gray-800 leading-relaxed font-medium italic">
                "I'm Helen Thant, a UI/UX Designer and fellow introvert.
                Blending my hospitality background with digital design, I'm here
                to help you build a peaceful, powerful digital sanctuary. Let's
                create a space that speaks for you, without the noise."
              </p>
            </div>

            {/* Helen's Action Photo */}
            <div className="lg:col-span-4 flex justify-end">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-white border-12 max-w-sm">
                <img
                  src={HelenPhoto}
                  alt="Helen at work"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Row */}
        <div className="flex flex-row justify-between items-start pt-12 border-t border-transparent">
          {/* Phone Info */}
          <div className="space-y-4">
            <h4 className="text-4xl font-black text-gray-900 uppercase italic tracking-tighter">
              Phone
            </h4>
            <p className="text-2xl font-medium text-gray-800 tracking-tight">
              +971 504632722
            </p>
          </div>

          {/* Email Info */}
          <div className="space-y-4">
            <h4 className="text-4xl font-black text-gray-900 uppercase italic tracking-tighter">
              Email
            </h4>
            <p className="text-2xl font-medium text-gray-800 tracking-tight">
              helenthant369@gmail.com
            </p>
          </div>

          {/* Social Media Links */}
          <div className="space-y-6">
            <h4 className="text-4xl font-black text-gray-900 uppercase italic tracking-tighter leading-none">
              Social Media
            </h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <FaFacebookF size={18} />
              </div>
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <FaTiktok size={18} />
              </div>
              <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <FaWhatsapp size={22} />
              </div>
              <div className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <FaLinkedinIn size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

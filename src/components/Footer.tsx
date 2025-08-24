import React from "react";
import academyFacility from "@/assets/academy-facility.jpg";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={academyFacility}
          alt="F&B Academy facility ambiance"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-navy/90 to-brand-navy/80" />
      </div>

      <div className="relative z-10">
        <div className="container px-4 md:px-6 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <img 
                  src="/logo.svg" 
                  alt="F&B Academy" 
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Học viện đào tạo F&B hàng đầu Việt Nam. Nâng tầm nhân lực - Chuẩn hóa vận hành - Dẫn đầu xu hướng.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-brand-cyan transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-brand-cyan transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-brand-cyan transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-brand-cyan transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Khóa học</h3>
              <ul className="space-y-2">
                <li><Link to="/courses" className="text-gray-300 hover:text-brand-cyan transition-colors text-sm">Tất cả khóa học</Link></li>
                <li><Link to="/learning-paths" className="text-gray-300 hover:text-brand-cyan transition-colors text-sm">Lộ trình học tập</Link></li>
                <li><Link to="/certification" className="text-gray-300 hover:text-brand-cyan transition-colors text-sm">Chứng chỉ</Link></li>
                <li><Link to="/elearning" className="text-gray-300 hover:text-brand-cyan transition-colors text-sm">E-Learning</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Dịch vụ</h3>
              <ul className="space-y-2">
                <li><Link to="/enterprise" className="text-gray-300 hover:text-brand-cyan transition-colors text-sm">Đào tạo doanh nghiệp</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-brand-cyan transition-colors text-sm">Tư vấn vận hành</Link></li>
                <li><Link to="/trial-1on1" className="text-gray-300 hover:text-brand-cyan transition-colors text-sm">Học thử 1-1</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-brand-cyan transition-colors text-sm">Về chúng tôi</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Liên hệ</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-brand-cyan mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">
                    35B Nguyễn Bỉnh Khiêm, Phường Hai Bà Trưng<br />
                    TP Hà Nội
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                  <span className="text-gray-300 text-sm">+84 942 246 586</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                  <span className="text-gray-300 text-sm">academyfnb@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-600 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-gray-400 text-sm">
                © {year} F&B Academy. Tất cả quyền được bảo lưu.
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <Link to="/privacy" className="text-gray-400 hover:text-brand-cyan transition-colors">Chính sách bảo mật</Link>
                <Link to="/terms" className="text-gray-400 hover:text-brand-cyan transition-colors">Điều khoản sử dụng</Link>
                <Link to="/sitemap" className="text-gray-400 hover:text-brand-cyan transition-colors">Sơ đồ trang</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

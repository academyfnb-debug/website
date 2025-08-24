import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Play, Award, Users, BookOpen } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import { useTrial } from "@/context/TrialContext";
import { LazyImage } from "./LazyImage";
export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <LazyImage 
          src={heroBanner}
          alt="F&B Academy Training"
          className="w-full h-full object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-navy/80 to-brand-navy/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Học viện F&B
                <span className="block bg-gradient-accent bg-clip-text text-transparent">
                  Quốc tế hàng đầu
                </span>
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                Nâng tầm kỹ năng F&B từ cơ bản đến chuyên nghiệp. 
                Đào tạo toàn diện từ Barista, Chef đến Quản lý nhà hàng.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span>15,000+ học viên</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span>200+ khóa học</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span>Chứng chỉ quốc tế</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="neon" onClick={() => (window.dispatchEvent(new CustomEvent('open-trial-modal')))}>
                Đăng ký học thử miễn phí
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-navy">
                <Play className="mr-2 h-4 w-4" />
                Xem video giới thiệu
              </Button>
            </div>
          </div>

          {/* Right Content - Course Filter */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-white text-xl font-semibold mb-4">
              Tìm khóa học phù hợp
            </h3>
            
            <div className="space-y-4">
              <Select>
                <SelectTrigger className="bg-white/20 border-white/30 text-white">
                  <SelectValue placeholder="Chọn cấp độ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basic">Basic - Người mới bắt đầu</SelectItem>
                  <SelectItem value="pro">Pro - Trưởng ca, Quản lý</SelectItem>
                  <SelectItem value="master">Master - Chủ quán, CEO</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="bg-white/20 border-white/30 text-white">
                  <SelectValue placeholder="Mô hình F&B" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cafe">Café - Coffee Shop</SelectItem>
                  <SelectItem value="restaurant">Nhà hàng</SelectItem>
                  <SelectItem value="bar">Bar - Pub</SelectItem>
                  <SelectItem value="fast-food">Fast Food</SelectItem>
                  <SelectItem value="fine-dining">Fine Dining</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="bg-white/20 border-white/30 text-white">
                  <SelectValue placeholder="Chuyên ngành" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="barista">Barista</SelectItem>
                  <SelectItem value="chef">Chef</SelectItem>
                  <SelectItem value="bartender">Bartender</SelectItem>
                  <SelectItem value="management">Quản lý</SelectItem>
                  <SelectItem value="business">Kinh doanh</SelectItem>
                </SelectContent>
              </Select>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                <Search className="mr-2 h-4 w-4" />
                Tìm khóa học
              </Button>
            </div>

            {/* Learning Paths */}
            <div className="mt-6 space-y-3">
              <h4 className="text-white font-medium">3 lối đi tiêu biểu:</h4>
              <div className="space-y-2">
                <button className="w-full text-left p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                  <div className="text-white text-sm font-medium">
                    🎓 Tôi là người mới - muốn học nghề
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                  <div className="text-white text-sm font-medium">
                    👔 Tôi là quản lý - cần kỹ năng vận hành
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                  <div className="text-white text-sm font-medium">
                    🏪 Tôi là chủ quán - muốn mở rộng
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
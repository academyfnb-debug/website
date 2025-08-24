import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, BookOpen, Trophy, ArrowRight, Users, TrendingUp, Star, Award, Target, Filter } from "lucide-react";
import learningPathsHero from "@/assets/learning-paths-hero.jpg";
import level1Entry from "@/assets/level-1-entry.jpg";
import level2Technician from "@/assets/level-2-technician.jpg";
import level3Management from "@/assets/level-3-management.jpg";
import level4Leadership from "@/assets/level-4-leadership.jpg";

export const LearningPathsSection = () => {
  const learningPaths = [
    {
      id: "level1",
      level: "CẤP ĐỘ 1",
      title: "KHỞI ĐẦU NGHỀ (ENTRY LEVEL)",
      subtitle: "Người mới bắt đầu / Sinh viên / Chuyển nghề",
      description: "Làm quen ngành F&B, học nghề cơ bản và kỹ năng dịch vụ",
      image: level1Entry,
      duration: "3-5 buổi",
      priceRange: "990.000 - 4.500.000 VNĐ",
      courses: [
        { name: "Giới thiệu ngành F&B", duration: "1 ngày (6h)", price: "990.000", description: "Làm quen ngành, văn hóa nghề" },
        { name: "Barista Basic", duration: "5 buổi", price: "3.500.000", description: "Espresso, Latte Art cơ bản" },
        { name: "Bartender Basic", duration: "5 buổi", price: "3.800.000", description: "Cocktail cơ bản, kỹ thuật lắc" },
        { name: "Bếp Á/Âu cơ bản", duration: "3-5 buổi", price: "2.800.000 - 4.500.000", description: "Kỹ thuật nấu nướng căn bản" },
        { name: "Kỹ năng dịch vụ", duration: "2 buổi", price: "1.500.000", description: "Phục vụ bàn, xử lý khách hàng" }
      ],
      skills: ["Kỹ năng cơ bản", "Vệ sinh HACCP", "Customer Service", "Teamwork"],
      outcomes: ["Hiểu biết cơ bản về ngành F&B", "Kỹ năng phục vụ khách hàng", "Chứng chỉ Entry Level"],
      color: "green",
      icon: Star
    },
    {
      id: "level2",
      level: "CẤP ĐỘ 2", 
      title: "CHUYÊN VIÊN / KỸ THUẬT VIÊN",
      subtitle: "Đã có kinh nghiệm, muốn làm chuyên sâu",
      description: "Nâng cao kỹ năng tay nghề và quản lý kỹ thuật",
      image: level2Technician,
      duration: "5-15 buổi",
      priceRange: "3.800.000 - 7.800.000 VNĐ",
      courses: [
        { name: "Barista Pro", duration: "7 buổi", price: "5.200.000", description: "Máy xay, calibration, latte art nâng cao" },
        { name: "Bartender Pro", duration: "8 buổi", price: "6.500.000", description: "Classic & Signature Mixology" },
        { name: "Bếp Fusion", duration: "8 buổi", price: "7.000.000", description: "Kết hợp Á - Âu - Local modern" },
        { name: "Quản lý kỹ thuật", duration: "3 buổi", price: "3.800.000", description: "Setup menu, kiểm soát chất lượng" },
        { name: "Chuẩn quốc tế (SCA, WSET)", duration: "5-15 buổi", price: "Liên hệ", description: "Chứng chỉ quốc tế" }
      ],
      skills: ["Advanced Techniques", "Quality Control", "Menu Development", "International Standards"],
      outcomes: ["Thành thạo kỹ thuật chuyên sâu", "Chứng chỉ quốc tế", "Làm việc tại chuỗi lớn"],
      color: "blue",
      icon: Award
    },
    {
      id: "level3",
      level: "CẤP ĐỘ 3",
      title: "QUẢN LÝ VẬN HÀNH",
      subtitle: "Trưởng ca - Giám sát - Chủ quán nhỏ",
      description: "Quản lý vận hành, setup quán và kỹ năng lãnh đạo",
      image: level3Management,
      duration: "4-10 buổi",
      priceRange: "4.200.000 - 9.500.000 VNĐ",
      courses: [
        { name: "Quản lý vận hành", duration: "8-10 buổi", price: "6.800.000 - 9.500.000", description: "Chi phí, nhân sự, quy trình SOP" },
        { name: "Setup quán từ A-Z", duration: "6 buổi", price: "5.200.000", description: "Concept, mặt bằng, menu design" },
        { name: "Kỹ năng lãnh đạo", duration: "4 buổi", price: "4.200.000", description: "Quản lý nhóm, xử lý khủng hoảng" }
      ],
      skills: ["Team Management", "Cost Control", "Operations", "Leadership", "SOP Development"],
      outcomes: ["Quản lý hiệu quả", "Setup quán thành công", "Chứng chỉ Manager"],
      color: "orange",
      icon: Users
    },
    {
      id: "level4",
      level: "CẤP ĐỘ 4+",
      title: "LÃNH ĐẠO - CHIẾN LƯỢC",
      subtitle: "Chủ chuỗi - CEO - Nhà đầu tư F&B",
      description: "CEO F&B, gọi vốn nhượng quyền và quản trị chiến lược",
      image: level4Leadership,
      duration: "5-12 buổi",
      priceRange: "8.500.000 - 15.000.000 VNĐ",
      courses: [
        { name: "CEO F&B", duration: "12 buổi", price: "15.000.000", description: "Chiến lược tài chính, nhân sự, thương hiệu" },
        { name: "Gọi vốn & Nhượng quyền", duration: "8 buổi", price: "9.800.000", description: "Lập hồ sơ, mô hình franchise" },
        { name: "Quản trị chiến lược", duration: "5 buổi", price: "9.800.000", description: "KPIs, Balanced Scorecard" },
        { name: "Tư vấn 1:1", duration: "Theo giờ", price: "1.000.000 - 3.000.000/giờ", description: "Kiểm toán mô hình thực tế" }
      ],
      skills: ["Strategic Planning", "Financial Management", "Franchise Development", "Investment"],
      outcomes: ["Xây dựng hệ thống", "Gọi vốn thành công", "Phát triển chuỗi"],
      color: "purple",
      icon: Trophy
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "green":
        return {
          badge: "bg-green-100 text-green-800",
          card: "border-green-200 hover:border-green-300",
          icon: "bg-green-500",
          button: "bg-green-600 hover:bg-green-700"
        };
      case "blue":
        return {
          badge: "bg-blue-100 text-blue-800", 
          card: "border-blue-200 hover:border-blue-300",
          icon: "bg-blue-500",
          button: "bg-blue-600 hover:bg-blue-700"
        };
      case "purple":
        return {
          badge: "bg-purple-100 text-purple-800",
          card: "border-purple-200 hover:border-purple-300", 
          icon: "bg-purple-500",
          button: "bg-purple-600 hover:bg-purple-700"
        };
      default:
        return {
          badge: "bg-gray-100 text-gray-800",
          card: "border-gray-200 hover:border-gray-300",
          icon: "bg-gray-500", 
          button: "bg-gray-600 hover:bg-gray-700"
        };
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        {/* Hero Section */}
        <div className="relative mb-16 rounded-2xl overflow-hidden">
          <img 
            src={learningPathsHero} 
            alt="F&B Learning Paths" 
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                📍 LỘ TRÌNH HỌC CHUẨN QUỐC TẾ
              </h1>
              <p className="text-xl md:text-2xl mb-6 max-w-4xl">
                Nền tảng đào tạo theo tiêu chuẩn nghề F&B toàn cầu - từ Level 1 đến Level 4+
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="font-medium">🎯 Cá nhân hóa lộ trình</span>
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="font-medium">🧰 Tích hợp AI Tracker</span>
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="font-medium">🎨 Gamification</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Bar */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <div className="text-center p-4 bg-card rounded-lg border">
            <Filter className="w-8 h-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium mb-1">Bộ lọc thông minh</h3>
            <p className="text-sm text-muted-foreground">Chọn theo mục tiêu & ngân sách</p>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border">
            <Target className="w-8 h-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium mb-1">AI Gợi ý cá nhân</h3>
            <p className="text-sm text-muted-foreground">Tư vấn lộ trình phù hợp</p>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border">
            <Trophy className="w-8 h-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium mb-1">Huy hiệu & Chứng chỉ</h3>
            <p className="text-sm text-muted-foreground">QR xác thực quốc tế</p>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border">
            <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium mb-1">Tracking tiến độ</h3>
            <p className="text-sm text-muted-foreground">Theo dõi thành tích học tập</p>
          </div>
        </div>

        {/* Learning Paths Timeline */}
        <div className="space-y-8 mb-12">
          {learningPaths.map((path, index) => {
            const colors = getColorClasses(path.color);
            const IconComponent = path.icon;
            
            return (
              <div key={path.id} className="relative">
                {/* Timeline Line */}
                {index < learningPaths.length - 1 && (
                  <div className="absolute left-8 top-24 w-0.5 h-32 bg-border hidden md:block"></div>
                )}
                
                <Card className={`${colors.card} transition-all duration-300 hover:shadow-lg`}>
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Left: Image & Level Info */}
                    <div className="relative">
                      <img 
                        src={path.image} 
                        alt={path.title}
                        className="w-full h-48 md:h-full object-cover rounded-l-lg"
                      />
                      <div className="absolute top-4 left-4">
                        <div className={`flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full`}>
                          <IconComponent className={`w-4 h-4 ${colors.icon.replace('bg-', 'text-')}`} />
                          <span className="font-bold text-sm">{path.level}</span>
                        </div>
                      </div>
                    </div>

                    {/* Middle: Content */}
                    <div className="md:col-span-2 p-6">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold mb-2">{path.title}</h3>
                        <p className="text-muted-foreground mb-2">{path.subtitle}</p>
                        <p className="text-sm">{path.description}</p>
                      </div>

                      {/* Course List */}
                      <div className="mb-6">
                        <h4 className="font-medium mb-3">📚 Khóa học trong cấp độ:</h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {path.courses.map((course, idx) => (
                            <div key={idx} className="p-3 bg-muted/50 rounded-lg border">
                              <div className="flex justify-between items-start mb-1">
                                <h5 className="font-medium text-sm">{course.name}</h5>
                                <Badge variant="outline" className="text-xs">{course.price}</Badge>
                              </div>
                              <p className="text-xs text-muted-foreground mb-1">{course.description}</p>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Clock className="w-3 h-3" />
                                {course.duration}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Skills & Outcomes */}
                      <div className="grid sm:grid-cols-2 gap-4 mb-6">
                        <div>
                          <h4 className="font-medium text-sm mb-2">🎯 Kỹ năng đạt được:</h4>
                          <div className="flex flex-wrap gap-1">
                            {path.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-2">✅ Kết quả:</h4>
                          <ul className="space-y-1">
                            {path.outcomes.map((outcome) => (
                              <li key={outcome} className="flex items-start gap-2 text-xs text-muted-foreground">
                                <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                {outcome}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Price & CTA */}
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <div className="text-sm text-muted-foreground">Học phí từ</div>
                          <div className="text-xl font-bold text-primary">{path.priceRange}</div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Xem chi tiết
                          </Button>
                          <Button className={colors.button} size="sm">
                            Bắt đầu học
                            <ArrowRight className="ml-1 w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Career Path Suggestions */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-6">🧭 GỢI Ý LỘ TRÌNH PHÁT TRIỂN THEO MỤC TIÊU</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { goal: "👉 Học nghề đi làm", path: "Level 1 → Level 2 → Level 3 Quản lý" },
              { goal: "👉 Mở quán nhỏ", path: "Level 1 Setup → Barista/Trà sữa → Level 3 Vận hành" },
              { goal: "👉 Làm tại chuỗi lớn", path: "Level 2 Pro → Level 3 Quản lý → Leadership" },
              { goal: "👉 Làm trainer", path: "Master chuyên ngành → Coaching → Franchise" },
              { goal: "👉 Đầu tư chuỗi", path: "Level 4 CEO → Gọi vốn → Nhượng quyền" },
              { goal: "👉 Khởi nghiệp F&B", path: "Level 1-2 → Level 3 Setup → Level 4 Mở rộng" }
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-white rounded-lg border">
                <h4 className="font-medium mb-2">{item.goal}</h4>
                <p className="text-sm text-muted-foreground">{item.path}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Skill Tracker & Support Features */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">🤖 AI Skill Tracker Map</h3>
            <p className="mb-6 text-white/90">
              Hệ thống AI thông minh theo dõi tiến độ học tập, đề xuất lộ trình cá nhân hóa 
              và mở khóa module nâng cao phù hợp với năng lực
            </p>
            <div className="grid gap-3">
              {[
                { icon: Trophy, text: "Theo dõi kỹ năng real-time" },
                { icon: TrendingUp, text: "Đề xuất học cá nhân hóa" },
                { icon: CheckCircle, text: "Mở khóa tự động theo tiến độ" }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
                  <feature.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
            <Button className="mt-6 bg-white text-primary hover:bg-white/90">
              Khám phá AI Tracker
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">🧰 TÍNH NĂNG HỖ TRỢ KÈM THEO</h3>
            <div className="space-y-4">
              {[
                { icon: "🔍", title: "Bộ lọc chọn ngành", desc: "Chọn khóa học theo ngành – mục tiêu – ngân sách" },
                { icon: "🧾", title: "Gợi ý lộ trình cá nhân hóa", desc: "Nhập mục tiêu – hệ thống gợi ý gói học phù hợp" },
                { icon: "🧰", title: "Bộ tài nguyên đi kèm", desc: "Slide, mẫu sổ tay, bài tập, công cụ thực hành" },
                { icon: "🎯", title: "Huy hiệu – chứng chỉ", desc: "Badge – giấy chứng nhận – QR xác thực" },
                { icon: "📦", title: "Gói combo tiết kiệm", desc: "Đăng ký 2+ khóa giảm 10–20% + quà tặng SOP" }
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-card rounded-lg border">
                  <div className="text-2xl">{feature.icon}</div>
                  <div>
                    <h4 className="font-medium mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
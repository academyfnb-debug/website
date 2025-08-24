import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useQuickSignup } from "@/context/QuickSignupContext";
import { makeSlug } from "@/data/courseDetails";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Star, Award, Users, Trophy, Clock, BookOpen, CheckCircle, ArrowRight, 
  Filter, Target, TrendingUp, Coffee, ChefHat, BarChart3, Crown,
  MapPin, Zap, Gift, Medal, Gamepad2
} from "lucide-react";
import { LazyImage } from "@/components/LazyImage";
import learningJourneyTimeline from "@/assets/learning-journey-timeline.jpg";
import baristaPathway from "@/assets/barista-pathway.jpg";
import managementRoadmap from "@/assets/management-roadmap.jpg";
import executiveConference from "@/assets/executive-conference.jpg";

const LearningPaths = () => {
  const [selectedGoal, setSelectedGoal] = useState<string>("all");
  const { open } = useQuickSignup();

  const levels = [
    {
      id: "level1",
      level: "CẤP ĐỘ 1",
      title: "KHỞI ĐẦU NGHỀ (ENTRY LEVEL)",
      subtitle: "Người mới bắt đầu / Sinh viên / Chuyển nghề",
      description: "Làm quen ngành F&B, học nghề cơ bản và kỹ năng dịch vụ",
      image: baristaPathway,
      icon: Star,
      color: "green",
      priceRange: "990.000 - 4.500.000 VNĐ",
      objectives: [
        {
          goal: "Làm quen ngành",
          courses: "Giới thiệu ngành F&B, văn hóa nghề, nguyên tắc cơ bản",
          duration: "1 ngày (6h)",
          price: "990.000"
        },
        {
          goal: "Học nghề cơ bản", 
          courses: "Barista Basic, Bartender Basic, Bếp Á/Âu cơ bản",
          duration: "3-5 buổi",
          price: "2.800.000 - 4.500.000"
        },
        {
          goal: "Kỹ năng dịch vụ",
          courses: "Chào hỏi, phục vụ bàn, xử lý phản hồi khách",
          duration: "2 buổi", 
          price: "1.500.000"
        }
      ],
      outcomes: ["Hiểu biết cơ bản về ngành F&B", "Kỹ năng phục vụ khách hàng", "Chứng chỉ Entry Level"],
      careerPaths: ["Nhân viên phục vụ", "Barista/Bartender junior", "Nhân viên bếp"]
    },
    {
      id: "level2", 
      level: "CẤP ĐỘ 2",
      title: "CHUYÊN VIÊN / KỸ THUẬT VIÊN", 
      subtitle: "Đã có kinh nghiệm, muốn làm chuyên sâu",
      description: "Nâng cao kỹ năng tay nghề và quản lý kỹ thuật",
      image: managementRoadmap,
      icon: Award,
      color: "blue",
      priceRange: "3.800.000 - 7.800.000 VNĐ",
      objectives: [
        {
          goal: "Nâng cao kỹ năng tay nghề",
          courses: "Barista Pro, Bartender Pro, Bếp Fusion", 
          duration: "5-8 buổi",
          price: "5.200.000 - 7.800.000"
        },
        {
          goal: "Quản lý kỹ thuật",
          courses: "Setup menu, tiêu chuẩn nguyên liệu, kiểm soát chất lượng",
          duration: "3 buổi",
          price: "3.800.000"
        },
        {
          goal: "Chuẩn quốc tế", 
          courses: "SCA Barista, WSET, ServSafe (liên kết đối tác)",
          duration: "5-15 buổi",
          price: "Liên hệ"
        }
      ],
      outcomes: ["Thành thạo kỹ thuật chuyên sâu", "Chứng chỉ quốc tế", "Làm việc tại chuỗi lớn"],
      careerPaths: ["Senior Barista/Bartender", "Sous Chef", "Kỹ thuật viên F&B"]
    },
    {
      id: "level3",
      level: "CẤP ĐỘ 3", 
      title: "QUẢN LÝ VẬN HÀNH",
      subtitle: "Trưởng ca - Giám sát - Chủ quán nhỏ",
      description: "Quản lý vận hành, setup quán và kỹ năng lãnh đạo",
      image: managementRoadmap,
      icon: Users,
      color: "orange", 
      priceRange: "4.200.000 - 9.500.000 VNĐ",
      objectives: [
        {
          goal: "Quản lý vận hành",
          courses: "Quản lý chi phí, nhân sự, quy trình SOP",
          duration: "8-10 buổi", 
          price: "6.800.000 - 9.500.000"
        },
        {
          goal: "Setup quán",
          courses: "Từ A-Z: chọn mặt bằng, định hình concept, lên menu",
          duration: "6 buổi",
          price: "5.200.000"
        },
        {
          goal: "Kỹ năng lãnh đạo",
          courses: "Quản lý nhóm, xử lý khủng hoảng, huấn luyện nhân viên", 
          duration: "4 buổi",
          price: "4.200.000"
        }
      ],
      outcomes: ["Quản lý hiệu quả", "Setup quán thành công", "Chứng chỉ Manager"],
      careerPaths: ["Store Manager", "Operations Manager", "Chủ quán nhỏ"]
    },
    {
      id: "level4",
      level: "CẤP ĐỘ 4+",
      title: "LÃNH ĐẠO - CHIẾN LƯỢC",
      subtitle: "Chủ chuỗi - CEO - Nhà đầu tư F&B", 
      description: "CEO F&B, gọi vốn nhượng quyền và quản trị chiến lược",
      image: executiveConference,
      icon: Trophy,
      color: "purple",
      priceRange: "8.500.000 - 15.000.000 VNĐ",
      objectives: [
        {
          goal: "CEO F&B",
          courses: "Chiến lược tài chính, nhân sự, thương hiệu, vận hành chuỗi",
          duration: "10 buổi",
          price: "12.000.000"
        },
        {
          goal: "Gọi vốn & Nhượng quyền", 
          courses: "Lập hồ sơ gọi vốn, xây mô hình franchise",
          duration: "6 buổi",
          price: "8.500.000"
        },
        {
          goal: "Quản trị chiến lược",
          courses: "KPIs, Balanced Scorecard, Board Management",
          duration: "5 buổi", 
          price: "9.800.000"
        }
      ],
      outcomes: ["Xây dựng hệ thống", "Gọi vốn thành công", "Phát triển chuỗi"],
      careerPaths: ["CEO F&B", "Nhà đầu tư", "Franchise Owner"]
    }
  ];

  const careerGoals = [
    { id: "all", label: "Tất cả", icon: MapPin },
    { id: "work", label: "Học nghề đi làm", path: "Level 1 → Level 2 → Level 3 Quản lý", icon: Coffee },
    { id: "shop", label: "Mở quán nhỏ", path: "Level 1 Setup → Barista/Trà sữa → Level 3 Vận hành", icon: ChefHat },
    { id: "chain", label: "Làm tại chuỗi lớn", path: "Level 2 Pro → Level 3 Quản lý → Leadership", icon: BarChart3 },
    { id: "trainer", label: "Làm trainer", path: "Master chuyên ngành → Coaching → Franchise", icon: Medal },
    { id: "invest", label: "Đầu tư chuỗi", path: "Level 4 CEO → Gọi vốn → Nhượng quyền", icon: Crown }
  ];

  const supportFeatures = [
    {
      icon: Filter,
      title: "Bộ lọc chọn lộ trình", 
      desc: "Chọn theo mục tiêu: học nghề / mở quán / quản lý / đầu tư"
    },
    {
      icon: Target,
      title: "Gợi ý học cá nhân hóa (AI)",
      desc: "Hệ thống tư vấn theo năng lực + thời gian + ngân sách"
    },
    {
      icon: Gamepad2, 
      title: "Giao diện gamification",
      desc: "Gắn cấp độ học với cấp bậc như game: Bronze → Silver → Gold → Platinum"
    },
    {
      icon: Gift,
      title: "Đăng ký học combo", 
      desc: "Combo tiết kiệm – đăng ký trực tiếp – tích hợp thanh toán"
    },
    {
      icon: TrendingUp,
      title: "Tracking học tập",
      desc: "Tiến độ theo tuần – tháng – hoàn thành cấp độ được badge online"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "green": return { 
        border: "border-green-200", 
        bg: "bg-green-50", 
        text: "text-green-700",
        button: "bg-green-600 hover:bg-green-700"
      };
      case "blue": return { 
        border: "border-blue-200", 
        bg: "bg-blue-50", 
        text: "text-blue-700",
        button: "bg-blue-600 hover:bg-blue-700"
      };
      case "orange": return { 
        border: "border-orange-200", 
        bg: "bg-orange-50", 
        text: "text-orange-700",
        button: "bg-orange-600 hover:bg-orange-700"
      };
      case "purple": return { 
        border: "border-purple-200", 
        bg: "bg-purple-50", 
        text: "text-purple-700",
        button: "bg-purple-600 hover:bg-purple-700"
      };
      default: return { 
        border: "border-gray-200", 
        bg: "bg-gray-50", 
        text: "text-gray-700",
        button: "bg-gray-600 hover:bg-gray-700"
      };
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative">
        <LazyImage 
          src={learningJourneyTimeline} 
          alt="F&B Learning Journey" 
          className="w-full h-[400px] md:h-[500px] object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white max-w-5xl px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              📍 LỘ TRÌNH HỌC CHUẨN QUỐC TẾ
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 leading-relaxed">
              Nền tảng đào tạo theo tiêu chuẩn nghề F&B toàn cầu - từ Level 1 đến Level 4+
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-xs sm:text-sm">
              <div className="bg-white/20 p-3 md:p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-bold mb-1 md:mb-2">🎯 Cấp độ quốc tế</h3>
                <p className="text-xs sm:text-sm">Level 1 → Level 4+</p>
              </div>
              <div className="bg-white/20 p-3 md:p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-bold mb-1 md:mb-2">🧭 Cá nhân hóa</h3>
                <p className="text-xs sm:text-sm">Từ học nghề đến khởi nghiệp</p>
              </div>
              <div className="bg-white/20 p-3 md:p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-bold mb-1 md:mb-2">🔗 Tích hợp</h3>
                <p className="text-xs sm:text-sm">Khóa học - Chứng chỉ - Đánh giá</p>
              </div>
              <div className="bg-white/20 p-3 md:p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-bold mb-1 md:mb-2">🤖 AI Support</h3>
                <p className="text-xs sm:text-sm">Gợi ý thông minh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Goals Filter */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 md:mb-8 leading-relaxed text-brand-navy">🧭 GỢI Ý LỘ TRÌNH PHÁT TRIỂN THEO MỤC TIÊU</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {careerGoals.slice(1).map((goal) => {
              const IconComponent = goal.icon;
              return (
                <Card key={goal.id} className="hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer border-l-4 border-l-brand-orange">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start gap-3">
                      <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-brand-orange mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium md:font-semibold mb-2 text-sm md:text-base text-brand-navy">{goal.label}</h3>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{goal.path}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Levels */}
      <section className="py-8 md:py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 leading-relaxed text-brand-navy">🧭 SƠ ĐỒ LỘ TRÌNH CHUẨN QUỐC TẾ F&B</h2>
          
          <div className="space-y-8 md:space-y-12">
            {levels.map((level, index) => {
              const colors = getColorClasses(level.color);
              const IconComponent = level.icon;
              
              return (
                <div key={level.id} className="relative">
                  {/* Timeline connector */}
                  {index < levels.length - 1 && (
                    <div className="absolute left-6 md:left-12 top-32 w-0.5 h-16 md:h-24 bg-border hidden sm:block"></div>
                  )}
                  
                  <Card className={`${colors.border} hover:shadow-xl transition-all duration-300 overflow-hidden`}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                      {/* Image Section */}
                      <div className="relative">
                        <LazyImage 
                          src={level.image} 
                          alt={level.title}
                          className="w-full h-48 sm:h-56 md:h-full object-cover"
                        />
                        <div className="absolute top-3 left-3 md:top-4 md:left-4">
                          <div className={`flex items-center gap-2 ${colors.bg} ${colors.text} px-2 py-1 md:px-3 md:py-2 rounded-full shadow-lg`}>
                            <IconComponent className="w-4 h-4 md:w-5 md:h-5" />
                            <span className="font-bold text-xs md:text-sm">{level.level}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="md:col-span-2 p-4 md:p-6">
                        <div className="mb-4 md:mb-6">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-brand-navy">{level.title}</h3>
                          <p className="text-muted-foreground mb-2 text-sm md:text-base">{level.subtitle}</p>
                          <p className="text-xs md:text-sm leading-relaxed">{level.description}</p>
                        </div>

                        {/* Objectives Table */}
                        <div className="mb-4 md:mb-6">
                          <h4 className="font-medium mb-3 md:mb-4 text-sm md:text-base text-brand-navy">📚 Mục tiêu & Khóa học:</h4>
                          <div className="space-y-2 md:space-y-3">
                            {level.objectives.map((objective, idx) => (
                              <div key={idx} className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-3 p-3 bg-muted/30 rounded-lg text-xs md:text-sm">
                                <div className="font-medium text-brand-navy">{objective.goal}</div>
                                <div className="md:col-span-2 text-muted-foreground">{objective.courses}</div>
                                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                                  <span className="text-muted-foreground">{objective.duration}</span>
                                  <Badge variant="outline" className="text-xs w-fit">{objective.price}</Badge>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Outcomes & Career Paths */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                          <div>
                            <h4 className="font-medium mb-2 md:mb-3 text-sm md:text-base text-brand-navy">✅ Kết quả đạt được:</h4>
                            <ul className="space-y-1 md:space-y-2">
                              {level.outcomes.map((outcome, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-xs md:text-sm">
                                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="leading-relaxed">{outcome}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-medium mb-2 md:mb-3 text-sm md:text-base text-brand-navy">🚀 Vị trí nghề nghiệp:</h4>
                            <div className="flex flex-wrap gap-1 md:gap-2">
                              {level.careerPaths.map((path, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs hover:bg-brand-orange hover:text-white transition-colors">
                                  {path}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Price & Actions */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 pt-3 md:pt-4 border-t">
                          <div>
                            <div className="text-xs md:text-sm text-muted-foreground">Học phí từ</div>
                            <div className="text-lg md:text-xl font-bold text-brand-orange">{level.priceRange}</div>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                            <Button asChild variant="outline" size="sm" className="hover:bg-brand-navy hover:text-white transition-colors">
                              <Link to={`/learning-paths/${makeSlug(level.title)}`}>Xem chi tiết</Link>
                            </Button>
                            <Button className={`${colors.button} hover:shadow-lg transition-all`} size="sm" onClick={() => open({ courseTitle: level.title })}>
                              Bắt đầu học
                              <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4" />
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
        </div>
      </section>

      {/* Support Features */}
      <section className="py-8 md:py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-8 md:mb-12 leading-relaxed text-brand-navy">🧰 CÁC TÍNH NĂNG BỔ TRỢ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {supportFeatures.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <Card key={idx} className="text-center hover:shadow-lg hover:scale-105 transition-all duration-300 border-t-4 border-t-brand-orange">
                  <CardContent className="p-4 md:p-6">
                    <IconComponent className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-brand-orange" />
                    <h3 className="font-medium md:font-semibold mb-2 text-sm md:text-base text-brand-navy">{feature.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Tracker CTA */}
      <section className="hidden py-8 md:py-16 bg-gradient-to-br from-brand-navy to-brand-navy/80 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 leading-relaxed">🤖 AI Skill Tracker Map</h2>
          <p className="text-sm sm:text-base md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed">
            Hệ thống AI thông minh theo dõi tiến độ học tập, đề xuất lộ trình cá nhân hóa 
            và mở khóa module nâng cao phù hợp với năng lực của bạn
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            {[
              { icon: Trophy, title: "Theo dõi kỹ năng real-time", desc: "Cập nhật tiến độ liên tục" },
              { icon: Target, title: "Đề xuất học cá nhân hóa", desc: "AI phân tích và gợi ý" },
              { icon: Zap, title: "Mở khóa tự động", desc: "Unlock khi đạt milestone" }
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="bg-white/10 p-4 md:p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
                  <IconComponent className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 md:mb-3 text-brand-orange" />
                  <h3 className="font-medium mb-1 md:mb-2 text-sm md:text-base">{item.title}</h3>
                  <p className="text-xs md:text-sm text-white/80 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
          <Button size="lg" className="bg-brand-orange text-white hover:bg-brand-orange/90 hover:shadow-lg transition-all">
            Khám phá AI Tracker
            <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LearningPaths;
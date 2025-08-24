import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Award, 
  Star, 
  Globe, 
  TrendingUp, 
  CheckCircle, 
  QrCode, 
  Users, 
  BookOpen,
  Clock,
  Video,
  Trophy,
  Target
} from "lucide-react";
import certificationCeremony from "@/assets/certification-ceremony.jpg";
import digitalCertificate from "@/assets/digital-certificate.jpg";
import { sendToTelegram, showSuccessMessage, RegistrationData } from "@/services/telegramService";
import { toast } from "sonner";

const CertificationSection = () => {
  const handleCertificationSignup = async (certType: string) => {
    const telegramData: RegistrationData = {
      name: 'Người dùng quan tâm',
      phone: 'Chưa cung cấp',
      course: `Đăng ký kỳ thi chứng chỉ: ${certType}`,
      formType: 'Đăng ký kỳ thi chứng chỉ',
      timestamp: new Date().toLocaleString('vi-VN')
    };

    const telegramSuccess = await sendToTelegram(telegramData);
    
    if (telegramSuccess) {
      toast.success(showSuccessMessage());
    } else {
      toast.success("Đăng ký quan tâm thành công! Chúng tôi sẽ liên hệ để hướng dẫn chi tiết.");
    }
  };
  const certificates = [
    {
      icon: BookOpen,
      level: "🎓 Cơ bản",
      name: "F&B Foundation Certificate",
      description: "Hoàn thành khóa đào tạo kỹ năng nghề cơ bản (barista, bartender, bếp...)",
      color: "bg-green-100 text-green-800 border-green-200",
      progress: 85
    },
    {
      icon: Users,
      level: "💼 Quản lý", 
      name: "F&B Supervisor & Management Certificate",
      description: "Kỹ năng vận hành, SOP, quản lý nhân sự, tài chính",
      color: "bg-blue-100 text-blue-800 border-blue-200",
      progress: 70
    },
    {
      icon: TrendingUp,
      level: "🚀 Nâng cao",
      name: "F&B Mastery Certificate", 
      description: "Chủ quán – Giám đốc vận hành – Setup nhượng quyền",
      color: "bg-purple-100 text-purple-800 border-purple-200",
      progress: 55
    },
    {
      icon: Globe,
      level: "🌍 Quốc tế",
      name: "F&B Global Skills Certified",
      description: "Kết nối với các tổ chức đào tạo nước ngoài – tiêu chuẩn SCA, WSET, AHLEI...",
      color: "bg-orange-100 text-orange-800 border-orange-200",
      progress: 40
    }
  ];

  const progressionLevels = [
    {
      level: "🟢 Basic",
      capability: "Nắm kiến thức nền, thao tác kỹ thuật đúng",
      requirement: "Hoàn thành 80% khóa + bài kiểm tra lý thuyết",
      color: "bg-green-500"
    },
    {
      level: "🟡 Pro", 
      capability: "Quản lý nhóm nhỏ, kiểm soát chất lượng",
      requirement: "Hoàn thành checklist thực hành + 1 project mini",
      color: "bg-yellow-500"
    },
    {
      level: "🔵 Master",
      capability: "Quản lý hệ thống, cải tiến quy trình", 
      requirement: "Nộp bài phân tích mô hình F&B + phỏng vấn cuối khóa",
      color: "bg-blue-500"
    },
    {
      level: "🟣 Trainer",
      capability: "Huấn luyện người khác, làm trainer nội bộ",
      requirement: "Được đánh giá 360° + dẫn dắt team tối thiểu 30 ngày", 
      color: "bg-purple-500"
    }
  ];

  const assessmentMethods = [
    {
      type: "📚 Lý thuyết",
      methods: [
        "Trắc nghiệm đa lựa chọn (Google Forms / Testportal)",
        "Câu hỏi tình huống (Case Simulation)", 
        "Open book quiz (đánh giá tư duy thay vì ghi nhớ máy móc)"
      ],
      duration: "⏱️ Thời gian: 20–30 phút – có chế độ chống gian lận online",
      icon: BookOpen
    },
    {
      type: "🛠 Thực hành",
      methods: [
        "Barista: pha cà phê espresso – đánh sữa – art",
        "Bartender: thực hiện cocktail theo order mẫu",
        "Bếp: trình bày món + vệ sinh + tính cost nguyên liệu"
      ],
      duration: "🎥 Học viên quay clip gửi lên hoặc thi trực tiếp tại trung tâm",
      icon: Video
    },
    {
      type: "📈 Kỹ năng mềm",
      methods: [
        "Đánh giá từ giảng viên (rubric 5 tiêu chí)",
        "Đồng đội feedback trong lớp (giao tiếp – hợp tác – chủ động)",
        "Check-in AI chatbot học viên – hỏi về trải nghiệm học"
      ],
      duration: "📲 Tích hợp ngay trong tài khoản học cá nhân",
      icon: Users
    }
  ];

  const supportFeatures = [
    { tool: "📊 ClassMarker / Quizizz", feature: "Làm bài kiểm tra trực tuyến có chấm điểm" },
    { tool: "🎓 Sertifier / Accredible", feature: "Cấp chứng chỉ số có mã QR & xác minh" },
    { tool: "🧾 Portfolio Builder", feature: "Học viên tự tạo hồ sơ năng lực cá nhân" },
    { tool: "📈 AI Skill Tracker", feature: "Ghi nhận tiến độ, đề xuất khóa tiếp theo" },
    { tool: "📲 Email tự động", feature: "Thông báo khi đạt chứng chỉ + CTA chia sẻ mạng xã hội" }
  ];

  return (
    <section id="certification" className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4 text-sm md:text-base text-brand-navy border-brand-navy/30">
            🎖 Chứng nhận F&B
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-hero bg-clip-text text-transparent leading-relaxed">
            Chứng Chỉ – Chuyển Hạng – Kiểm Tra
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            Chứng chỉ của F&B Academy là công cụ xác thực năng lực học viên dựa trên lộ trình đào tạo rõ ràng, 
            bài kiểm tra lý thuyết & thực hành, và đánh giá 360 độ.
          </p>
        </div>

        {/* Hero Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          <Card className="text-center p-4 md:p-6 bg-gradient-card hover:shadow-lg transition-all duration-300">
            <Trophy className="w-8 h-8 md:w-10 lg:w-12 md:h-10 lg:h-12 text-brand-cyan mx-auto mb-3 md:mb-4" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-brand-cyan">5.000+</h3>
            <p className="text-sm md:text-base text-muted-foreground">Học viên đã nhận chứng chỉ</p>
          </Card>
          <Card className="text-center p-4 md:p-6 bg-gradient-card hover:shadow-lg transition-all duration-300">
            <Target className="w-8 h-8 md:w-10 lg:w-12 md:h-10 lg:h-12 text-brand-navy mx-auto mb-3 md:mb-4" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-brand-navy">95%</h3>
            <p className="text-sm md:text-base text-muted-foreground">Làm đúng ngành sau tốt nghiệp</p>
          </Card>
          <Card className="text-center p-4 md:p-6 bg-gradient-card hover:shadow-lg transition-all duration-300 sm:col-span-2 md:col-span-1">
            <QrCode className="w-8 h-8 md:w-10 lg:w-12 md:h-10 lg:h-12 text-primary mx-auto mb-3 md:mb-4" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">100%</h3>
            <p className="text-sm md:text-base text-muted-foreground">Chứng chỉ có mã QR xác thực</p>
          </Card>
        </div>

        {/* Main Image */}
        <div className="relative mb-12 md:mb-16 rounded-xl md:rounded-2xl overflow-hidden shadow-elevated">
          <img 
            src={certificationCeremony} 
            alt="F&B Certification Ceremony" 
            className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-brand-dark-navy/90 md:from-brand-dark-navy/80 to-transparent flex items-end md:items-center justify-center md:justify-end">
            <div className="text-white p-4 md:p-6 lg:p-8 max-w-2xl text-center md:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">Chứng nhận năng lực chuyên nghiệp</h3>
              <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6">
                Tích hợp vào hồ sơ cá nhân, LinkedIn, CV và hệ thống HRM nội bộ công ty. 
                Hỗ trợ đăng ký việc làm và thi chuyên ngành quốc tế.
              </p>
              <Button size="lg" className="bg-white text-brand-navy hover:bg-white/90 text-sm md:text-base">
                <QrCode className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Xem Mẫu Chứng Chỉ
              </Button>
            </div>
          </div>
        </div>

        {/* Certification Types */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 md:mb-12 text-center px-4">🏅 Các loại chứng chỉ cấp bởi F&B Academy</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {certificates.map((cert, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elevated transition-all duration-300 group border hover:border-primary/20">
                <CardHeader className="pb-4 p-4 md:p-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className={`p-2 md:p-3 rounded-lg ${cert.color} flex-shrink-0`}>
                      <cert.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Badge variant="outline" className="mb-2 text-xs">
                        {cert.level}
                      </Badge>
                      <CardTitle className="text-base md:text-lg mb-2 group-hover:text-primary transition-colors">
                        {cert.name}
                      </CardTitle>
                      <CardDescription className="mb-4 text-sm md:text-base">
                        {cert.description}
                      </CardDescription>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs md:text-sm">
                          <span>Tiến độ hoàn thành</span>
                          <span>{cert.progress}%</span>
                        </div>
                        <Progress value={cert.progress} className="h-2" />
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Progression Path */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-6 md:mb-8 text-center px-4">🔄 Lộ trình chuyển hạng – Xác lập chuẩn nghề nghiệp</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {progressionLevels.map((level, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-glow transition-all duration-300 border hover:border-primary/20">
                <div className={`h-2 ${level.color}`}></div>
                <CardContent className="p-4 md:p-6">
                  <h4 className="font-bold mb-2 text-sm md:text-base">{level.level}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">{level.capability}</p>
                  <Badge variant="secondary" className="text-xs leading-relaxed">
                    {level.requirement}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Assessment Methods */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-6 md:mb-8 text-center px-4">📝 Cơ chế kiểm tra – Đánh giá</h3>
          <Tabs defaultValue="theory" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6 md:mb-8 h-auto">
              <TabsTrigger value="theory" className="text-xs md:text-sm py-2 md:py-3">Lý thuyết</TabsTrigger>
              <TabsTrigger value="practical" className="text-xs md:text-sm py-2 md:py-3">Thực hành</TabsTrigger>
              <TabsTrigger value="soft-skills" className="text-xs md:text-sm py-2 md:py-3">Kỹ năng mềm</TabsTrigger>
            </TabsList>
            
            {assessmentMethods.map((method, index) => (
              <TabsContent key={index} value={index === 0 ? "theory" : index === 1 ? "practical" : "soft-skills"}>
                <Card className="border hover:border-primary/20 transition-colors">
                  <CardHeader className="p-4 md:p-6">
                    <div className="flex items-center gap-3">
                      <method.icon className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
                      <CardTitle className="text-base md:text-lg">{method.type}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 pt-0">
                    <ul className="space-y-2 md:space-y-3 mb-4">
                      {method.methods.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-xs md:text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Badge variant="outline" className="text-xs">
                      {method.duration}
                    </Badge>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Digital Certificate Image */}
        <div className="mb-12 md:mb-16">
          <Card className="overflow-hidden border hover:border-primary/20 transition-colors">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="h-[250px] md:h-auto order-2 md:order-1">
                <img 
                  src={digitalCertificate} 
                  alt="Digital Certificate with QR Code" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 md:p-6 lg:p-8 flex flex-col justify-center order-1 md:order-2">
                <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">Chứng chỉ số với mã QR</h4>
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                  Tất cả chứng chỉ đều được tích hợp mã QR xác thực – có thể scan trực tuyến. 
                  Thiết kế theo phong cách Accredible, Sertifier chuyên nghiệp.
                </p>
                <div className="space-y-2 mb-4 md:mb-6">
                  <div className="flex items-center gap-2">
                    <QrCode className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
                    <span className="text-xs md:text-sm">Xác thực online tức thì</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
                    <span className="text-xs md:text-sm">Công nhận quốc tế</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
                    <span className="text-xs md:text-sm">Tích hợp LinkedIn, CV</span>
                  </div>
                </div>
                <Button className="w-fit text-sm md:text-base" onClick={() => handleCertificationSignup('Chứng chỉ F&B')}>
                  Đăng ký kỳ thi
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Support Features */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-6 md:mb-8 text-center px-4">💡 Tính năng & hệ thống hỗ trợ</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {supportFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300 border hover:border-primary/20">
                <CardContent className="p-4 md:p-6">
                  <h4 className="font-semibold mb-2 text-primary text-sm md:text-base">{feature.tool}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">{feature.feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-card rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12">
          <Award className="w-12 h-12 md:w-14 lg:w-16 md:h-14 lg:h-16 text-brand-cyan mx-auto mb-4 md:mb-6" />
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 px-4">Sẵn sàng nhận chứng chỉ F&B chuyên nghiệp?</h3>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Bắt đầu hành trình học tập và nhận chứng chỉ được công nhận trong ngành F&B
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <Button size="lg" className="bg-brand-cyan hover:bg-brand-cyan/90 w-full sm:w-auto text-sm md:text-base" onClick={() => handleCertificationSignup('Chứng chỉ F&B chuyên nghiệp')}>
              <Award className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Đăng ký kỳ thi
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-sm md:text-base">
              Tải hướng dẫn thi & mẫu đề
            </Button>
            <Button size="lg" variant="ghost" className="w-full sm:w-auto text-sm md:text-base">
              <QrCode className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Xem chứng chỉ mẫu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
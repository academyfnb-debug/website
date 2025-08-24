import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { 
  Building2, 
  Users, 
  BookOpen, 
  TrendingUp, 
  Award, 
  BarChart3,
  Settings,
  Target,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Download,
  Calendar,
  MessageSquare
} from "lucide-react";

import enterpriseTraining from "@/assets/enterprise-training.jpg";
import franchiseTraining from "@/assets/franchise-training.jpg";
import trainingPrograms from "@/assets/training-programs.jpg";

const Enterprise = () => {
  const trainingPackages = [
    {
      level: "Entry - Nhân viên mới",
      target: "Huấn luyện kỹ năng phục vụ / làm đồ / thao tác bar",
      duration: "3-5 buổi",
      format: "Tại cơ sở hoặc học viện",
      color: "bg-blue-100 text-blue-800"
    },
    {
      level: "Supervisor",
      target: "Quản lý ca - kiểm soát chi phí - xử lý sự cố",
      duration: "4-6 buổi", 
      format: "In-house",
      color: "bg-green-100 text-green-800"
    },
    {
      level: "Quản lý vận hành",
      target: "Vận hành toàn quán - nhân sự - kiểm soát dòng tiền",
      duration: "6-8 buổi",
      format: "Kèm thực hành + mentoring",
      color: "bg-orange-100 text-orange-800"
    },
    {
      level: "Chủ quán / CEO",
      target: "Gọi vốn - mô hình tài chính - mở rộng & franchise",
      duration: "4-6 buổi",
      format: "Coaching cá nhân / nhóm",
      color: "bg-purple-100 text-purple-800"
    }
  ];

  const solutions = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Đào tạo in-house",
      description: "Chương trình đào tạo tại chỗ cho nhân viên"
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Setup - tái cấu trúc mô hình",
      description: "Xây dựng và cải tiến quy trình vận hành"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Xây dựng SOP - đào tạo chuyển giao",
      description: "Chuẩn hóa quy trình và chuyển giao kiến thức"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Hệ thống hóa quản trị - KPI - CRM",
      description: "Triển khai hệ thống quản lý hiện đại"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Gọi vốn - chuyển nhượng - nhượng quyền",
      description: "Hỗ trợ mở rộng và phát triển doanh nghiệp"
    }
  ];

  const techFeatures = [
    {
      title: "LMS riêng cho doanh nghiệp",
      description: "Theo dõi tiến độ học tập của từng nhân viên"
    },
    {
      title: "Bảng điều khiển năng lực",
      description: "Chấm điểm - đánh giá hiệu suất học - báo cáo theo thời gian"
    },
    {
      title: "CRM tích hợp",
      description: "Theo dõi lịch sử học, đánh giá - tái huấn luyện - phản hồi chất lượng"
    },
    {
      title: "Nền tảng kiểm tra đầu vào - đầu ra",
      description: "Chuẩn hóa đầu vào nhân sự, cấp chứng chỉ nội bộ"
    },
    {
      title: "Công cụ triển khai SOP online",
      description: "Quản lý thực thi - nhật ký kiểm tra - đánh giá tức thời"
    }
  ];

  const trainingFormats = [
    {
      format: "In-house training",
      description: "Giảng viên đến cơ sở đào tạo theo lịch",
      suitable: "Chuỗi nhỏ - quán riêng"
    },
    {
      format: "Tổ chức tại học viện",
      description: "Học tại cơ sở F&B Academy",
      suitable: "Mô hình mới khởi nghiệp"
    },
    {
      format: "E-learning + kiểm tra",
      description: "Tiết kiệm thời gian - hiệu quả",
      suitable: "Chuỗi cần huấn luyện nhiều cơ sở"
    },
    {
      format: "Mentoring riêng",
      description: "1:1 theo mục tiêu chủ doanh nghiệp",
      suitable: "Startup - mở rộng chuỗi"
    }
  ];

  const pricingPackages = [
    {
      name: "Đào tạo nhân viên 5 buổi",
      price: "6.500.000",
      note: "≤10 người"
    },
    {
      name: "Huấn luyện Quản lý & SOP",
      price: "12.000.000",
      note: "Gồm file SOP chuẩn"
    },
    {
      name: "Tư vấn setup từ A-Z",
      price: "18.000.000+",
      note: "Tùy quy mô"
    },
    {
      name: "Huấn luyện CEO + Franchise",
      price: "9.800.000",
      note: "1:1 coaching"
    }
  ];

  const caseStudies = [
    {
      name: "Cafe ABC - Hà Nội",
      result: "Setup quán 30m², sau 6 tháng mở thêm 2 chi nhánh"
    },
    {
      name: "Lounge XYZ - TP.HCM",
      result: "Setup quy trình + huấn luyện đội pha chế + tăng 25% doanh thu"
    },
    {
      name: "Chuỗi Healthy Eat",
      result: "Đồng hành từ mô hình MVP đến gọi vốn 5 tỷ"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 text-xs md:text-sm">
                Giải Pháp Doanh Nghiệp
              </Badge>
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight">
                Đồng hành cùng doanh nghiệp phát triển bền vững
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
                Vận hành hiệu quả - Nhân sự chuyên nghiệp - Hệ thống hóa quy trình
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-sm md:text-base">
                  Tư vấn miễn phí
                  <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                </Button>
                <Button variant="outline" size="lg" className="text-sm md:text-base">
                  <Download className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                  Tải Proposal
                </Button>
              </div>
            </div>
            <div className="relative mt-6 lg:mt-0">
              <img 
                src={enterpriseTraining} 
                alt="Enterprise Training"
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4 leading-relaxed">
              Giải Pháp Toàn Diện Cho Doanh Nghiệp F&B
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Tầm nhìn: Đồng hành cùng doanh nghiệp từ khởi sự đến vận hành chuỗi, 
              chuẩn hóa quy trình, nâng cao chất lượng nhân sự.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {solutions.map((solution, index) => (
              <Card key={index} className="text-center hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-border/50">
                <CardHeader className="pb-3 md:pb-4">
                  <div className="mx-auto mb-3 md:mb-4 p-2 md:p-3 bg-primary/10 rounded-full w-fit">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-base md:text-lg text-foreground">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm md:text-base text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Packages */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 leading-relaxed">
            Gói Giải Pháp Đào Tạo Doanh Nghiệp
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                Gói đào tạo theo năng lực (Level-based training)
              </h3>
              <div className="space-y-3 md:space-y-4">
                {trainingPackages.map((pkg, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-start justify-between mb-2 md:mb-3">
                        <Badge className={`${pkg.color} text-xs md:text-sm`}>{pkg.level}</Badge>
                        <Clock className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground" />
                      </div>
                      <h4 className="font-semibold mb-2 text-sm md:text-base">{pkg.target}</h4>
                      <div className="flex flex-col sm:flex-row sm:justify-between text-xs md:text-sm text-muted-foreground gap-1 sm:gap-0">
                        <span>Thời lượng: {pkg.duration}</span>
                        <span>{pkg.format}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="mt-6 lg:mt-0">
              <img 
                src={trainingPrograms}
                alt="Training Programs"
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Consulting Package */}
          <Card className="mb-6 md:mb-8 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 md:gap-3 text-base md:text-lg">
                <Settings className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                Gói tư vấn - xây dựng mô hình - setup / tái cấu trúc
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                <div className="text-center p-3 md:p-4 bg-background rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                  <Target className="h-6 w-6 md:h-8 md:w-8 text-primary mx-auto mb-2" />
                  <h5 className="font-semibold text-sm md:text-base">Khảo sát mô hình</h5>
                  <p className="text-xs md:text-sm text-muted-foreground">Phân tích hiện trạng</p>
                </div>
                <div className="text-center p-3 md:p-4 bg-background rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                  <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-primary mx-auto mb-2" />
                  <h5 className="font-semibold text-sm md:text-base">Chuẩn hóa quy trình</h5>
                  <p className="text-xs md:text-sm text-muted-foreground">SOP - tiêu chuẩn - nhân sự</p>
                </div>
                <div className="text-center p-3 md:p-4 bg-background rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                  <BarChart3 className="h-6 w-6 md:h-8 md:w-8 text-primary mx-auto mb-2" />
                  <h5 className="font-semibold text-sm md:text-base">Thiết kế menu</h5>
                  <p className="text-xs md:text-sm text-muted-foreground">Cost structure - định giá</p>
                </div>
                <div className="text-center p-3 md:p-4 bg-background rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                  <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-primary mx-auto mb-2" />
                  <h5 className="font-semibold text-sm md:text-base">Tư vấn thương hiệu</h5>
                  <p className="text-xs md:text-sm text-muted-foreground">Concept - marketing</p>
                </div>
              </div>
              <div className="text-center mt-4 md:mt-6">
                <Button className="bg-primary hover:bg-primary/90 text-sm md:text-base">
                  Yêu cầu tư vấn mô hình
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 leading-relaxed">
            Tính Năng Công Nghệ Hỗ Trợ Doanh Nghiệp
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {techFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base md:text-lg text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Formats */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 leading-relaxed">
            Các Hình Thức Triển Khai Đào Tạo
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {trainingFormats.map((format, index) => (
              <Card key={index} className="hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base md:text-lg text-foreground">{format.format}</CardTitle>
                  <CardDescription className="text-sm md:text-base">{format.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Badge variant="secondary" className="text-xs md:text-sm">Phù hợp: {format.suitable}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 leading-relaxed">
                Doanh Nghiệp Tiêu Biểu - Case Study Thực Tế
              </h2>
              <div className="space-y-3 md:space-y-4">
                {caseStudies.map((study, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-start gap-2 md:gap-3">
                        <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-500 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-primary text-sm md:text-base">{study.name}</h4>
                          <p className="text-muted-foreground text-sm md:text-base">{study.result}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button variant="outline" className="mt-4 md:mt-6 text-sm md:text-base">
                Xem tất cả case study
                <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </div>
            <div className="mt-6 lg:mt-0">
              <img 
                src={franchiseTraining}
                alt="Franchise Training"
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 leading-relaxed">
            Bảng Giá - Ưu Đãi Doanh Nghiệp
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {pricingPackages.map((pkg, index) => (
              <Card key={index} className="text-center hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base md:text-lg text-foreground">{pkg.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-xl md:text-2xl font-bold text-primary mb-2">
                    {pkg.price} VNĐ
                  </div>
                  <Badge variant="secondary" className="text-xs md:text-sm">{pkg.note}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-sm md:text-base">
              Tư vấn báo giá chi tiết
            </Button>
            <Button variant="outline" size="lg" className="text-sm md:text-base">
              <Calendar className="mr-2 h-3 w-3 md:h-4 md:w-4" />
              Đặt lịch demo
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 leading-relaxed">
            Kết Nối - Hợp Tác - Nhượng Quyền
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              "Nhận chuyển giao chương trình đào tạo cho trung tâm",
              "Hợp tác đào tạo nhân sự chuỗi F&B",
              "Mời giảng viên chuyên đề - workshop - hội thảo ngành",
              "Tư vấn phát triển chương trình đào tạo nội bộ cho tập đoàn"
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-border/50">
                <CardContent className="p-4 md:p-6">
                  <Building2 className="h-6 w-6 md:h-8 md:w-8 text-primary mx-auto mb-3 md:mb-4" />
                  <p className="text-xs md:text-sm text-foreground">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-6 md:mt-8">
            <Button size="lg" variant="outline" className="text-sm md:text-base">
              <MessageSquare className="mr-2 h-3 w-3 md:h-4 md:w-4" />
              Liên hệ hợp tác đào tạo
            </Button>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </div>
  );
};

export default Enterprise;
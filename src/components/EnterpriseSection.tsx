import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, TrendingUp, Award, CheckCircle, PlayCircle } from "lucide-react";
import enterpriseTraining from "@/assets/enterprise-training.jpg";
import franchiseTraining from "@/assets/franchise-training.jpg";

const EnterpriseSection = () => {
  const solutions = [
    {
      icon: Building2,
      title: "Setup và đào tạo khai trương cửa hàng F&B mới",
      subtitle: "Gói 'Full Opening Launchpad'",
      description: "Từ bản vẽ SOP đến đào tạo từng bộ phận",
      features: [
        "Tư vấn sơ đồ vận hành – khu vực chức năng",
        "Setup layout bar, bếp, máy móc, POS",
        "Tuyển chọn & onboarding nhân sự",
        "Đào tạo theo vai trò: barista – phục vụ – thu ngân – quản lý",
        "Kiểm thử dịch vụ trước ngày khai trương (Soft Launch Simulation)"
      ],
      color: "bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20"
    },
    {
      icon: TrendingUp,
      title: "Nâng cấp & chuẩn hóa quy trình vận hành",
      subtitle: "Gói 'Operational Excellence & SOP Compliance'",
      description: "Chuẩn hóa toàn hệ thống và quy trình vận hành",
      features: [
        "Đánh giá vận hành thực tế từng chi nhánh",
        "Chuẩn hóa quy trình: order, phục vụ, sơ chế, thanh toán",
        "Xây dựng bộ SOP số hóa (tài liệu + video + quiz)",
        "Đào tạo đội ngũ Trainer nội bộ",
        "Hệ thống quản lý SOP bằng Notion/Google Site"
      ],
      color: "bg-brand-navy/10 text-brand-navy border-brand-navy/20"
    },
    {
      icon: Users,
      title: "Đào tạo nhân sự cấp trung – cấp cao",
      subtitle: "Gói 'Leadership & Team Capability Development'",
      description: "Phát triển năng lực lãnh đạo và quản lý",
      features: [
        "Quản trị con người – năng lực lãnh đạo F&B",
        "Kỹ năng huấn luyện – đào tạo đội nhóm",
        "Kỹ năng phản hồi – xử lý xung đột",
        "Quản lý hiệu suất & báo cáo P&L đơn vị",
        "Có chứng chỉ cấp nội bộ & xác thực bằng QR"
      ],
      color: "bg-accent/10 text-accent border-accent/20"
    },
    {
      icon: Award,
      title: "Chuyển giao mô hình & đào tạo nhượng quyền",
      subtitle: "Gói 'Franchise Transformation Toolkit'",
      description: "Hỗ trợ toàn diện cho mô hình nhượng quyền",
      features: [
        "Xây dựng mô hình vận hành chuẩn (Master SOP)",
        "Đào tạo chuyển giao cho đối tác nhượng quyền",
        "Bộ tài liệu FDD, Marketing Playbook, Menu Book",
        "Tổ chức demo vận hành – video hóa toàn bộ quy trình",
        "Hệ thống giám sát online từ xa cho franchisee"
      ],
      color: "bg-primary/10 text-primary border-primary/20"
    }
  ];

  const supportTools = [
    { name: "Google Forms / ClassMarker", role: "Tạo bài kiểm tra sau đào tạo", usage: "Gắn theo từng module" },
    { name: "OBS + Canva + YouTube Private", role: "Ghi lại các buổi thực hành", usage: "Dành cho đội Trainer" },
    { name: "Notion / Airtable", role: "Quản lý tài liệu nội bộ", usage: "Phân quyền theo phòng ban" },
    { name: "TalentLMS / LearnDash", role: "LMS quản trị tiến trình học", usage: "Có tính năng chấm điểm – chứng chỉ" },
    { name: "App E-Learning", role: "Học viên tiếp cận video SOP", usage: "Hỗ trợ cả iOS – Android" },
    { name: "Chứng chỉ QR", role: "Cấp chứng chỉ sau khóa đào tạo", usage: "Kiểm tra online, xác minh nhanh" }
  ];

  return (
    <div>
      <section id="enterprise" className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-brand-cyan border-brand-cyan/30">
              🏢 Giải pháp Doanh nghiệp
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent leading-relaxed">
              In-house F&B Training
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Tích hợp nội dung chuẩn quốc tế, hình ảnh minh họa từ các mô hình F&B toàn cầu, 
              giao diện gợi ý hiện đại, và hệ thống tính năng hỗ trợ tiện ích – dễ sử dụng – giàu trải nghiệm.
            </p>
          </div>

        {/* Hero Image */}
        <div className="relative mb-16 rounded-2xl overflow-hidden shadow-elevated">
          <img 
            src={enterpriseTraining} 
            alt="Enterprise F&B Training" 
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-navy/80 to-transparent flex items-center">
            <div className="text-white p-8 max-w-2xl">
              <h3 className="text-3xl font-bold mb-4">Đào tạo chuyên nghiệp tại doanh nghiệp</h3>
              <p className="text-lg mb-6">
                Dành cho chuỗi F&B nội địa & quốc tế, Lounge – Pub – Cafe – Nhà hàng cao cấp, 
                Startup và tập đoàn có nhiều cấp nhân sự
              </p>
              <Button size="lg" className="bg-white text-brand-navy hover:bg-white/90">
                <PlayCircle className="w-5 h-5 mr-2" />
                Xem Demo Đào Tạo
              </Button>
            </div>
          </div>
        </div>

        {/* Target Audience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">🎯 Đối tượng mục tiêu</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Chuỗi F&B nội địa & quốc tế",
              "Lounge – Pub – Cafe – Nhà hàng cao cấp", 
              "Startup đang mở mới hoặc tái cấu trúc",
              "Tập đoàn có nhiều cấp nhân sự",
              "Mô hình nhượng quyền chuẩn hóa"
            ].map((target, index) => (
              <Card key={index} className="text-center hover:shadow-glow transition-all duration-300">
                <CardContent className="p-4">
                  <p className="text-sm font-medium">{target}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Solutions */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-12 text-center">🔗 Các giải pháp huấn luyện doanh nghiệp</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elevated transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${solution.color}`}>
                      <solution.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="outline" className="mb-2 text-xs">
                        {solution.subtitle}
                      </Badge>
                      <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                        {solution.title}
                      </CardTitle>
                      <CardDescription>
                        {solution.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Franchise Image */}
        <div className="mb-16">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 flex flex-col justify-center">
                <h4 className="text-2xl font-bold mb-4">Mô hình nhượng quyền chuyên nghiệp</h4>
                <p className="text-muted-foreground mb-6">
                  Học hỏi từ các thương hiệu toàn cầu như Subway, McDonald's, Gongcha với 
                  bộ công cụ đào tạo hoàn chỉnh và hệ thống giám sát online.
                </p>
                <Button className="w-fit">
                  Tải mẫu chương trình
                </Button>
              </div>
              <div className="h-[300px] md:h-auto">
                <img 
                  src={franchiseTraining} 
                  alt="Franchise Training" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Support Tools */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">🛠️ Tính năng & công cụ bổ trợ</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportTools.map((tool, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-primary">{tool.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{tool.role}</p>
                  <Badge variant="secondary" className="text-xs">
                    {tool.usage}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-card rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4">Sẵn sàng nâng tầm doanh nghiệp F&B?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Liên hệ ngay để nhận báo giá và tư vấn giải pháp đào tạo phù hợp nhất cho doanh nghiệp của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-cyan hover:bg-brand-cyan/90">
              Yêu cầu báo giá
            </Button>
            <Button size="lg" variant="outline">
              Đăng ký huấn luyện doanh nghiệp
            </Button>
            <Button size="lg" variant="ghost">
              Tải mẫu chương trình
            </Button>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseSection;
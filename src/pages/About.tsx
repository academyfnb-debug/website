import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Eye, Target, Heart, Users, Award, Globe, Calendar, Phone, Mail, MapPin } from "lucide-react";
import academyFacilityImg from "@/assets/academy-facility.jpg";
import instructorsTeachingImg from "@/assets/instructors-teaching.jpg";
import graduationCeremonyImg from "@/assets/graduation-ceremony.jpg";
import trainingTechnologyImg from "@/assets/training-technology.jpg";

export default function About() {
  const coreValues = [
    { icon: Target, title: "Thực chiến", description: "Đào tạo gắn liền với thực tế ngành F&B" },
    { icon: Award, title: "Chuẩn hóa", description: "Theo tiêu chuẩn quốc tế nghiêm ngặt" },
    { icon: Heart, title: "Sáng tạo", description: "Khuyến khích đổi mới và sáng tạo" },
    { icon: Users, title: "Liên kết", description: "Kết nối cộng đồng F&B chuyên nghiệp" },
    { icon: Globe, title: "Phát triển bền vững", description: "Hướng tới tương lai xanh và bền vững" },
  ];

  const statistics = [
    { number: "12.000+", label: "Học viên tốt nghiệp" },
    { number: "300+", label: "Đối tác doanh nghiệp F&B" },
    { number: "5+", label: "Quốc gia liên kết đào tạo" },
    { number: "20+", label: "Chương trình đào tạo" },
    { number: "3", label: "Cơ sở đào tạo" },
  ];

  const advisors = [
    {
      name: "Mr. Hải Lê",
      experience: "15 năm vận hành chuỗi cafe – CEO chuỗi XX",
      role: "Điều phối học thuật"
    },
    {
      name: "Ms. Hồng Nguyễn", 
      experience: "12 năm giảng dạy ẩm thực – từng học tại Le Cordon Bleu",
      role: "Chuyên gia kỹ thuật F&B"
    },
    {
      name: "Mr. Thành Khoa",
      experience: "Giám đốc vận hành chuỗi nhà hàng Âu – Á", 
      role: "Huấn luyện quản trị & vận hành"
    },
    {
      name: "Ms. Anna Trần",
      experience: "Quản lý đào tạo Diageo Vietnam",
      role: "Chuyên gia rượu mạnh – marketing F&B"
    }
  ];

  const timeline = [
    { year: "2018", event: "Thành lập tiền thân F&B Training Lab" },
    { year: "2020", event: "Chính thức thành lập F&B Academy tại TP.HCM" },
    { year: "2021", event: "Hợp tác với Diageo, SCA, Tổ chức đào tạo Á – Âu" },
    { year: "2022", event: "Phát triển nền tảng e-learning, tích hợp LMS" },
    { year: "2023", event: "Mở cơ sở Hà Nội & Đà Nẵng – phục vụ chuỗi đào tạo doanh nghiệp" },
    { year: "2025", event: "Mục tiêu mở rộng khu vực ASEAN + triển khai cấp chứng chỉ quốc tế nội bộ" },
  ];

  const certifications = [
    "SCA – Specialty Coffee Association",
    "Diageo Academy – Bartender Certification", 
    "ServSafe – An toàn thực phẩm",
    "HACCP – Chuẩn vệ sinh nhà hàng"
  ];

  const partners = [
    "The Coffee House", "Pizza 4P's", "ABC Lounge", "Nestlé Vietnam", "Lavazza", "Red Bull"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-background via-background/95 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit text-sm px-3 py-1">
                  <Eye className="w-4 h-4 mr-2" />
                  Giới thiệu F&B Academy
                </Badge>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold bg-gradient-accent bg-clip-text text-transparent leading-tight">
                  F&B Academy Quốc Tế
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  "Đào tạo thực chiến – Chuẩn hóa quốc tế – Phát triển toàn diện ngành F&B"
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button size="lg" className="bg-gradient-accent hover:shadow-lg transition-all duration-300 px-6 py-3">
                  Tham quan học viện
                </Button>
                <Button variant="outline" size="lg" className="px-6 py-3">
                  Tải brochure
                </Button>
              </div>
            </div>
            
            <div className="relative mt-8 lg:mt-0">
              <img 
                src={academyFacilityImg} 
                alt="F&B Academy Training Facility"
                className="rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-relaxed text-brand-navy">Tầm nhìn - Sứ mệnh - Giá trị cốt lõi</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Định hướng chiến lược và triết lý đào tạo của F&B Academy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            <Card className="p-6 md:p-8 text-center border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-4">
                <Eye className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-lg md:text-xl lg:text-2xl">Tầm nhìn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Trở thành học viện đào tạo F&B chuyên sâu hàng đầu tại Đông Nam Á, cung cấp nhân lực chuyên nghiệp và giải pháp toàn diện cho doanh nghiệp F&B trong kỷ nguyên chuyển đổi số.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 md:p-8 text-center border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-4">
                <Target className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-lg md:text-xl lg:text-2xl">Sứ mệnh</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm md:text-base text-muted-foreground">
                  <p className="leading-relaxed">• Cung cấp chương trình đào tạo thực chiến, từ kỹ năng cơ bản đến quản trị chuỗi</p>
                  <p className="leading-relaxed">• Đào tạo nhân sự chuyên nghiệp, linh hoạt – sáng tạo – kỷ luật</p>
                  <p className="leading-relaxed">• Đồng hành cùng doanh nghiệp xây dựng và mở rộng mô hình kinh doanh hiệu quả</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 md:p-8 text-center border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4">
                <Heart className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-lg md:text-xl lg:text-2xl">Giá trị cốt lõi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {coreValues.map((value, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <value.icon className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div className="text-left">
                        <p className="font-medium text-sm md:text-base">{value.title}</p>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-relaxed text-brand-navy">Số liệu nổi bật</h2>
            <p className="text-base md:text-lg text-muted-foreground">Thành tựu đạt được trong hành trình phát triển</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 md:mb-8">Chuẩn đào tạo theo tiêu chuẩn quốc tế</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {certifications.map((cert, index) => (
                <Badge key={index} variant="secondary" className="p-2 md:p-3 justify-center text-xs md:text-sm">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Team */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-relaxed text-brand-navy">
                Đội ngũ giảng viên & chuyên gia
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                "Người truyền lửa – Người dẫn đường – Người thấu hiểu ngành"
              </p>
            </div>
            <div>
              <img 
                src={instructorsTeachingImg} 
                alt="Instructors Teaching"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center">Ban cố vấn chiến lược</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {advisors.map((advisor, index) => (
                <Card key={index} className="p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-3 md:pb-4">
                    <CardTitle className="text-lg md:text-xl">{advisor.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{advisor.experience}</p>
                    <Badge variant="outline" className="text-xs md:text-sm">{advisor.role}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 md:mb-8">Chuyên gia đào tạo nội dung</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
              {["🍽 Ẩm thực Á – Âu", "☕ Pha chế cà phê – không cồn", "🍸 Cocktail – rượu mạnh", "🧠 Quản trị – startup – franchise", "📊 Tài chính – quản trị vận hành"].map((specialty, index) => (
                <Badge key={index} variant="secondary" className="p-2 md:p-3 justify-center text-center text-xs md:text-sm">
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History & Development */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-relaxed text-brand-navy">Lịch sử hình thành & phát triển</h2>
            <p className="text-base md:text-lg text-muted-foreground">Hành trình 7 năm xây dựng và phát triển F&B Academy</p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-accent"></div>
            <div className="space-y-8 md:space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <Card className="p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge variant="default" className="bg-gradient-accent text-xs md:text-sm">
                          {item.year}
                        </Badge>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.event}</p>
                    </Card>
                  </div>
                  <div className="hidden lg:block w-4 h-4 bg-primary rounded-full border-4 border-background absolute left-1/2 transform -translate-x-1/2"></div>
                  <div className="w-full lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure & Technology */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={trainingTechnologyImg} 
                alt="Training Technology"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-relaxed text-brand-navy">
                  Nền tảng đào tạo – Hạ tầng – Tiện ích hỗ trợ
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center gap-2">
                    <Award className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    Cơ sở vật chất tiêu chuẩn ngành
                  </h3>
                  <ul className="space-y-2 text-sm md:text-base text-muted-foreground pl-6 md:pl-7">
                    <li className="leading-relaxed">• Phòng học mô phỏng quầy bar – bếp nóng – bếp lạnh</li>
                    <li className="leading-relaxed">• Thiết bị chuẩn công nghiệp (Rocket Espresso, Synesso, Cold Brew Tower...)</li>
                    <li className="leading-relaxed">• Phòng studio cho học e-learning + thi online</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center gap-2">
                    <Globe className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    Nền tảng công nghệ hỗ trợ
                  </h3>
                  <ul className="space-y-2 text-sm md:text-base text-muted-foreground pl-6 md:pl-7">
                    <li className="leading-relaxed">• LMS cá nhân hóa cho từng học viên</li>
                    <li className="leading-relaxed">• Dashboard doanh nghiệp riêng</li>
                    <li className="leading-relaxed">• Hệ thống quiz – chấm điểm – nhận phản hồi tự động</li>
                    <li className="leading-relaxed">• Cấp chứng chỉ QR – quản lý qua blockchain (đang triển khai)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-relaxed text-brand-navy">Đối tác liên kết – Hợp tác đào tạo</h2>
            <p className="text-base md:text-lg text-muted-foreground">Mạng lưới đối tác chiến lược trong và ngoài nước</p>
          </div>

          <div className="space-y-8 md:space-y-12">
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-4 md:mb-6 text-center">Tập đoàn – Chuỗi thương hiệu F&B</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
                {partners.map((partner, index) => (
                  <Badge key={index} variant="outline" className="p-2 md:p-3 justify-center text-center text-xs md:text-sm hover:bg-muted/50 transition-colors">
                    {partner}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-gradient-accent hover:opacity-90 transition-opacity px-6 py-3">
                  Xem đối tác chiến lược
                </Button>
                <Button variant="outline" className="px-6 py-3 hover:bg-muted/50 transition-colors">
                  Gửi đề nghị hợp tác
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-relaxed text-brand-navy">
                Sẵn sàng bắt đầu hành trình F&B của bạn?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Tham gia cộng đồng học viên F&B Academy và khám phá tiềm năng của bản thân
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
              <Card className="p-4 md:p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <Calendar className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-primary" />
                <h3 className="font-bold mb-2 text-sm md:text-base">Tham quan học viện</h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 leading-relaxed">Khám phá cơ sở vật chất và môi trường học tập</p>
                <Button variant="outline" size="sm" className="text-xs md:text-sm">Đặt lịch tham quan</Button>
              </Card>

              <Card className="p-4 md:p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <Phone className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-primary" />
                <h3 className="font-bold mb-2 text-sm md:text-base">Tư vấn chương trình</h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 leading-relaxed">Nhận tư vấn miễn phí về lộ trình học phù hợp</p>
                <Button variant="outline" size="sm" className="text-xs md:text-sm">Đăng ký tư vấn</Button>
              </Card>

              <Card className="p-4 md:p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <Users className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-primary" />
                <h3 className="font-bold mb-2 text-sm md:text-base">Gia nhập cộng đồng</h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 leading-relaxed">Kết nối với cộng đồng F&B chuyên nghiệp</p>
                <Button variant="outline" size="sm" className="text-xs md:text-sm">Tham gia ngay</Button>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-accent hover:opacity-90 transition-opacity px-6 py-3">
                Đăng ký học thử miễn phí
              </Button>
              <Button variant="outline" size="lg" className="px-6 py-3 hover:bg-muted/50 transition-colors">
                Tải brochure chi tiết
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div className="space-y-3 md:space-y-4">
              <MapPin className="w-6 h-6 md:w-8 md:h-8 mx-auto text-primary" />
              <h3 className="font-bold text-sm md:text-base">Cơ sở đào tạo</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">35B Nguyễn Bỉnh Khiêm, Phường Hai Bà Trưng, TP Hà Nội</p>
            </div>
            <div className="space-y-3 md:space-y-4">
              <Phone className="w-6 h-6 md:w-8 md:h-8 mx-auto text-primary" />
              <h3 className="font-bold text-sm md:text-base">Hotline 24/7</h3>
              <p className="text-xs md:text-sm text-muted-foreground">+84 942 246 586</p>
            </div>
            <div className="space-y-3 md:space-y-4">
              <Mail className="w-6 h-6 md:w-8 md:h-8 mx-auto text-primary" />
              <h3 className="font-bold text-sm md:text-base">Email hỗ trợ</h3>
              <p className="text-xs md:text-sm text-muted-foreground">academyfnb@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
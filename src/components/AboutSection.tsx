import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Heart, Trophy, Globe, Users } from "lucide-react";
import trainingPrograms from "@/assets/training-programs.jpg";

export const AboutSection = () => {
  const achievements = [
    { icon: Users, label: "15,000+", desc: "Học viên đã tốt nghiệp" },
    { icon: Globe, label: "50+", desc: "Đối tác quốc tế" },
    { icon: Trophy, label: "200+", desc: "Chứng chỉ đã cấp" },
    { icon: Target, label: "95%", desc: "Tỷ lệ có việc làm" }
  ];

  const values = [
    {
      icon: Target,
      title: "Sứ mệnh",
      content: "Đào tạo thế hệ F&B chuyên nghiệp, nâng tầm ngành dịch vụ ăn uống Việt Nam ra tầm quốc tế"
    },
    {
      icon: Eye,
      title: "Tầm nhìn", 
      content: "Trở thành học viện F&B hàng đầu Đông Nam Á, kết nối với tiêu chuẩn quốc tế"
    },
    {
      icon: Heart,
      title: "Giá trị",
      content: "Chất lượng - Thực tiễn - Sáng tạo - Tận tâm với từng học viên"
    }
  ];

  const partners = [
    "SCA (Specialty Coffee Association)",
    "WSET (Wine & Spirit Education Trust)", 
    "Le Cordon Bleu",
    "Accor Hotels",
    "Starbucks Vietnam",
    "The Coffee House"
  ];

  return (
    <section id="about" className="py-16 bg-muted/50">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-relaxed">
          Về F&B Academy
        </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Học viện đào tạo F&B quốc tế hàng đầu Việt Nam, 
            với hệ thống giáo trình chuẩn hóa và đội ngũ chuyên gia dày dạn kinh nghiệm
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image */}
          <div className="relative">
            <img 
              src={trainingPrograms}
              alt="F&B Academy Training Programs"
              className="rounded-2xl shadow-elevated w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl" />
          </div>

          {/* Right - Mission, Vision, Values */}
          <div className="space-y-8">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <Card key={value.title} className="border-0 shadow-card hover:shadow-elevated transition-shadow">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-primary">{value.title}</h3>
                      <p className="text-muted-foreground">{value.content}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Thành tựu & Con số ấn tượng</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={achievement.label} className="text-center border-0 shadow-card hover:shadow-elevated transition-all hover:scale-105">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{achievement.label}</div>
                    <div className="text-sm text-muted-foreground">{achievement.desc}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Partners */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Đối tác quốc tế</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {partners.map((partner) => (
              <Badge key={partner} variant="outline" className="px-4 py-2 text-sm">
                {partner}
              </Badge>
            ))}
          </div>
          <p className="text-muted-foreground">
            Và nhiều đối tác khác từ các tập đoàn F&B hàng đầu thế giới
          </p>
        </div>

        {/* Team Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Đội ngũ giảng viên</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Gồm các chuyên gia đầu ngành với hơn 15 năm kinh nghiệm, 
            từng làm việc tại các chuỗi F&B quốc tế và nhà hàng Michelin Star
          </p>
          <div className="bg-gradient-accent text-white p-6 rounded-xl inline-block">
            <div className="text-sm font-medium">🎯 100% giảng viên có chứng chỉ quốc tế</div>
          </div>
        </div>
      </div>
    </section>
  );
};
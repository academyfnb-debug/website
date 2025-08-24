import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MessageSquare, Clock, CheckCircle, Users, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ConsultationCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    experience: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.phone || !formData.interest) {
      toast({
        title: "Vui lòng điền đầy đủ thông tin",
        description: "Họ tên, số điện thoại và lĩnh vực quan tâm là bắt buộc",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Đăng ký thành công! 🎉",
      description: "Chúng tôi sẽ liên hệ với bạn trong vòng 24h",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      interest: "",
      experience: "",
      message: ""
    });
  };

  const benefits = [
    {
      icon: CheckCircle,
      title: "Tư vấn 1:1 miễn phí", 
      desc: "30 phút tư vấn cá nhân với chuyên gia"
    },
    {
      icon: Users,
      title: "Lộ trình cá nhân hóa",
      desc: "Thiết kế lộ trình phù hợp với mục tiêu"
    },
    {
      icon: Star,
      title: "Ưu đãi đặc biệt",
      desc: "Giảm 20% học phí khi đăng ký trong tháng"
    }
  ];

  const testimonials = [
    {
      name: "Nguyễn Minh Anh",
      role: "Barista tại The Coffee House",
      content: "Tư vấn rất chuyên nghiệp, giúp mình chọn đúng khóa học phù hợp!",
      rating: 5
    },
    {
      name: "Trần Hoàng Nam", 
      role: "Chủ quán Bistro",
      content: "Sau khóa Master, doanh thu quán tăng 40% trong 6 tháng đầu.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gradient-hero text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent rounded-full blur-xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-relaxed">
                Đăng ký tư vấn miễn phí
                <span className="block text-primary">Tìm lộ trình phù hợp với bạn</span>
              </h2>
              <p className="text-xl text-gray-200 mb-6">
                Để lại thông tin, chuyên gia F&B sẽ tư vấn chi tiết về 
                khóa học và cơ hội nghề nghiệp trong ngành
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={benefit.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{benefit.title}</h3>
                      <p className="text-gray-300">{benefit.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-medium">Hotline 24/7</div>
                  <div className="text-sm text-gray-300">1900 2024</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
                <MessageSquare className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-medium">Chat tư vấn</div>
                  <div className="text-sm text-gray-300">8:00 - 22:00</div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Học viên nói gì về chúng tôi:</h3>
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm font-medium">{testimonial.name}</span>
                    <Badge variant="secondary" className="text-xs">{testimonial.role}</Badge>
                  </div>
                  <p className="text-sm text-gray-300">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <Card className="border-0 shadow-elevated">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Nhận tư vấn ngay
              </CardTitle>
              <CardDescription className="text-center">
                Chỉ mất 2 phút để điền form, nhận tư vấn chi tiết trong 24h
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Họ và tên *"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Số điện thoại *"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />

                <Select onValueChange={(value) => setFormData({...formData, interest: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Lĩnh vực quan tâm *" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="barista">Barista & Coffee</SelectItem>
                    <SelectItem value="chef">Chef & Culinary</SelectItem>
                    <SelectItem value="bartender">Bartender & Mixology</SelectItem>
                    <SelectItem value="management">Quản lý F&B</SelectItem>
                    <SelectItem value="business">Kinh doanh F&B</SelectItem>
                    <SelectItem value="other">Khác</SelectItem>
                  </SelectContent>
                </Select>

                <Select onValueChange={(value) => setFormData({...formData, experience: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Kinh nghiệm hiện tại" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Chưa có kinh nghiệm</SelectItem>
                    <SelectItem value="basic">Dưới 1 năm</SelectItem>
                    <SelectItem value="intermediate">1-3 năm</SelectItem>
                    <SelectItem value="advanced">Trên 3 năm</SelectItem>
                    <SelectItem value="expert">Chuyên gia (5+ năm)</SelectItem>
                  </SelectContent>
                </Select>

                <Textarea
                  placeholder="Mục tiêu học tập của bạn..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={3}
                />

                <Button type="submit" className="w-full bg-gradient-accent text-white hover:scale-105 transition-transform">
                  <Clock className="mr-2 w-4 h-4" />
                  Nhận tư vấn miễn phí
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Bằng việc đăng ký, bạn đồng ý với 
                  <a href="#" className="text-primary hover:underline"> Điều khoản </a> 
                  và 
                  <a href="#" className="text-primary hover:underline"> Chính sách bảo mật</a>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
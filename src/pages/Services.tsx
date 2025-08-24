import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, MapPin, Phone, Mail, Building } from "lucide-react";
import professionalStaffing from "@/assets/professional-staffing.jpg";
import eventCatering from "@/assets/event-catering.jpg";
import serviceConsultation from "@/assets/service-consultation.jpg";
import { sendToTelegram, showSuccessMessage, RegistrationData } from "@/services/telegramService";
import { toast } from "sonner";

const Services = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      toast.error("Vui lòng điền đầy đủ thông tin bắt buộc");
      return;
    }

    setIsLoading(true);
    
    // Prepare data for Telegram
    const telegramData: RegistrationData = {
      name: formData.fullName,
      phone: formData.phone,
      email: formData.email || undefined,
      course: formData.company ? `Doanh nghiệp: ${formData.company}` : 'Dịch vụ F&B',
      message: formData.message || 'Không có tin nhắn',
      formType: 'Đăng ký dịch vụ F&B',
      timestamp: new Date().toLocaleString('vi-VN')
    };

    // Send to Telegram
    const telegramSuccess = await sendToTelegram(telegramData);
    
    if (telegramSuccess) {
      toast.success(showSuccessMessage());
    } else {
      toast.success("Đăng ký dịch vụ thành công! Chúng tôi sẽ liên hệ trong 24h.");
    }
    
    // Reset form
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      company: "",
      message: ""
    });
    
    setIsLoading(false);
  };
  const [selectedBusinessType, setSelectedBusinessType] = useState<string[]>([]);
  const [selectedStaffType, setSelectedStaffType] = useState<string[]>([]);
  const [selectedWorkType, setSelectedWorkType] = useState<string[]>([]);
  const [selectedSpecialReq, setSelectedSpecialReq] = useState<string[]>([]);
  const [selectedEventType, setSelectedEventType] = useState<string[]>([]);
  const [selectedGuestCount, setSelectedGuestCount] = useState<string[]>([]);
  const [selectedServicePackage, setSelectedServicePackage] = useState<string[]>([]);
  const [selectedVenue, setSelectedVenue] = useState<string[]>([]);

  const handleCheckboxChange = (value: string, selectedItems: string[], setSelectedItems: (items: string[]) => void) => {
    if (selectedItems.includes(value)) {
      setSelectedItems(selectedItems.filter(item => item !== value));
    } else {
      setSelectedItems([...selectedItems, value]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-24 pb-12 md:pb-16 bg-gradient-to-r from-brand-navy/95 to-brand-orange/95">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${serviceConsultation})` }}
        />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Dịch Vụ F&B Academy
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed">
            Tối ưu trải nghiệm – Chọn nhanh – Nhận tư vấn chính xác
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <Badge variant="secondary" className="text-sm md:text-lg px-4 md:px-6 py-2 hover:bg-white hover:text-brand-navy transition-colors">
              <Users className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Cung ứng nhân sự
            </Badge>
            <Badge variant="secondary" className="text-sm md:text-lg px-4 md:px-6 py-2 hover:bg-white hover:text-brand-navy transition-colors">
              <Calendar className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Tổ chức sự kiện
            </Badge>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 md:py-16 space-y-12 md:space-y-20">
        {/* Staffing Service Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="order-2 lg:order-1">
            <img 
              src={professionalStaffing} 
              alt="Cung ứng nhân sự F&B chuyên nghiệp" 
              className="rounded-xl shadow-2xl w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>
          
          <Card className="border-2 border-brand-orange/20 hover:shadow-lg transition-shadow order-1 lg:order-2">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl text-brand-navy flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                <Users className="h-6 w-6 md:h-8 md:w-8 text-brand-orange flex-shrink-0" />
                <span className="leading-tight">Cung Ứng Nhân Sự F&B Chuyên Nghiệp</span>
              </CardTitle>
              <CardDescription className="text-sm md:text-lg leading-relaxed">
                Cung cấp nhân sự chất lượng cao được đào tạo bài bản từ F&B Academy, phù hợp các loại hình: 
                nhà hàng – quán cafe – bar – chuỗi – event – sự kiện ngắn ngày.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4 md:space-y-6">
              {/* Business Type Selection */}
              <div>
                <h4 className="font-semibold mb-2 md:mb-3 text-brand-navy text-sm md:text-base">Loại hình kinh doanh của bạn:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Quán cafe", "Nhà hàng – quán ăn", "Lounge – Bar – Pub", 
                    "Tiệc cưới – sự kiện", "Chuỗi thương hiệu", "Mô hình di động / lưu động"
                  ].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`business-${type}`}
                        checked={selectedBusinessType.includes(type)}
                        onCheckedChange={() => handleCheckboxChange(type, selectedBusinessType, setSelectedBusinessType)}
                      />
                      <label htmlFor={`business-${type}`} className="text-xs md:text-sm font-medium leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Staff Type Selection */}
              <div>
                <h4 className="font-semibold mb-2 md:mb-3 text-brand-navy text-sm md:text-base">Nhóm nhân sự cần cung ứng:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Barista", "Bartender", "Phục vụ bàn (Service)", 
                    "Thu ngân – lễ tân", "Quản lý – giám sát", "Bếp chính – phụ bếp"
                  ].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`staff-${type}`}
                        checked={selectedStaffType.includes(type)}
                        onCheckedChange={() => handleCheckboxChange(type, selectedStaffType, setSelectedStaffType)}
                      />
                      <label htmlFor={`staff-${type}`} className="text-xs md:text-sm font-medium leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Work Type Selection */}
              <div>
                <h4 className="font-semibold mb-2 md:mb-3 text-brand-navy text-sm md:text-base">Hình thức cung ứng:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Theo ca (4h, 8h)", "Full-time (6 ngày/tuần)", 
                    "Hợp đồng dài hạn", "Theo sự kiện (1–3 ngày)"
                  ].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`work-${type}`}
                        checked={selectedWorkType.includes(type)}
                        onCheckedChange={() => handleCheckboxChange(type, selectedWorkType, setSelectedWorkType)}
                      />
                      <label htmlFor={`work-${type}`} className="text-xs md:text-sm font-medium leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Requirements */}
              <div>
                <h4 className="font-semibold mb-2 md:mb-3 text-brand-navy text-sm md:text-base">Yêu cầu đặc biệt (tùy chọn):</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Biết tiếng Anh", "Kinh nghiệm ≥ 1 năm", 
                    "Có bằng/chứng chỉ", "Có thể đi tỉnh / công tác"
                  ].map((req) => (
                    <div key={req} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`req-${req}`}
                        checked={selectedSpecialReq.includes(req)}
                        onCheckedChange={() => handleCheckboxChange(req, selectedSpecialReq, setSelectedSpecialReq)}
                      />
                      <label htmlFor={`req-${req}`} className="text-xs md:text-sm font-medium leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {req}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-brand-orange/10 p-3 md:p-4 rounded-lg border border-brand-orange/20">
                <h4 className="font-semibold mb-2 text-brand-navy text-sm md:text-base">🎯 Lợi ích:</h4>
                <ul className="space-y-1 text-xs md:text-sm">
                  <li className="flex items-start gap-2"><span className="text-green-600 flex-shrink-0">✅</span><span>Đảm bảo 100% nhân sự đã được đào tạo</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600 flex-shrink-0">✅</span><span>Ký hợp đồng – có bảo hiểm dịch vụ</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600 flex-shrink-0">✅</span><span>Thay thế miễn phí nếu không phù hợp trong 2 ngày đầu</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600 flex-shrink-0">✅</span><span>CRM quản lý chấm công – hiệu quả nhân sự</span></li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Event Service Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <Card className="border-2 border-brand-orange/20 hover:shadow-lg transition-shadow order-2 lg:order-1">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl text-brand-navy flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                <Calendar className="h-6 w-6 md:h-8 md:w-8 text-brand-orange flex-shrink-0" />
                <span className="leading-tight">Tổ Chức Sự Kiện F&B</span>
              </CardTitle>
              <CardDescription className="text-sm md:text-lg leading-relaxed">
                Thiết kế và thực hiện trọn gói sự kiện F&B với phong cách chuyên nghiệp, phục vụ theo yêu cầu: 
                từ set menu – nhân sự – quầy bar – phục vụ – thiết bị đến quản lý điều phối.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4 md:space-y-6">
              {/* Event Type Selection */}
              <div>
                <h4 className="font-semibold mb-2 md:mb-3 text-brand-navy text-sm md:text-base">Loại sự kiện:</h4>
                <div className="space-y-2 md:space-y-3">
                  {[
                    "Tiệc sinh nhật tại nhà", "Tiệc công ty (Year End – Team building)", 
                    "Workshop – Talkshow – Coffee Break", "Sự kiện khai trương – ra mắt sản phẩm", 
                    "Private party – wedding"
                  ].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`event-${type}`}
                        checked={selectedEventType.includes(type)}
                        onCheckedChange={() => handleCheckboxChange(type, selectedEventType, setSelectedEventType)}
                      />
                      <label htmlFor={`event-${type}`} className="text-xs md:text-sm font-medium leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guest Count Selection */}
              <div>
                <h4 className="font-semibold mb-2 md:mb-3 text-brand-navy text-sm md:text-base">Số lượng khách mời:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {["< 20 khách", "20 – 50 khách", "50 – 100 khách", "Trên 100 khách"].map((count) => (
                    <div key={count} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`guest-${count}`}
                        checked={selectedGuestCount.includes(count)}
                        onCheckedChange={() => handleCheckboxChange(count, selectedGuestCount, setSelectedGuestCount)}
                      />
                      <label htmlFor={`guest-${count}`} className="text-xs md:text-sm font-medium leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {count}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Package Selection */}
              <div>
                <h4 className="font-semibold mb-2 md:mb-3 text-brand-navy text-sm md:text-base">Gói dịch vụ yêu cầu:</h4>
                <div className="space-y-2 md:space-y-3">
                  {[
                    "Chỉ cung ứng đồ uống (Barista – Bartender – Xe lưu động)", 
                    "Cung ứng đồ ăn nhẹ – Teabreak – Finger food",
                    "Full gói: Setup – decor – thực đơn – nhân sự – âm thanh",
                    "Gói đặc biệt: Cocktail theo chủ đề – biểu diễn pha chế – DJ"
                  ].map((pkg) => (
                    <div key={pkg} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`package-${pkg}`}
                        checked={selectedServicePackage.includes(pkg)}
                        onCheckedChange={() => handleCheckboxChange(pkg, selectedServicePackage, setSelectedServicePackage)}
                      />
                      <label htmlFor={`package-${pkg}`} className="text-xs md:text-sm font-medium leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {pkg}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Venue Selection */}
              <div>
                <h4 className="font-semibold mb-2 md:mb-3 text-brand-navy text-sm md:text-base">Địa điểm tổ chức:</h4>
                <div className="grid grid-cols-1 gap-2 md:gap-3">
                  {[
                    "Tại nhà khách hàng", "Tại công ty", 
                    "Tại studio/sảnh do Academy đề xuất", "Địa điểm do khách thuê riêng"
                  ].map((venue) => (
                    <div key={venue} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`venue-${venue}`}
                        checked={selectedVenue.includes(venue)}
                        onCheckedChange={() => handleCheckboxChange(venue, selectedVenue, setSelectedVenue)}
                      />
                      <label htmlFor={`venue-${venue}`} className="text-xs md:text-sm font-medium leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {venue}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-brand-orange/10 p-3 md:p-4 rounded-lg border border-brand-orange/20">
                <h4 className="font-semibold mb-2 text-brand-navy text-sm md:text-base">🎯 Lợi ích:</h4>
                <ul className="space-y-1 text-xs md:text-sm">
                  <li className="flex items-start gap-2"><span className="text-green-600 flex-shrink-0">✅</span><span>Đội ngũ tổ chức chuyên nghiệp, phục vụ chuẩn quốc tế</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600 flex-shrink-0">✅</span><span>Tùy biến linh hoạt theo chủ đề, ngân sách</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600 flex-shrink-0">✅</span><span>Hình ảnh – quay phim sự kiện trọn gói (nếu yêu cầu)</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600 flex-shrink-0">✅</span><span>Setup nhanh – đảm bảo chất lượng – đúng timeline</span></li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="order-1 lg:order-2">
            <img 
              src={eventCatering} 
              alt="Tổ chức sự kiện F&B" 
              className="rounded-xl shadow-2xl w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-gradient-to-r from-brand-navy/5 to-brand-orange/5 rounded-2xl p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-navy mb-3 md:mb-4 leading-tight">
                Đăng Ký Dịch Vụ Ngay
              </h2>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                Hoàn tất thông tin để nhận tư vấn chi tiết và báo giá chính xác
              </p>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl text-brand-navy">🖋 Thông tin khách hàng</CardTitle>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div className="space-y-2">
                      <label className="text-xs md:text-sm font-medium text-brand-navy">Họ và tên *</label>
                      <Input 
                        placeholder="Nhập họ và tên" 
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        required
                        className="text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs md:text-sm font-medium text-brand-navy">Số điện thoại *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input 
                          placeholder="0989 000 000" 
                          className="pl-10 text-sm" 
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs md:text-sm font-medium text-brand-navy">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input 
                          placeholder="email@example.com" 
                          className="pl-10 text-sm" 
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs md:text-sm font-medium text-brand-navy">Tên doanh nghiệp</label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input 
                          placeholder="Tên công ty (nếu có)" 
                          className="pl-10 text-sm" 
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs md:text-sm font-medium text-brand-navy">📎 Ghi chú thêm</label>
                    <Textarea 
                      placeholder="Khách hàng có thể yêu cầu cụ thể setup theo tone màu, phong cách, gửi ảnh mẫu..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="text-sm"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-3 md:pt-4">
                    <Button type="submit" size="lg" className="flex-1 bg-brand-orange hover:bg-brand-orange/90 text-white" disabled={isLoading}>
                      {isLoading ? "Đang gửi..." : "Gửi yêu cầu tư vấn"}
                    </Button>
                    <Button type="button" variant="outline" size="lg" className="flex-1 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
                      Gọi tư vấn ngay
                    </Button>
                  </div>
                </CardContent>
              </form>
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section className="hidden text-center">
          <h2 className="text-3xl font-bold text-primary mb-8 leading-relaxed">🔔 Tính Năng Công Nghệ Hỗ Trợ</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Hệ thống chọn dịch vụ thông minh",
                description: "Dynamic Service Selector giúp khách hàng chọn đúng dịch vụ cần thiết"
              },
              {
                title: "Tích hợp lịch hẹn tự động",
                description: "Báo giá và xác nhận lịch hẹn được gửi tự động qua email"
              },
              {
                title: "Chat AI hỗ trợ 24/7",
                description: "Tư vấn và gợi ý gói dịch vụ phù hợp mọi lúc mọi nơi"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
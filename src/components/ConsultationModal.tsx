import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { submitMockConsultation } from "@/data/mockConsultations";
import { sendToTelegram, showSuccessMessage, RegistrationData } from "@/services/telegramService";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal = ({ isOpen, onClose }: ConsultationModalProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    businessType: "",
    consultationType: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Map form data to consultation request format
      const consultationData = {
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        role: "Student" as const,
        industrySegment: (formData.businessType === "cafe" ? "Cafe" : 
                         formData.businessType === "restaurant" ? "Restaurant" :
                         formData.businessType === "bar" ? "Bar" :
                         formData.businessType === "hotel" ? "Hotel" : "Cafe") as any,
        interest: (formData.consultationType === "training" ? "Management" :
                  formData.consultationType === "setup" ? "Management" :
                  formData.consultationType === "menu" ? "Culinary" :
                  formData.consultationType === "management" ? "Management" :
                  formData.consultationType === "franchise" ? "Enterprise" :
                  "Management") as any,
        experience: "Beginner" as const,
        message: formData.message,
        source: "navbar_cta" as const
      };

      // Prepare data for Telegram
      const telegramData: RegistrationData = {
        name: formData.fullName,
        phone: formData.phone,
        email: formData.email || undefined,
        course: `${formData.businessType} - ${formData.consultationType}`,
        message: formData.message || 'Không có tin nhắn',
        formType: 'Đăng ký tư vấn miễn phí',
        timestamp: new Date().toLocaleString('vi-VN')
      };

      // Send to Telegram
      const telegramSuccess = await sendToTelegram(telegramData);
      
      const result = submitMockConsultation(consultationData);
      
      if (result) {
        if (telegramSuccess) {
          toast.success(showSuccessMessage());
        } else {
          toast.success("Đăng ký tư vấn thành công! Chúng tôi sẽ liên hệ trong 24h.");
        }
        onClose();
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          businessType: "",
          consultationType: "",
          message: ""
        });
      } else {
        toast.error("Có lỗi xảy ra, vui lòng thử lại");
      }
    } catch (error) {
      toast.error("Có lỗi xảy ra, vui lòng thử lại");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Đăng ký tư vấn miễn phí</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Họ và tên *</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
              placeholder="Nguyễn Văn A"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Số điện thoại *</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              placeholder="0901234567"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              placeholder="email@example.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="businessType">Loại hình kinh doanh</Label>
            <Select value={formData.businessType} onValueChange={(value) => setFormData(prev => ({ ...prev, businessType: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Chọn loại hình" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cafe">Quán cà phê</SelectItem>
                <SelectItem value="restaurant">Nhà hàng</SelectItem>
                <SelectItem value="bar">Bar/Pub</SelectItem>
                <SelectItem value="hotel">Khách sạn</SelectItem>
                <SelectItem value="catering">Dịch vụ tiệc</SelectItem>
                <SelectItem value="franchise">Nhượng quyền F&B</SelectItem>
                <SelectItem value="personal">Cá nhân học nghề</SelectItem>
                <SelectItem value="other">Khác</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="consultationType">Nội dung tư vấn</Label>
            <Select value={formData.consultationType} onValueChange={(value) => setFormData(prev => ({ ...prev, consultationType: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Chọn nội dung" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="training">Đào tạo nhân sự</SelectItem>
                <SelectItem value="setup">Setup cửa hàng</SelectItem>
                <SelectItem value="menu">Thiết kế menu & công thức</SelectItem>
                <SelectItem value="management">Quản lý vận hành</SelectItem>
                <SelectItem value="franchise">Nhượng quyền thương hiệu</SelectItem>
                <SelectItem value="marketing">Marketing F&B</SelectItem>
                <SelectItem value="cost">Tối ưu chi phí</SelectItem>
                <SelectItem value="general">Tư vấn tổng thể</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Tin nhắn chi tiết</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              placeholder="Mô tả chi tiết nhu cầu tư vấn của bạn..."
              rows={3}
            />
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? "Đang gửi..." : "Gửi yêu cầu tư vấn"}
          </Button>
          
          <div className="text-center text-xs text-muted-foreground">
            <p>Chúng tôi sẽ liên hệ trong vòng 24h để tư vấn miễn phí</p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { authenticateMockUserAsync } from "@/data/mockUsers";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await authenticateMockUserAsync(formData.email, formData.password);
      
      if (result) {
        toast.success(`Chào mừng ${result.fullName}! Đăng nhập thành công.`);
        // Store user data in localStorage for demo
        localStorage.setItem('currentUser', JSON.stringify(result));
        onClose();
        // In real app, redirect to dashboard
        console.log('User dashboard data:', result);
      } else {
        toast.error("Email hoặc mật khẩu không đúng");
      }
    } catch (error) {
      toast.error("Có lỗi xảy ra, vui lòng thử lại");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = () => {
    setFormData({
      email: "linh.barista@demo.fb-academy.vn",
      password: "barista123"
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Đăng nhập F&B Academy</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              placeholder="email@example.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Mật khẩu</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
              placeholder="Nhập mật khẩu"
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
            </Button>
            
            <Button 
              type="button" 
              variant="outline" 
              onClick={handleDemoLogin}
              className="w-full text-sm"
            >
              Điền thông tin demo
            </Button>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>Chưa có tài khoản? <span className="text-primary cursor-pointer hover:underline">Đăng ký ngay</span></p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
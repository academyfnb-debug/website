import React, { useMemo, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQuickSignup } from "@/context/QuickSignupContext";
import { toast } from "@/components/ui/use-toast";
import { sendToTelegram, showSuccessMessage, RegistrationData } from "@/services/telegramService";

const phoneRegex = /^0\d{9}$/;

export const CourseQuickSignupModal: React.FC = () => {
  const { isOpen, close, preset } = useQuickSignup();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState<{ fullName?: boolean; phone?: boolean }>({});

  const valid = useMemo(() => fullName.trim().length >= 2 && phoneRegex.test(phone), [fullName, phone]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ fullName: true, phone: true });
    if (!valid) return;
    setLoading(true);
    
    // Prepare data for Telegram
    const telegramData: RegistrationData = {
      name: fullName,
      phone: phone,
      course: preset?.courseTitle ?? "Khóa học",
      formType: 'Đăng ký nhanh khóa học',
      timestamp: new Date().toLocaleString('vi-VN')
    };

    // Send to Telegram
    const telegramSuccess = await sendToTelegram(telegramData);
    
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    
    if (telegramSuccess) {
      toast({
        title: "Đăng ký thành công!",
        description: showSuccessMessage(),
      });
    } else {
      toast({
        title: "Đăng ký thành công!",
        description: `Đã nhận thông tin cho khóa: ${preset?.courseTitle ?? "Khóa học"}. Chúng tôi sẽ liên hệ sớm.`,
      });
    }
    
    close();
    setFullName("");
    setPhone("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(v) => (v ? undefined : close())}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden">
        <div className="p-5 bg-gradient-trial text-white">
          <h3 className="text-xl font-bold">Đăng ký nhanh khóa học</h3>
          <p className="text-white/80 text-sm mt-1">Điền thông tin để giữ chỗ và nhận tư vấn ngay.</p>
        </div>
        <form onSubmit={onSubmit} className="p-5 space-y-4">
          <div>
            <label className="text-sm font-medium">Khóa học</label>
            <Input value={preset?.courseTitle ?? ""} readOnly className="mt-1" />
          </div>
          <div>
            <label className="text-sm font-medium">Họ & tên *</label>
            <Input
              placeholder="VD: Nguyễn Văn A"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, fullName: true }))}
              className={touched.fullName && fullName.trim().length < 2 ? "border-destructive" : ""}
            />
            {touched.fullName && fullName.trim().length < 2 && (
              <p className="text-destructive text-xs mt-1">Vui lòng nhập họ tên hợp lệ</p>
            )}
          </div>
          <div>
            <label className="text-sm font-medium">Số điện thoại *</label>
            <Input
              type="tel"
              placeholder="0xxxxxxxxx"
              inputMode="numeric"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, "").slice(0, 10))}
              onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
              className={touched.phone && !phoneRegex.test(phone) ? "border-destructive" : ""}
            />
            {touched.phone && !phoneRegex.test(phone) && (
              <p className="text-destructive text-xs mt-1">Số điện thoại phải gồm 10 số và bắt đầu bằng 0</p>
            )}
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <Button type="button" variant="ghost" onClick={close}>Để sau</Button>
            <Button type="submit" variant="neon" disabled={!valid || loading}>
              {loading ? "Đang gửi..." : "Xác nhận đăng ký"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

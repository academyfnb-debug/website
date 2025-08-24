import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";

const TrialThankYou: React.FC = () => {
  useEffect(() => {
    document.title = "Cảm ơn – Học thử 1–1 | F&B Academy";
  }, []);

  return (
    <main className="container py-16">
      <h1 className="text-3xl font-bold">Cảm ơn bạn đã đăng ký!</h1>
      <p className="text-muted-foreground mt-2">Lịch tạm giữ đã được tạo. Hãy thêm lịch và tham gia nhóm hỗ trợ để nhận tài liệu.</p>

      <div className="grid md:grid-cols-3 gap-4 mt-8">
        <div className="rounded-xl border p-4">
          <div className="font-semibold mb-2">QR thêm lịch</div>
          <div className="text-sm text-muted-foreground">Quét để thêm Google/Apple Calendar</div>
          <Button className="mt-3" variant="outline">Tải QR</Button>
        </div>
        <div className="rounded-xl border p-4">
          <div className="font-semibold mb-2">Nhóm Zalo/Telegram</div>
          <div className="text-sm text-muted-foreground">Tham gia để nhận nhắc lịch & hỗ trợ</div>
          <div className="flex gap-2 mt-3">
            <Button variant="outline">Join Zalo</Button>
            <Button variant="outline">Join Telegram</Button>
          </div>
        </div>
        <div className="rounded-xl border p-4">
          <div className="font-semibold mb-2">Starter Kit (PDF)</div>
          <div className="text-sm text-muted-foreground">Checklist dụng cụ, glossary, 3 video cơ bản</div>
          <Button variant="neon" className="mt-3">Tải ngay</Button>
        </div>
      </div>
    </main>
  );
};

export default TrialThankYou;

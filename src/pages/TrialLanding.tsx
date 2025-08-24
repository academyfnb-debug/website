import React, { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTrial } from "@/context/TrialContext";
import { CalendarDays, Clock, User, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
const TrialLanding: React.FC = () => {
  const { lastSubmission, open } = useTrial();

  useEffect(() => {
    document.title = "Học thử 1–1 miễn phí (2 giờ) | F&B Academy";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Khởi động hành trình F&B của bạn – miễn phí, thực chiến, cá nhân hóa trong 120 phút 1–1 với mentor.");
  }, []);

  return (
    <main>
      <header className="bg-gradient-trial text-white py-16">
        <div className="container">
          <div className="mb-4">
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
              <Link to="/"><ArrowLeft className="mr-2 h-4 w-4" /> Quay về trang chủ</Link>
            </Button>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold">Học thử 1–1 miễn phí (2 giờ)</h1>
          <p className="mt-2 text-white/85">120 phút | 1 mentor – 1 học viên</p>
          <p className="mt-2 text-white/80">Phỏng vấn định hướng – chẩn đoán năng lực – demo kỹ năng – lộ trình cá nhân hóa.</p>
        </div>
      </header>

      <section className="container py-10 grid lg:grid-cols-3 gap-6">
        <article className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Bạn nhận được gì trong 2 giờ?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Phỏng vấn định hướng (30’):</strong> mục tiêu 3–6–12 tháng, trải nghiệm hiện tại, nguồn lực.</li>
                <li><strong>Chẩn đoán & tư vấn (30’):</strong> xác định skills gap theo chuyên ngành, gợi ý lộ trình Level 1→3 + dự trù chi phí.</li>
                <li><strong>Demo kỹ năng (40’):</strong> Barista/Bartender/Bếp/Quản lý – demo thực chiến theo ngành.</li>
                <li><strong>Kế hoạch 7 ngày (20’):</strong> bài tập nhỏ, tài nguyên PDF/video, hẹn lịch follow-up + ưu đãi 72h.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mentor đồng hành</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-4">
              {[
                { name: "Nguyễn An", exp: "8 năm", brand: "The Coffee House", role: "Barista Lead" },
                { name: "Trần Bình", exp: "10 năm", brand: "QSR Chain", role: "Ops Manager" },
                { name: "Lê Chi", exp: "7 năm", brand: "Hotel 5*", role: "Head Bartender" },
              ].map((m) => (
                <div key={m.name} className="rounded-xl border p-4 shadow-card">
                  <div className="font-semibold">{m.name}</div>
                  <div className="text-sm text-muted-foreground">{m.role} • {m.exp}</div>
                  <div className="text-sm">Từng vận hành: {m.brand}</div>
                  <Button variant="outline" className="mt-3">Chọn mentor</Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Combo ưu đãi dành cho người học thử</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>-15% học phí khóa đầu tiên (đăng ký trong 72 giờ)</li>
                <li>Tặng 01 buổi coaching 30’ khi mua combo 2 khóa</li>
                <li>Tặng bộ SOP mẫu theo ngành đã chọn</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Câu hỏi thường gặp (FAQ)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li><strong>Học online có demo được không?</strong> Có – camera đa góc/clip mẫu.</li>
                <li><strong>Cần chuẩn bị gì?</strong> Google Meet/Zoom, ly tách cơ bản, bột/đá nếu demo tại nhà.</li>
                <li><strong>Có mất phí phát sinh không?</strong> Không – 0đ.</li>
                <li><strong>Tôi muốn đổi lịch?</strong> Được phép đổi 1 lần trước 24h.</li>
              </ul>
            </CardContent>
          </Card>
        </article>

        <aside className="space-y-6">
          <div className="rounded-xl border p-5 shadow-card">
            <div className="font-semibold mb-2">Lịch tạm giữ của bạn</div>
            <div className="flex items-center gap-2 text-sm"><User className="h-4 w-4" />{lastSubmission?.fullName || "Chưa xác định"}</div>
            <div className="flex items-center gap-2 text-sm"><CalendarDays className="h-4 w-4" />{lastSubmission?.preferredSlot || "Chưa chọn"}</div>
            <div className="flex items-center gap-2 text-sm"><Clock className="h-4 w-4" />120 phút</div>
            <Button className="mt-4 w-full" variant="neon" onClick={() => (window.location.href = '/trial-1on1/confirm')}>Giữ chỗ lịch 1–1 của tôi</Button>
            <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1"><CheckCircle2 className="h-3 w-3"/> Ưu tiên buổi tối & cuối tuần</p>
          </div>
        </aside>
      </section>
      <div className="h-20 md:hidden" aria-hidden="true" />

      {/* Mobile bottom action bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 md:hidden border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 pointer-events-none">
        <div className="container px-4 py-3 pointer-events-auto" style={{ paddingBottom: "calc(env(safe-area-inset-bottom))" }}>
          <Button variant="neon" size="lg" className="w-full shadow-glow" onClick={open} aria-label="Đăng ký học thử miễn phí">
            <CalendarDays className="mr-2 h-4 w-4" /> Đăng ký học thử miễn phí
          </Button>
        </div>
      </div>
    </main>
  );
};

export default TrialLanding;

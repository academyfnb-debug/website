import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTrial } from "@/context/TrialContext";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TrialConfirm: React.FC = () => {
  const { lastSubmission } = useTrial();
  const navigate = useNavigate();
  const [slot, setSlot] = useState<string>(lastSubmission?.preferredSlot || "19:00 – 21:00 (Thứ 5)");

  useEffect(() => {
    document.title = "Xác nhận lịch học thử 1–1 | F&B Academy";
  }, []);

  const onConfirm = async () => {
    await new Promise((r) => setTimeout(r, 800));
    navigate("/trial-1on1/thank-you");
  };

  return (
    <main className="container py-10">
      <h1 className="text-2xl md:text-4xl font-bold mb-6">Xác nhận lịch học thử 1–1</h1>
      <Card>
        <CardHeader>
          <CardTitle>Chọn khung giờ</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={slot} onValueChange={setSlot} className="space-y-2">
            {["19:00 – 21:00 (Thứ 5)", "20:00 – 22:00 (Thứ 7)", "09:00 – 11:00 (Chủ nhật)"].map((s) => (
              <label key={s} className="flex items-center gap-2 rounded-md border p-3 cursor-pointer hover:bg-muted">
                <RadioGroupItem value={s} id={s} />
                <span>{s}</span>
              </label>
            ))}
          </RadioGroup>
          <div className="flex gap-3 mt-6">
            <Button variant="outline" onClick={() => navigate(-1)}>Quay lại</Button>
            <Button variant="neon" onClick={onConfirm}>Xác nhận giữ chỗ</Button>
          </div>
        </CardContent>
      </Card>
      <p className="text-sm text-muted-foreground mt-4">Sau khi xác nhận, bạn sẽ nhận được QR thêm lịch và link nhóm Zalo/Telegram.</p>
    </main>
  );
};

export default TrialConfirm;

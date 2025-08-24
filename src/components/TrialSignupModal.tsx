import * as React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { useTrial } from "@/context/TrialContext";
import { format } from "date-fns";
import { sendToTelegram, showSuccessMessage, RegistrationData } from "@/services/telegramService";

const FormSchema = z.object({
  fullName: z.string().min(2, "Vui lòng nhập họ tên"),
  phone: z
    .string()
    .regex(/^0\d{9}$/g, "Số điện thoại phải gồm 10 số và bắt đầu bằng 0"),
  email: z.string().email("Email không hợp lệ").optional().or(z.literal("")),
  track: z.string().min(1, "Hãy chọn chuyên ngành"),
  oneOnOne: z.boolean().default(true),
  mode: z.enum(["online", "offline"]),
  date: z.date({ required_error: "Chọn ngày" }),
  slot: z.string().min(1, "Chọn khung giờ"),
  goal: z.string().max(200, "Tối đa 200 ký tự").optional().or(z.literal("")),
  city: z.string().min(1, "Chọn tỉnh/thành"),
  terms: z.boolean().refine(v => v, { message: "Bạn cần đồng ý điều khoản" }),
});

export const TrialSignupModal: React.FC = () => {
  const { isOpen, close, setLastSubmission } = useTrial();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      track: "",
      oneOnOne: true,
      mode: "online",
      date: undefined,
      slot: "",
      goal: "",
      city: "",
      terms: false,
    },
  });

  // Suggested time slots
  const slots = React.useMemo(() => [
    "19:00 – 21:00 (Thứ 5)",
    "20:00 – 22:00 (Thứ 7)",
    "09:00 – 11:00 (Chủ nhật)",
  ], []);

  const autofill = () => {
    form.reset({
      fullName: "Nguyễn Minh Quân",
      phone: "0901234567",
      email: "quan.nguyen@example.com",
      track: "barista",
      oneOnOne: true,
      mode: "online",
      date: new Date(),
      slot: "19:00 – 21:00 (Thứ 5)",
      goal: "Học nghề để mở quán cafe 25–30m² trong 3 tháng",
      city: "Hà Nội",
      terms: true,
    })
  }

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const payload = {
      fullName: values.fullName,
      phone: values.phone,
      email: values.email,
      track: values.track,
      oneOnOne: values.oneOnOne,
      mode: values.mode,
      preferredSlot: `${values.slot} | ${format(values.date, "PPP")}`,
      goal: values.goal,
      city: values.city,
    };

    // Prepare data for Telegram
    const telegramData: RegistrationData = {
      name: values.fullName,
      phone: values.phone,
      email: values.email || undefined,
      course: `${values.track} - ${values.mode} - ${values.preferredSlot}`,
      message: `Mục tiêu: ${values.goal || 'Không có'} | Thành phố: ${values.city} | 1-on-1: ${values.oneOnOne ? 'Có' : 'Không'}`,
      formType: 'Đăng ký học thử 1-1 miễn phí',
      timestamp: new Date().toLocaleString('vi-VN')
    };

    // Send to Telegram
    const telegramSuccess = await sendToTelegram(telegramData);
    
    // Simulate loading
    await new Promise((r) => setTimeout(r, 800));

    setLastSubmission(payload);
    
    if (telegramSuccess) {
      toast({
        title: "Đăng ký thành công!",
        description: showSuccessMessage(),
      });
    } else {
      toast({
        title: "Đăng ký thành công!",
        description: "Chúng tôi đã nhận được thông tin của bạn và sẽ liên hệ sớm nhất.",
      });
    }

    close();
    navigate("/trial-1on1");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(v) => (v ? undefined : close())}>
      <DialogContent className="max-w-2xl sm:rounded-2xl p-0 overflow-hidden">
        <div className="bg-gradient-trial p-6 text-white">
          <h2 className="text-2xl font-bold leading-relaxed">Đăng ký học thử 1–1 miễn phí (2 giờ)</h2>
          <p className="text-white/80 mt-1">Chọn chuyên ngành bạn quan tâm, chúng tôi sắp lịch cố vấn ngay.</p>
        </div>
        <div className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField control={form.control} name="fullName" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Họ & tên *</FormLabel>
                    <FormControl>
                      <Input placeholder="VD: Nguyễn Văn A" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Số điện thoại *</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="0xxxxxxxxx" inputMode="numeric" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email (không bắt buộc)</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormDescription>Khuyến khích để nhận tài liệu & lịch.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="track" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bạn muốn học mảng nào trong F&B? *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn chuyên ngành" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="barista">Barista / Pha chế không cồn</SelectItem>
                        <SelectItem value="bartender">Bartender / Cocktail</SelectItem>
                        <SelectItem value="kitchen">Bếp Á – Âu – Fusion</SelectItem>
                        <SelectItem value="setup">Setup mở quán – vận hành – SOP</SelectItem>
                        <SelectItem value="management">Quản lý – gọi vốn – nhượng quyền</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField control={form.control} name="oneOnOne" render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-md border p-3">
                    <div className="space-y-0.5">
                      <FormLabel>Đăng ký 1–1 với chuyên gia</FormLabel>
                      <FormDescription>Mặc định bật</FormDescription>
                    </div>
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange as any} />
                    </FormControl>
                  </FormItem>
                )} />

                <FormField control={form.control} name="mode" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hình thức buổi học thử *</FormLabel>
                    <FormControl>
                      <RadioGroup className="flex gap-4" onValueChange={field.onChange} defaultValue={field.value}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="online" id="online" />
                          <label htmlFor="online">Online (Zoom/Google Meet)</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="offline" id="offline" />
                          <label htmlFor="offline">Offline tại học viện</label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField control={form.control} name="date" render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Thời gian mong muốn – Ngày *</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button variant={"outline"} className={cn("justify-start", !field.value && "text-muted-foreground")}> 
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value ? format(field.value, "PPP") : <span>Chọn ngày</span>}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar 
                          mode="single" 
                          selected={field.value as any}
                          onSelect={field.onChange}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="slot" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Khung giờ gợi ý *</FormLabel>
                    <FormControl>
                      <RadioGroup className="grid grid-cols-1 gap-2" onValueChange={field.onChange} defaultValue={field.value}>
                        {slots.map((s) => (
                          <label key={s} className="flex items-center gap-2 rounded-md border p-3 cursor-pointer hover:bg-muted">
                            <RadioGroupItem value={s} id={s} />
                            <span>{s}</span>
                          </label>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField control={form.control} name="goal" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mục tiêu 3–6 tháng tới</FormLabel>
                    <FormControl>
                      <Textarea maxLength={200} placeholder="VD: Mở quán cà phê 25–30m² trong 3 tháng..." {...field} />
                    </FormControl>
                    <FormDescription>Tối đa 200 ký tự.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="city" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nơi ở hiện tại *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn Tỉnh/TP" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {[
                          "Hà Nội",
                          "TP. Hồ Chí Minh",
                          "Đà Nẵng",
                          "Hải Phòng",
                          "Cần Thơ",
                          "Khác",
                        ].map(c => (<SelectItem key={c} value={c}>{c}</SelectItem>))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <FormField control={form.control} name="terms" render={({ field }) => (
                <FormItem className="flex items-start gap-3">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange as any} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Đồng ý điều khoản & nhận thông tin từ F&B Academy</FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )} />

              <div className="flex flex-wrap gap-3 justify-between">
                <div className="flex gap-2">
                  <Button type="button" variant="outline" onClick={autofill}>
                    <Sparkles className="h-4 w-4 mr-2" />Mock autofill
                  </Button>
                </div>
                <div className="flex gap-3">
                  <Button type="button" variant="ghost" onClick={close}>Để sau</Button>
                  <Button type="submit" variant="neon">Xác nhận đăng ký</Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

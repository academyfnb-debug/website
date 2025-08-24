export type LearningPathDetail = {
  slug: string;
  title: string;
  level: string;
  summary: string;
  heroImage?: string;
  highlights: string[];
  modules: string[];
  outcomes: string[];
  forWho: string[];
  perks: string[];
  faqs: { q: string; a: string }[];
};

export const makeSlug = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export const learningPathDetails: Record<string, LearningPathDetail> = {};

const define = (partial: Omit<LearningPathDetail, "slug">) => {
  const slug = makeSlug(partial.title);
  learningPathDetails[slug] = { slug, ...partial } as LearningPathDetail;
};

// Level 1 – Entry
define({
  title: "Khởi đầu nghề (Entry Level)",
  level: "Level 1",
  heroImage: "/src/assets/level-1-entry.jpg",
  summary:
    "Làm quen ngành F&B, học nghề cơ bản và kỹ năng dịch vụ để sẵn sàng đi làm trong môi trường chuyên nghiệp.",
  highlights: [
    "Giới thiệu ngành – văn hoá nghề – kỷ luật phục vụ",
    "Barista/Bartender/Bếp cơ bản cho người mới",
    "Thực hành quy trình chuẩn và an toàn vệ sinh",
  ],
  modules: [
    "Làm quen ngành F&B (6h)",
    "Nghề cơ bản theo chuyên ngành (3–5 buổi)",
    "Kỹ năng dịch vụ & xử lý tình huống (2 buổi)",
  ],
  outcomes: [
    "Nắm nền tảng công việc tại quán/cửa hàng",
    "Tự tin ứng tuyển vị trí junior",
    "Nhận chứng chỉ Entry Level",
  ],
  forWho: ["Người mới bắt đầu", "Sinh viên", "Người chuyển nghề"],
  perks: ["Tài liệu PDF", "Checklist quầy", "Mentor hỗ trợ"],
  faqs: [
    { q: "Có cần kinh nghiệm trước?", a: "Không – chương trình dành cho người mới 100%." },
    { q: "Học online được không?", a: "Có – hỗ trợ Zoom/Google Meet, demo bằng camera đa góc." },
  ],
});

// Level 2 – Technician
define({
  title: "Chuyên viên / Kỹ thuật viên",
  level: "Level 2",
  heroImage: "/src/assets/level-2-technician.jpg",
  summary:
    "Nâng cao tay nghề, chuẩn hoá kỹ thuật và tiếp cận tiêu chuẩn quốc tế cho môi trường chuỗi.",
  highlights: [
    "Barista/Bartender Pro & Fusion Kitchen",
    "Setup menu – tiêu chuẩn nguyên liệu – QC",
    "Chuẩn bị cho chứng chỉ quốc tế (SCA/WSET)",
  ],
  modules: [
    "Nâng cao kỹ thuật (5–8 buổi)",
    "Quản lý kỹ thuật & chất lượng (3 buổi)",
    "Chuẩn quốc tế – dự án thực chiến",
  ],
  outcomes: [
    "Thành thạo kỹ thuật chuyên sâu",
    "Đáp ứng yêu cầu chuỗi lớn",
    "Hồ sơ nghề nghiệp nổi bật",
  ],
  forWho: ["Đã có nền tảng cơ bản", "Nhân sự tại chuỗi", "Ứng viên thi tuyển"],
  perks: ["SOP mẫu", "Mentor 1–1", "Cố vấn portfolio"],
  faqs: [],
});

// Level 3 – Management
define({
  title: "Quản lý vận hành",
  level: "Level 3",
  heroImage: "/src/assets/level-3-management.jpg",
  summary:
    "Quản lý chi phí – nhân sự – SOP, thiết kế và vận hành mô hình kinh doanh hiệu quả.",
  highlights: [
    "P&L, KPI, nhân sự, checklist vận hành",
    "Setup quán: concept – menu – layout – tuyển dụng",
    "Kỹ năng lãnh đạo & huấn luyện đội ngũ",
  ],
  modules: [
    "Quản lý vận hành (8–10 buổi)",
    "Setup quán từ A–Z (6 buổi)",
    "Lãnh đạo & coaching (4 buổi)",
  ],
  outcomes: [
    "Vận hành hiệu quả theo SOP",
    "Mở quán thành công và kiểm soát chi phí",
    "Sẵn sàng vai trò Store/Operations Manager",
  ],
  forWho: ["Trưởng ca – Giám sát", "Chủ quán nhỏ", "Quản lý tiềm năng"],
  perks: ["Bộ SOP", "Template tài chính", "Coaching 1–1"],
  faqs: [],
});

// Level 4 – Leadership
define({
  title: "Lãnh đạo – Chiến lược",
  level: "Level 4+",
  heroImage: "/src/assets/level-4-leadership.jpg",
  summary:
    "Xây dựng hệ thống, gọi vốn – nhượng quyền và quản trị chiến lược để mở rộng chuỗi.",
  highlights: [
    "Chiến lược tài chính – nhân sự – thương hiệu",
    "Gọi vốn & mô hình franchise",
    "Quản trị KPI/BSC và quản trị hội đồng",
  ],
  modules: [
    "CEO F&B – Quản trị tổng thể (10 buổi)",
    "Gọi vốn & nhượng quyền (6 buổi)",
    "Quản trị chiến lược (5 buổi)",
  ],
  outcomes: [
    "Thiết kế & mở rộng hệ thống",
    "Kêu gọi vốn thành công",
    "Quản trị chuỗi bền vững",
  ],
  forWho: ["Chủ chuỗi/CEO", "Nhà đầu tư", "Founder"],
  perks: ["Board toolkit", "Franchise kit", "Mẫu KPI/BSC"],
  faqs: [
    { q: "Có hỗ trợ tư vấn riêng?", a: "Có – gói cố vấn 1–1 cho dự án thực tế." },
  ],
});

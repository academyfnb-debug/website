import baristaCourses from "@/assets/barista-courses.jpg";
import baristaTraining from "@/assets/barista-training.jpg";
import bartenderTraining from "@/assets/bartender-training.jpg";
import culinaryTraining from "@/assets/culinary-training.jpg";
import managementCourses from "@/assets/management-courses.jpg";
import franchiseTraining from "@/assets/franchise-training.jpg";
import serviceConsultation from "@/assets/service-consultation.jpg";

export type CourseDetail = {
  slug: string;
  title: string;
  category: string;
  level?: string;
  duration?: string;
  price?: string;
  heroImage?: string;
  summary: string;
  whatYouGet: string[];
  curriculum: string[];
  forWho: string[];
  perks: string[];
  faqs: { q: string; a: string }[];
};

// Helper to create slugs from Vietnamese titles (must match Courses.tsx generator)
export const makeSlug = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export const courseDetails: Record<string, CourseDetail> = {};

const define = (partial: Omit<CourseDetail, "slug">) => {
  const slug = makeSlug(partial.title);
  courseDetails[slug] = { slug, ...partial } as CourseDetail;
};

// Beverages
define({
  title: "Barista Basic",
  category: "Đồ uống không cồn",
  level: "Basic",
  duration: "15 giờ",
  price: "3.500.000 VNĐ",
  heroImage: baristaTraining,
  summary: "Học nền tảng espresso, sữa và quy trình quầy cà phê cho người mới bắt đầu.",
  whatYouGet: [
    "Hiểu máy espresso và nguyên lý chiết xuất",
    "Steaming sữa chuẩn – vệ sinh máy",
    "3 công thức cơ bản: Espresso, Cappuccino, Latte",
    "Kỷ luật quầy bar & an toàn vệ sinh",
  ],
  curriculum: [
    "Buổi 1: Giới thiệu hạt – máy – dụng cụ",
    "Buổi 2: Grind size & calibration",
    "Buổi 3: Steaming & pouring",
    "Buổi 4: thực hành menu cơ bản",
    "Buổi 5: tổng kết & kiểm tra",
  ],
  forWho: ["Người mới muốn đi làm", "Chủ quán nhỏ tự vận hành"],
  perks: ["Chứng nhận hoàn thành", "Tài liệu PDF & checklist quầy bar"],
  faqs: [
    { q: "Có cần kinh nghiệm?", a: "Không, khóa học dành cho người mới." },
    { q: "Học online được không?", a: "Có hỗ trợ học online qua Zoom với camera đa góc." },
  ],
});

define({
  title: "Barista Pro",
  category: "Đồ uống không cồn",
  level: "Pro",
  duration: "21 giờ",
  price: "5.200.000 VNĐ",
  heroImage: baristaTraining,
  summary: "Nâng cấp calibration, quy trình và latte art nâng cao cho môi trường chuyên nghiệp.",
  whatYouGet: [
    "Tối ưu extraction theo profile hạt",
    "Latte art nâng cao (heart, tulip, rosetta)",
    "Workflow quầy bar hiệu suất cao",
    "Setup menu & cost cơ bản",
  ],
  curriculum: [
    "Calibration nâng cao",
    "Recipe design & workflow",
    "Latte art nâng cao",
    "Service & speed test",
  ],
  forWho: ["Barista đã có nền", "Chuẩn bị thi tuyển vào chuỗi"],
  perks: ["Mentor kèm 1–1", "Bộ SOP mẫu"],
  faqs: [
    { q: "Có yêu cầu đầu vào?", a: "Nên đã học hoặc tương đương Barista Basic." },
  ],
});

define({
  title: "Tea & Milk Tea",
  category: "Đồ uống không cồn",
  level: "Basic",
  duration: "12 giờ",
  price: "2.800.000 VNĐ",
  heroImage: baristaCourses,
  summary: "Pha chế trà trái cây & sữa, quản lý topping và vận hành cửa hàng trà sữa.",
  whatYouGet: [
    "Công thức trà nền & siro",
    "Quản lý topping & trân châu",
    "Vận hành quầy trà sữa",
  ],
  curriculum: ["Trà nền", "Syrup & topping", "Vận hành & QC", "Thực hành menu"],
  forWho: ["Người mở quán trà sữa", "Nhân viên pha chế"],
  perks: ["Template cost & menu"],
  faqs: [],
});

define({
  title: "Cold Brew & Hand Brew",
  category: "Đồ uống không cồn",
  level: "Advanced",
  duration: "3 buổi",
  price: "2.400.000 VNĐ",
  heroImage: baristaTraining,
  summary: "Chuyên sâu pour-over, V60, cold brew và quy trình specialty.",
  whatYouGet: ["Recipe pour-over", "Cold drip & nitro", "QC specialty"],
  curriculum: ["Extraction theory", "Pour-over lab", "Cold brew"],
  forWho: ["Quán specialty", "Barista nâng cao"],
  perks: ["Cupping session"],
  faqs: [],
});

// Bartending
define({
  title: "Bartender Basic",
  category: "Đồ uống có cồn",
  level: "Basic",
  duration: "5 buổi",
  price: "3.800.000 VNĐ",
  heroImage: bartenderTraining,
  summary: "Kỹ thuật nền shake/stir, classic cơ bản và tiêu chuẩn phục vụ bar.",
  whatYouGet: ["Classic recipes", "Dụng cụ & kỹ thuật", "An toàn & phục vụ"],
  curriculum: ["Dụng cụ", "Shake & Stir", "Classic công thức", "Thực hành"],
  forWho: ["Người mới vào bar"],
  perks: ["Checklist bar"],
  faqs: [],
});

define({
  title: "Bartender Pro",
  category: "Đồ uống có cồn",
  level: "Pro",
  duration: "8 buổi",
  price: "6.500.000 VNĐ",
  heroImage: bartenderTraining,
  summary: "Mixology nâng cao, thiết kế signature & quản lý bar hiện đại.",
  whatYouGet: ["Signature design", "Prep & batch", "Menu engineering"],
  curriculum: ["NG ingredients", "Signature lab", "Cost & menu", "Speed test"],
  forWho: ["Bartender dày dặn", "Lead bar"],
  perks: ["Mentor 1–1"],
  faqs: [],
});

define({
  title: "Rượu mạnh & chưng cất",
  category: "Đồ uống có cồn",
  level: "Advanced",
  duration: "4 buổi",
  price: "4.200.000 VNĐ",
  heroImage: bartenderTraining,
  summary: "Kiến thức whisky, gin, cognac và kỹ thuật tasting – pairing.",
  whatYouGet: ["Tasting", "Rượu nền", "Pairing"],
  curriculum: ["Spirit 101", "Tasting", "Pairing"],
  forWho: ["Bartender/Phục vụ"],
  perks: ["Tài liệu tasting"],
  faqs: [],
});

define({
  title: "Flair & Show Bartending",
  category: "Đồ uống có cồn",
  level: "Master",
  duration: "6 buổi",
  price: "5.000.000 VNĐ",
  heroImage: bartenderTraining,
  summary: "Kỹ thuật tung hứng biểu diễn và biên đạo show cocktail.",
  whatYouGet: ["Flair cơ bản", "Routine show", "An toàn"],
  curriculum: ["Basic flair", "Working flair", "Routine"],
  forWho: ["Sự kiện, KOL bar"],
  perks: ["Video hướng dẫn"],
  faqs: [],
});

// Culinary
define({
  title: "Bếp Á cơ bản",
  category: "Ẩm thực",
  level: "Basic",
  duration: "10 buổi",
  price: "6.000.000 VNĐ",
  heroImage: culinaryTraining,
  summary: "Kỹ thuật xào, kho, canh và gia vị nền bếp Á.",
  whatYouGet: ["Gia vị nền", "Kỹ thuật chảo", "Vệ sinh ATTP"],
  curriculum: ["Gia vị", "Xào", "Kho", "Canh/Lẩu"],
  forWho: ["Nhân viên bếp", "Chủ quán"],
  perks: ["Sổ tay công thức"],
  faqs: [],
});

define({
  title: "Bếp Âu cơ bản",
  category: "Ẩm thực",
  level: "Basic",
  duration: "10 buổi",
  price: "6.800.000 VNĐ",
  heroImage: culinaryTraining,
  summary: "Sốt nền, pasta, soup và món nướng phong cách Âu.",
  whatYouGet: ["Mother sauces", "Pasta & Soup", "Roasting"],
  curriculum: ["Sauces", "Pasta", "Soup", "Roast"],
  forWho: ["Nhân viên bếp Âu", "Cafe/Restaurant"],
  perks: ["Recipe cards"],
  faqs: [],
});

define({
  title: "Fusion Kitchen",
  category: "Ẩm thực",
  level: "Advanced",
  duration: "8 buổi",
  price: "7.000.000 VNĐ",
  heroImage: culinaryTraining,
  summary: "Kết hợp Á – Âu – Local hiện đại cho menu sáng tạo.",
  whatYouGet: ["Fusion concept", "Plating", "QC"],
  curriculum: ["Concept", "Lab", "Plating", "Menu"],
  forWho: ["Bếp trưởng sáng tạo", "Cafe/Bistro"],
  perks: ["Photo guideline"],
  faqs: [],
});

// Management
define({
  title: "Mở quán 101",
  category: "Quản lý & vận hành",
  level: "Basic",
  duration: "6 buổi",
  price: "4.800.000 VNĐ",
  heroImage: managementCourses,
  summary: "Xác định concept, tính vốn, chọn mặt bằng và kế hoạch mở quán.",
  whatYouGet: ["Business model", "CAPEX/OPEX", "Legal checklist"],
  curriculum: ["Concept", "Finance", "Location", "Plan"],
  forWho: ["Chủ quán mới"],
  perks: ["Template tài chính"],
  faqs: [],
});

define({
  title: "Setup vận hành",
  category: "Quản lý & vận hành",
  level: "Pro",
  duration: "8 buổi",
  price: "6.500.000 VNĐ",
  heroImage: managementCourses,
  summary: "Thiết lập SOP, thiết kế menu, layout bếp và tuyển dụng.",
  whatYouGet: ["SOP", "Menu", "Layout"],
  curriculum: ["SOP", "Menu design", "Kitchen layout", "HR"],
  forWho: ["Quán đang mở"],
  perks: ["Bộ SOP mẫu"],
  faqs: [],
});

define({
  title: "Quản lý F&B",
  category: "Quản lý & vận hành",
  level: "Master",
  duration: "10 buổi",
  price: "8.200.000 VNĐ",
  heroImage: managementCourses,
  summary: "Quản trị chi phí, KPI, nhân sự và checklist vận hành chuỗi.",
  whatYouGet: ["Cost control", "KPI", "HR"],
  curriculum: ["P&L", "KPI", "HR", "Audit"],
  forWho: ["Quản lý/Chủ chuỗi"],
  perks: ["Bộ biểu mẫu"],
  faqs: [],
});

// Enterprise
define({
  title: "CEO F&B",
  category: "Doanh nghiệp & Nhượng quyền",
  level: "Master",
  duration: "12 buổi",
  price: "15.000.000 VNĐ",
  heroImage: franchiseTraining,
  summary: "Xây dựng hệ thống, quản trị và mở rộng doanh nghiệp F&B.",
  whatYouGet: ["Structure", "Governance", "Scale"],
  curriculum: ["Structure", "Governance", "Scale"],
  forWho: ["CEO/Founder"],
  perks: ["Board toolkit"],
  faqs: [],
});

define({
  title: "Gọi vốn & Franchise",
  category: "Doanh nghiệp & Nhượng quyền",
  level: "Advanced",
  duration: "8 buổi",
  price: "9.800.000 VNĐ",
  heroImage: franchiseTraining,
  summary: "Chuẩn bị hồ sơ gọi vốn và thiết kế mô hình nhượng quyền.",
  whatYouGet: ["Pitch deck", "Valuation", "Franchise kit"],
  curriculum: ["Deck", "Valuation", "Franchise"],
  forWho: ["Startup F&B"],
  perks: ["Mẫu hợp đồng"],
  faqs: [],
});

define({
  title: "Tư vấn mô hình",
  category: "Doanh nghiệp & Nhượng quyền",
  level: "Custom",
  duration: "Theo giờ",
  price: "1.000.000 - 3.000.000/giờ",
  heroImage: serviceConsultation,
  summary: "Chuyên gia cố vấn 1:1 kiểm toán & tối ưu mô hình thực tế.",
  whatYouGet: ["Audit", "Action plan"],
  curriculum: ["Interview", "On-site audit", "Report"],
  forWho: ["Quán đang vận hành"],
  perks: ["Template audit"],
  faqs: [],
});

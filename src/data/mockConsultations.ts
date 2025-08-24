// Mock data for Consultation requests – in-memory store for demo only.
// Replace with Supabase tables and RPC when integrating a real backend.

export type ConsultationRequest = {
  id: string
  fullName: string
  phone: string
  email: string
  company?: string
  role: "Owner" | "Manager" | "Student" | "HR" | "Trainer"
  industrySegment: "Cafe" | "Bar" | "Restaurant" | "Hotel" | "Catering"
  interest:
    | "Barista"
    | "Bartender"
    | "Culinary"
    | "Management"
    | "E-Learning"
    | "Certification"
    | "Enterprise"
  experience: "Beginner" | "Intermediate" | "Advanced"
  teamSize?: number
  budgetRange?: "$" | "$$" | "$$$" | "Custom"
  preferredContactTime?: "Morning" | "Afternoon" | "Evening"
  message?: string
  createdAt: string
  source: "navbar_cta" | "landing_form" | "enterprise_page"
  status: "new" | "contacted" | "closed"
}

const store: ConsultationRequest[] = [
  {
    id: "c_001",
    fullName: "Đặng Hải Yến",
    phone: "+84 915 222 333",
    email: "yen.owner@demo.fb-academy.vn",
    company: "Yori Cafe",
    role: "Owner",
    industrySegment: "Cafe",
    interest: "Barista",
    experience: "Beginner",
    teamSize: 8,
    budgetRange: "$$",
    preferredContactTime: "Morning",
    message: "Cần đào tạo pha chế cà phê nền tảng cho đội ngũ mới.",
    createdAt: "2025-08-08T04:30:00.000Z",
    source: "navbar_cta",
    status: "new",
  },
  {
    id: "c_002",
    fullName: "Ngô Tấn Dũng",
    phone: "+84 903 777 221",
    email: "dung.manager@demo.fb-academy.vn",
    company: "Aurora Lounge",
    role: "Manager",
    industrySegment: "Bar",
    interest: "Bartender",
    experience: "Intermediate",
    teamSize: 12,
    budgetRange: "$$$",
    preferredContactTime: "Evening",
    message: "Muốn chuẩn hoá menu cocktail signature và quy trình kiểm soát chi phí.",
    createdAt: "2025-08-07T14:20:00.000Z",
    source: "enterprise_page",
    status: "contacted",
  },
  {
    id: "c_003",
    fullName: "Phạm Mai Anh",
    phone: "+84 916 888 999",
    email: "maianh.hr@demo.fb-academy.vn",
    company: "Golden Lotus Hotel",
    role: "HR",
    industrySegment: "Hotel",
    interest: "Management",
    experience: "Advanced",
    teamSize: 40,
    budgetRange: "Custom",
    preferredContactTime: "Afternoon",
    message: "Chương trình leadership cho cấp giám sát nhà hàng – lộ trình 3 tháng.",
    createdAt: "2025-08-06T09:10:00.000Z",
    source: "landing_form",
    status: "new",
  },
  {
    id: "c_004",
    fullName: "Huỳnh Gia Bảo",
    phone: "+84 917 555 444",
    email: "bao.student@demo.fb-academy.vn",
    role: "Student",
    industrySegment: "Restaurant",
    interest: "Culinary",
    experience: "Beginner",
    preferredContactTime: "Afternoon",
    message: "Tư vấn lộ trình bếp Âu – có thể học kết hợp online + offline?",
    createdAt: "2025-08-05T11:50:00.000Z",
    source: "navbar_cta",
    status: "new",
  },
  {
    id: "c_005",
    fullName: "Vũ Nhật Tân",
    phone: "+84 934 000 777",
    email: "tan.trainer@demo.fb-academy.vn",
    company: "VietTaste Catering",
    role: "Trainer",
    industrySegment: "Catering",
    interest: "Certification",
    experience: "Advanced",
    teamSize: 25,
    budgetRange: "$$",
    preferredContactTime: "Morning",
    message: "Xin tư vấn cấp chứng chỉ nội bộ + sát hạch chuẩn hoá cho đội bếp.",
    createdAt: "2025-08-04T07:45:00.000Z",
    source: "enterprise_page",
    status: "closed",
  },
]

export function listMockConsultations() {
  return [...store]
}

export function submitMockConsultation(
  payload: Omit<ConsultationRequest, "id" | "createdAt" | "status" | "source"> & {
    source?: ConsultationRequest["source"]
    status?: ConsultationRequest["status"]
  }
): ConsultationRequest {
  const id = `c_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`
  const createdAt = new Date().toISOString()
  const newItem: ConsultationRequest = {
    id,
    createdAt,
    status: payload.status ?? "new",
    source: payload.source ?? "navbar_cta",
    ...payload,
  }
  store.unshift(newItem)
  return newItem
}

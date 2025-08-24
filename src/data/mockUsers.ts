// Mock data for F&B Academy – Users and simple helpers for demo login flows
// This is in-memory only, meant for UI demos. Replace with Supabase later.

export type Enrollment = {
  courseId: string
  courseName: string
  path: "Barista" | "Bartender" | "Culinary" | "Management"
  level: 1 | 2 | 3 | 4
  progressPercent: number
  status: "in_progress" | "completed" | "paused"
  startedAt: string
  lastActiveAt: string
}

export type Certificate = {
  id: string
  title: string
  issuedAt: string
  credentialUrl?: string
}

export type Notification = {
  id: string
  type: "reminder" | "certificate" | "message"
  message: string
  createdAt: string
  read: boolean
}

export type SupportTicket = {
  id: string
  subject: string
  status: "open" | "pending" | "closed"
  createdAt: string
}

export type UserProfile = {
  id: string
  email: string
  // WARNING: Passwords here are ONLY for mock/demo purposes
  password: string
  fullName: string
  phone: string
  avatar?: string
  company?: string
  role: "Student" | "Manager"
  interests: Array<"Barista" | "Bartender" | "Culinary" | "Management" | "E-Learning" | "Certification">
  enrollments: Enrollment[]
  certificates: Certificate[]
  notifications: Notification[]
  supportTickets: SupportTicket[]
}

export const mockUsers: UserProfile[] = [
  {
    id: "u_barista_001",
    email: "linh.barista@demo.fb-academy.vn",
    password: "barista123",
    fullName: "Nguyễn Thảo Linh",
    phone: "+84 912 345 678",
    avatar: "/placeholder.svg",
    company: "Luminate Cafe",
    role: "Student",
    interests: ["Barista", "Certification"],
    enrollments: [
      {
        courseId: "barista-l1",
        courseName: "Level 1: Barista Foundations",
        path: "Barista",
        level: 1,
        progressPercent: 100,
        status: "completed",
        startedAt: "2025-05-10T08:00:00.000Z",
        lastActiveAt: "2025-06-02T09:20:00.000Z",
      },
      {
        courseId: "barista-l2",
        courseName: "Level 2: Espresso & Milk Mastery",
        path: "Barista",
        level: 2,
        progressPercent: 68,
        status: "in_progress",
        startedAt: "2025-06-05T07:30:00.000Z",
        lastActiveAt: "2025-08-10T13:12:00.000Z",
      },
    ],
    certificates: [
      {
        id: "cert_barista_l1_001",
        title: "Certificate – Barista Foundations (Level 1)",
        issuedAt: "2025-06-03T10:00:00.000Z",
        credentialUrl: "https://demo.fb-academy.vn/verify/cert_barista_l1_001",
      },
    ],
    notifications: [
      {
        id: "n1",
        type: "reminder",
        message: "Lịch học Barista Level 2 – Buổi thực hành Latte Art ngày 13/08",
        createdAt: "2025-08-10T06:00:00.000Z",
        read: false,
      },
      {
        id: "n2",
        type: "certificate",
        message: "Chúc mừng bạn đã hoàn thành Level 1: Barista Foundations!",
        createdAt: "2025-06-03T10:05:00.000Z",
        read: true,
      },
    ],
    supportTickets: [
      {
        id: "t101",
        subject: "Xin cấp lại chứng chỉ bản điện tử",
        status: "closed",
        createdAt: "2025-06-04T09:00:00.000Z",
      },
    ],
  },
  {
    id: "u_bartender_002",
    email: "trong.mixology@demo.fb-academy.vn",
    password: "bartender123",
    fullName: "Phạm Quốc Trọng",
    phone: "+84 933 222 888",
    avatar: "/placeholder.svg",
    company: "XO Speakeasy",
    role: "Student",
    interests: ["Bartender", "E-Learning"],
    enrollments: [
      {
        courseId: "bartender-classic",
        courseName: "Classic Cocktails Essentials",
        path: "Bartender",
        level: 1,
        progressPercent: 45,
        status: "in_progress",
        startedAt: "2025-07-02T08:30:00.000Z",
        lastActiveAt: "2025-08-08T15:40:00.000Z",
      },
    ],
    certificates: [],
    notifications: [
      {
        id: "n3",
        type: "reminder",
        message: "Nộp bài thực hành: Kỹ thuật shake & strain",
        createdAt: "2025-08-07T09:00:00.000Z",
        read: false,
      },
    ],
    supportTickets: [],
  },
  {
    id: "u_culinary_003",
    email: "anh.chef@demo.fb-academy.vn",
    password: "culinary123",
    fullName: "Trần Gia Anh",
    phone: "+84 988 556 778",
    avatar: "/placeholder.svg",
    company: "Lotus Bistro",
    role: "Student",
    interests: ["Culinary", "Certification"],
    enrollments: [
      {
        courseId: "culinary-knife",
        courseName: "Knife Skills & Kitchen Safety",
        path: "Culinary",
        level: 1,
        progressPercent: 100,
        status: "completed",
        startedAt: "2025-05-18T08:00:00.000Z",
        lastActiveAt: "2025-06-01T10:00:00.000Z",
      },
      {
        courseId: "culinary-food-safety",
        courseName: "Food Safety & Hygiene (HACCP)",
        path: "Culinary",
        level: 2,
        progressPercent: 22,
        status: "in_progress",
        startedAt: "2025-07-22T07:00:00.000Z",
        lastActiveAt: "2025-08-09T16:20:00.000Z",
      },
    ],
    certificates: [
      {
        id: "cert_culinary_knife_003",
        title: "Certificate – Knife Skills & Kitchen Safety",
        issuedAt: "2025-06-02T08:30:00.000Z",
      },
    ],
    notifications: [],
    supportTickets: [
      {
        id: "t202",
        subject: "Cần xem lại bài quiz lần 2",
        status: "pending",
        createdAt: "2025-08-05T11:40:00.000Z",
      },
    ],
  },
  {
    id: "u_manager_004",
    email: "minh.manager@demo.fb-academy.vn",
    password: "manager123",
    fullName: "Lê Minh Khang",
    phone: "+84 936 666 999",
    avatar: "/placeholder.svg",
    company: "Saffron Dining Group",
    role: "Manager",
    interests: ["Management", "E-Learning"],
    enrollments: [
      {
        courseId: "mgmt-leadership",
        courseName: "Service Leadership & Coaching",
        path: "Management",
        level: 3,
        progressPercent: 100,
        status: "completed",
        startedAt: "2025-04-12T08:30:00.000Z",
        lastActiveAt: "2025-05-05T09:00:00.000Z",
      },
      {
        courseId: "mgmt-scheduling",
        courseName: "Staff Scheduling & Labor Cost",
        path: "Management",
        level: 3,
        progressPercent: 12,
        status: "in_progress",
        startedAt: "2025-08-01T09:00:00.000Z",
        lastActiveAt: "2025-08-10T14:15:00.000Z",
      },
    ],
    certificates: [
      {
        id: "cert_mgmt_leadership_004",
        title: "Certificate – Service Leadership & Coaching",
        issuedAt: "2025-05-06T07:20:00.000Z",
      },
    ],
    notifications: [
      {
        id: "n4",
        type: "message",
        message: "Tư vấn chương trình đào tạo theo nhóm doanh nghiệp đã được ghi nhận",
        createdAt: "2025-08-09T10:00:00.000Z",
        read: true,
      },
    ],
    supportTickets: [],
  },
]

export function authenticateMockUser(
  email: string,
  password: string
): UserProfile | null {
  const u = mockUsers.find(
    (m) => m.email.toLowerCase() === email.toLowerCase() && m.password === password
  )
  return u ?? null
}

export async function authenticateMockUserAsync(
  email: string,
  password: string
): Promise<UserProfile | null> {
  // Simulate a short network delay
  await new Promise((r) => setTimeout(r, 450))
  return authenticateMockUser(email, password)
}

export function getUserById(userId: string): UserProfile | null {
  return mockUsers.find((m) => m.id === userId) ?? null
}

export function getUserDashboardData(userId: string) {
  const user = getUserById(userId)
  if (!user) return null
  const ongoing = user.enrollments.filter((e) => e.status !== "completed")
  const completed = user.enrollments.filter((e) => e.status === "completed")
  return {
    user,
    stats: {
      totalEnrollments: user.enrollments.length,
      ongoingCount: ongoing.length,
      completedCount: completed.length,
      certificatesCount: user.certificates.length,
    },
    ongoing,
    completed,
    certificates: user.certificates,
    notifications: user.notifications,
  }
}

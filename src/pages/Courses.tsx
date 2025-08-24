import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, Target, Filter, BookOpen } from "lucide-react";
import { LazyImage } from "@/components/LazyImage";
import baristaCourses from "@/assets/barista-courses.jpg";
import bartenderCourses from "@/assets/bartender-courses.jpg";
import culinaryCourses from "@/assets/culinary-courses.jpg";
import managementCourses from "@/assets/management-courses.jpg";
const Courses = () => {
  const courseCategories = [{
    id: "beverages",
    title: "☕ ĐỒ UỐNG KHÔNG CỒN",
    image: baristaCourses,
    courses: [{
      name: "Barista Basic",
      content: "Espresso, Latte, Art cơ bản",
      duration: "5 buổi (15h)",
      price: "3.500.000",
      outcome: "Pha chế tại quán nhỏ – mô hình cà phê",
      level: "Basic"
    }, {
      name: "Barista Pro",
      content: "Máy xay – calibration – art nâng cao",
      duration: "7 buổi (21h)",
      price: "5.200.000",
      outcome: "Làm việc tại chuỗi lớn / setup menu",
      level: "Pro"
    }, {
      name: "Tea & Milk Tea",
      content: "Trà trái cây, trân châu, topping",
      duration: "4 buổi (12h)",
      price: "2.800.000",
      outcome: "Mở quán trà sữa / menu mở rộng",
      level: "Basic"
    }, {
      name: "Cold Brew & Hand Brew",
      content: "Pour over, V60, Cold drip, Nitro",
      duration: "3 buổi",
      price: "2.400.000",
      outcome: "Chuyên sâu mô hình Specialty",
      level: "Advanced"
    }]
  }, {
    id: "bartending",
    title: "🍸 ĐỒ UỐNG CÓ CỒN",
    image: bartenderCourses,
    courses: [{
      name: "Bartender Basic",
      content: "Cocktail cơ bản, kỹ thuật lắc, rót",
      duration: "5 buổi",
      price: "3.800.000",
      outcome: "Làm việc tại quầy bar phổ thông",
      level: "Basic"
    }, {
      name: "Bartender Pro",
      content: "Classic & Signature – Mixology nâng cao",
      duration: "8 buổi",
      price: "6.500.000",
      outcome: "Bar cao cấp / Lounge / Hotel",
      level: "Pro"
    }, {
      name: "Rượu mạnh & chưng cất",
      content: "Whisky – Gin – Cognac – kỹ thuật nếm",
      duration: "4 buổi",
      price: "4.200.000",
      outcome: "Kiến thức phục vụ – upsell rượu",
      level: "Advanced"
    }, {
      name: "Flair & Show Bartending",
      content: "Tung hứng – biểu diễn cocktail",
      duration: "6 buổi",
      price: "5.000.000",
      outcome: "Trình diễn tại sự kiện / thu hút",
      level: "Master"
    }]
  }, {
    id: "culinary",
    title: "🍽 ẨM THỰC Á – ÂU – FUSION",
    image: culinaryCourses,
    courses: [{
      name: "Bếp Á cơ bản",
      content: "Xào – kho – canh – lẩu – gia vị nền",
      duration: "10 buổi",
      price: "6.000.000",
      outcome: "Mở quán ăn, cơm văn phòng",
      level: "Basic"
    }, {
      name: "Bếp Âu cơ bản",
      content: "Sốt nền – pasta – soup – thịt nướng",
      duration: "10 buổi",
      price: "6.800.000",
      outcome: "Cafe – nhà hàng phong cách Âu",
      level: "Basic"
    }, {
      name: "Fusion Kitchen",
      content: "Kết hợp Á – Âu – Local modern",
      duration: "8 buổi",
      price: "7.000.000",
      outcome: "Bistro, Cafe sáng tạo, Dịch vụ cao cấp",
      level: "Advanced"
    }]
  }, {
    id: "management",
    title: "🏪 SETUP QUÁN – QUẢN LÝ VẬN HÀNH",
    image: managementCourses,
    courses: [{
      name: "Mở quán 101",
      content: "Lên concept – mô hình – tính vốn – chọn mặt bằng",
      duration: "6 buổi",
      price: "4.800.000",
      outcome: "Khởi nghiệp quán nhỏ, quán cafe",
      level: "Basic"
    }, {
      name: "Setup vận hành",
      content: "Lập quy trình, thiết kế menu, layout bếp, tuyển dụng",
      duration: "8 buổi",
      price: "6.500.000",
      outcome: "Setup cửa hàng chuẩn SOP",
      level: "Pro"
    }, {
      name: "Quản lý F&B",
      content: "Quản lý chi phí, KPI, nhân sự, checklist",
      duration: "10 buổi",
      price: "8.200.000",
      outcome: "Quản lý cửa hàng / quán / chuỗi",
      level: "Master"
    }]
  }, {
    id: "enterprise",
    title: "🏢 QUẢN LÝ DOANH NGHIỆP – NHƯỢNG QUYỀN",
    image: "/src/assets/franchise-training.jpg",
    courses: [{
      name: "CEO F&B",
      content: "Xây dựng hệ thống – quản trị công ty F&B",
      duration: "12 buổi",
      price: "15.000.000",
      outcome: "Chủ doanh nghiệp / CEO ngành F&B",
      level: "Master"
    }, {
      name: "Gọi vốn & Franchise",
      content: "Lập hồ sơ – gọi vốn – setup nhượng quyền",
      duration: "8 buổi",
      price: "9.800.000",
      outcome: "Chuỗi startup – nhà đầu tư ngành F&B",
      level: "Advanced"
    }, {
      name: "Tư vấn mô hình",
      content: "1:1 chuyên gia – kiểm toán mô hình thực tế",
      duration: "Theo giờ",
      price: "1.000.000 - 3.000.000/giờ",
      outcome: "Doanh nghiệp đã hoạt động muốn tối ưu",
      level: "Custom"
    }]
  }];
  const learningPaths = [{
    goal: "👉 Học nghề đi làm",
    path: "Barista Basic → Barista Pro → Quản lý F&B"
  }, {
    goal: "👉 Mở quán nhỏ",
    path: "Mở quán 101 → Barista / Trà sữa → Setup vận hành"
  }, {
    goal: "👉 Làm tại chuỗi lớn",
    path: "Bartender Pro / Bếp Âu → Quản lý → Leadership"
  }, {
    goal: "👉 Làm trainer / mở trung tâm",
    path: "Master chuyên ngành → Coaching → Franchise"
  }, {
    goal: "👉 Đầu tư chuỗi",
    path: "CEO F&B → Gọi vốn → Nhượng quyền – nhân bản"
  }];
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Basic":
        return "bg-green-100 text-green-800 border-green-200";
      case "Pro":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Advanced":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Master":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Custom":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };
  const slugify = (s: string) => s.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
  return <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4 text-brand-cyan border-brand-cyan/30 text-sm px-3 py-1">
              📘 Chuyên Ngành Đào Tạo
            </Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent leading-relaxed">
              Khóa Học F&B Chuyên Nghiệp
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Chuẩn hóa nội dung theo tiêu chuẩn đào tạo ngành F&B toàn diện từ căn bản đến nâng cao, 
              phù hợp với cá nhân, đội nhóm và doanh nghiệp
            </p>
          </div>

          {/* Goals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
            <Card className="p-4 md:p-6 text-center bg-card/50 backdrop-blur-sm">
              <Target className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-3 text-brand-cyan" />
              <h3 className="font-semibold mb-2 text-sm md:text-base">Phân loại rõ ràng</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Chuyên ngành – cấp độ – mục tiêu học</p>
            </Card>
            <Card className="p-4 md:p-6 text-center bg-card/50 backdrop-blur-sm">
              <BookOpen className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-3 text-brand-cyan" />
              <h3 className="font-semibold mb-2 text-sm md:text-base">Lộ trình phù hợp</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Nghề – thăng tiến – mở quán – quản lý chuỗi</p>
            </Card>
            <Card className="p-4 md:p-6 text-center bg-card/50 backdrop-blur-sm">
              <Users className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-3 text-brand-cyan" />
              <h3 className="font-semibold mb-2 text-sm md:text-base">Trải nghiệm tối ưu</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Online/offline & e-learning</p>
            </Card>
            <Card className="p-4 md:p-6 text-center bg-card/50 backdrop-blur-sm">
              <Filter className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-3 text-brand-cyan" />
              <h3 className="font-semibold mb-2 text-sm md:text-base">Chuẩn quốc tế</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Liên kết cấp chứng chỉ toàn cầu</p>
            </Card>
          </div>

          {/* Course Categories */}
          <div className="space-y-12 md:space-y-16">
            {courseCategories.map(category => <div key={category.id} className="space-y-6 md:space-y-8">
                <div className="text-center">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 leading-relaxed text-brand-navy">{category.title}</h2>
                  <LazyImage src={category.image} alt={category.title} className="w-full max-w-4xl mx-auto h-48 md:h-[300px] object-cover rounded-xl shadow-elevated mb-6 md:mb-8" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {category.courses.map((course, index) => <Card key={index} className="p-4 md:p-6 hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm border-0 shadow-md">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                        <h3 className="text-lg md:text-xl font-bold text-primary">{course.name}</h3>
                        <Badge className={`${getLevelColor(course.level)} border self-start`}>
                          {course.level}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 text-sm md:text-base leading-relaxed">{course.content}</p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                          <span className="text-sm md:text-base">{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 text-center text-brand-cyan flex-shrink-0">💰</span>
                          <span className="text-sm md:text-base font-semibold text-primary">{course.price} VNĐ</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Target className="w-4 h-4 text-brand-cyan mt-0.5 flex-shrink-0" />
                          <span className="text-sm md:text-base leading-relaxed">{course.outcome}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button className="flex-1 bg-gradient-accent hover:shadow-lg transition-all duration-300" onClick={() => {
                    const ev = new CustomEvent("open-quick-signup", {
                      detail: {
                        courseTitle: `${course.name}`
                      }
                    });
                    window.dispatchEvent(ev);
                  }}>
                          Đăng ký ngay
                        </Button>
                        <a href={`/courses/${slugify(course.name)}`} className="sm:w-auto w-full">
                          <Button variant="outline" size="sm" className="w-full sm:w-auto">
                            Chi tiết
                          </Button>
                        </a>
                      </div>
                    </Card>)}
                </div>
              </div>)}
          </div>

          {/* Learning Paths */}
          <div className="mt-16 md:mt-20">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-relaxed text-brand-navy">🧭 Gợi Ý Lộ Trình Phát Triển</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">Chọn lộ trình phù hợp với mục tiêu của bạn</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {learningPaths.map((path, index) => <Card key={index} className="p-4 md:p-6 bg-gradient-card border-brand-cyan/20 hover:shadow-lg transition-all duration-300">
                  <h4 className="font-bold mb-2 text-primary text-base md:text-lg">{path.goal}</h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{path.path}</p>
                </Card>)}
            </div>
          </div>

          {/* Support Features */}
          <div className="mt-16 md:mt-20 bg-gradient-card rounded-xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center leading-relaxed text-brand-navy">🧠 Tính Năng Hỗ Trợ Kèm Theo</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="text-center p-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-cyan rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                  <span className="text-white text-lg md:text-xl">🔍</span>
                </div>
                <h4 className="font-semibold mb-2 text-sm md:text-base">Bộ lọc chọn ngành</h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">Chọn khóa học theo ngành – mục tiêu – ngân sách</p>
              </div>
              <div className="text-center p-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-cyan rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                  <span className="text-white text-lg md:text-xl">🧾</span>
                </div>
                <h4 className="font-semibold mb-2 text-sm md:text-base">Gợi ý lộ trình cá nhân hóa</h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">Học viên nhập mục tiêu – hệ thống gợi ý gói học phù hợp</p>
              </div>
              <div className="text-center p-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-cyan rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                  <span className="text-white text-lg md:text-xl">🧰</span>
                </div>
                <h4 className="font-semibold mb-2 text-sm md:text-base">Bộ tài nguyên đi kèm</h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">Slide, mẫu sổ tay, bài tập, công cụ thực hành</p>
              </div>
              <div className="text-center p-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-cyan rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                  <span className="text-white text-lg md:text-xl">🎯</span>
                </div>
                <h4 className="font-semibold mb-2 text-sm md:text-base">Huy hiệu – chứng chỉ</h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">Badge – giấy chứng nhận – QR xác thực</p>
              </div>
              <div className="text-center p-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-cyan rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                  <span className="text-white text-lg md:text-xl">📦</span>
                </div>
                <h4 className="font-semibold mb-2 text-sm md:text-base">Gói combo</h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">Đăng ký 2+ khóa được giảm 10–20% + quà tặng SOP</p>
              </div>
              <div className="text-center p-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-cyan rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                  <span className="text-white text-lg md:text-xl">💡</span>
                </div>
                <h4 className="font-semibold mb-2 text-sm md:text-base">Tư vấn 1:1</h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">Hỗ trợ chọn lộ trình và định hướng nghề nghiệp</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <Button size="lg" variant="outline">
              Xem tất cả khóa học
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Courses;
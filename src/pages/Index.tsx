import { Suspense, lazy } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Play, 
  Award, 
  Users, 
  BookOpen, 
  Coffee, 
  ChefHat, 
  TrendingUp, 
  Building, 
  Calendar,
  Star,
  ArrowRight,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";
import { courseDetails, makeSlug as makeCourseSlug } from "@/data/courseDetails";
import { LazyImage } from "@/components/LazyImage";
import { LoadingSection } from "@/components/LoadingSection";

import heroBanner from "@/assets/hero-banner.jpg";
import trainingClassroom from "@/assets/training-classroom.jpg";
import mixologyTraining from "@/assets/mixology-training.jpg";
import enterpriseSession from "@/assets/enterprise-session.jpg";
import cocktailTraining from "@/assets/cocktail-training.svg";
import baristaTraining from "@/assets/barista-training.svg";
import culinaryTraining from "@/assets/culinary-training.svg";
import managementTraining from "@/assets/management-training.svg";
import franchiseTraining from "@/assets/franchise-training.svg";

const Index = () => {
  const specializations = [
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Đào tạo pha chế - cocktail",
      description: "Bartender, Mixology, Flair, thi đấu quốc tế",
      image: cocktailTraining
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Pha chế không cồn - barista",
      description: "Cà phê, trà, nước ép, cold brew",
      image: baristaTraining
    },
    {
      icon: <ChefHat className="h-8 w-8" />,
      title: "Ẩm thực Á - Âu",
      description: "Bếp nóng, bếp lạnh, chuyên đề theo phong cách",
      image: culinaryTraining
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Quản trị - vận hành",
      description: "Setup, quản lý, SOP, KPI",
      image: managementTraining
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Chuỗi & nhượng quyền",
      description: "Mô hình kinh doanh, nhân bản chuỗi, franchise",
      image: franchiseTraining
    }
  ];

  const popularCourses = [
    {
      name: "Barista Basic",
      target: "Người mới bắt đầu",
      price: "5.900.000",
      duration: "5 buổi"
    },
    {
      name: "Bartender Pro",
      target: "Chuyên nghiệp + thi đấu",
      price: "8.900.000",
      duration: "7 buổi"
    },
    {
      name: "Quản lý F&B",
      target: "Chủ quán - quản lý ca",
      price: "9.500.000",
      duration: "6 buổi"
    },
    {
      name: "Setup mở quán",
      target: "Người sắp mở mô hình F&B",
      price: "14.800.000",
      duration: "10 buổi"
    }
  ];

  const upcomingCourses = [
    {
      name: "Barista Basic",
      date: "05/08",
      format: "Offline - HN",
      status: "Còn chỗ",
      statusColor: "bg-green-500"
    },
    {
      name: "Quản lý F&B",
      date: "10/08",
      format: "Online",
      status: "Gần hết chỗ",
      statusColor: "bg-yellow-500"
    },
    {
      name: "Cocktail Pro",
      date: "15/08",
      format: "Offline - SG",
      status: "Đã đầy",
      statusColor: "bg-red-500"
    }
  ];

  const instructors = [
    {
      name: "Mr. Hải Lê",
      specialty: "CEO chuỗi cafe",
      experience: "15 năm vận hành",
      avatar: "/placeholder.svg"
    },
    {
      name: "Ms. Hồng Nguyễn",
      specialty: "Chuyên gia ẩm thực",
      experience: "Le Cordon Bleu",
      avatar: "/placeholder.svg"
    },
    {
      name: "Mr. Thành Khoa",
      specialty: "Vận hành nhà hàng",
      experience: "Giám đốc chuỗi Âu-Á",
      avatar: "/placeholder.svg"
    },
    {
      name: "Ms. Anna Trần",
      specialty: "Marketing F&B",
      experience: "Diageo Vietnam",
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <LazyImage 
            src={heroBanner}
            alt="F&B Academy Training"
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-navy/90 to-brand-navy/70" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center text-white space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Học viện F&B 
              <span className="block bg-gradient-accent bg-clip-text text-transparent">
                Quốc tế hàng đầu
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Nâng tầm nhân lực – Chuẩn hóa vận hành – Dẫn đầu xu hướng F&B hiện đại
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-4xl mx-auto">
              <Button asChild size="lg" className="bg-gradient-accent text-white shadow-glow hover:scale-105 transition-transform px-6 py-3">
                <Link to="/courses">Khám phá chương trình học</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-blue-600 text-white hover:bg-blue-700 border-blue-600 px-6 py-3">
                <Link to="/about"><Play className="mr-2 h-4 w-4" />Xem giới thiệu học viện</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-blue-600 text-white hover:bg-blue-700 border-blue-600 px-6 py-3">
                <Link to="/trial-1on1">Đăng ký học thử miễn phí</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-sm max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
                <Users className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">12,000+ học viên</span>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
                <Building className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">300+ đối tác F&B</span>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
                <Award className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">Hợp tác 5 quốc gia</span>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
                <BookOpen className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">Chuẩn SCA, HACCP, Diageo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Introduction */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy leading-relaxed">
              Giới thiệu F&B Academy
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              F&B Academy là trung tâm đào tạo quốc tế chuyên sâu về F&B – từ pha chế, ẩm thực, 
              vận hành, đến quản trị và chuyển giao mô hình. Với chuẩn đào tạo quốc tế và đội ngũ 
              chuyên gia giàu kinh nghiệm, chúng tôi cam kết mang đến chương trình học thực chiến, 
              hiệu quả và bền vững.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/about">Tìm hiểu thêm về chúng tôi<ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Training Specializations */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy leading-relaxed">
              Các chuyên ngành đào tạo chủ lực
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Đào tạo chuyên sâu theo từng lĩnh vực với chuẩn quốc tế
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {specializations.map((spec, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                      {spec.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <CardTitle className="text-lg md:text-xl mb-2 group-hover:text-primary transition-colors">{spec.title}</CardTitle>
                      <CardDescription className="text-sm md:text-base">{spec.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <LazyImage 
                    src={spec.image} 
                    alt={spec.title}
                    className="w-full h-44 md:h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300 border-primary/20">
                    <Link to="/courses">Xem chi tiết</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 md:mt-16">
            <Button asChild size="lg" className="bg-gradient-accent text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3">
              <Link to="/courses">Khám phá toàn bộ khóa học</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Learning Path Timeline */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy leading-relaxed">
              Lộ trình học chuẩn quốc tế
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Hành trình phát triển từ cơ bản đến chuyên gia
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary/20 hidden md:block"></div>
              
              {/* Timeline items */}
              <div className="space-y-8 md:space-y-12">
                {[
                  {
                    step: "1",
                    title: "Lựa chọn chuyên ngành phù hợp",
                    description: "Tư vấn và định hướng dựa trên sở thích, năng lực"
                  },
                  {
                    step: "2", 
                    title: "Học lý thuyết – thực hành – case study",
                    description: "Kết hợp lý thuyết với thực hành chuyên sâu"
                  },
                  {
                    step: "3",
                    title: "Kiểm tra – đánh giá – nhận chứng chỉ",
                    description: "Đánh giá năng lực và cấp chứng chỉ quốc tế"
                  },
                  {
                    step: "4",
                    title: "Thực tập / kết nối doanh nghiệp",
                    description: "Ứng dụng thực tiễn tại các đối tác F&B"
                  },
                  {
                    step: "5",
                    title: "Tư vấn mở quán / phát triển sự nghiệp",
                    description: "Hỗ trợ khởi nghiệp và phát triển nghề nghiệp"
                  }
                ].map((item, index) => (
                  <div key={index} className="relative flex flex-col md:flex-row items-center">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 md:w-8 md:h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg z-10">
                      {item.step}
                    </div>
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:ml-auto md:pl-8'} mt-6 md:mt-0`}>
                      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                        <h3 className="font-semibold text-base md:text-lg mb-2 text-brand-navy">{item.title}</h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/learning-paths">Tư vấn lộ trình học</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy leading-relaxed">
              Đội ngũ giảng viên & Mentor hướng dẫn
            </h2>
            <p className="text-lg text-gray-600">
              Những chuyên gia hàng đầu với kinh nghiệm thực tiễn phong phú
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructors.map((instructor, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={instructor.avatar} />
                    <AvatarFallback>{instructor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg mb-2">{instructor.name}</h3>
                  <p className="text-primary font-medium mb-1">{instructor.specialty}</p>
                  <p className="text-sm text-gray-600">{instructor.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link to="/about">Xem hồ sơ giảng viên đầy đủ</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy leading-relaxed">
              Các gói học phổ biến
            </h2>
            <p className="text-lg text-gray-600">
              Chương trình được lựa chọn nhiều nhất
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularCourses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{course.name}</CardTitle>
                  <CardDescription>{course.target}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-2xl font-bold text-primary">
                    {course.price} VND
                  </div>
                  <div className="text-sm text-gray-600">
                    Thời gian: {course.duration}
                  </div>
                  <Button asChild className="w-full">
                    <Link to={courseDetails[makeCourseSlug(course.name)] ? `/courses/${makeCourseSlug(course.name)}` : "/courses"}>Xem chi tiết</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 space-x-4">
            <Button asChild size="lg" className="bg-gradient-accent text-white">
              <Link to="/courses">Xem bảng giá đầy đủ</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">Tư vấn học phí ưu đãi</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold leading-relaxed">
              Dành cho doanh nghiệp
            </h2>
            <p className="text-xl text-gray-200">
              Giải pháp đào tạo và tư vấn toàn diện cho doanh nghiệp F&B
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: <Users className="h-16 w-16" />,
                title: "Đào tạo in-house",
                description: "Theo yêu cầu tại doanh nghiệp"
              },
              {
                icon: <TrendingUp className="h-16 w-16" />,
                title: "Setup quy trình",
                description: "SOP, tiêu chuẩn dịch vụ"
              },
              {
                icon: <Building className="h-16 w-16" />,
                title: "Tư vấn nhượng quyền",
                description: "Tái cấu trúc mô hình"
              },
              {
                icon: <BookOpen className="h-16 w-16" />,
                title: "Dashboard quản lý",
                description: "Theo dõi đào tạo nhân viên"
              }
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className="text-primary flex-shrink-0">{feature.icon}</div>
                <div className="text-left">
                  <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-lg">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-white text-brand-navy hover:bg-gray-100">
              <Link to="/enterprise">Giải pháp dành cho doanh nghiệp</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Courses Schedule */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy leading-relaxed">
              Lịch khai giảng mới nhất
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Đăng ký sớm để đảm bảo chỗ học
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Mobile Cards View */}
            <div className="block md:hidden space-y-4">
              {upcomingCourses.map((course, index) => (
                <Card key={index} className="shadow-md border-0">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-brand-navy text-base">{course.name}</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Ngày khai giảng:</span>
                          <div className="flex items-center gap-2 mt-1">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span className="font-medium">{course.date}</span>
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-500">Hình thức:</span>
                          <p className="font-medium mt-1">{course.format}</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <Badge className={`${course.statusColor} text-white`}>
                          {course.status}
                        </Badge>
                        <Button size="sm" className="bg-gradient-accent text-white">
                          Đăng ký
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-primary to-secondary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Tên khóa</th>
                      <th className="px-6 py-4 text-left font-semibold">Ngày khai giảng</th>
                      <th className="px-6 py-4 text-left font-semibold">Hình thức</th>
                      <th className="px-6 py-4 text-left font-semibold">Trạng thái</th>
                      <th className="px-6 py-4 text-center font-semibold">Đăng ký</th>
                    </tr>
                  </thead>
                  <tbody>
                    {upcomingCourses.map((course, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-5">
                          <div className="font-semibold text-brand-navy text-base">{course.name}</div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span className="font-medium text-gray-700">{course.date}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <span className="font-medium text-gray-700">{course.format}</span>
                        </td>
                        <td className="px-6 py-5">
                          <Badge className={`${course.statusColor} text-white`}>
                            {course.status}
                          </Badge>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <Button size="sm" className="bg-gradient-accent text-white hover:shadow-lg transition-all duration-300">
                            Đăng ký ngay
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/courses">Xem toàn bộ lịch khai giảng</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-white text-center space-y-6">
            <h2 className="text-3xl font-bold leading-relaxed">
              Đăng ký tư vấn / Học thử
            </h2>
            <p className="text-lg opacity-90">
              Nhận tư vấn miễn phí và trải nghiệm học thử trực tiếp
            </p>
            
            <div className="space-y-4 max-w-md mx-auto">
              <Input 
                placeholder="Họ và tên"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Input 
                placeholder="Số điện thoại"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Input 
                placeholder="Email"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Button asChild className="w-full bg-white text-primary hover:bg-gray-100">
                <Link to="/trial-1on1">Đăng ký tư vấn ngay</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-brand-navy text-white hidden">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <Phone className="h-8 w-8 mx-auto text-primary" />
              <h3 className="font-semibold">Hotline</h3>
              <p>0989.000.xxx</p>
            </div>
            <div className="space-y-2">
              <Mail className="h-8 w-8 mx-auto text-primary" />
              <h3 className="font-semibold">Email</h3>
              <p>academyfnb@gmail.com</p>
            </div>
            <div className="space-y-2">
              <MapPin className="h-8 w-8 mx-auto text-primary" />
              <h3 className="font-semibold">Cơ sở</h3>
              <p>35B Nguyễn Bỉnh Khiêm, Phường Hai Bà Trưng, TP Hà Nội</p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Index;

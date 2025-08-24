import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, TrendingUp } from "lucide-react";
import baristaTraining from "@/assets/barista-training.jpg";
import culinaryTraining from "@/assets/culinary-training.jpg";
import bartenderTraining from "@/assets/bartender-training.jpg";

export const FeaturedCourses = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "Barista Chuyên nghiệp - Latte Art Master",
      description: "Học từ cơ bản đến nâng cao về kỹ thuật pha chế cà phê và tạo nghệ thuật latte art đẹp mắt",
      image: baristaTraining,
      level: "Pro",
      duration: "40 giờ",
      students: "1,234",
      rating: 4.9,
      price: "3,500,000 VNĐ",
      originalPrice: "4,200,000 VNĐ",
      category: "Barista",
      trending: true,
      skills: ["Espresso", "Latte Art", "Coffee Cupping", "Customer Service"]
    },
    {
      id: 2,
      title: "Chef Ẩm thực Á - Âu Fusion",
      description: "Khóa học toàn diện về kỹ thuật nấu ăn Á - Âu, từ cơ bản đến món fusion sáng tạo",
      image: culinaryTraining,
      level: "Master",
      duration: "60 giờ",
      students: "856",
      rating: 4.8,
      price: "5,800,000 VNĐ",
      originalPrice: "6,500,000 VNĐ",
      category: "Culinary",
      trending: false,
      skills: ["Knife Skills", "Asian Cuisine", "European Cuisine", "Plating"]
    },
    {
      id: 3,
      title: "Bartender & Mixology Chuyên nghiệp",
      description: "Thành thạo nghệ thuật pha chế cocktail, hiểu biết về rượu và kỹ năng phục vụ bar",
      image: bartenderTraining,
      level: "Pro",
      duration: "45 giờ",
      students: "692",
      rating: 4.7,
      price: "4,200,000 VNĐ",
      originalPrice: "4,800,000 VNĐ",
      category: "Bartending",
      trending: true,
      skills: ["Classic Cocktails", "Flair Bartending", "Wine Knowledge", "Bar Management"]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Basic": return "bg-green-100 text-green-800";
      case "Pro": return "bg-blue-100 text-blue-800";
      case "Master": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-relaxed">
            Khóa học nổi bật
            <span className="block text-primary">được yêu thích nhất</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Được AI đề xuất dựa trên xu hướng học tập và đánh giá cao từ học viên
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <Card key={course.id} className="group overflow-hidden border-0 shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-105">
              <div className="relative">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className={getLevelColor(course.level)}>
                    {course.level}
                  </Badge>
                  {course.trending && (
                    <Badge className="bg-red-100 text-red-800">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </Badge>
                  )}
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <Badge variant="outline" className="mb-2">
                    {course.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-2">
                  {course.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students} học viên
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {course.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {course.skills.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{course.skills.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">{course.price}</span>
                      <span className="text-sm text-muted-foreground line-through">
                        {course.originalPrice}
                      </span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-accent hover:scale-105 transition-transform" onClick={() => {
                    const ev = new CustomEvent("open-quick-signup", { detail: { courseTitle: course.title } });
                    window.dispatchEvent(ev);
                  }}>
                    Đăng ký ngay
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
            Xem tất cả khóa học
          </Button>
        </div>
      </div>
    </section>
  );
};
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import elearningPlatform from "@/assets/elearning-platform.jpg";
import aiLearningAssistant from "@/assets/ai-learning-assistant.jpg";
import digitalLibrary from "@/assets/digital-library.jpg";

const ELearning = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* E-Learning Platform Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="outline" className="mb-4 text-xs md:text-sm text-brand-cyan border-brand-cyan/30">
              💻 Nền Tảng Học Tập
            </Badge>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-accent bg-clip-text text-transparent leading-tight">
              E-Learning – Hỗ Trợ Đa Chiều
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Chuyển hóa tri thức F&B từ truyền thống sang số hóa, phù hợp với mọi học viên ở mọi cấp độ và vị trí địa lý
            </p>
          </div>

          {/* Main Platform Features */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 leading-relaxed">🎯 Mục Tiêu Triển Khai</h2>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-cyan rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm md:text-base text-muted-foreground">Học mọi lúc – mọi nơi (on-demand learning)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-cyan rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm md:text-base text-muted-foreground">Tương tác trực tiếp với giảng viên và học viên khác</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-cyan rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm md:text-base text-muted-foreground">Tích hợp công cụ đa phương tiện, AI và quản lý học tập cá nhân hóa</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={elearningPlatform} 
                alt="E-Learning Platform Interface"
                className="rounded-lg shadow-elevated w-full h-[250px] md:h-[300px] object-cover"
              />
            </div>
          </div>

          {/* E-Learning Components */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <Card className="p-4 md:p-6 bg-card/50 backdrop-blur-sm border-brand-cyan/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <div className="text-center mb-3 md:mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-xl md:text-2xl">🖥️</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Giao Diện Khóa Học</h3>
              </div>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <li>• Video bài giảng HD với phụ đề</li>
                <li>• Tài liệu đính kèm: PDF, SOP, biểu mẫu</li>
                <li>• Quiz kiểm tra nhanh sau mỗi chương</li>
                <li>• Chú thích thời gian cho video</li>
                <li>• Bài tập thực hành với feedback</li>
                <li>• Audio mô phỏng tình huống thực tế</li>
              </ul>
            </Card>

            <Card className="p-4 md:p-6 bg-card/50 backdrop-blur-sm border-brand-cyan/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <div className="text-center mb-3 md:mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-xl md:text-2xl">📱</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Đa Nền Tảng</h3>
              </div>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <li>• Laptop/Desktop: Giao diện đầy đủ</li>
                <li>• Mobile App: Học như podcast</li>
                <li>• Tablet: Tương tác sách điện tử</li>
                <li>• TV thông minh: Học theo nhóm</li>
                <li>• Đồng bộ tiến độ mọi thiết bị</li>
                <li>• Offline mode cho di động</li>
              </ul>
            </Card>

            <Card className="p-4 md:p-6 bg-card/50 backdrop-blur-sm border-brand-cyan/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="text-center mb-3 md:mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-xl md:text-2xl">🤖</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Tính Năng AI</h3>
              </div>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <li>• AI Mentor: Gợi ý khóa học</li>
                <li>• AI Đánh giá video thực hành</li>
                <li>• AI Giao tiếp mô phỏng khách</li>
                <li>• AI Luyện tập Spaced Repetition</li>
                <li>• Cá nhân hóa lộ trình học</li>
                <li>• Phân tích tiến độ thông minh</li>
              </ul>
            </Card>
          </div>

          {/* AI Learning Assistant */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            <div className="relative order-2 md:order-1">
              <img 
                src={aiLearningAssistant} 
                alt="AI Learning Assistant"
                className="rounded-lg shadow-elevated w-full h-[250px] md:h-[350px] object-cover"
              />
            </div>
            <div className="space-y-4 md:space-y-6 order-1 md:order-2">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 leading-relaxed">🧑‍🏫 Lộ Trình Học & Theo Dõi Tiến Độ</h2>
              <div className="space-y-3 md:space-y-4">
                <Card className="p-3 md:p-4 bg-muted/20 hover:shadow-md transition-all duration-300">
                  <h4 className="font-semibold mb-2 text-sm md:text-base">📊 Biết mình đang học đến đâu</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">Timeline khóa học + biểu đồ tiến độ cá nhân</p>
                </Card>
                <Card className="p-3 md:p-4 bg-muted/20 hover:shadow-md transition-all duration-300">
                  <h4 className="font-semibold mb-2 text-sm md:text-base">🎯 Theo dõi năng lực</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">Lộ trình học theo 3 cấp độ: Basic – Pro – Master</p>
                </Card>
                <Card className="p-3 md:p-4 bg-muted/20 hover:shadow-md transition-all duration-300">
                  <h4 className="font-semibold mb-2 text-sm md:text-base">🏆 Động lực học tập</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">Gamification: điểm, huy hiệu, bảng xếp hạng</p>
                </Card>
                <Card className="p-3 md:p-4 bg-muted/20 hover:shadow-md transition-all duration-300">
                  <h4 className="font-semibold mb-2 text-sm md:text-base">📲 Hỗ trợ học tập</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">Nhắc học qua Email, Telegram Bot, App Notification</p>
                </Card>
              </div>
            </div>
          </div>

          {/* Digital Library */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 leading-relaxed">📚 Thư Viện Điện Tử & Nguồn Tài Liệu</h2>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <Card className="p-3 md:p-4 text-center bg-card/30 hover:shadow-md transition-all duration-300">
                  <div className="text-xl md:text-2xl mb-2">📖</div>
                  <h4 className="font-semibold text-xs md:text-sm">Sách Hướng Dẫn</h4>
                  <p className="text-xs text-muted-foreground">PDF chuyên đề F&B</p>
                </Card>
                <Card className="p-3 md:p-4 text-center bg-card/30 hover:shadow-md transition-all duration-300">
                  <div className="text-xl md:text-2xl mb-2">📋</div>
                  <h4 className="font-semibold text-xs md:text-sm">SOP Mẫu</h4>
                  <p className="text-xs text-muted-foreground">Excel, Word, Template</p>
                </Card>
                <Card className="p-3 md:p-4 text-center bg-card/30 hover:shadow-md transition-all duration-300">
                  <div className="text-xl md:text-2xl mb-2">📝</div>
                  <h4 className="font-semibold text-xs md:text-sm">Bài Kiểm Tra</h4>
                  <p className="text-xs text-muted-foreground">Trắc nghiệm & tình huống</p>
                </Card>
                <Card className="p-3 md:p-4 text-center bg-card/30 hover:shadow-md transition-all duration-300">
                  <div className="text-xl md:text-2xl mb-2">🎥</div>
                  <h4 className="font-semibold text-xs md:text-sm">Video Thực Hành</h4>
                  <p className="text-xs text-muted-foreground">Latte Art, Bar Setup</p>
                </Card>
              </div>
            </div>
            <div className="relative">
              <img 
                src={digitalLibrary} 
                alt="Digital Library Interface"
                className="rounded-lg shadow-elevated w-full h-[250px] md:h-[350px] object-cover"
              />
            </div>
          </div>

          {/* Community Features */}
          <div className="bg-gradient-card rounded-lg p-6 md:p-8 mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center leading-relaxed">🌐 Học Cùng Cộng Đồng – Tương Tác Đa Kênh</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-cyan rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-lg md:text-xl">💬</span>
                </div>
                <h4 className="font-semibold mb-2 text-sm md:text-base">Group Chat</h4>
                <p className="text-xs md:text-sm text-muted-foreground">Zalo/Telegram hỗ trợ nhanh</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-cyan rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-lg md:text-xl">🎮</span>
                </div>
                <h4 className="font-semibold mb-2 text-sm md:text-base">Discord Server</h4>
                <p className="text-xs md:text-sm text-muted-foreground">Chia theo chuyên ngành</p>
              </div>
              <div className="text-center sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-cyan rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-lg md:text-xl">📺</span>
                </div>
                <h4 className="font-semibold mb-2 text-sm md:text-base">Livestream</h4>
                <p className="text-xs md:text-sm text-muted-foreground">Q&A với chuyên gia</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 leading-relaxed">✅ Lợi Ích Nền Tảng E-Learning</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
              <Badge variant="secondary" className="p-2 md:p-3 justify-center text-xs md:text-sm">
                ✔️ Học linh hoạt theo thời gian cá nhân
              </Badge>
              <Badge variant="secondary" className="p-2 md:p-3 justify-center text-xs md:text-sm">
                ✔️ Giảm chi phí đào tạo – dễ nhân rộng
              </Badge>
              <Badge variant="secondary" className="p-2 md:p-3 justify-center text-xs md:text-sm">
                ✔️ Tăng khả năng gắn bó học viên
              </Badge>
              <Badge variant="secondary" className="p-2 md:p-3 justify-center text-xs md:text-sm">
                ✔️ Đo lường chính xác hiệu suất
              </Badge>
              <Badge variant="secondary" className="p-2 md:p-3 justify-center text-xs md:text-sm">
                ✔️ Tạo nguồn nhân lực chuẩn hóa
              </Badge>
              <Badge variant="secondary" className="p-2 md:p-3 justify-center text-xs md:text-sm">
                ✔️ Dễ tuyển dụng & thăng tiến
              </Badge>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-card rounded-lg p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 leading-relaxed">Sẵn sàng trải nghiệm E-Learning?</h2>
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 px-4">
                Tham gia nền tảng học tập hiện đại nhất cho ngành F&B
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Button size="lg" className="bg-gradient-accent text-sm md:text-base">
                  Đăng ký học thử miễn phí
                </Button>
                <Button size="lg" variant="outline" className="text-sm md:text-base">
                  Xem demo nền tảng
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ELearning;
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LoginModal } from "@/components/LoginModal";
import { ConsultationModal } from "@/components/ConsultationModal";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);

  const courseCategoriesData = [
    {
      title: "Đào tạo kỹ năng nghề",
      items: [
        "Barista - Trà - Đồ uống",
        "Bartender - Cocktail - Mixology", 
        "Ẩm thực Bếp Á - Âu - Fusion",
        "Kỹ năng bếp & vệ sinh HACCP"
      ]
    },
    {
      title: "Vận hành - Quản lý mô hình",
      items: [
        "Setup cửa hàng - quy trình SOP",
        "Tuyển dụng - đào tạo nhân sự",
        "Quản lý chi phí - dòng tiền",
        "Báo cáo - đánh giá hiệu suất"
      ]
    }
  ];

  return (<>
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <div className="mr-6 flex items-center">
          <img 
            src="/logo.svg" 
            alt="F&B Academy" 
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link 
                  to="/" 
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  Trang chủ
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link 
                  to="/courses" 
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  Khóa học
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link 
                  to="/learning-paths" 
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  Lộ trình
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link 
                  to="/about" 
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  Giới thiệu
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link 
                  to="/services" 
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  Dịch vụ
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link 
                  to="/enterprise" 
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  Doanh nghiệp
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link 
                  to="/e-learning" 
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  E-Learning
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link 
                  to="/certification" 
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  Chứng chỉ
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={() => setLoginModalOpen(true)}>
              Đăng nhập
            </Button>
            <Button size="sm" className="bg-gradient-accent" onClick={() => setConsultationModalOpen(true)}>
              Tư vấn miễn phí
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <Link to="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Trang chủ
                </Link>
                <Link to="/courses" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Khóa học
                </Link>
                <Link to="/learning-paths" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Lộ trình
                </Link>
                <Link to="/about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Giới thiệu
                </Link>
                <Link to="/services" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Dịch vụ
                </Link>
                <Link to="/enterprise" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Doanh nghiệp
                </Link>
                <Link to="/e-learning" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  E-Learning
                </Link>
                <Link to="/certification" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Chứng chỉ
                </Link>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="outline" onClick={() => { setLoginModalOpen(true); setIsOpen(false); }}>Đăng nhập</Button>
                  <Button className="bg-gradient-accent" onClick={() => { setConsultationModalOpen(true); setIsOpen(false); }}>Tư vấn miễn phí</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
    <div className="h-16" aria-hidden />
    
    {/* Modals */}
    <LoginModal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} />
    <ConsultationModal isOpen={consultationModalOpen} onClose={() => setConsultationModalOpen(false)} />
  </>
  );
};
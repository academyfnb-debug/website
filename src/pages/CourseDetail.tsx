import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { courseDetails } from "@/data/courseDetails";
import { Navigation } from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useQuickSignup } from "@/context/QuickSignupContext";


const CourseDetail: React.FC = () => {
  const { slug = "" } = useParams();
  const detail = courseDetails[slug];
  const { open } = useQuickSignup();
  useEffect(() => {
    if (detail) {
      document.title = `${detail.title} | Khóa học F&B chuyên nghiệp`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', detail.summary);
    }
  }, [detail]);

  if (!detail) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Không tìm thấy khóa học</h1>
          <Button asChild variant="outline"><Link to="/courses">Quay lại danh sách</Link></Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="relative">
        {detail.heroImage && (
          <div className="h-64 w-full overflow-hidden">
            <img src={detail.heroImage} alt={detail.title} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="container px-4 py-8">
          <div className="flex items-center gap-2 mb-3">
            {detail.level && <Badge variant="outline">{detail.level}</Badge>}
            <Badge variant="secondary">{detail.category}</Badge>
          </div>
          <h1 className="text-3xl font-bold mb-3">{detail.title}</h1>
          <p className="text-muted-foreground max-w-3xl">{detail.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="outline"><Link to="/courses">Tất cả khóa học</Link></Button>
          </div>
        </div>
      </section>

      <section className="container px-4 py-8 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2 leading-relaxed">Bạn nhận được gì?</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {detail.whatYouGet.map((i) => (<li key={i}>{i}</li>))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 leading-relaxed">Giáo trình</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {detail.curriculum.map((i) => (<li key={i}>{i}</li>))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 leading-relaxed">Phù hợp với</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {detail.forWho.map((i) => (<li key={i}>{i}</li>))}
            </ul>
          </div>
        </div>
        <aside className="space-y-4">
          {detail.price && (
            <div className="p-4 rounded-lg border bg-card">
              <div className="text-2xl font-bold">{detail.price}</div>
              {detail.duration && <div className="text-sm text-muted-foreground">Thời lượng: {detail.duration}</div>}
              <div className="pt-4">
                <Button id="quick-signup-btn" className="w-full bg-gradient-accent" onClick={() => open({ courseTitle: detail.title })}>Đăng ký ngay</Button>
              </div>
            </div>
          )}
          <div className="p-4 rounded-lg border bg-card">
            <h3 className="font-semibold mb-2">Quyền lợi</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {detail.perks.map((i) => (<li key={i}>{i}</li>))}
            </ul>
          </div>
          {detail.faqs.length > 0 && (
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">FAQ</h3>
              <ul className="space-y-3 text-sm">
                {detail.faqs.map((f) => (
                  <li key={f.q}>
                    <div className="font-medium">{f.q}</div>
                    <div className="text-muted-foreground">{f.a}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </section>
    </div>
  );
};

export default CourseDetail;

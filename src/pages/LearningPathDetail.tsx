import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useQuickSignup } from "@/context/QuickSignupContext";
import { learningPathDetails } from "@/data/learningPathDetails";

const LearningPathDetail: React.FC = () => {
  const { slug = "" } = useParams();
  const detail = learningPathDetails[slug];
  const { open } = useQuickSignup();

  useEffect(() => {
    if (detail) {
      document.title = `${detail.title} | Lộ trình F&B chuyên sâu`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", detail.summary);
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", window.location.href);
    }
  }, [detail]);

  if (!detail) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Không tìm thấy lộ trình</h1>
          <Button asChild variant="outline"><Link to="/learning-paths">Quay lại Lộ trình</Link></Button>
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
            <Badge variant="outline">{detail.level}</Badge>
            <Badge variant="secondary">Lộ trình</Badge>
          </div>
          <h1 className="text-3xl font-bold mb-3">{detail.title}</h1>
          <p className="text-muted-foreground max-w-3xl">{detail.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="outline"><Link to="/learning-paths">Tất cả lộ trình</Link></Button>
            <Button variant="neon" onClick={() => open({ courseTitle: detail.title })}>Bắt đầu học</Button>
          </div>
        </div>
      </section>

      <section className="container px-4 py-10 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-2 leading-relaxed">Bạn nhận được gì?</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {detail.highlights.map((i) => (<li key={i}>{i}</li>))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 leading-relaxed">Lộ trình môn học</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {detail.modules.map((i) => (<li key={i}>{i}</li>))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 leading-relaxed">Kết quả đầu ra</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {detail.outcomes.map((i) => (<li key={i}>{i}</li>))}
            </ul>
          </div>
        </div>
        <aside className="space-y-4">
          <div className="p-4 rounded-lg border bg-card">
            <h3 className="font-semibold mb-2">Phù hợp với</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {detail.forWho.map((i) => (<li key={i}>{i}</li>))}
            </ul>
          </div>
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

export default LearningPathDetail;

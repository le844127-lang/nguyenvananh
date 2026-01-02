import { Rocket, Star, ArrowUpRight } from "lucide-react";

const FutureSection = () => {
  const futureGoals = [
    "Nâng cao kỹ năng phân tích dữ liệu với Excel và các công cụ BI",
    "Học thêm về thiết kế đồ họa và tạo nội dung sáng tạo",
    "Phát triển kỹ năng lập trình cơ bản để tự động hóa công việc",
    "Tìm hiểu sâu hơn về các ứng dụng AI trong nghiên cứu kinh tế",
  ];

  return (
    <section id="future" className="py-20 md:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-sm font-body font-medium tracking-widest uppercase text-primary mb-4">
            Định hướng
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Hướng phát triển tiếp theo
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="card-gradient rounded-2xl p-8 md:p-10 shadow-card border border-border/50 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  <Rocket className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Các kỹ năng mong muốn phát triển
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    Định hướng học tập trong tương lai
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {futureGoals.map((goal, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-background/50 hover:bg-background transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all">
                      <Star className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <p className="font-body text-foreground/80 pt-1">{goal}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border/50">
                <p className="font-body text-muted-foreground italic text-center">
                  "Portfolio này phản ánh quá trình học tập, rèn luyện năng lực công nghệ số và sự phát triển cá nhân của tôi trong suốt học phần."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;

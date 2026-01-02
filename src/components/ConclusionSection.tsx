import { Heart, Lightbulb, AlertTriangle, CheckCircle2 } from "lucide-react";

const ConclusionSection = () => {
  return (
    <section id="conclusion" className="py-20 md:py-32 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-sm font-body font-medium tracking-widest uppercase text-primary mb-4">
            Tổng kết
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nhìn lại hành trình
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Experience & Feelings */}
          <div className="card-gradient rounded-2xl p-8 shadow-card border border-border/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Trải nghiệm & Cảm nhận
              </h3>
            </div>
            <div className="space-y-4 font-body text-muted-foreground">
              <p>
                Học phần Kỹ năng số đã mang đến cho tôi những trải nghiệm học tập thú vị và bổ ích. Tôi đã được tiếp cận với nhiều công cụ và phương pháp làm việc hiện đại trong môi trường số.
              </p>
              <p>
                Quá trình học tập giúp tôi nhận ra tầm quan trọng của việc không ngừng cập nhật kiến thức công nghệ để thích ứng với sự phát triển của xã hội.
              </p>
            </div>
          </div>

          {/* Knowledge & Skills */}
          <div className="card-gradient rounded-2xl p-8 shadow-card border border-border/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Kiến thức & Kỹ năng nổi bật
              </h3>
            </div>
            <ul className="space-y-3 font-body text-muted-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Kỹ năng tìm kiếm và đánh giá thông tin hiệu quả</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Sử dụng thành thạo các công cụ cộng tác số</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Hiểu biết về trí tuệ nhân tạo và ứng dụng</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Nắm vững nguyên tắc liêm chính học thuật</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Highlights & Challenges */}
        <div className="card-gradient rounded-2xl p-8 md:p-10 shadow-card border border-border/50">
          <h3 className="font-display text-xl font-semibold text-foreground mb-8 text-center">
            Điểm tâm đắc & Thách thức
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-display font-semibold text-foreground mb-3">
                Điểm tâm đắc nhất
              </h4>
              <p className="font-body text-sm text-muted-foreground">
                Được trải nghiệm và thực hành các công cụ AI hiện đại, mở ra nhiều cơ hội ứng dụng trong học tập và công việc tương lai.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-display font-semibold text-foreground mb-3">
                Khó khăn / Thách thức
              </h4>
              <p className="font-body text-sm text-muted-foreground">
                Đôi khi gặp khó khăn trong việc quản lý thời gian để hoàn thành các dự án với nhiều yêu cầu kỹ thuật mới.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-display font-semibold text-foreground mb-3">
                Bài học rút ra
              </h4>
              <p className="font-body text-sm text-muted-foreground">
                Học cách chia nhỏ công việc, lập kế hoạch cụ thể và không ngại tìm kiếm sự hỗ trợ khi cần thiết.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;

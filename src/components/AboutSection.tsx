import { Target, BookOpen, Briefcase, User, GraduationCap, School, Mail } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-sm font-body font-medium tracking-widest uppercase text-primary mb-4">
            Giới thiệu
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Về bản thân tôi
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Personal Info Card */}
        <div className="card-gradient rounded-2xl p-8 shadow-card border border-border/50 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border-4 border-primary/20">
              <User className="w-16 h-16 text-primary" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Nguyễn Vân Anh
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-body text-muted-foreground uppercase tracking-wider">Ngành học</p>
                    <p className="font-body font-medium text-foreground">Kinh tế Chính trị</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <School className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-body text-muted-foreground uppercase tracking-wider">Trường</p>
                    <p className="font-body font-medium text-foreground">ĐH Kinh tế - ĐHQGHN</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-body text-muted-foreground uppercase tracking-wider">Email</p>
                    <p className="font-body font-medium text-foreground text-sm">eirzch0d32@1mailapi.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Goals Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Short-term Goals */}
          <div className="card-gradient rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-border/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Mục tiêu ngắn hạn
              </h3>
            </div>
            <ul className="space-y-4 font-body text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span>Nắm vững các kiến thức và kỹ năng số cơ bản trong học phần, đặc biệt là khai thác thông tin, làm việc trong môi trường số và sử dụng công nghệ một cách hiệu quả.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span>Hoàn thành đầy đủ các bài tập, dự án học tập với chất lượng tốt, đảm bảo đúng yêu cầu và có tính ứng dụng thực tiễn.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span>Từng bước hình thành tư duy học tập chủ động, biết tự tìm kiếm, chọn lọc và đánh giá thông tin phục vụ cho việc học tập và nghiên cứu.</span>
              </li>
            </ul>
          </div>

          {/* Long-term Goals */}
          <div className="card-gradient rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-border/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Mục tiêu dài hạn
              </h3>
            </div>
            <ul className="space-y-4 font-body text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span>Vận dụng các kỹ năng số đã học vào quá trình học tập ngành Kinh tế Chính trị và các hoạt động học thuật sau này.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span>Phát triển năng lực sử dụng công nghệ một cách có trách nhiệm, an toàn và tuân thủ liêm chính học thuật.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span>Xây dựng nền tảng kỹ năng cần thiết để thích ứng với môi trường làm việc số trong tương lai.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Portfolio Purpose */}
        <div className="card-gradient rounded-2xl p-8 md:p-10 shadow-card border border-border/50">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground">
              Mục tiêu của Portfolio
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6 font-body text-muted-foreground">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-primary font-semibold flex-shrink-0">1</span>
              <span>Thể hiện quá trình học tập, rèn luyện và phát triển các kỹ năng số thông qua từng bài tập, dự án cụ thể.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-primary font-semibold flex-shrink-0">2</span>
              <span>Lưu trữ và hệ thống hóa các sản phẩm học tập cá nhân một cách khoa học, dễ theo dõi và truy cập.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-primary font-semibold flex-shrink-0">3</span>
              <span>Minh chứng cho năng lực vận dụng kiến thức đã học vào thực tiễn học tập.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-primary font-semibold flex-shrink-0">4</span>
              <span>Làm cơ sở để tự đánh giá sự tiến bộ của bản thân và thuận tiện trong việc chia sẻ kết quả học tập.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

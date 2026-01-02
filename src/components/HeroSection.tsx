import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="section-container text-center relative z-10">
        <p className="animate-fade-up text-sm md:text-base font-body font-medium tracking-widest uppercase text-primary mb-6">
          Portfolio Cá Nhân
        </p>
        
        <h1 className="animate-fade-up stagger-1 font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Nguyễn Vân Anh
        </h1>
        
        <div className="animate-fade-up stagger-2 w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
        
        <p className="animate-fade-up stagger-3 font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
          Sinh viên ngành <span className="text-foreground font-medium">Kinh tế Chính trị</span>
        </p>
        
        <p className="animate-fade-up stagger-4 font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          Đại học Kinh tế - Đại học Quốc gia Hà Nội
        </p>

        <a
          href="#about"
          className="animate-fade-up stagger-5 inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-medium rounded-full hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
        >
          Khám phá Portfolio
          <ArrowDown size={18} className="animate-bounce" />
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1s" }}>
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

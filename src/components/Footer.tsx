import { Mail, MapPin, GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12 md:py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-display text-2xl font-bold text-background mb-4">
              Nguyễn Vân Anh
            </h3>
            <p className="font-body text-background/60 mb-6 max-w-md">
              Portfolio cá nhân - Học phần Công nghệ số
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/60">
                <GraduationCap size={18} />
                <span className="font-body text-sm">Ngành Kinh tế Chính trị</span>
              </div>
              <div className="flex items-center gap-3 text-background/60">
                <MapPin size={18} />
                <span className="font-body text-sm">Đại học Kinh tế - ĐHQGHN</span>
              </div>
              <div className="flex items-center gap-3 text-background/60">
                <Mail size={18} />
                <span className="font-body text-sm">eirzch0d32@1mailapi.com</span>
              </div>
            </div>
          </div>
          
          <div className="md:text-right">
            <p className="font-body text-sm text-background/40">
              © 2025 Nguyễn Vân Anh. Tất cả các quyền được bảo lưu.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

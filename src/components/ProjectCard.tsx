import { ExternalLink, FileText, Image, Video } from "lucide-react";

interface ProjectCardProps {
  number: number;
  chapter: string;
  title: string;
  objective: string;
  content: string;
  skills: string;
  documentLink?: string;
  delay?: number;
}

const ProjectCard = ({
  number,
  chapter,
  title,
  objective,
  content,
  skills,
  documentLink,
  delay = 0,
}: ProjectCardProps) => {
  return (
    <div
      className="group card-gradient rounded-2xl p-6 md:p-8 shadow-card hover:shadow-glow transition-all duration-500 border border-border/50 hover:border-primary/30 hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          {number}
        </div>
        <div>
          <p className="text-xs font-body font-medium tracking-wider uppercase text-primary mb-1">
            {chapter}
          </p>
          <h3 className="font-display text-lg md:text-xl font-semibold text-foreground leading-tight">
            {title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 mb-6">
        <div>
          <p className="text-xs font-body font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Mục tiêu bài tập
          </p>
          <p className="font-body text-sm text-foreground/80">{objective}</p>
        </div>
        
        <div>
          <p className="text-xs font-body font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Nội dung thực hiện
          </p>
          <p className="font-body text-sm text-foreground/80">{content}</p>
        </div>
        
        <div>
          <p className="text-xs font-body font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Kỹ năng đạt được
          </p>
          <p className="font-body text-sm text-foreground/80">{skills}</p>
        </div>
      </div>

      {/* Product Links */}
      <div className="pt-4 border-t border-border/50">
        <p className="text-xs font-body font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          Sản phẩm cuối cùng
        </p>
        <div className="flex flex-wrap gap-2">
          {documentLink ? (
            <a 
              href={documentLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-body font-medium text-primary bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
            >
              <FileText size={14} />
              Tài liệu
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-body font-medium text-muted-foreground bg-secondary/50 rounded-full">
              <FileText size={14} />
              Chưa có tài liệu
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

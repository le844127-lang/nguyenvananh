import ProjectCard from "./ProjectCard";

const projects = [
  {
    number: 1,
    chapter: "Chương 1",
    title: "Máy tính và các thiết bị ngoại vi",
    objective: "Tìm hiểu cấu tạo, chức năng của máy tính và các thiết bị ngoại vi phổ biến trong học tập và công việc.",
    content: "Nghiên cứu các thành phần phần cứng, phần mềm cơ bản và cách thức hoạt động của hệ thống máy tính.",
    skills: "Nhận biết và phân loại các thiết bị công nghệ, hiểu nguyên lý hoạt động cơ bản.",
  },
  {
    number: 2,
    chapter: "Chương 2",
    title: "Khai thác dữ liệu và thông tin",
    objective: "Phát triển kỹ năng tìm kiếm, đánh giá và sử dụng thông tin một cách hiệu quả.",
    content: "Báo cáo tìm kiếm và đánh giá thông tin học thuật về chủ đề: Tối ưu hóa Hiệu suất và Giải thích của Mô hình Học Sâu trong Phân tích Phân tử Protein.",
    skills: "Tư duy phản biện, kỹ năng nghiên cứu và đánh giá thông tin.",
    pdfLink: "/files/25050050-nguyen-van-anh.pdf",
  },
  {
    number: 3,
    chapter: "Chương 3",
    title: "Tổng quan về trí tuệ nhân tạo",
    objective: "Hiểu khái niệm, ứng dụng và tác động của trí tuệ nhân tạo trong đời sống.",
    content: "Khám phá các ứng dụng AI phổ biến, thảo luận về cơ hội và thách thức của AI.",
    skills: "Hiểu biết về công nghệ AI, tư duy về đạo đức công nghệ.",
  },
  {
    number: 4,
    chapter: "Chương 4",
    title: "Giao tiếp và hợp tác trong môi trường số",
    objective: "Rèn luyện kỹ năng giao tiếp, làm việc nhóm trực tuyến hiệu quả.",
    content: "Sử dụng các công cụ cộng tác số, thực hành giao tiếp chuyên nghiệp qua email và các nền tảng trực tuyến.",
    skills: "Làm việc nhóm online, giao tiếp số chuyên nghiệp, sử dụng công cụ cộng tác.",
  },
  {
    number: 5,
    chapter: "Chương 5",
    title: "Sáng tạo nội dung số",
    objective: "Phát triển năng lực tạo nội dung số đa dạng phục vụ học tập và truyền thông.",
    content: "Thiết kế và tạo các sản phẩm số như infographic, video, presentation.",
    skills: "Sáng tạo nội dung, sử dụng công cụ thiết kế, tư duy thẩm mỹ.",
  },
  {
    number: 6,
    chapter: "Chương 6",
    title: "An toàn và liêm chính học thuật trong môi trường số",
    objective: "Nắm vững nguyên tắc an toàn thông tin và đạo đức học thuật trong môi trường số.",
    content: "Tìm hiểu về bảo mật thông tin cá nhân, trích dẫn đúng quy chuẩn, tránh đạo văn.",
    skills: "Bảo mật thông tin, tuân thủ liêm chính học thuật, trích dẫn khoa học.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-sm font-body font-medium tracking-widest uppercase text-primary mb-4">
            Dự án học tập
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Các bài tập & Dự án
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Tổng hợp các dự án học tập trong học phần Kỹ năng số, thể hiện quá trình rèn luyện và phát triển năng lực công nghệ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              {...project}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

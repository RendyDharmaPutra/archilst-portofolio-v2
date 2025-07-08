import { ProjectType } from "~/types/project-type";
import { ProjectCard } from "./card/project-card";

export const ProjectsContent = () => {
  const projects: ProjectType[] = [
    {
      id: 1,
      title: "Realtime Chat App",
      slug: "realtime-chat-app",
      description:
        "A real-time chat application with WebSocket and persistent storage.",
      thumbnail_url: "https://dummyimage.com/600x400/000/fff&text=Chat+App",
      demo_url: "https://chatapp.demo.com",
      repo_url: "https://github.com/user/realtime-chat-app",
      publish_date: "2024-03-01",
      category: "Experimental",
    },
    {
      id: 2,
      title: "Personal Portfolio",
      slug: "personal-portfolio",
      description:
        "A developer portfolio built with Remix and deployed on Vercel.",
      thumbnail_url: "https://dummyimage.com/600x400/000/fff&text=Portfolio",
      demo_url: "https://portfolio.example.com",
      repo_url: "https://github.com/user/portfolio-remix",
      publish_date: "2024-01-15",
      category: "Public",
    },
    {
      id: 3,
      title: "Company Internal Dashboard",
      slug: "company-internal-dashboard",
      description: "Dashboard for internal use in a private company project.",
      thumbnail_url: "https://dummyimage.com/600x400/000/fff&text=Dashboard",
      demo_url: undefined,
      repo_url: undefined,
      publish_date: "2023-11-12",
      category: "Private",
    },
    {
      id: 4,
      title: "Markdown Note Editor",
      slug: "markdown-note-editor",
      description:
        "A web-based markdown note-taking app with real-time preview.",
      thumbnail_url: "https://dummyimage.com/600x400/000/fff&text=Editor",
      demo_url: "https://mdnotes.dev",
      repo_url: "https://github.com/user/md-note-editor",
      publish_date: "2023-08-20",
      category: "Experimental",
    },
    {
      id: 5,
      title: "Task Management Tool",
      slug: "task-management-tool",
      description: "A kanban-style task manager for team productivity.",
      thumbnail_url: "https://dummyimage.com/600x400/000/fff&text=Task+Tool",
      demo_url: "https://tasks.io",
      repo_url: "https://github.com/user/task-tool",
      publish_date: "2023-09-05",
      category: "Public",
    },
    {
      id: 6,
      title: "E-commerce API",
      slug: "ecommerce-api",
      description: "RESTful API backend for a modern e-commerce platform.",
      thumbnail_url: "https://dummyimage.com/600x400/000/fff&text=API",
      demo_url: undefined,
      repo_url: "https://github.com/user/ecommerce-api",
      publish_date: "2024-04-10",
      category: "Private",
    },
    {
      id: 7,
      title: "Blog Platform",
      slug: "blog-platform",
      description:
        "A full-stack blog platform with editor, categories, and comments.",
      thumbnail_url: "https://dummyimage.com/600x400/000/fff&text=Blog",
      demo_url: "https://blogplatform.dev",
      repo_url: "https://github.com/user/blog-platform",
      publish_date: "2024-05-12",
      category: "Public",
    },
    {
      id: 8,
      title: "Expense Tracker",
      slug: "expense-tracker",
      description: "A personal finance tracker with charts and reports.",
      thumbnail_url: "https://dummyimage.com/600x400/000/fff&text=Finance",
      demo_url: "https://expensetracker.app",
      repo_url: "https://github.com/user/expense-tracker",
      publish_date: "2023-12-01",
      category: "Experimental",
    },
    {
      id: 9,
      title: "Event Booking System",
      slug: "event-booking-system",
      description: "Ticket booking system for events and meetups.",
      thumbnail_url: "https://dummyimage.com/600x400/000/fff&text=Events",
      demo_url: undefined,
      repo_url: undefined,
      publish_date: "2023-10-10",
      category: "Private",
    },
    {
      id: 10,
      title: "IoT Device Monitor",
      slug: "iot-device-monitor",
      description: "Dashboard to monitor and control IoT sensors remotely.",
      thumbnail_url: "https://dummyimage.com/600x400/000/fff&text=IoT",
      demo_url: "https://iotmonitor.net",
      repo_url: "https://github.com/user/iot-monitor",
      publish_date: "2024-06-01",
      category: "Experimental",
    },
    {
      id: 11,
      title: "Image Gallery",
      slug: "image-gallery",
      description: "Responsive image gallery built with Next.js and Supabase.",
      thumbnail_url: "https://dummyimage.com/600x400/000/fff&text=Gallery",
      demo_url: "https://gallery.space",
      repo_url: "https://github.com/user/image-gallery",
      publish_date: "2024-02-10",
      category: "Public",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

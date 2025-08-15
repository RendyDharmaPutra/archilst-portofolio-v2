export type ProjectType = {
  id: number;
  slug: string;
  title: string;
  description?: string;
  category: string;
  thumbnail_url: string;
  demo_url?: string;
  repo_url?: string;
  publish_date: string;
};

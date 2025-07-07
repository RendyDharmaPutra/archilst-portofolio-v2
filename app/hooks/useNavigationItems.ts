export type NavigationItemType = {
  route: string;
  title: string;
};

// Memeberikan Item Halaman yang ditampilkan di Navigasi
export function useNavigationItems(): NavigationItemType[] {
  return [
    {
      route: "/",
      title: "Beranda",
    },
    {
      route: "/project",
      title: "Projek",
    },
    {
      route: "/photograph",
      title: "Fotografi",
    },
  ];
}

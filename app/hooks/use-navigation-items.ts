export type NavigationItemType = {
  route: string;
  title: string;
};

// Memeberikan Item Halaman yang ditampilkan di Navigasi
export function useNavigationItems(): NavigationItemType[] {
  return [
    {
      route: "/",
      title: "Home",
    },
    {
      route: "/projects",
      title: "Projects",
    },
    {
      route: "/photographs",
      title: "Photographs",
    },
  ];
}

const headerLinksData = (path: string) => [
  {
    textKey: "Home",
    linkKey: "/",
    active: path === "/",
  },
  {
    textKey: "Pairing Profiles",
    linkKey: "/pairing-profiles",
    active: path === "/pairing-profiles",
  },
  {
    textKey: "Pairing List",
    linkKey: "/pairing-list",
    active: path === "/pairing-list",
  },
  {
    textKey: "Pricing",
    linkKey: "/pricing",
    active: path === "/pricing",
  },
  {
    textKey: "Login",
    linkKey: "/auth/login",
    active: path === "/auth/login",
  },
];

export default headerLinksData;

type dataBlockType = {
  id: number;
  ico: string;
  title: string;
  secondTitle: string;
  paragraph: string;
};

export const dataBlock: Array<dataBlockType> = [
  {
    id: 1,
    ico: "/eye.png",
    title: "Unlimited",
    secondTitle: "access to content",
    paragraph:
      "Enjoy unlimited bandwidth to stay connected to the world's best shows, apps, and games!",
  },
  {
    id: 2,
    ico: "/rocket.png",
    title: "Flashing",
    secondTitle: "connecting speed",
    paragraph:
      "VPN Lumos offers unlimited bandwidth for faster loading and no buffering!",
  },
  {
    id: 3,
    ico: "/maps.png",
    title: "Hide",
    secondTitle: "your location",
    paragraph:
      "Get your own unique IP for added security and access to restricted sites, apps, and services!",
  },
  {
    id: 4,
    ico: "/lock.png",
    title: "Bypass",
    secondTitle: "blocked sites",
    paragraph: "Access any website safely and anonymously!",
  },
];

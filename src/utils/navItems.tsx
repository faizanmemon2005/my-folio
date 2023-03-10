import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";

interface NavItems {
  id: number;
  title: string;
  to: string;
  icon: JSX.Element;
}

export const items: NavItems[] = [
  {
    id: 1,
    title: "Home",
    to: "/",
    icon: <HomeOutlinedIcon />,
  },
  {
    id: 2,
    title: "About",
    to: "/aboutus",
    icon: <InfoOutlinedIcon />,
  },
  {
    id: 3,
    title: "Portfolio",
    to: "/portfolio",
    icon: <LocalOfferOutlinedIcon />,
  },
  {
    id: 4,
    title: "Resume",
    to: "/resume",
    icon: <BookOutlinedIcon />,
  },
  {
    id: 5,
    title: "Contact",
    to: "/contactus",
    icon: <ContactMailOutlinedIcon />,
  },
];

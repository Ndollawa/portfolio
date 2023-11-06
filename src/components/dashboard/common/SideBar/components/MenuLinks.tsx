import { ReactComponentElement, ReactElement } from "react";
import {
  IoIosPaper,
  IoMdPeople,
  IoMdPricetags,
  IoMdPersonAdd,
  IoMdTrash,
  IoMdPaper,
  IoIosCreate,
  IoIosBrowsers,
} from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";

type Submenu = {
  id: number;
  title: string;
  type: string;
  url: string;
  icon: string | JSX.Element;
}[];
type NavLinks = {
  id: number;
  title: string;
  type: string;
  url: string;
  icon: string | JSX.Element;
  isActive: undefined | boolean | null;
  isOpen?: undefined | boolean | null;
  subMenu?: Submenu | undefined;
}[];
export const MenuItems: NavLinks = [
  {
    id: 0,
    title: "Home",
    type: "link",
    url: "/",
    icon: <FiHome />,
    isActive: false,
  },
  {
    id: 1,
    title: "Dashboard",
    type: "link",
    url: "/dashboard/",
    icon: <RiDashboardLine />,
    isActive: true,
  },
  {
    id: 2,
    title: "Post",
    type: "dropdown",
    url: "#",
    icon: <IoIosPaper />,
    isActive: false,
    isOpen: false,
    subMenu: [
      {
        id: 3,
        title: "Create Post",
        type: "link",
        url: "/dashboard/posts/create",
        icon: <IoIosCreate />,
      },
      {
        id: 4,
        title: "All Posts",
        type: "link",
        url: "/dashboard/posts",
        icon: <IoMdPaper />,
      },
      {
        id: 5,
        title: "Recycle Bin",
        type: "link",
        url: "/dashboard/posts/recyclebin",
        icon: <IoMdTrash />,
      },
    ],
  },
  {
    id: 6,
    title: "Services",
    type: "dropdown",
    url: "#",
    icon: <IoMdPeople />,
    isActive: false,
    isOpen: false,
    subMenu: [
      {
        id: 7,
        title: "Create Service",
        type: "link",
        url: "/dashboard/services/create",
        icon: <IoMdPersonAdd />,
      },
      {
        id: 8,
        title: "All Services",
        type: "link",
        url: "/dashboard/services",
        icon: <IoMdPeople />,
      },
      {
        id: 9,
        title: "Recycle Bin",
        type: "link",
        url: "/dashboard/service/recyclebin",
        icon: <IoMdTrash />,
      },
    ],
  },
  {
    id: 10,
    title: "Projects",
    type: "dropdown",
    url: "#",
    icon: <IoMdPeople />,
    isActive: false,
    isOpen: false,
    subMenu: [
      {
        id: 11,
        title: "Create Project",
        type: "link",
        url: "/dashboard/projects/create",
        icon: <IoMdPersonAdd />,
      },
      {
        id: 12,
        title: "All Projects",
        type: "link",
        url: "/dashboard/projects",
        icon: <IoMdPeople />,
      },
      {
        id: 13,
        title: "Recycle Bin",
        type: "link",
        url: "/dashboard/projects/recyclebin",
        icon: <IoMdTrash />,
      },
    ],
  },
  // {
  //   id:14,
  //   title: "Services",
  //   type: "dropdown",
  //   url: "#",
  //   icon: <IoMdPeople/>,
  //   isActive: false,
  //   isOpen:false,
  //   subMenu:[
  //     {
  //     id:15,
  //     title: "Create Service",
  //     type: "link",
  //     url:"/dashboard/services/create",
  //     icon:<IoMdPersonAdd/>
  //   },
  //   {
  //     id:16,
  //     title: "All Services",
  //     type: "link",
  //     url:"/dashboard/services",
  //     icon:<IoMdPeople/>
  //   },
  //   {
  //     id:17,
  //     title: "Recycle Bin",
  //     type: "link",
  //     url:"/dashboard/service/recyclebin",
  //     icon:<IoMdTrash/>
  //   } ]

  // },
  {
    id: 18,
    title: "Post Categories",
    type: "link",
    url: "/dashboard/categories",
    icon: <IoMdPricetags />,
    isActive: false,
    isOpen: false,
  },
  {
    id: 19,
    title: "FAQ",
    type: "link",
    url: "/dashboard/faq",
    icon: <FaRegQuestionCircle />,
    isActive: false,
    isOpen: false,
  },
];

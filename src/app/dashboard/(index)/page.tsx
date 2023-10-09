<<<<<<< HEAD:app/dashboard/(index)/page.tsx
"use client"

import React, {useState} from "react";
import Insight from "./components/Insight";
=======
import React from "react";
import Insight from "../../../components/dashboard/index/Insight";
>>>>>>> e480366 (refactored code):src/app/dashboard/(index)/page.tsx
import {
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaArrowUp,
  FaPaintBrush,
  FaUserCircle,
  FaComments,
} from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { SiAzuredevops } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { Header, Modal } from ".@/components/dashboard/common";
import "./index.scss";

const page = () => {
 const {isVisible,setIsVisible} = useState(false)
  const insightReports = [
    {
      title: "Total Projects",
      icon: <SiAzuredevops />,
      counter: 103,
      progress: 80,
      color: undefined,
      timeAgo: "This week",
    },
    {
      title: "Total Projects",
      icon: <SiAzuredevops />,
      counter: 103,
      color: "bg-cyan-600",
      progress: 80,
      timeAgo: "This week",
    },
    {
      title: "Total Projects",
      icon: <SiAzuredevops />,
      counter: 103,
      progress: 80,
      color: "bg-red-600",
      timeAgo: "This week",
    },
  ];

  return (
    <div className="page">
      <Header title="Dashbord" />

      <div className="insight">
        {insightReports?.map(
          ({ title, icon, counter, color, progress, timeAgo }, i) => (
            <Insight
              key={i}
              title={title}
              color={color}
              icon={icon}
              counter={counter}
              progress={progress}
              timeAgo={timeAgo}
            />
          )
        )}
      </div>

      <div className="page__content">
        <h2>Recent Projects</h2>
        <table></table>
        <Modal onClose={()=>setIsVisible(false)} isVisible={isVisible} />
      </div>
    </div>
  );
};

export default page;
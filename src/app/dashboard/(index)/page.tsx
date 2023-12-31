"use client";

import React, { useState } from "react";
import Insight from "@/components/dashboard/index/Insight";
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
import {
  Analytics,
  Header,
  Modal,
  RecentUpdate,
} from "@/components/dashboard/common";
import "./index.scss";

const Home = () => {
  const { isVisible, setIsVisible } = useState(false);
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
      <Header title="Dashboard" />
      <div className="data-analytics">
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
        <div className="side-report">
          <RecentUpdate />
          <Analytics />
        </div>
      </div>
      <div className="page__content">
        <h2>Recent Projects</h2>
        <table></table>
        {/* <Modal /> */}
      </div>
    </div>
  );
};

export default Home;

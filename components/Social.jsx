import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const social = [
  {
    icon: <FaGithub />,
    url: "https://github.com/MUHEVANN",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/muhammad-evan-kusyanto-795824327/",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/yth_epan/",
  },
  {
    icon: <FaFacebook />,
    url: "https://web.facebook.com/profile.php?id=100071844109152",
  },
];

function Social({ outline = false }) {
  return (
    <div className={`flex items-center gap-4 text-lg `}>
      {social.map((item, i) => (
        <Link
          href={item.url}
          key={i}
          className={`hover:text-accent transition-colors ease-in-out duration-300  ${
            outline &&
            "border border-accent p-2 rounded-full text-accent hover:text-primary hover:bg-accent"
          }`}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}

export default Social;

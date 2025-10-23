"use client";

import React from "react";
// Removed Pinterest, as it's not a valid icon in the lucide-react library
import { Facebook, Youtube, Instagram, Twitter } from "lucide-react";

const SocialMediaIcons = () => {
  const iconSize = 32;
  const iconColor = "#F7F7F7";
  const iconClass = "hover:opacity-80 transition-opacity";

  return (
    <div className="flex items-center space-x-4">
      <a
        target="_blank"
        href="http://www.facebook.com"
        title="Facebook"
        className={iconClass}
      >
        <Facebook size={iconSize} color={iconColor} />
      </a>

      <a
        target="_blank"
        href="http://www.youtube.com"
        title="YouTube"
        className={iconClass}
      >
        <Youtube size={iconSize} color={iconColor} />
      </a>

      <a
        target="_blank"
        href="http://www.instagram.com"
        title="Instagram"
        className={iconClass}
      >
        <Instagram size={iconSize} color={iconColor} />
      </a>

      <a
        target="_blank"
        href="http://www.x.com"
        title="X"
        className={iconClass}
      >
        <Twitter size={iconSize} color={iconColor} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;

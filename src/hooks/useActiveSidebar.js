import { useEffect, useState } from "react";

export const useActiveSidebar = () => {
  const [active, setActive] = useState(window.innerWidth > 1024);
  const updateMedia = () => {
    setActive(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, [active]);

  return { active, updateMedia };
};

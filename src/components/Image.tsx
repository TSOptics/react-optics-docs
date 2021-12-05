import React, { useContext } from "react";
import ThemeContext from "@theme/ThemeContext";

const MdxImage = ({ src, srcDark }) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <img
      src={require(`../../static/img/${isDarkTheme ? srcDark : src}`).default}
      alt="Example autocompletion"
    />
  );
};

export default MdxImage;

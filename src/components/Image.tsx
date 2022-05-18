import React, { useContext } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

const MdxImage = ({ src, srcDark }) => {
    const { colorMode } = useColorMode();

    return (
        <img
            src={
                require(`../../static/img/${
                    colorMode === 'dark' ? srcDark : src
                }`).default
            }
            alt="Example autocompletion"
        />
    );
};

export default MdxImage;

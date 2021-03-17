import bgDesktopDark from '../assets/images/bg-desktop-dark.jpg' // 1440x300
import bgMobileDark from '../assets/images/bg-mobile-dark.jpg' // 375x200

import bgDesktopLight from '../assets/images/bg-desktop-light.jpg'
import bgMobileLight from '../assets/images/bg-mobile-light.jpg'

const theme = {
    dark: {
        name: "dark",

        // images
        bgDesktopDark,
        bgMobileDark,

        // colors
        veryDarkBlue: "hsl(235, 21%, 11%)",
        veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
        lightGrayishBlue: "hsl(234, 39%, 85%)",
        lightGrayishBlueHover: "hsl(236, 33%, 92%)",
        darkGrayishBlue: "hsl(234, 11%, 52%)",
        veryDarkGrayishBlue: "hsl(233, 14%, 35%)",
        veryDarkGrayishBlueHover: "hsl(237, 14%, 26%)"
    },

    light: {
        name: "light",

        // images
        bgDesktopLight,
        bgMobileLight,

        // colors
        veryLightGray: "hsl(0, 0%, 98%)",
        veryLightGrayishBlue: "hsl(236, 33%, 92%)",
        lightGrayishBlue: "hsl(233, 11%, 84%)",
        darkGrayishBlue: "hsl(236, 9%, 61%)",
        veryDarkGrayishBlue: "hsl(235, 19%, 35%)"
    }
}

export default theme;
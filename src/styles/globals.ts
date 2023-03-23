import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --fs-xl: clamp(1.5rem, 3vw + 1rem, 3rem);
    /* font-family*/
    --ff-body: "Quicksand", sans-serif;
    /* Font-display */
    --fd-body: swap;
    /* Font-style */
    --fs-normal: normal;
}

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    font-family: var(--ff-body);
    font-variant: common-ligatures contextual;
    -webkit-font-smoothing: subpixel-antialiased;
}

body,
h1,
h2,
h3,
p,
a {
    margin: 0;
    padding: 0;
    color: inherit;
    text-decoration: none;
}
`;

export default GlobalStyles;

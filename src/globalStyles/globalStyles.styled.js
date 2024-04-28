import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
   
   *,
*::before,
*::after {
  box-sizing: border-box;
}

.html {
  height: 100%;
}

ul,
ol {
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
  padding: 0;
}

body {
  min-height: 100%;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: "Outfit", sans-serif;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-color: #fff;
}

ul,
ol {
  list-style: none;
}

a {
  text-decoration-skip-ink: auto;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

article > * + * {
  margin-top: 1em;
}

input,
button,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
  border: none;
}

`;
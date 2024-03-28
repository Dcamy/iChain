/*
Great! Here’s a template for your GlobalStyles.js file using styled-components. This setup includes your branding colors and a snippet of humor to brighten the code:

javascript
Copy code
*/
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Injecting our branding colors into the root of the document */
  :root {
    --blockchain-blue: rgb(0, 123, 255);
    --ai-purple: rgb(128, 0, 128);
    --governance-orange: rgb(255, 165, 0);
    --background-dark: rgb(18, 32, 47);
    --interactive-neon: rgb(58, 255, 217);
    --text-light: rgb(245, 245, 245);
    --error-red: rgb(255, 69, 0);
  }

  /* Universal box-sizing */
  *, *:before, *:after {
    box-sizing: border-box;
  }

  /* Setting up the background for our intergalactic journey */
  body {
    background-color: var(--background-dark);
    color: var(--text-light);
    margin: 0;
    font-family: 'Space Mono', monospace; /* Space Mono, because we're quirky */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Ensuring our text is as clear as the wisdom in our code comments */
  h1, h2, h3, h4, h5, h6, p {
    color: var(--text-light);
  }

  /* Links that shine like the stars they are */
  a {
    color: var(--interactive-neon);
    text-decoration: none;
  }

  /* Button styling that makes you want to click it just for fun */
  button {
    background-color: var(--blockchain-blue);
    border: none;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: var(--interactive-neon);
    }
  }

  /* For those moments when things don't go as planned... */
  .error-message {
    color: var(--error-red);
    // Sometimes you reach for the stars but hit the ceiling fan instead.
  }
`;

// Pro tip: Always aim for the stars, and you'll at least hit the ceiling. Dream big, code smart.
export default GlobalStyles;

/*
With styled-components, you’re able to create a global stylesheet that applies throughout your application. These styles incorporate the colors defined in your branding guide and apply them to common elements to keep your theme consistent.

Make sure you have styled-components installed in your project:

sh
Copy code
npm install styled-components
And then, you can use GlobalStyles in your App.js file, as previously outlined. With this, your application is not only looking good in terms of design, but it's also got personality!
*/
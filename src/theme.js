import { createTheme } from "@mui/material/styles";
import { createContext, useState, useMemo } from "react";

// Color Design Tokens Export
export const tokens = (mode) => ({
  ...(mode === "dark" // If dark mode, these colors will be applied
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#1F2A40",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        greenAccent: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632",
        },
      }
    : {
        // Else these for light mode
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#f2f0f0", // manually changed
          500: "#141b2d",
          600: "#1F2A40",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        greenAccent: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#151632",
          200: "#2a2d64",
          300: "#3e4396",
          400: "#535ac8",
          500: "#6870fa",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e1e2fe",
        },
      }),
});

// The function takes a single argument called mode which represents the mode of the theme, either "dark" or "light".
// The tokens function is called with the mode argument to retrieve a set of color tokens for the theme.
// The function returns an object that contains a palette property which further contains color values for the theme.
// If the mode argument is "dark", the function returns color values for a dark theme, and if it's "light", the function returns color values for a light theme.
// The color values include:
// primary: The main color for the theme.
// secondary: A secondary color for the theme.
// neutral: A set of neutral colors for the theme.
// background: The default background color for the theme.
// The returned object has a structure that conforms to the Material UI theme specification, which is a popular library for building user interfaces in React.

export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// Context for the color mode
// The createContext function is used to create a new context object, which is used to share data that can be accessed by components at different levels of the component tree without passing props down manually at every level.
// In this case, the ColorModeContext object has an initial value that is an object containing a single property toggleColorMode, which is a function that doesn't do anything (an empty function).
// This context is most likely used to provide a way to toggle between the "light" and "dark" theme modes, so other components that consume this context can call the toggleColorMode function to switch between the two modes.
// Components that need to access the ColorModeContext data can consume it using the useContext hook in their implementation.

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

// This is a JavaScript code that defines a custom hook called useMode.
// Custom hooks are a way to reuse logic across multiple components in a React application.
// This hook returns an array containing two values: theme and colorMode.
// The theme value is a Material UI theme object that is created using the createTheme function with color values retrieved from the themeSettings function based on the current mode state.
// The colorMode value is an object containing a single property toggleColorMode, which is a function that toggles the mode state between "light" and "dark" modes.
// The useState hook is used to create a state variable called mode with an initial value of "dark".
// The useMemo hook is used to memoize the colorMode and theme objects so that they are only recomputed when the mode state changes.
// The colorMode object is memoized with an empty dependency array so that it is only created once when the component is mounted. The toggleColorMode function is defined to set the mode state to "dark" if it is "light", and "light" if it is "dark".
// The theme object is memoized with the mode state as a dependency so that it is recomputed whenever the mode state changes. The createTheme function is used to create a Material UI theme object with color values retrieved from the themeSettings function based on the current mode state.
// Overall, this custom hook provides a way to encapsulate the logic for creating and managing the theme and color mode in a single place, which can be reused across multiple components in the application.

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  //   This creates the theme from material UI and passes in the mode to the theme that we are creating
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};

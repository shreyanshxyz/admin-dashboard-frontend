import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme"; // imports a tokens object from a theme file. This is likely a custom theme file that defines color palettes and other styles for the app.

const Header = ({ title, subtitle }) => {
  // Inside the component, the useTheme hook is called to retrieve the current Material UI theme object.
  // The tokens function is called with the palette.mode property from the theme object to get a set of color tokens.
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    // The header contains a title and subtitle, both of which are passed as props to the component. The header is styled using Material UI components, specifically the Box and Typography components.
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;

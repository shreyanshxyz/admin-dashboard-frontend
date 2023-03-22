import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";

function App() {
  // the useMode() hook is called to retrieve the current theme and color mode. The useMode() hook is probably defined in the ./theme file and provides the current theme and color mode values based on the user's preferences.
  const [theme, colorMode] = useMode();
  return (
    // This is the way to set up our color context, now we have access to it everywhere
    // the ColorModeContext.Provider component to wrap the ThemeProvider and its child components. This means that any components that are children of the ThemeProvider component will have access to the ColorModeContext.
    <ColorModeContext.Provider value={colorMode}>
      {/* The ThemeProvider component is used to apply the current theme to the child components. The theme variable retrieved from the useMode() hook is passed as a prop to the ThemeProvider component. */}
      <ThemeProvider theme={theme}>
        {/* The CssBaseline component is used to apply some basic styles to the document, such as resetting the default styles of certain HTML elements to ensure a consistent look across different browsers. */}
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/team" element={<Team />} /> */}
              {/* <Route path="/contacts" element={<Contacts />} /> */}
              {/* <Route path="/invoices" element={<Invoices />} /> */}
              {/* <Route path="/form" element={<Form />} /> */}
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/faq" element={<FAQ />} /> */}
              {/* <Route path="/calendar" element={<Calendar />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

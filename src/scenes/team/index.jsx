import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    // Our first column is ID, HeaderName is what will be shown in the UI and field is what we are fetching it from, i.e MockData which we imported in the <DataGrid> Component at the bottom
    { field: "id", headerName: "ID" },
    // Similar for the second column Name
    // The flex 1 means it's fitting in the column through flex
    // The cellClassName is the one which gives it a custom class in case we want to make more modifications
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    // Similar for Age
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      // we have a separate property renderCell for custom rendering of the cell content.
      // The renderCell function is used to render the access column in a customized way. It uses a Box component to display the icon and text associated with the access level.
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {/* This code is rendering different icons based on the value of the access property in each row of the data, and displaying the access level as text beside the icon.
            
            The code uses a ternary operator to conditionally render different icons based on the value of access. If access is "admin", the AdminPanelSettingsOutlinedIcon is rendered. If access is "manager", the SecurityOutlinedIcon is rendered. If access is "user", the LockOpenOutlinedIcon is rendered. If none of these conditions are met, nothing is rendered.
            
            After the icon is rendered, a Typography component is used to display the access level as text, with a margin of 5 pixels to the left of the icon. The color prop of the Typography component is set to colors.grey[100], which is a color from the MUI theme object passed down via props to the component, and sx prop is used to add a margin to the left of the component. */}
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        {/* In our table the rows are imported from mockdata and columns are decided up and above. */}
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;

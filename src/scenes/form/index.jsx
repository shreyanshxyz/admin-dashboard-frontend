import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const Form = () => {
  //   This is for difference between mobile & non mobile devices
  const isNonMobile = useMediaQuery("(min-width:600px)");

  //   The Form component has a handleFormSubmit function that logs the form values to the console when the form is submitted.

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      {/* We use the Formik component to wrap the form and handle form submission. It passes several props to the Formik component, including onSubmit, initialValues, and validationSchema. The onSubmit function is called when the form is submitted, initialValues define the initial state of the form, and validationSchema is used to define the validation rules for each input field. ALL THESE VALUES ARE EITHER DEFINED AT THE TOP OR THE TOTAL BOTTOM */}

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {/* The Formik component passes down various props to the children of the component which are used to handle field changes, validation errors, and form submission. These props include values, errors, touched, handleBlur, handleChange, and handleSubmit. These come default with Formik */}
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              // The display: grid property makes the immediate children of the Box component become grid items, which can then be positioned and sized using CSS grid properties.

              // The gap property sets the gap between grid items to 30px, which means there will be a space of 30px between each grid item.

              // The gridTemplateColumns property sets the size of the columns in the grid. The value repeat(4, minmax(0, 1fr)) means that there will be 4 columns in the grid, each with a minimum width of 0 and a maximum width of 1fr.

              // The sx property is used to apply additional styles to the Box component. In this case, it uses the & > div selector to target all direct children of the Box component that are div elements.

              // The gridColumn property is then set to span 4 if isNonMobile is falsy. This means that if the isNonMobile variable is truthy, the gridColumn property will not be applied.

              // When gridColumn is set to span 4, it means that the element will span across all 4 columns in the grid, taking up the entire width of the grid container.
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

// Validation for phone number
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

//   This code defines the validation schema using Yup, a JavaScript schema builder for value parsing and validation.

// In this case, the validation schema is named checkoutSchema and it specifies the validation rules for the form fields. The schema is defined as an object with keys that match the form field names, and values that are Yup validation objects. Each validation object specifies the rules and constraints for the corresponding form field.

// For example, firstName, lastName, email, contact, address1, and address2 are the keys corresponding to the form fields, and yup.string() specifies that the value of each field must be a string. The required() method specifies that the field must not be empty. The email() method specifies that the email field must be a valid email address format. The matches() method specifies that the contact field must match the phoneRegExp pattern, which is defined earlier in the code.

// The required("required") method sets the error message for each field when it is not valid. If a form field fails validation, an error message will be displayed to the user.
const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default Form;

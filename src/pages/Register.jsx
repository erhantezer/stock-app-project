import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import { Formik } from "formik";
import image from "../assets/result.svg";
import Grid from "@mui/material/Grid";
import RegisterForm from "../components/RegisterForm";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import * as Yup from "yup";
// import useAuthCalls from "../hooks/useAuthCalls";

const registerSchema = Yup.object().shape({
    username: Yup.string()
        .max(10, "username must have less than 10 chars")
        .required(),
    first_name: Yup.string()
        .max(20, "first name must have less than 20 chars")
        .required(),
    last_name: Yup.string()
        .max(20, "last name must have less than 20 chars")
        .required(),

    email: Yup.string().email().required(),
    password: Yup.string()
        .required()
        .min(8, "Password must have min 8 chars")
        .max(16, "Password must have max 16 chars")
        .matches(/\d+/, "Password must have a number")
        .matches(/[a-z]+/, "Password must have a lowercase")
        .matches(/[A-Z]+/, "Password must have an uppercase")
        .matches(/[!,?{}><%&$#£+-.]+/, " Password must have a special char"),
});


export default function Register() {
    // const { register } = useAuthCalls();

    return (
        <Container maxWidth="lg">
            <Grid
                container
                justifyContent="center"
                direction="row-reverse"
                rowSpacing={{ sm: 3 }}
                sx={{
                    height: "100vh",
                    p: 2,
                }}
            >
                <Grid item xs={12}>
                    <Typography variant="h3" color="primary" align="center">
                        STOCK APP
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={10} md={6}>
                    <Avatar
                        sx={{
                            backgroundColor: "secondary.light",
                            m: "auto",
                            width: 40,
                            height: 40,
                        }}
                    >
                        <LockIcon size="30" />
                    </Avatar>
                    <Typography
                        variant="h4"
                        align="center"
                        mb={2}
                        color="secondary.light"
                    >
                        Register
                    </Typography>

                    <Formik
                        initialValues={{
                            username: "",
                            first_name: "",
                            last_name: "",
                            email: "",
                            password: "",
                        }}
                        validationSchema={registerSchema}
                        onSubmit={(values, actions) => {
                            // register({ ...values, password2: values.password });
                            actions.resetForm();
                            actions.setSubmitting(false);
                        }}
                    component={(props) => <RegisterForm {...props} />}
                    ></Formik>
                    <Box sx={{ textAlign: "center", mt: 2 }}>
                        <Link to="/">Do you have an account?</Link>
                    </Box>
                </Grid>

                <Grid item xs={0} sm={7} md={6}>
                    <Container>
                        <img src={image} alt="" />
                    </Container>
                </Grid>

            </Grid>
        </Container>
    );
}

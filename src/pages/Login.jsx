import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Formik } from "formik";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/result.svg";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import LoginForm from "../components/LoginForm";
// import LoginForm from "../components/LoginForm";
// import useAuthCalls from "../hooks/useAuthCalls";


const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Please enter valid email")
        .required("Email is mandatory"),
    password: Yup.string()
        .min(8, "Password must have min 8 chars")
        .max(16, "Password must have max 16 chars")
        .matches(/\d+/, "Password must have a number")
        .matches(/[a-z]+/, "Password must have a lowercase")
        .matches(/[A-Z]+/, "Password must have an uppercase")
        .matches(/[!,?{}><%&$#£+-.]+/, " Password must have a special char"),
});



const Login = () => {
    // const { login } = useAuthCalls();

    return (
        <Container maxWidth="lg">
            <Grid
                container
                justifyContent="center"
                direction="row-reverse"
                sx={{
                    height: "100vh",
                    p: 2,
                }}
            >
                <Grid item xs={12} mb={3}>
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
                        mb={4}
                        color="secondary.light"
                    >
                        Login
                    </Typography>

                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={loginSchema}
                        onSubmit={(values, actions) => {
                            // login(values);
                            actions.resetForm();
                            actions.setSubmitting(false);
                        }}
                    component={(props) => <LoginForm {...props} />}
                    ></Formik>
                    <Box sx={{ textAlign: "center", mt: 2 }}>
                        <Link to="/register">Do you have not an account?</Link>
                    </Box>
                </Grid>

                <Grid item xs={10} sm={7} md={6}>
                    <Container>
                        <img src={image} alt="img" />
                    </Container>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;

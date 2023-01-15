
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blueGrey, grey } from "@mui/material/colors";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store } from "./app/store";
import AppRouter from "./router/AppRouter";

const theme = createTheme({
  palette: {
    primary: {
      main: grey["900"],
    },
    secondary: {
      main: blueGrey["900"],
    },
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <AppRouter />
        </Provider>
      <ToastContainer/>
    </ThemeProvider>
    </>
  )
}

export default App;

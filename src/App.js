
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blueGrey, grey } from "@mui/material/colors";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store, { persistor} from "./app/store";
import AppRouter from "./router/AppRouter";
import { PersistGate } from "redux-persist/integration/react";

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
          <PersistGate loading={null} persistor={persistor}>
            <AppRouter />
          </PersistGate>
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </>
  )
}

export default App;

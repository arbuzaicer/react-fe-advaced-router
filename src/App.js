import { useSelector } from "react-redux";
import Routes from "./routes/Routes";
import { getAuthSelector } from "./store/reducers/auth.reducer";

const App = () => {
  const isAuth = useSelector(getAuthSelector);

  return <Routes />;
};

export default App;

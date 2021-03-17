

// import { useAuth } from './hooks'
import { AuthProvider } from "./contexts";
import { AuthRoute } from "./Screens";

const App = () => {

  return (
    <AuthProvider>
      <AuthRoute />
    </AuthProvider>
  )
};

export default App;
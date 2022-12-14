import { useAuth } from "./hook/useAuth";
import { Private } from "./Private";
import { Public } from "./Public";



function App() {
  const {token} = useAuth();
  if(token) {
    return <Private/>;
  }
  return <Public/> 
}

export default App;

import { useSelector } from "react-redux";
import StudentRoutes from "./features/routes/StudentRoutes";
import TutorRoutes from "./features/routes/TutorRoutes";
import AdminRoutes from './features/routes/AdminRoutes'

function App() {
  const {role}=useSelector((state) => state.auth);
  return (
    <div className="App">
     {
      role==='Student'?<StudentRoutes/>:<TutorRoutes/>
     }
    </div>
  );
}

export default App;

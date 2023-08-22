
import "./assets/css/style.css"
import "./assets/css/styles.css"
import TopHeader from './commonComponents/topHeader/TopHeader';
import Main from "./components/main/Main";
import UsersList from "./pages/userList";
import CreateUserList from './components/userList/createUserList/CreateUserList';
import DashBoard from './pages/dashboard/DashBoard';

function App() {
  return (
    <>
      <div id="main-wrapper" className="show">
        <TopHeader />
        <Main />
      </div>


    </>

  );
}

export default App;

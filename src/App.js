import "./assets/css/style.css"
import "./assets/css/styles.css"
import Aside from "./commonComponents/asidebar/Aside";
import ContentBody from "./commonComponents/contentBody/ContentBody";
import TopHeader from './commonComponents/topHeader/TopHeader';

function App() {
  return (
    <>
      <div id="main-wrapper" className="show">
        <TopHeader />
        <div className="main-body">
          <Aside />
          <ContentBody />
        </div>

      </div>

    </>

  );
}

export default App;

import { useContext } from 'react';
import "./ContentMain.css";
import { SidebarContext } from '../../context/sidebarContext';
import Cards from "../Cards/Cards";
import Report from "../Report/Report";


import Article from "../Articles/Articles";
import Parametrage from "../Parametrage/Parametrage";
import Production from "../Production/Production"
import Scanner from "../Scanner/Scanner"
import Historique from "../Report/Historique"
import GestionnaireTable from "../Gestionnaire/GestionnaireTable"

const ContentMain = () => {
  const { sideActiveLinkIdx } = useContext(SidebarContext);
  function renderContent() {
    if (sideActiveLinkIdx == 1) return (
      <>
        <div className="content-grid-two">
     
          <Report filtreOption={"hour"} typeOption={'bar'} />
          <Cards filtreOption={"hour"} typeOption={'line'}/>
     
          <Cards filtreOption={"hour"} typeOption={'doughnut'}/>
          <Report filtreOption={"day"} typeOption={'bar'} />
        
        </div>
        <div className="content-grid-one" style={{marginTop:"16px"}}>
          <Report filtreOption={"hour"} typeOption={'bar'} /> 
        </div>
      </>
    )
    if (sideActiveLinkIdx == 2) return <Article></Article>
    else if (sideActiveLinkIdx == 3) return <Parametrage></Parametrage>
    else if (sideActiveLinkIdx == 4) return <Production></Production>
    else if (sideActiveLinkIdx == 5) return <Scanner></Scanner>
    else if (sideActiveLinkIdx == 6) return <Historique></Historique>
    else if (sideActiveLinkIdx == 7) return <GestionnaireTable></GestionnaireTable>

  }
  return (
    <div className="main-content-holder">
      <div className="content-grid-oe">
        {
          renderContent()
        }
      </div>

    </div>
  )
}

export default ContentMain

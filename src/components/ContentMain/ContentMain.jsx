import { useContext } from 'react';
import "./ContentMain.css";
import { SidebarContext } from '../../context/sidebarContext';
import Cards from "../Cards/Cards";
import Transactions from "../Transactions/Transactions";
import Report from "../Report/Report";
import Budget from "../Budget/Budget";
import Subscriptions from "../Subscriptions/Subscriptions";
import Savings from "../Savings/Savings";
import Loans from "../Loans/Loans";
import Financial from "../Financial/Financial";
import Article from "../Articles/Articles";
import Parametrage from "../Parametrage/Parametrage";
import Production from "../Production/Production"
import Scanner from "../Scanner/Scanner"

const ContentMain = () => {
  const { sideActiveLinkIdx } = useContext(SidebarContext);
  function renderContent() {
    if (sideActiveLinkIdx == 1) return (
      <>
        <div className="content-grid-one">
          <Cards />
          <Transactions />
          <Report />
        </div>
        <div className="content-grid-two">
          <Budget />
          <div className="grid-two-item">
            <div className="subgrid-two">
              <Subscriptions />
              <Savings />
            </div>
          </div>

          <div className="grid-two-item">
            <div className="subgrid-two">
              <Loans />
              <Financial />
            </div>
          </div>
        </div>
      </>
    )
    if (sideActiveLinkIdx == 2) return <Article></Article>
    else if (sideActiveLinkIdx == 3) return <Parametrage></Parametrage>
    else if (sideActiveLinkIdx == 4) return <Production></Production>
    else if (sideActiveLinkIdx == 5) return <Scanner></Scanner>

  }
  return (
    <div className="main-content-holder">
      <div className="content-grid-ne">
        {
          renderContent()
        }
      </div>

    </div>
  )
}

export default ContentMain

import { useState } from "react";
import CreatePortfolio from "../../PortfolioMain/CreatePortfolio/CreatePortfolio";
import NewPortfolioMentor from "./NewPortfolioMentor";
import UploadPortfolioMentor from "./UploadPortfolioMentor";

function CreatePortfolioMentor({user , portfolioValue}) {
  const [active, setActive] = useState("uploadResume");
  return (
    <div>
      <CreatePortfolio/>
   
    </div>
  );
}

export default CreatePortfolioMentor;

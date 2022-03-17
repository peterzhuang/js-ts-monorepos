import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { getAllTeams } from "@shlack/data";
import { ITeam } from "@shlack/types";
import { useAsyncDataEffect } from "@shlack/utils";
import Loading from "./components/Loading";
import SelectedTeam from "./components/SelectedTeam";
import TeamSelector from "./components/TeamSelector";

const { useState } = React;

const App: React.FunctionComponent = () => {
  const [teams, setTeams] = useState<ITeam[]>();

  useAsyncDataEffect(() => getAllTeams(), {
    setter: setTeams,
    stateName: "teams",
  });
  if (!teams) return <Loading message="Loading teams" />;
  return (
    <Router>
      <div className="flex flex-col sm:flex-row w-full h-full">
        <TeamSelector teams={teams} />
        <Routes>
          <Route path="/" element={<section className="m-12 text-xl">
              <h3>Please select a team</h3>
            </section>} />
          <Route path="/team" element={<section className="m-12 text-xl">
              <h3>Please select a team</h3>
            </section>} />
          <Route
            path="/team/:teamId/*"
            element={
              <SelectedTeam teams={teams} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};
export default App;

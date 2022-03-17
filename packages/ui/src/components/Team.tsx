import * as React from "react";
import { Route, Routes } from "react-router-dom";
import type { ITeam } from "@shlack/types";
import SelectedChannel from "./SelectedChannel";
import TeamSidebar from "./TeamSidebar";

const Team: React.FunctionComponent<{ team: ITeam }> = ({ team }) => {
  console.log(
    `%c TEAM render: ${team.name}`,
    "background-color: blue; color: white"
  );
  const { channels } = team;
  return (
    <div className="flex-1 flex">
      <TeamSidebar team={team} />
      <Routes>
        <Route path={``} element={<h3>Please select a channel</h3>} />
        <Route
          path={`channel/:channelId`}
          element={
            <SelectedChannel channels={channels} />
          }
        />
      </Routes>
    </div>
  );
};
export default Team;

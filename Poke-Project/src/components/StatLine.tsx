import { padStats } from "../utils/padStats";

const StatLine = ({name, value}: {name: string, value: string}) => {
  return (
    <div className="stat-line">
      {padStats(name, value, ".", 20)}
    </div>
  );
}

export default StatLine;
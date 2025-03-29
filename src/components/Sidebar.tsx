import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-800 p-4">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <ul>
        <li>
          <Link to="/dashboard">Home</Link>
        </li>
        <li>
          <Link to="/dashboard/jobs">Manage Jobs</Link>
        </li>
        <li>
          <Link to="/dashboard/settings">Settings</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;

import { Link } from "react-router-dom";
import { Job } from "../store/jobSlice";

const JobCard = ({ job }: { job: Job }) => (
  <div className="border p-4 rounded-lg shadow-md dark:bg-gray-800 dark:text-white">
    <h3 className="text-lg font-bold">{job.title}</h3>
    <p className="text-sm">
      {job.company} - {job.location}
    </p>
    <Link to={`/job/${job.id}`} className="text-blue-500">
      View Details
    </Link>
  </div>
);

export default JobCard;

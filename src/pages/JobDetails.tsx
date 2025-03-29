import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const JobDetails = () => {
  const { id } = useParams<{ id: string }>();
  const job = useSelector((state: RootState) =>
    state.jobs.jobs.find((j) => j.id === Number(id))
  );
  if (!job) return <p>Job not found</p>;

  return (
    <div className="p-6 dark:bg-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold">{job.title}</h1>
      <p className="text-gray-500">
        {job.company} - {job.location}
      </p>
      <p>{job.description}</p>
    </div>
  );
};

export default JobDetails;

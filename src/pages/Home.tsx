import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import JobCard from "../components/JobCard";

const Home = () => {
  const jobs = useSelector((state: RootState) => state.jobs.jobs);
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};
export default Home;

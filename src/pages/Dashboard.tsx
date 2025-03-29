import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useDispatch } from "react-redux";
import { addJob } from "../store/jobSlice";
import { AppDispatch } from "../store/store";
const jobSchema = z.object({
  title: z.string().min(3),
  company: z.string().min(2),
  location: z.string().min(2),
  description: z.string().min(5),
});
type JobFormInputs = z.infer<typeof jobSchema>;
const Dashboard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JobFormInputs>({
    resolver: zodResolver(jobSchema),
  });
  const dispatch = useDispatch<AppDispatch>();
  const onSubmit = (data: JobFormInputs) => {
    dispatch(addJob({ id: Date.now(), ...data }));
  };
  return (
    <div className="p-6 dark:bg-gray-900 dark:text-white">
      <h1 className="text-2xl">Post a Job</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("title")}
          placeholder="Job Title"
          className="p-2 border dark:bg-gray-700"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
        <input
          {...register("company")}
          placeholder="Company Name"
          className="p-2 border dark:bg-gray-700"
        />
        {errors.company && (
          <p className="text-red-500">{errors.company.message}</p>
        )}
        <input
          {...register("location")}
          placeholder="Location"
          className="p-2 border dark:bg-gray-700"
        />
        {errors.location && (
          <p className="text-red-500">{errors.location.message}</p>
        )}
        <textarea
          {...register("description")}
          placeholder="Job Description"
          className="p-2 border dark:bg-gray-700"
        />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Post Job
        </button>
      </form>
    </div>
  );
};

export default Dashboard;

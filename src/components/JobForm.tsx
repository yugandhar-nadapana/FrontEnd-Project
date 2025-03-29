import { useState } from "react";

const JobForm = () => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, company, location });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg">
      <div>
        <label>Job Title</label>
        <input
          type="text"
          className="block w-full p-2 border"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Company</label>
        <input
          type="text"
          className="block w-full p-2 border"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <div>
        <label>Location</label>
        <input
          type="text"
          className="block w-full p-2 border"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <button type="submit" className="mt-4 p-2 bg-blue-500 text-white">
        Submit
      </button>
    </form>
  );
};

export default JobForm;

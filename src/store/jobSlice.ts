import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
}

interface JobState {
  jobs: Job[];
}

const initialState: JobState = {
  jobs: [
    { id: 1, title: 'Frontend Developer', company: 'TechCorp', location: 'Remote', description: 'React, TailwindCSS, Redux' },
    { id: 2, title: 'Backend Developer', company: 'DataWorks', location: 'On-site', description: 'Node.js, Express, MongoDB' },
  ],
};

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    addJob: (state, action: PayloadAction<Job>) => {
      state.jobs.push(action.payload);
    },
  },
});

export const { addJob } = jobSlice.actions;
export default jobSlice.reducer;
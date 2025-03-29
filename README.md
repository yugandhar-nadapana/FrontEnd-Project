# Job Portal Web App

## Overview
This is a **Job Portal Web Application** built with **React, Redux, Tailwind CSS, and TypeScript**. It features a job listing system with a dashboard, job details page, and a dark mode toggle.

## Features
- 🏠 **Home Page**: Displays job listings.
- 📄 **Job Details Page**: Shows detailed information about a job.
- 📊 **Dashboard**: User dashboard for job management.
- 🌙 **Dark Mode**: User can toggle between light and dark mode.
- 🛠 **State Management**: Implemented using Redux Toolkit.
- 🎨 **Tailwind CSS** for responsive UI styling.

## Tech Stack
- **React** - Component-based UI
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/job-portal.git
   cd job-portal
   ```

2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```

3. Start the development server:
   ```sh
   npm run dev  # or yarn dev
   ```

4. Open in browser:
   ```
   http://localhost:5173  # Default Vite port
   ```

## Project Structure
```
/job-portal
 ├── src/
 │   ├── components/    # Reusable UI components (Navbar, Sidebar, ThemeToggle)
 │   ├── pages/         # Page components (Home, Dashboard, JobDetails)
 │   ├── store/         # Redux store & slices
 │   ├── styles/        # Tailwind and global styles
 │   ├── App.tsx        # Main application entry
 │   ├── main.tsx       # Renders React app
 │   └── index.css      # Global styles
 ├── public/            # Static assets
 ├── package.json       # Dependencies & scripts
 ├── vite.config.ts     # Vite configuration
 └── README.md          # Project documentation
```

## Dark Mode Implementation
- Dark mode is controlled using Tailwind's `dark:` classes.
- The **ThemeToggle** button updates the `localStorage` and adds/removes the `dark` class on `<html>`.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Make your changes and commit.
4. Push the changes and submit a PR.

## License
This project is licensed under the **MIT License**.

---
**Happy Coding! 🚀**


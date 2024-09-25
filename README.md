# Job Board Application

## Overview

This is a modern job board application built with React, leveraging Clerk for authentication and user management. The application allows job seekers to browse and save job listings, while recruiters can post new job opportunities.

## Features

- User authentication and role-based access (job seekers and recruiters)
- Job posting functionality for recruiters
- Job browsing and saving for job seekers
- Responsive design with a clean user interface

## Technologies Used

- React
- React Router for navigation
- Clerk for authentication and user management
- Lucide React for icons
- Custom UI components (e.g., Button)

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables for Clerk
4. Run the development server: `npm run dev`

## Project Structure

- `src/components/`: React components, including the Header
- `public/`: Static assets like logos

## Key Components

### Header

The Header component (`src/components/header.jsx`) includes:
- Logo and navigation
- Authentication state management
- User menu with links to My Jobs and Saved Jobs
- Job posting button for recruiters

## Contributing

Please read our contributing guidelines before submitting pull requests.

## License

This project is licensed under the MIT License.

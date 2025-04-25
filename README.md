# Marketing Campaign Analytics Dashboard - Frontend

A React-based frontend application for tracking and analyzing marketing campaign performance.

##Demo
https://marketing-fe-seven.vercel.app/ (Frontend)
https://web-production-1aa0d.up.railway.app/docs (Backend)

## Features

- View all marketing campaigns
- Filter campaigns by status (Active/Paused)
- Display campaign metrics (clicks, cost, impressions)
- Real-time data updates
- Responsive design

## Tech Stack

- React
- Axios for API calls
- Bootstrap for styling

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Rudy248/marketing-fe.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with:
   ```
   REACT_APP_API_URL=http://localhost:8000
   ```

4. Start the development server:
   ```bash
   npm start
   ```
   The frontend will be available at `http://localhost:3000`

## Deployment (Vercel)

1. Push your code to GitHub
2. Create a new project on Vercel
3. Connect your GitHub repository
4. Add environment variables:
   - `REACT_APP_API_URL`: Your Railway backend URL
5. Deploy


## License

This project is licensed under the MIT License - see the LICENSE file for details.

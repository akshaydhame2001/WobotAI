# Wobot AI Cameras Dashboard

URL: https://wobot-ai-dun.vercel.app/

![Desktop](./images/DesktopView.png)
![Mobile](./images/MobileView.png)

## Features

- UI is mobile responsive
- Debouncing hook for search
- Pagination
- Location and Status Filters
- Status toggle "Active" | "Inactive"
- Delete Functionality
- Per page item selector
- Horizontal scrollbar in table for mobile
- Scrollbars for long select items list
- Figma-aligned CSS design
- Reusable components
- Centralized store via Context API hook
- Clean code with useful comments

## To run on your machine

Follow these steps to clone, set up, and run the project:

1. **Clone the repository**  
   Open a terminal and run the following command:

   ```bash
   git clone https://github.com/akshaydhame2001/WobotAI.git

   ```

2. **Navigate to the project directory**
   Once cloned, navigate to the project directory:

   ```bash
   cd WobotAI
   ```

3. **Install dependencies**
   Run the following command to install all the required dependencies:

   ```bash
   npm install
   ```

4. **Set Environment Variables**
   Create .env file

   ```bash
   REACT_APP_BEARER_TOKEN="YOUR_WOBOTAI_TOKEN"
   ```

5. **Run the project**
   To start the application, run:
   ```bash
   npm start
   ```

This will start the development server, and you can view the dashboard in your browser at http://localhost:3000.

Note:
This dashboard is currently using a dummy database array with mocking fetch using setTimeout because the Wobot AI API server is down.

- Camera Fetch API: https://api-app-staging.wobot.ai/app/v1/fetch/cameras : This was working initial but after some request it failed to connect.
- Camera Status API: https://api-app-staging.wobot.ai/app/v1/update/camera/status : This was giving 404 Not found error for given payload format (e.g. {"id": 2, "status": "Active"}) and later failed to connect.

To use the real API, uncomment the code in the context/CameraContext.js file where the API call is made (look for the // API call section) to enable interaction with the actual backend.

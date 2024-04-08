# Advice App

## Overview

This project is a simple advice app built with React. It fetches random pieces of advice from the [Advice Slip JSON API](https://api.adviceslip.com/) and displays them to the user. Users can click a button to get a new piece of advice instantly. Additionally, the app keeps track of the number of advice pieces the user has read.

## Features

- **Random Advice Fetching**: Utilizes the `fetch` API to retrieve random advice from the Advice Slip API.
- **State Management with useState**: Uses React's `useState` hook to manage the state of the advice displayed to the user.
- **Asynchronous Data Fetching with useEffect**: Utilizes the `useEffect` hook to asynchronously fetch advice data when the component mounts.
- **Dynamic Rendering**: Dynamically renders the advice on the UI based on the fetched data.
- **User Interaction**: Provides a button for users to fetch new advice with a click.
- **Advice Count Tracking**: Keeps track of the number of advice pieces the user has read and displays it to the user.
- **Responsive Design**: The app is designed to be responsive and mobile-friendly.

## Installation

1. Clone the repository: `git clone https://github.com/yourusername/advice-app.git`
2. Navigate to the project directory: `cd advice-app`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

## Usage

Once the development server is running, open your web browser and navigate to `http://localhost:3000`. You will see the advice app interface. Click the "Get Advice" button to fetch a random piece of advice. The advice count will increase with each piece of advice fetched.

## Technologies Used

- React
- JavaScript (ES6+)
- HTML5
- CSS3
- Fetch API

## Credits

- Advice Slip JSON API: [https://api.adviceslip.com/](https://api.adviceslip.com/)

## License

This project is licensed under the [MIT License](LICENSE).

# Frontend Build Order

This guide outlines the order in which the frontend files should be created and what each file's responsibilities are. The use of CSS variables from the branding style guide is also incorporated from the beginning to maintain consistency.

## Build Order and File Content

### `index.js`✅

- Entry point for the React application.
- Set up the main rendering process, including React StrictMode.

### `App.js`✅

- Main app component that will hold the layout and routing if needed.
- Implement the primary color theme using the CSS variables.

### `GlobalStyles.js`✅
- Contains global styles for the application using styled-components or plain CSS.
- Include CSS variables from the branding style guide here to ensure they're available throughout the app.

### `/contexts/WalletContext.js`✅
- Set up the React context for global state management of wallet data.
- This will include state and functions to handle wallet connections and user session data.

### `/hooks/useWallet.js`✅
- A custom hook to interact with `WalletContext` and provide wallet-related utilities to components.

### `/hooks/useProjects.js`✅
- Custom hook for fetching and managing project data, which might initially come from Google Sheets or another API.

### `/services/api.js`✅
- Holds the functions for making external API calls, whether to smart contracts via web3/ethers or to other services.

### `/components/UserProfile.js`✅
- Stateful component that utilizes `useWallet` hook to display and manage user profile information.

### `/components/ProjectCard.js`✅

- Stateless component to display individual project information.
- Should handle the hover effect to show project stats and use CSS variables for styles.

### `/containers/ProjectList.js`
- Fetches the list of projects using `useProjects` and renders `ProjectCard` components.

### `/containers/UserDashboard.js`
- A higher-level component that might use both `UserProfile` and `ProjectList` to create a dashboard interface.

### `/tests/ProjectCard.test.js`
- Unit tests for `ProjectCard` component ensuring it renders correctly and displays the right information.

### `/tests/useProjects.test.js`
- Tests for the `useProjects` hook to verify that project data is fetched and managed correctly.

## CSS Integration

The CSS variables defined in the Development Style Guide are integrated from the beginning to ensure design consistency. The `GlobalStyles.js` file is the ideal place to declare these for use across all styled-components.

By following this order and descriptions, we create a solid foundation for our application, ensuring that each part of the system is focused and has a clear purpose. This also helps minimize bugs by building up functionality in manageable pieces.

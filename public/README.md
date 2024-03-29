The create-react-app command is generally used at the very beginning of setting up a new React project. Since you've manually created your project files, there's no need for the next user to run create-react-app.

However, it would be good practice to include instructions on how to get the project up and running in your README.md. This should include steps like installing dependencies, available scripts, and any other necessary setup instructions. Here's an example of what you might include in your README.md:

markdown
Copy code
# iChain App

This project was manually set up with a custom configuration.

## Available Scripts

In the project directory, you can run:

## 'npm install react-scripts --save'


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Custom Setup

- Describe any custom setup that was done.
- Include how to install dependencies (e.g., `npm install`).
- Mention any other necessary steps to get the project running.

## Contributing

- Instructions for how to contribute to the project.
- Guidelines for submitting pull requests.

## License

- Information about the project's license.
Replace the placeholder texts with information relevant to your project. This will help any future developers understand how to work with your project. If there are specific things they need to know about your manual setup, make sure to include those details.

As for requirements.txt, this is typically used for Python projects to list all the necessary packages. For a JavaScript project like yours, all dependencies should be listed in your package.json file under dependencies and devDependencies.

Before you consider the setup complete, make sure:

You've run npm install to install all the dependencies listed in package.json.
You've tested the main scripts like npm start, npm test, and npm run build to ensure they work as expected.
Any custom configurations or important details are documented in the README.md.
Once these steps are completed, your project should be in good shape for the next user or developer to pick up and run with.

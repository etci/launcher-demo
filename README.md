
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run lint`

Runs ESLint throughout the whole project and fixes the problems based on the rules if it can.

### `npm run format`

Formats the code based on the Prettier config.


# Task summary

I create the project with **create react app**, in order not to lose time with the setup. I plannned to use *redux* as a state management library, and *bootstrap* for styling, before getting the assignment description. However, once I've read the assignment, I got rid of *redux* because there is no need to introduce such boilerplate. Instead, I wrapped the state within a custom hook.
I've also planned to use *react-router*, though it seems it is also unnecessary, I left it as is, with a single route. This is the first time I've used a map API, therefore I choose to go with Google Maps. In the *useAsyncHook*, I'm capturing the error, if I had more time, I'd wrap the Launches view with error boundary, to allow user to try again on error. Instead, I'm displaying an alert within the Launches component. I've managed to render the
Markers on the map, but couldn't find time to handle on click. I've lost time trying to create API key for Google Maps. The base url of the API, and Google Maps API key can be retrieved from the environment. I wouldn't push the .env file to the repo, but I've done it in case you don't have an API key.  
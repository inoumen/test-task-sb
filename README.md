# test-task-sb

This a test-task sample that I made having a time limit of 8 hours. There is a web view for API, that brings some info about users of the popular platform. It's made with Vite and React.js, in the Redux-free approach. Unfortunately, this web view does not work fully without an API address, which I keep in env variables. 

# How to start

- Make sure that git, node, and npm are installed
- Checkout the project by running this script in a terminal:

```
git clone https://github.com/inoumen/test-task-sb.git
```

- In a terminal navigate to the project folder and run the next script:

```
npm i
```

This way the project is ready to start. 

After this, please create .env.local file and add there a variable VITE_APP_API_ADDR that should be equal to the API URL. 

```
npm run dev
```

- It will run the web app, and you will see the address (http://127.0.0.1:5173) in the terminal output. 

# Tech used

- React
- Vite
- Styled Components
- React Icons
- React Semantic UI
- React Query
- Eslint
- Prettier

# Available Scripts

In the project directory, you can run:

## npm run dev

Runs the app in the development mode. Open [http://127.0.0.1:5173](http://127.0.0.1:5173) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## npm run build

Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. If necessary, class names and function names can be enabled for profiling purposes. See the production build section for more information.

The app is ready to be deployed! See the section about deployment for more information about deploying your application to popular hosting providers.


## lint

Runs eslint with configured rules against js files to check that code and formatting.

## fix

Same as `lint` but also fixes all issues that can be auto-resolved and applies prettier rules to make the code formatting.

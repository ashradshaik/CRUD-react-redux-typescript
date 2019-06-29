This project was developed by REACT, Redux and typescript

npm install create-react-app create-react-app my-app --typescript //will create react app with typescript

I used node js, express and mongodb for backend and for forntend I used React and Redux. To combine both framework I used concurrently (npm install concurrently) //to run simply open terminal and type npm run dev I used dev dependency to run both framworks

Package.json{ { "name": "crud-app", "version": "0.1.0", "private": true, "dependencies": { "@types/jest": "24.0.15", "@types/node": "12.0.10", "@types/prop-types": "^15.7.1", "@types/react": "16.8.22", "@types/react-dom": "16.8.4", "@types/react-redux": "^7.1.1", "@types/react-router": "^5.0.2", "@types/react-router-dom": "^4.3.4", "body-parser": "^1.19.0", "concurrently": "^4.1.1", "express": "^4.17.1", "mongodb": "^3.2.7", "prop-types": "^15.7.2", "react": "^16.8.6", "react-dom": "^16.8.6", "react-redux": "^7.1.0", "react-router": "^5.0.1", "react-router-dom": "^5.0.1", "react-scripts": "3.0.1", "redux": "^4.0.1", "redux-thunk": "^2.3.0", "typescript": "3.5.2" }, "scripts": { "start": "react-scripts start", "build": "react-scripts build", "test": "react-scripts test", "eject": "react-scripts eject", "client": "npm start --prefix client", "server": "nodemon ./src/server/server", "dev": "concurrently "npm run server" "npm start"" }, "eslintConfig": { "extends": "react-app" }, "browserslist": { "production": [ ">0.2%", "not dead", "not op_mini all" ], "development": [ "last 1 chrome version", "last 1 firefox version", "last 1 safari version" ] }, "devDependencies": { "nodemon": "^1.19.1" }, "proxy": "http://localhost:5000" } }

To connect database I downloaded mongodb zip file into my local machine and create a empty folder to transfer the data by using CLI "/Users/psrir/mongodb/bin/mongod.exe --dbpath=/Users/psrir/mongodb-data"

Before creating a notes I used some dummy content to insert into database to see in view

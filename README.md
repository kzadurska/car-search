# car-search

## Task
 
### Requirements

- Make a mobile first and desktop-friendly UI.
- Build your own styles, don't use any CSS framework like Bootstrap.
- The app should work on the latest version of all major browsers

### Considerations

- Think of a user-friendly way to find and select a vehicle.
- Please focus on timeliness and completeness - if you have to choose between delivering 100% of the first feature + 0% of the second, and 50%-50%, please choose the first option.
- The API calls will not always return a successful result (200 OK), be aware of this! Do not modify the provided server.
- The provided API has only a fraction of the vehicles that we would have in a production server.
- Make it easy to build and run
- Think of this app as a real project where you need to consider maintainability.
- Only use 3rd party components if there is good reasoning for it. Please justify if not a basic library.
- Don't be afraid to surprise us!

### My comments for consideration
-  *Think of a user-friendly way to find and select a vehicle.* Decided to use native buttons and dropdowns so that mobile users get this native experience they are used to.
- *The API calls will not always return a successful result* Added error handling.
- *The provided API has only a fraction of the vehicles that we would have in a production server* Added loading states and loader to indicate it to the user - especially needed with a heavy payload.
- *Only use 3rd party components if there is good reasoning for it. Please justify if not a basic library* Except for the basic setup I used `styled-components` because I am used to styling apps this way. I added `uuid` to have a unique id for vehicles. Normally there would probably be a unique identifier from backend and adding array index to key is considered an anti-pattern. 

## Installation

```bash
git clone git@github.com:kzadurska/car-search.git
cd car-search
npm ci
```

## Development

`npm start`

The app will be available at http://0.0.0.0:8081/

For production build type `npm run build`, the app will be built into the `/dist` directory.

By default the app will use `http://localhost:8080` as the API URL. To pass a specific URL use `API_URL` parameter when launching and building the app:

`API_URL=https://your.url.here npm start`
`API_URL=https://your.url.here npm run build`

### Backend API

Downloaded from [Gitlab](https://gitlab.forfriday.de/-/snippets/56#frontend-developer-candidate-assignment)

Run server by `node apiserver/server.js`

## Contributing

* To lint files run `npm run lint`
* To format code run `npm run prettier`

Both accept `:fix` parameter that'll try to automatically fix whatever is possible.
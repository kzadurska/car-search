# car-search

## Task
 
### Requirements

- Documentation of the project installation
- Notes about the main problem the code solution is trying to solve.
- JavaScript practices and standards will be evaluated.
- The DRY principle to eliminate duplication in logic.
- Clear structure of the project.
- Adding unit tests if you have enough time.
- State management and structure.
- Mobile first and desktop-friendly UI.
- Build your own styles, don't use any CSS framework like Bootstrap.
- The app should work on the latest version of all major browsers.
- Build tools for project development and production setup (optional).
- User interface design will not be so important for the evaluation.


### Considerations

- Think of a user-friendly way to find and select a vehicle.
- Please focus on timeliness and completeness - if you have to choose between delivering 100% of the first feature + 0% of the second, and 50%-50%, please choose the first option.
- The API calls will not always return a successful result (200 OK), be aware of this! Do not modify the provided server.
- The provided API has only a fraction of the vehicles that we would have in a production server.
- Make it easy to build and run
- Think of this app as a real project where you need to consider maintainability.
- Only use 3rd party components if there is good reasoning for it. Please justify if not a basic library.
- Don't be afraid to surprise us!

### What I considered doing but did not in the end

TDB

## Installation

```bash
git clone git@github.com:kzadurska/car-search.git
cd car-search
npm ci
```

## Development

`npm start`

The app will be available at http://0.0.0.0:8080/

For production build type `npm run build`, the app will be built into the `/dist` directory.

By default the app will use `http://localhost:8080/` as the API URL. To pass a specific URL use `API_URL` parameter when launching and building the app:

`API_URL=your.url.here npm start`
`API_URL=your.url.here npm run build`

## Contributing

* To lint files run `npm run lint`
* To format code run `npm run prettier`

Both accept `:fix` parameter that'll try to automatically fix whatever is possible.
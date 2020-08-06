# Stech Frontend Technical Challenge
Hi 👋 and welcome to the frontend tech challenge. We'd like you to create a simple, responsive webpage that ingests data from an API and displays it in a useful format for potential users. You don't need to worry about design or layout, as we've provided mockups that you should try to replicate (as closely as possible).

## Page Design
Design mockups are provided through Zeplin. Don't worry if you've never used the service before, it's pretty easy to navigate and you can sign up for free. Once you've done so you should be able to see both images when you use the links below ⬇

- [Mobile Layout](https://zpl.io/awKqRBd)
- [Desktop Layout](https://zpl.io/bWO4ovx)

PS: if you'd prefer not to use Zeplin, both images can be found in the root folder of the repository. We'd recommend Zeplin though, as it will provide you with a lot more information in terms of layout dimensions, design choices, and CSS.

## Getting Started

### Software Requirements
First, you'll need to have the following programs and services installed locally:
- [**NodeJS**](https://nodejs.org/en/) >= 8.10
- **npm** >= 5.6 (included in the NodeJS installation)
- [**Git**](https://git-scm.com/downloads) >= 2.27.0

You'll also need a **GitHub account** if you don't already have one.
We'd also strongly recommend the use of an IDE such as [Visual Studio Code](https://code.visualstudio.com/), as well as [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/), though feel free to use whatever setup you prefer 👍

### Setting Up The Challenge
1. Open a terminal window and navigate to the folder you want the repository to sit within;
1. Clone the repository to your local drive using:
`git clone https://github.com/WhiteOrg/frontend-tech-test.git`
1. Change directory into the new folder:
`cd frontend-tech-test`
1. Run `git status` to ensure that you're on the correct branch (`main`) and that the upstream branch is recognised (`origin/main`);
1. Create a new branch using **your name** e.g.
`git checkout -b katherine-johnson`
1. Run `npm start` to launch the app to [http://localhost:3000](http://localhost:3000); you should see a rotating ReactJS logo and some text if everything has worked. Edit that page in the `App.js` file and you should see it automatically update in the browser when you hit save 😎

At this stage, feel free to push your branch back up to the original repository (see submission instructions for how). We won't peek at your work until you submit the final solution, so it's fine (recommended, even) to use the GitHub repo as a backup as you progress.

## The Challenge
You've been provided with the designs for a new landing page, advertising a player tournament that we're looking to launch: **Play'n GO!**

The tournament will run for 7 days, offer a sizeable £25,000 prize pool, and allow players to rack up points across six featured games.

The landing page has been designed to highlight this information as clearly as possible, whilst also allowing players to sign up for the tournament, track the total number of competitors, and see a real-time, scrollable leaderboard that includes prize allocation.

The page also includes a terms and conditions section and options to share the tournament on social media.

The information on the page will be a mixture of hard coded or (where available) should be pulled in from the provided API endpoint (listed below).

Both the leaderboard and the countdown timer should be dynamic.
The leaderboard should retrieve the current rankings from the API endpoint when the page loads, as well as updating those rankings whenever a user presses the refresh button just above it. The leaderboard should always be sorted based on player ranking and must display the top six players at all times, with the rest accessible when a user scrolls.
The timer should count down from the start date and will therefore need to automatically refresh its value every minute. **For the sake of the challenge, it's fine to just make the timer always "start" at 7 days regardless of the actual date or value of the tournament start date.**

The "join" button and both social media share buttons should be valid, accessible buttons. However **they do not need to route the user anywhere**.

The page headline should read **Play'n GO Tournament** at all screen sizes. On the provided mockups you'll notice that the mobile design has a two-line headline, but that should be ignored.

### API Endpoint
You have also been provided with an API endpoint that details some key information about the tournament (title, start and end dates, player rankings etc.).

Your solution should request all information from the API, ingest the returned JSON package, and use the details it contains to populate the webpage.

Where the API data differs from the design mockups, **prioritise the API version**, for example the total number of players.

Endpoint:
`https://run.mocky.io/v3/e60fb51f-02b1-4ede-bd82-6c0481b5edda`

### What We're Looking For
Your solution should:

- Take a mobile-first approach;
- Be fully responsive;
- Match the provided designs as closely as possible;
- Make use of modern CSS layout techniques;
- Be built from reusable UI components;
- Show an understanding of core React concepts such as `props`;
- Retrieve the necessary information from the provided API endpoint or gracefully fail if the request returns an error;
- Use semantic code wherever possible, including HTML5 elements and human-readable variable naming;
- Be accessible for all users.

How you achieve that is entirely up to you. The repository should have all the tools you need, but if you'd like to augment them with additional dependencies or services then go for it 👩‍💻

### Bonus Points
Just a few additional extras if you have spare time. These are _absolutely not necessary_ but mimic our own internal tech stack a bit more closely, so it's useful for us to see how you might use them.

- Using some CSS-in-JS. We use [Styled Components](https://styled-components.com/) internally and you'll find that package already included within the repository.
- Writing a unit test or two. We're definitely not looking for perfect code coverage (or any code coverage, honestly), but if you're comfortable using tools like [Jest](https://jestjs.io/) or [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) then feel free to check some core pieces of functionality.
- Adding a touch of type safety. You'll find [TypeScript](https://www.typescriptlang.org/) is available if you prefer working with type-safe components.

## Submitting Your Solution
Once you're happy with your work, follow these steps:

1. Ensure any test code is tidied up (debug strings, commented out functionality, etc. – actual comments are encouraged);
1. Push your branch back to the original repository (use **your branch name** not the example below):
`git push -u origin katherine-johnson`
1. On GitHub, open a new pull request to merge your branch into `main`, with your name as the title;
1. Add any relevant notes or comments to the description as necessary;
1. Hit **Create Pull Request** and you're done! ✨

Don't worry if you submit a PR and then realise you've missed something or think of a better solution to part of the challenge. We're not testing to see how *fast* you are but how good your code quality is, so feel free to push up additional changes right up to the deadline. The pull request will automatically update each time you do.
Any changes submmited _after_ the deadline, however, won't be considered.

### What Happens Next?
We'll review your submitted solution against the criteria outlined above and be in touch. If you're solution is successful then you'll be invited to a final stage interview with Antonio to go over culture fit, your broader career goals, and provide you with a chance to ask any remaining questions that you have about Stech.
No matter what our decision, expect feedback within one working day of your deadline.

## Useful Information

The repository is based on [Create React App](https://github.com/facebook/create-react-app), which gives you access to a few useful commands:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimises/minifies the build for the best performance.

**We'd strongly recommend running `build` before submitting your solution.**

## Other Useful Resources

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

The [React documentation](https://reactjs.org/) is also a useful reference point if you get stuck.

# Hogwarts-Hopefuls README <!-- omit in toc -->
    - [Component Tree](#component-tree)
- [Post-MVP](#post-mvp)

<br>

## Overview

**Hogwarts Hopefuls** is an app where users can sign up for an added touch of magic in their lives. Once an account is creacted, the user (aka future Hogwarts student) will recieve their Hogwarts acceptance letter, be sorted into their respective Hogwarts house based on their answer to a question, and be assigned a signature spell. Additionally, students can select to have a pet and a patronus.

<br>

## MVP

The **Hogwarts Hopefuls** MVP will be a full-stack, RESTful app with at least three tables and one association. Its backend will employ full CRUD via Ruby on Rails (deployment via Heroku), while its frontend will be a React App with full CRUD (deployment via Netlify). It will have 2 media queries for responsive design.

<br>

### Goals

- Full CRUD functionality on backend and frontend
- Backend database will consist of 3 tables and 2 one-to-one associations
- Flexbox for responsive design
- Cohesive design aesthetic via CSS

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|     bcrypt      | _Hashes passwords for user security._ |
|  JWT  | _Encodes and decodes JSON Web Tokens._ |
|  CORS  | _Allows backend database to interact with and be accessed by the frontend._ |
|      React       | _A JavaScript library that creates a front-end via UI components._ |
|   React Router Dom  | _Enables dynamic routing for a React app._ |

<br>

### Client (Front End)

#### Wireframes



![HomePage](https://res.cloudinary.com/dyyjvyqtn/image/upload/v1635813047/Project_4_team_library_zejdsi.jpg | width=100)

)
<img src="https://res.cloudinary.com/dyyjvyqtn/image/upload/v1635813047/Project_4_team_library_zejdsi.jpg" width="100">
- Mobile Landing Page

![Alumni](https://res.cloudinary.com/dyyjvyqtn/image/upload/v1635813126/Mobile_Alumni_crkns7.jpg)

- Mobile Alumni Page

![SignUp](https://res.cloudinary.com/dyyjvyqtn/image/upload/v1635813211/Mobile_SignUp_vg0wpw.jpg)

- Mobile Sign Up Page

![SignIn](https://res.cloudinary.com/dyyjvyqtn/image/upload/v1635813341/Mobile_SignIn_nsqrcb.jpg)

- Mobile Sign In Page

![HogwartsLetter](https://res.cloudinary.com/dyyjvyqtn/image/upload/v1635813346/Mobile_HogwartsLetter_wk8ea7.jpg)

- Mobile Hogwarts Acceptance Letter

![HogwartsLetterPartTwo](https://res.cloudinary.com/dyyjvyqtn/image/upload/v1635813346/Mobile_HogwartsLetterPartTwo_d2kc9y.jpg)

- Mobile Hogwarts House Sorting and Spell Assignment


![Profile](https://res.cloudinary.com/dyyjvyqtn/image/upload/v1635813683/Mobile_Profile_vemwfd.jpg)

- Mobile Student Profile


![ProfileEdit](https://res.cloudinary.com/dyyjvyqtn/image/upload/v1635813683/Mobile_ProfileEdit_lo53nn.jpg)

- Mobile Edit Student Profile

![Alumni](https://res.cloudinary.com/dyyjvyqtn/image/upload/v1635813801/Tablet_Alumni_ofjlph.jpg)

- Tablet Alumni Page


![Alumni](https://res.cloudinary.com/dyyjvyqtn/image/upload/v1635813808/Desktop_Alumni_bfygrh.jpg)

- Desktop Alumni Page


#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

[Component Tree Sample](https://gist.git.generalassemb.ly/davidtwhitlatch/414107e2560ae0bb65e233570f2fe056#file-component-tree-png)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ components/
      |__ Footer.jsx
      |__ Footer.css
      |__ Navbar.jsx
      |__ Navbar.css
      |__ Layout.jsx
      |__ Layout.css
      |__ ScrollToTop.jsx
      |__ ScrollToTop.css
      |__ SignOut.jsx
      |__ SignOut.css
      |__ StudentCard.jsx
      |__ StudentCard.css
|__ containers/
      |__ MainContainer.jsx
      |__ MainContainer.css
|__ screens/
      |__ Alumni.jsx
      |__ Alumni.css
      |__ Home.jsx
      |__ Home.css
      |__ Letter.jsx
      |__ Letter.css
      |__ LetterPartTwo.jsx
      |__ LetterPartTwo.css
      |__ Profile.jsx
      |__ Profile.css
      |__ ProfileEdit.jsx
      |__ ProfileEdit.css
      |__ SignIn.jsx
      |__ SignIn.css      
      |__ SignUp.jsx
      |__ SignUp.css
|__ services/
      |__ apiConfig.jsx
      |__ authorization.jsx
      |__ houses.jsx
      |__ spells.jsx

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| README    |    H     |     3 hrs      |     3 hrs     |     hrs    |
| ERD Model |    H     |     1 hrs      |    .5 hrs     |     hrs     |
| Component Tree |    H     |     1 hrs      |      hrs     |     hrs     |
| Component Architecture |    H     |     1 hrs      |     .5 hrs     |     hrs     |
| Wireframes |    H     |     3 hrs      |     4 hrs     |     hrs     |
| Create and Setting Up Backend |    H     |     1 hrs      |     hrs     |     hrs     |
| Authorization |    H     |     2 hrs      |     hrs     |     hrs     |
| Create Tables |    H     |     1 hrs      |     hrs     |     hrs     |
| Create Models |    H     |     1 hrs      |     hrs     |     hrs     |
| Seed Data |    H     |     2 hrs      |     hrs     |     hrs     |
| Create Controllers |    H     |     3 hrs      |     hrs     |     hrs     |
| Create Routes |    H     |     3 hrs      |     hrs     |     hrs     |
| Set Up Cors |    H     |     .5 hrs      |     hrs     |     hrs     |
| Deploy Backend via Heroku |    H     |     1 hrs      |     hrs     |     hrs     |
| Create React App, Install Dependencies, Set Up Component Architecture |    H     |     1.5 hrs      |     hrs     |     hrs     |
| Code Routes in App.jsx |    H     |     2 hrs      |     hrs     |     hrs     |
| Code Authorization - Sign In/ Sign Up Forms with Sign Out Component |    H     |     3 hrs      |     hrs     |     hrs     |
| Code Layout Component |    H     |     2 hrs      |     hrs     |     hrs     |
| Code Home Screen |    H     |     3 hrs      |     hrs     |     hrs     |
| Code Sorting / Spell Screens |    H     |     3 hrs      |     hrs     |     hrs     |
| Code Profile/Edit Screen |    H     |     3 hrs      |     hrs     |     hrs     |
| Code Alumni Screen |    H     |     3 hrs      |     hrs     |     hrs     |
| Style Layout - Header + Footer |    H     |     3 hrs      |     hrs     |     hrs     |
| Style Home Screen |    H     |     3 hrs      |     hrs     |     hrs     |
| Style Sign In/Up Screens |    H     |     3 hrs      |     hrs     |     hrs     |
| Style Sorting / Spell Screens |    H     |     3 hrs      |     hrs     |     hrs     |
| Style Profile/Edit Screen |    H     |     3 hrs      |     hrs     |     hrs     |
| Style Alumni Screen |    H     |     3 hrs      |     hrs     |     hrs     |
| Deploy Frontend via Netlify |    H     |     1 hrs      |     hrs     |     hrs     |
| Linting |    M     |     1 hrs      |     hrs     |     hrs     |
| TOTAL               |          |     64 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model
![ERD Sample](https://res.cloudinary.com/dyyjvyqtn/image/upload/v1635809676/hogwarts_hopefuls_ERD_pqpbbh.png)
<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.

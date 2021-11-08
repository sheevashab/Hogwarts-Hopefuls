# Hogwarts-Hopefuls README <!-- omit in toc -->

<br>

## Overview

**Hogwarts Hopefuls** is an app where users can sign up for an added touch of magic in their lives. Once an account is creacted, the user (aka future Hogwarts student) will recieve their Hogwarts acceptance letter, be sorted into their respective Hogwarts house based on their answer to a question, and be assigned a signature spell. Additionally, students can select to have a pet, a patronus, and a profile picture.

<br>

## MVP

The **Hogwarts Hopefuls** MVP will be a full-stack, RESTful app with at least three tables and one association. Its backend will employ full CRUD via Ruby on Rails (deployment via Heroku), while its frontend will be a React App with full CRUD (deployment via Netlify). It will have 2 media queries for responsive design.

<br>

### Goals

- Full CRUD functionality on backend and frontend
- Backend database will consist of 4 tables, 2 one-to-many associations, and 1 one-to-one assocation
- Flexbox for responsive design
- Cohesive Hogwarts-esque design aesthetic via CSS

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|     bcrypt      | _Hashes passwords for user security._ |
|  JWT  | _Encodes and decodes JSON Web Tokens._ |
|  CORS  | _Allows backend database to interact with and be accessed by the frontend._ |
|      React       | _A JavaScript library that creates a front-end via UI components._ |
|   React Router Dom  | _Enables dynamic routing for a React app._ |
|   Axios  | _Sends promise-based, asynchronous HTTP calls from the browser so that the application can perform full CRUD functions._ |

<br>

### Client (Front End)

#### Wireframes

- Mobile Landing Page
<img src="https://res.cloudinary.com/dyyjvyqtn/image/upload/v1635813047/Project_4_team_library_zejdsi.jpg" width="350">

- Mobile Alumni Page
<img src="https://res.cloudinary.com/dyyjvyqtn/image/upload/v1635813126/Mobile_Alumni_crkns7.jpg" width="350">

- Mobile Sign Up Page
<img src="https://res.cloudinary.com/dyyjvyqtn/image/upload/v1635813211/Mobile_SignUp_vg0wpw.jpg" width="350">

- Mobile Sign In Page
<img src="https://res.cloudinary.com/dyyjvyqtn/image/upload/v1635813341/Mobile_SignIn_nsqrcb.jpg" width="350">

- Mobile Hogwarts Acceptance Letter
<img src="https://res.cloudinary.com/dyyjvyqtn/image/upload/v1635813346/Mobile_HogwartsLetter_wk8ea7.jpg" width="350">

- Mobile Hogwarts House Sorting and Spell Assignment
<img src="https://res.cloudinary.com/dyyjvyqtn/image/upload/v1635813346/Mobile_HogwartsLetterPartTwo_d2kc9y.jpg" width="350">

- Mobile Student Profile
<img src="https://res.cloudinary.com/dyyjvyqtn/image/upload/v1635813683/Mobile_Profile_vemwfd.jpg" width="350">

- Mobile Edit Student Profile
<img src="https://res.cloudinary.com/dyyjvyqtn/image/upload/v1635813683/Mobile_ProfileEdit_lo53nn.jpg" width="350">

- Tablet Alumni Page
<img src="https://res.cloudinary.com/dyyjvyqtn/image/upload/v1635813801/Tablet_Alumni_ofjlph.jpg" width="450">

- Desktop Alumni Page
<img src="https://res.cloudinary.com/dyyjvyqtn/image/upload/v1635813808/Desktop_Alumni_bfygrh.jpg" width="600">


#### Component Tree

![Component Tree](https://res.cloudinary.com/dyyjvyqtn/image/upload/v1636339178/Project4_Component_Tree_2x_b1hs37.png)

#### Component Architecture

``` structure

src
|__ components/
      |__ Footer.jsx
      |__ Footer.css
      |__ Layout.jsx
      |__ Layout.css
      |__ Navbar.jsx
      |__ Navbar.css
      |__ ScrollToTop.jsx
|__ containers/
      |__ MainContainer.jsx
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
      |__ students.jsx
      |__ users.jsx

```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| README    |    H     |     3 hrs      |     3 hrs     |   3  hrs    |
| ERD Model |    H     |     1 hrs      |    .5 hrs     |    .5 hrs     |
| Component Tree |    H     |     1 hrs      |     1 hrs     |   1  hrs     |
| Component Architecture |    H     |     1 hrs      |     .5 hrs     |    .5 hrs     |
| Wireframes |    H     |     3 hrs      |     4 hrs     |    4 hrs     |
| Create and Setting Up Backend |    H     |     1 hrs      |    .5 hrs     |    .5 hrs     |
| Authorization |    H     |     2 hrs      |    1 hrs     |    1 hrs     |
| Create Tables |    H     |     1 hrs      |    .5 hrs     |    .5 hrs     |
| Create Models |    H     |     1 hrs      |    1 hrs     |    1 hrs     |
| Seed Data |    H     |     2 hrs      |    1 hrs     |    1 hrs     |
| Create Controllers |    H     |     3 hrs      |    2 hrs     |    2 hrs     |
| Create Routes |    H     |     3 hrs      |    1 hrs     |     hrs     |
| Deploy Backend via Heroku |    H     |     1 hrs      |    .5 hrs     |    .5 hrs     |
| Create React App, Install Dependencies, Set Up Component Architecture |    H     |     1.5 hrs      |    .5 hrs     |    .5 hrs     |
| Code Routes in App.jsx |    H     |     2 hrs      |    2 hrs     |    2 hrs     |
| Code Authorization - Sign In/ Sign Up Forms with Sign Out Component |    H     |     3 hrs      |    2 hrs     |    2 hrs     |
| Code Layout Component |    H     |     2 hrs      |    1 hrs     |    1 hrs     |
| Code Home Screen |    H     |     3 hrs      |    1 hrs     |    1 hrs     |
| Code Sorting / Spell Screens |    H     |     3 hrs      |    1.5 hrs     |    1.5 hrs     |
| Code Profile/Edit Screen |    H     |     3 hrs      |    2.5 hrs     |    2.5 hrs     |
| Code Alumni Screen |    H     |     3 hrs      |    2 hrs     |    2 hrs     |
| Style Layout - Header + Footer |    H     |     3 hrs      |    3 hrs     |    3 hrs     |
| Style Home Screen |    H     |     3 hrs      |    2 hrs     |    2 hrs     |
| Style Sign In/Up Screens |    H     |     3 hrs      |    2 hrs     |    2 hrs     |
| Style Letter / LetterPartTwo Screens |    H     |     3 hrs      |     hrs     |     hrs     |
| Style Profile/Edit Screen |    H     |     3 hrs      |    3 hrs     |    3 hrs     |
| Style Alumni Screen |    H     |     3 hrs      |    3 hrs     |    3 hrs     |
| Deploy Frontend via Netlify |    H     |     1 hrs      |    .5 hrs     |    .5 hrs     |
| Linting |    M     |     1 hrs      |     .5 hrs     |    .5 hrs     |
| TOTAL               |          |     64 hrs      |     43 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model
![ERD Sample](https://res.cloudinary.com/dyyjvyqtn/image/upload/v1635902039/ERD_2.crswap.drawio_gs9uvt.png)
<br>

***

## Post-MVP

My Post-MVP for this project would be expanding on its functionality. I think it would be a more useful app if the users could accomplish more during their visit. For example, I would like to expand the sorting hat questionairre to more than a single question. I would also like to make a quiz to assign the specialty spell and patronus. 
Using a sorting function to create a 'Common Room', or a space for students of the same house to find each other, is also a postMVP function. 
As far as styling goes, I would like to conditionally render the background color for the profile card to match the student's house. 

***

## Code Showcase
```
<div className='sorting-letter-container'>
      If you could be a flavor of Bertie Bott's Every Flavor Beans, which would you be?
      <button onClick={() => handleStudentCreate({ house_id: 4 })}>Earthworm</button>
      <button onClick={() => handleStudentCreate({ house_id: 2 })}>Earwax</button>
      <button onClick={() => handleStudentCreate({ house_id: 1 })}>Grass</button>
      <button onClick={() => handleStudentCreate({ house_id: 3 })}>Rotten Egg</button>
      {currentStudent && <div>
        <h2>{currentStudent.house.name}</h2>
        <p>And before we let you leave for Diagon Ally, we have one more question to ask our incoming students. Click your wand on the magical button below to connect your wand’s core to the school’s database.</p>
        <button onClick={() => setShowSpell(true)}>WandPicture</button>
        {showSpell && <div>
          <p>Brilliant! Your specialty spell has been revealed as...</p>
          <h2>{currentStudent.spell.name}</h2>
          <Link to={`/profile/${currentStudent.id}/edit`}><button>Arrow</button></Link>
        </div>}
      </div>}
    </div>
```
This is the code that renders the second part of the Hogwarts letter. The curly brackets and the double ampersand tell React to render the sections one at a time rather than displaying everything on the page on the initial load.

***

## Code Issues & Resolutions
```
class User < ApplicationRecord
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: {minimum: 8}

  has_one :student

  def has_student
    !!student
  end

end
```
> I struggled to create the one-to-one relationship between the user and the student. With the method has_student, the frontend is able to prompt the user to create a student if they decide to delete the one they currently have.

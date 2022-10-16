import React from 'react';
import './flashcards.css';

const subjectIcons = {
  React: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png", 
  JavaScript: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  HTML: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
  CSS: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
  NodeJS: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png",
  ExpressJS: "https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png",
  Angular: "https://angular.io/assets/images/logos/angular/angular.svg",
}

const flashcards = [
  {
    Subject: "React",
    Title: "What is React?",
    Content: "React is a front-end JavaScript library developed by Facebook"
  },
  {
    Subject: "Angular",
    Title: "What is Angular?",
    Content: "Angular is a front-end JavaScript framework developed by Google"
  },
  {
    Subject: "HTML",
    Title: "What is HTML?",
    Content: "Hyper Text Markup Language (HTML) is the standard markup language for documents displayed in a web browser"
  },
  {
    Subject: "CSS",
    Title: "What is CSS?",
    Content: "Cascading Style Sheets (CSS) is a style sheet language for describing the presentation of HTML or CSS"
  },
  {
    Subject: "JavaScript",
    Title: "What is JavaScript?",
    Content: "JavaScript is a language used to create dynamic and interactive web content"
  },
  {
    Subject: "NodeJS",
    Title: "What is Node.js?",
    Content: "Node.js is a back-end Javascript runtime environment executing JavaScript outside of a web browser"
  },
  {
    Subject: "ExpressJS",
    Title: "What is Express.js?",
    Content: "Express.js is a back-end framework for building RESTful API's with Node.js"
  },
  {
    Subject: "RESTful",
    Title: "What is RESTful?",
    Content: "Representational State Transfer is a software architecture describing a uniform interface between client-server applications"
  },
];

const flashcardElements = flashcards.map(card => {
  return(
    <div className='flashcard'>
      <img src={subjectIcons[card.Subject]} className="flashcard-icon" alt="Subject Icon"></img>
      <h1>{card.Subject}</h1>
      <h3>{card.Title}</h3>
      <p>{card.Content}</p>
    </div>
  )
})

function Flashcards() {
  return (
    <div className='flashcards'>
      {flashcardElements}
    </div>
  );
}

export default Flashcards

/*
A flash card system which stores flashcards in an array
Each flashcard has a 'Subject', 'Title' and 'Content'
Each flashcard will have a small icon based on it's selected 'Subject' 

NEW 
Pressing the 'New' button will open a fresh flashcard template with inputs
On 'Save', the flashcard will be added oto Flashcards[]

DELETE
Pressing the 'Delete' button on a flashcard will delete it from the array

EDIT
Pressing 'Edit' on a flashcard will convert it's display to an input with its current values

FILTER
Filter by 'Subject' from all unique 'Subject' keys

COUNTER
A counter which counts the amount of times a card has been 'Read' by clicking 'Next'

FLAGGING
A counter which flags cards as 'High Priority' if they are less understood than the rest

LISTS
Add cards to a custom list, which can then be viewed separately from all non-custom listed cards

STORE
Store the cards in a database, either SQL or MongoDB
Retrieve cards from the database, and call fetch on any array changes
*/
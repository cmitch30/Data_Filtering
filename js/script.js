/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {
  const perPage = 9;
  let startIndex = page * perPage - perPage;
  let endIndex = page * perPage;
  const studentList = document.querySelector(".student-list");
  studentList.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
   //set i to variable for clarity
    let student = list[i];
    
    if (i >= startIndex && i < endIndex) {
      //add items to studentItem using literal
       const studentItem = `<li class ="student-item cf">
       <div class="student-details">
       <img class="avatar" src="${student["picture"].large}" alt="Profile Picture">
       <h3>${student["name"].first} ${student["name"].last}</h3>
       <span class="email">${student["email"]}</span>
       </div>
       <div class="joined deatils">
       <span class="date">${student["registered"].date}</span>
       </div>
       </li>`
       studentList.insertAdjacentHTML("beforeend", studentItem);
      }
   }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
   const numOfPages = Math.ceil(list.length / 9)
   const linkList = document.querySelector('.link-list')
   linkList.innerHTML = '';

// loop over num of pages
   for (let i = 1; i <= numOfPages; i++) {
      const button = `<li>
      <button type="button">${i}</button>
      </li>`
      linkList.insertAdjacentHTML("beforeend", button)
   }
   document.querySelector('button').className='active'

// add event listener to linklist
   linkList.addEventListener('click', (e) => {
      if(e.target.tagName === 'BUTTON') {
         document.querySelector('.active').className = ''
         e.target.className = 'active'
         showPage(list,e.target.textContent)
      }
   })
}

function searchName() {
   const header = document.querySelector('.header')
   const search = `<label for="search" class="student-search">
   <span>Search by name</span>
   <input id="search" placeholder="search by name...">
   <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>`;
   header.insertAdjacentHTML("beforeend", search)
}

// Call functions
addPagination(data)
showPage(data, 1)
searchName()
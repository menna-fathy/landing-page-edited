/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// navigation global var
const navigation = document.getElementById('navbar__list');
// sections global var
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// build the nav

const nav = () =>{
let link='';
for(section of sections) {
	const id = section.id;
    const dataNav = section.dataset.nav;
	// Scroll to section on link click
	link +=`<li><a class="menu__link" href="#${id}">${dataNav}</a></li>`;
};
// append all elements to the navigation
   navigation.innerHTML = link;

};
nav();

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
// Set sections as active
// observer
sections.forEach(section=>{
	const id=document.getElementById(section.id);
	const content = id.textContent;
	console.log(content);

	function handler(enteries){
		enteries.forEach(entry => {
		 if(entry.isIntersecting){
		 entry.target.classList.add("your-active-class");
		}
	  })
	  }
	  let observer = new IntersectionObserver(handler, {
		root: null,
		rootMargin: '0px',
		threshold: 1.0
	  });
	  observer.observe(section);
});


	//section.classList.remove('your-active-class');
	// function handler(entries, observer){
	// 	console.log(entry);
	// 	id.textContent=entry.isIntersectiong;
	// 	if(entry.isIntersectiong){
	// 		section.classList.add('your-active-class');
	// 	}else{
	// 		section.classList.remove('your-active-class');
	// 	}
	// }
	// let observer = new IntersectionObserver(handler);
	// observer.observe(document.getElementById(id));
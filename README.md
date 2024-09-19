After deployment:- kajolagbenga.netlify.app
The README note below extensively explained the thought process, coding techniques and above all the right coordinates that was put in place before this colourful portfolio website can be fully set to be dished out for all to see.
Sincerely speaking this website designing wasn't a child's play because it required me a consistent coding time of minimum of 12 hours daily for the five days period I started just so as to meet up with the stipulated deadline.
Honestly Speaking, coding is not for the weak and faint-hearted. 


#Here's my README.md file note for my HTML code:
Portfolio Website
This is a well structured and colourful personal portfolio website I created which showcased my skills and experiences as a Data Analyst, Data Scientist, Website & Mobile App Developer.

#The Features it has
Responsive design for optimal viewing on various devices
Custom CSS styling with Google Fonts and Box Icons integration
Animated sections using AOS library
Typed.js library for dynamic typing effect
Social media links and contact information
Client reviews section with testimonials from satisfied clients
Contact form with input fields for name, email, phone number, and message
Footer section with logo, navigation links, and copyright information


#Technologies Used
HTML5
CSS3
JavaScript (Typed.js and AOS libraries)
Google Fonts
Box Icons
GitHub Pages (for hosting)

#Sections
Header
Home
Infinite Scroll
About
Expertise
Recent Projects
Client Reviews
Contact Form
Footer

#Links used
GitHub 
LinkedIn
WhatsApp
Telegram
Facebook
DataCamp

#Client Reviews
Each review includes a client logo, testimonial text, client name, and profession
Reviews were displayed in a card layout with a fade-up animation

#Contact Form
Form included input fields for name, email, phone number, and message
Form was validated for required fields
Submit button with a fade-up animation

#Footer
Included logo, navigation links, and copyright information
Navigation links scroll to corresponding sections on the page



#Here's a well detailed README.md file note explanation for my CSS code:

#Style Guide
A comprehensive CSS style guide for my personal portfolio website is as follows:

#Global Styles
Resetted margins and padding
Set box-sizing to border-box
Enabled smooth scrolling
Set font family to "Outfit", sans-serif
Remove list styles and text decoration

#Header Styles
Position header as fixed
Set width to 100%
Set background color to transparent
Align items center and justify content space-between
Added padding and z-index

#Sticky header:
Background color: #CFF4FF
Padding: 14px 12%
Box shadow: 0px 4px 15px rgb(0 0 0 / 8%)
Transition: all .42s

#Navigation Styles
Displayed navigation as flex
Align items center
Styled navigation links with color, font size, and transition
Add hover effects to navigation links
Styled active navigation link

#Home Section Styles
Set position to relative
Set width and height to 100%
Set background color and image
Aligned items center and justify content space-between
Styled home text with color, font size, and font weight
Styled home icon with color, font size, and transition

#Infinite Scroll Styles
Set position to relative
Set overflow to hidden
Set white-space to nowrap
Added padding and background gradient
Styled infinite logo with height, margin, and cursor
Animated infinite logo with slide animation

#About Section Styles
Background color: #145DA0

#Grid layout for main content:
Two columns with a gap of 2rem

#Image styles:
Max width: 100%
Width: 430px
Height: auto

#Text styles:
Color: #FFFFFF
Font size: 22px
Text transform: capitalize
Font weight: 500
Expert Areas Styles
Background color: #FFFFFF
Top section styles:
Color: #051D40
Font size: 40px
Text transform: capitalize
Font weight: 700
Text align: center

#Skill details styles:
Grid layout with auto-fit columns and a gap of 2rem
Box styles:
Background color: #051D40
Border radius: 15px
Box shadow: rgba(48, 49, 49, 0.2) 0px 8px 24px
Cursor: pointer
Transition: all .42s ease

#Recent Project Section Styles
Background color: #4BD1FB
Top section styles:
Text align: center
Color: #051D40
Font size: 22px
Text transform: capitalize
Font weight: 700

#Project list styles:
Margin bottom: 80px
List item styles:
Color: #051D40
Font size: 15px
Text transform: capitalize
Font weight: 400
Margin right: 20px
Border: 1px solid transparent
Padding: 5px 15px
Border radius: 10px
Transition: all .42s

#Main project styles:
Grid layout with auto-fit columns and a gap of 2rem
Project styles:
Overflow: hidden
Image styles:
Display: block
Max width: 100%
Width: 100%
Height: auto
Cursor: pointer
Border radius: 10px
Transition: all .42s

#Client Review Section Styles
Background color: #FFFBFB
Top section styles:
Color: #56AEFF
Font size: 22px
Text transform: capitalize
Font weight: 700
Margin bottom: 20px
Text align: center

#Client details styles:
Grid layout with auto-fit columns and a gap of 4rem
Test card styles:
Background color: #56AEFF
Padding: 20px 20px
Border radius: 10px
Box shadow: rgba(5, 29, 0, 1) 0px 8px 24px
Transition: all .42s

#Test card hover styles:
Box shadow: rgba(5, 29, 0, 1) 0px 3px 8px
Contact Section Styles
Background color: #051D40

#Top section styles:
Color: #FFF
Font size: 45px
Text transform: capitalize
Font weight: 700
Text align: center
Margin bottom: 20px
Main contact styles:
Text align: center
Contact input styles:
Width: 50%
Padding: 20px
Margin: 10px 10px
Background color: #FFFBFB
Font size: 16px
Text transform: inherit
Border radius: 10px
Border: none
Caret color: #FFFBFB
Border color: 2px solid green
Outline: none

#Submit button styles:
Color: blue
Font size: 20px
Padding: 12px 50px
Background color: orange
Border: 2px solid #FFFBFB
Border radius: 30px
Letter spacing: 0.5px
Margin top: 40px
Cursor: pointer
Transition: all .42s

#Footer Styles
Background color: #FFFBFB
Main footer styles:
Text align: center
Padding: 40px 0px
Footer list styles:
Color: #56AEFF
Font size: 18px
Text transform: capitalize
Font weight: 500
Padding: 0px 20px
Transition: all .42s

#Responsive Code Styles
Media queries for different screen sizes:
max-width: 1420px
max-width: 1180px
max-width: 1080px
max-width: 1000px
max-width: 550px
max-width: 1100px
max-width: 950px
max-width: 700px
max-width: 450px

#Below is the README file for my JavaScript code

#Typed.js Animation and Sticky Header/Menu Toggle
This code snippet utilized the Typed.js library to create a typing animation effect on a text input field and implemented a sticky header with a menu toggle functionality.
Typed.js Animation
Created a typing animation effect on the .input element
Used the Typed class from the Typed.js library

#Options:
strings: An array of strings to be typed out in sequence
typeSpeed: The speed of typing in milliseconds (70ms)
backSpeed: The speed of deleting text in milliseconds (60ms)
loop: A boolean value to loop the typing animation (true)
Sticky Header and Menu Toggle
Selected the header element using document.querySelector
Added an event listener to the window object to listen for scroll events
Toggled the sticky class on the header element when the scroll position is greater than 0
Selected the #menu-icon and .navbar elements using document.querySelector
Added an event listener to the #menu-icon element to toggle the bx-x class and the open class on the .navbar element when clicked

#Code Explanation
Typed.js Animation
var typed = new Typed(".input", { ... });: Initialized a new instance of the Typed class, targeting the .input element.
strings: ["Certified Data Analyst", ...]: Defined the array of strings to be typed out in sequence.
typeSpeed: 70: Sets the typing speed to 70 milliseconds.
backSpeed: 60: Sets the deleting speed to 60 milliseconds.
loop: true: Enabled looping of the typing animation.
Sticky Header
const header = document.querySelector("header");: Selected the header element.
window.addEventListener("scroll", function(){ ... });: Added an event listener to the window object to listen for scroll events.
header.classList.toggle("sticky", this.window.scrollY > 0): Toggled the sticky class on the header element when the scroll position is greater than 0.
Menu Toggle
let menu = document.querySelector('#menu-icon');: Selected the #menu-icon element.
let navbar = document.querySelector('.navbar');: Selected the .navbar element.
menu.onclick = () => { ... };: Added an event listener to the #menu-icon element.
menu.classList.toggle('bx-x');: Toggled the bx-x class on the #menu-icon element.
navbar.classList.toggle('open');: Toggled the open class on the .navbar element.

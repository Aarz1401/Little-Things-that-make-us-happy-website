# Website - [Little things that make us happy]((https://aarz1401.github.io/Little-Things-that-make-us-happy-website/))
## Project Description
This website is designed to host my short film - _Little Things that make us happy_ . This film is inspired by little things all around us that 
have the potential to bring happiness in our lives when we pay attention to them. All too often, such things get ignored, but if we would be 
a little bit more attentive, we would appreciate them. 

The Theme of the website showcases stars, torches, meteors, the moon , falling leaves, and moving clouds in various sections. All of these are little
wondrous things - little not necessarily in a physical sense but in terms of the significance we usually assign them. However, upon reflecting a little,
we can start to understand how beautiful these really are.This is the story that I want to tell through the website. 

I wanted the user to experience a feeling of awe and happiness. The wonderful background of the milky way in the home section inspires awe. Details such as shooting
stars, moving clouds and a full moon draw attention to these things that we usually ignore. There is also a descriptive gallery of images that inspires the user
to pay more attention around them to look for such things and find beauty in them. 

## Process

### Ideation

#### Concept 
I started off by thinking about what kind of layout I wanted and drew a rough wireframe. I looked at past projects and tried to see what kind of structures
they had. I finally came up with 5 sections that my website would have : Home, About Me, Film, Gallery and Contact. 

I wanted some background to capture the idea of _Little things that are beautiful_ . I thought of using the sky for this purpose. 
Thus, the background of my home section would be a video loop of stars and as the user scrolls down, they would see the sky getting lighter and lighter until they 
reach the ground at the end of the webpage. 

#### Content Ideation 
(1) Home section : Has the main heading and a watch film button that takes to the Film section. Also has a navigation bar at top

(2) About Me section : Has two paragraphs - about me and about the website. Also, has a photo.

(3) Film section : Has the main video of the film

(4) Gallery section : Has a carousel with some pictures I took of little things that make us happy

(5) Contact section : Contains a form that the user can fill to send an email to me

#### Background Design Ideation 
Then I came up with the following design ideas for backgrounds :

(1) Home section : Video of stars

(2) About Me section : Sky getting lighter , twinkling stars, spotlight on the section

(3) Film section : Sky getting lighter, shooting stars , Moon in the background (detail in the top right)

(4) Gallery section : Sky getting lighter, finally turning light blue, clouds moving from left to right in the background

(5) Contact section : Something that represents transition from sky to ground -either a video loop , falling leaves or something else 

### Implementation 
#### HTML
I created section elements for each section and a div element for the home. Every component of the webpage is managed through a div element.
I used bootstrap d-flex class and bootstrap container and row classes to make sure everything is aligned and remains so even when the window size is changed. 
The row and container classes from bootstrap also helped with positioning and dividing the sections into sub-sections. 

The following are key implementation details for each section : 

(1) Home section : Used bootstrap class navbar for navigation bar , used a video tag along with relative positioning to make a video background.

(2) About Me section : Created a torch element with radial gradients for the spotlights. Used a bootstrap flexbox to split the content
in about me into two parts: The left part is the text content and the right part is the image. 

(3) Film section : This section has the embedded video. Also has container for shooting stars and the moon (div elements)

(4) Gallery section :Used a bootstrap carousel to display images as a carousel. Also has container for the clouds (div elements)

(5) Contact section : Has a video loop as its background. Also uses the tag <form> to create a form. 

#### CSS 
CSS  (styles.css) has styling for each section. The code is organized and commented , clearly showing the stylings applied to each section. Linear gradients are used  as a background frequently to create the effect of a changing sky. CSS is also used for styling elements that are created by Javascript.

The bootstrap classes _bootstrap.min.css_ and _bootstram.min.css.map_ are also used as stylesheets to include the bootstrap 5 library. 

The CSS has frequent use of :

- **transform :translate()** which is used to translate a div across the webpage
- **z_index** which is used to specify which content is displayed over the other other. A higher z-index means higher priority and it will be
  displayed on top
- **display:flex** which sets display type as a flex container which is very useful for centering elements and making the page responsive for all sizes
- **position:absolute and position:relative** which specifies the type of position of the element.

#### JavaScript

JavaScript is used to control animations, create elements, delete elements, and send email from the contact form. I have included jquery, bootstrap and email.min.js libraries too.

script.js has the following functions :

- Code to change Carousel captions whenever the image changes (this was needed because my carousel labels are outside the carousel).
- Code to create stars and make them twinkle.
- Code to create and move clouds.
- Code for shooting stars in the film section.
- Code for sending email from form using EmailJS.

### Challenges 
Some challenges I faced were :

- Getting the video backgrounds right and positioning them corrrectly. Hod to tweak the transform values and the position styling a lot to get it right.
- Scripting for shooting stars, This took way more time than i anticipated, There was an issue with the way I was using keyframes. I also had to experiment a little to find the right values for animation Interval, number of stars, and interval of star generation.
- Getting the form to send the email using email.min.js library. It had some complications but I was finally able to do it after some time

## Reflections
Overall, I am really proud of how the project turned out. This was my first time building a website from scratch without using any template and directly writing HTML, CSS and JavaScript code without any starter template. I am proud of the way the animations turned out and the design of the  final layout of the page. I had thought that it would be very difficult to build a website centred around the theme of my film as the theme did not have a definite object but rather a collection of them - however, I was able to incorporate it by using the sky as inspiration for the background of my webpage. 

I wanted to include a section with dynamic trees in the beginning -  which would have trees that would grow as you scroll down, however doing this proved to be tricky and caused a lot of complications so I decided to scrap it. Although I decided not to implement it here, this is something that I would love to implement in one of my future projects as a challenge.







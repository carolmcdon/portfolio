import image from "/Users/carolinemcdonald/Development/code/phase-6/portfolio/client/src/Image.jpg"

export default function About() {
  return(
    <div>
      <h1>About Me</h1>
        <img id="carolineImg" alt="Caroline" src={image}/> 
        <p>Hey! I'm Caroline. I was born and raised in Mount Pleasant, South Carolina. I attended Clemson University and graduated with a degree in Graphic Communications in 2017 with a Bachelor of Science in Graphic Communications and a minor in Business Administration. After graduating, I worked in the print and design industry for 5 years as a prepress artist. This involved a lot of detailed work and an eye for design to make sure all press specifications were met.</p>
        <p>I soon realized that I wanted to make money. I had taken one class at Clemson on the basics of HTML and CSS and remembered loving it.</p>
        <p>When I'm not pressing buttons on a keyboard, I enjoy thrift shopping, going to coffee shops, knitting, avoiding laundry, and listening to Taylor Swift.</p>
    </div>
  )
}
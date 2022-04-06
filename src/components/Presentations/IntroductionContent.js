import React from 'react';

export default [
  {
      id:"bored",
      className:"slide",
      data:{
          x:-1000, 
          y:-1500
      },
      content:[
          <q>Want to learn <b>Programming?</b> <br/> But not sure where to start?</q>
      ]
  },
  {
      className:"slide",
      data:{
          y:-1500
      },
      content:[
          <q> <strong>Outlearn</strong> has got you covered! <br/> Learn Python at your <strong>Pace, </strong><br/> at your comfort, and Master  <strong>Programming</strong></q>
      ] 
  },
  {
      className:"slide",
      data:{
          x:1000,
          y:-1500
      },
      content:[
        <q>Programming is the big thing happening now <strong> and Python is the place to start</strong> </q>
    ]
  },
  {
      id:"title",
      data:{
          scale: 4
      },
      content:[
          <span className="try">What is</span>,
          <h2>Programming?</h2>,
          
          <span className="footnote"><sup>*</sup> no rocket science</span>
      ]
  },
  {
      id: "its",
      data:{
          x:850,
          y:3000,
          rotateZ:90,
          scale:5
      },
      content:[
          <p>Programming is how you tell a computer <strong> WHAT TO DO</strong> <br/>
          And we do that using languages, <br/> it understands. </p>
      ]
  },
  
  {
      id: "big",
      data:{
          x:3500,
          y:2100,
          rotateZ:180,
          scale:6
      },
      content:[
          <p>Let's learn Programming via<h1>Python</h1></p>
      ]
  },
  {
      id: "tiny",
      data:{
          x:2825,
          y:2325,
          z:-3000,
          rotateZ:300,
          scale:1
      },
      content:[
          <p>As Python is the <b>Simplest</b> Language</p>
      ]
  },
  {
      id: "ing",
      data:{
          x:3500,
          y:-850,
          rotateZ:270,
          scale:6
      },
      content:[
          <p>By <b className="positioning">Learning</b>, at your <b className="rotating">Pace,</b> with <b className="scaling">Personalized Content</b></p>
      ]
  },
  {
      id: "imagination",
      data:{
          x:6700,
          y:-300,
          scale:6
      },
      content:[
          <p>Let's <b>learn</b> about <b className="imagination scaling-up">Variables</b></p>
      ]
  },
  {
      id: "source",
      data:{
          x:6300,
          y:2000,
          rotateZ:20,
          scale:4
      },
      content:[
          <q><a href="https://launchschool.com/books/ruby/read/variables" target="_blank" rel="nofollow">Variables</a>  are just Containers</q>,
          <p>Used to store values</p>,
      ]
  },
  {
      id: "one-more-thing",
      data:{
          x:6000,
          y:4000,
          scale:2
      },
      content:[
          <p>Example:</p>
      ]
  },
  {
      id: "its-in-3d",
      data:{
          x:6200,
          y:4300,
          z:-100,
          rotateX:-40,
          rotateY:10,
          scale:2
      },
      content:[
          <p><span className="have">age</span> <span className="you">=</span> <b>5<sup></sup></b></p>,
          <span className="footnote">Where <b>age</b> is varibale <b>name</b> and <br/> <b>20</b> is it's value</span>
      ]
  },
  {
      id: "by-react-impressjs",
      data:{
          x:3000,
          y:6000,
          z:4000,
          rotateX:-70,
          rotateY:30,
          scale:10
      },
      content:[
          <p>This was a demo of <br></br> <a href="https://outlearn-frontend.netlify.app/" target="_blank">Outlearn</a></p>,
          <p>Thank you<br></br></p>

      ]
  }
];
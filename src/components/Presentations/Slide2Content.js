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
          <q>What are <b>Python Functions?</b> <br/> A function is a block of code which only runs when it is called.

          You can pass data, known as parameters, into a function.
          
          A function can return data as a result.</q>
      ]
  },
  {
      className:"slide",
      data:{
          y:-1500
      },
      content:[
          <q> <strong>Creating a Function
          </strong> <br/>
          In Python a function is defined using the def keyword, Example: <br></br>
          <b>def my_function():<br></br>
          print("Hello from a function")</b></q>
      ] 
  },
  {
      className:"slide",
      data:{
          x:1000,
          y:-1500
      },
      content:[
        <q><strong> Calling a Function :</strong><br></br>To call a function, use the function name followed by parenthesis.<br></br><b>def my_function():<br></br>
        print("Hello from a function")<br></br>
        my_function()</b></q>
    ]
  },
  {
      id:"title",
      data:{
          scale: 4
      },
      content:[
          <span className="try"></span>,
          <q><b>Information can be passed into functions as arguments.</b><br></br>

          Arguments are specified after the function name, inside the parentheses. You can add as many arguments as you want, just separate them with a comma.</q>
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
          <p><strong> Parameters or Arguments?
          </strong> <br></br>The terms parameter and argument can be used for the same thing: information that are passed into a function.  <br/>
          <br/></p>
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
          <q><strong>Number of Arguments</strong><br></br>
          By default, a function must be called with the correct number of arguments. </q>
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
          <q><b>Example:</b><br></br>
          def fun(f, l):<br></br>
          print(f + " "+ l)<br></br>
          fun("Em","Ref")</q>
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
          <q><b className="positioning">Arbitrary Arguments, *args</b> <br></br>If you don't know how many arguments will be passed , add a * <br>
          </br><b className="scaling"> </b></q>
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
          <q><b>Keyword Arguments</b><br></br>
          You can send args with the key = value.
          The order does not matter here.</q>
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
          <q><a href="https://launchschool.com/books/ruby/read/variables" target="_blank" rel="nofollow">Return</a>,To let a function return a value, use the return statement:</q>
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
          <p>def my_function(x):<br></br>
          return 5 * x</p>
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
          <p> The pass Statement :<br>
          </br>function definitions cannot be empty, but if you for some reason have a function definition with no content, put in the pass statement to avoid getting an error.</p>,
          
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
          <p><br></br> <a href="https://outlearn-frontend.netlify.app/" target="_blank">Recursion</a></p>,
          <p>Recursion is a common mathematical and programming concept. It means that a function calls itself. This has the benefit of meaning that you can loop through data to reach a result.<br></br></p>

      ]
  }
];
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
          <q>What are <b>Variables?</b> <br/> A variable is any characteristics, number, or quantity that can be measured or counted.</q>
      ]
  },
  {
      className:"slide",
      data:{
          y:-1500
      },
      content:[
          <q> <strong>What do you mean by data types? </strong> <br/>
          A data type, in programming, is a classification that specifies which type of value a variable has and what type of mathematical,relational or logical operations can be applied to it without causing an error.</q>
      ] 
  },
  {
      className:"slide",
      data:{
          x:1000,
          y:-1500
      },
      content:[
        <q><strong> Some Different data types are :</strong><br></br>Binary Type: bytes <br></br>Boolean Type:bool<br></br> Set Types:set<br></br> Sequence Types:range, tuple, list<br></br> Numeric Types:complex, float, int<br></br>Text Type: str </q>
    ]
  },
  {
      id:"title",
      data:{
          scale: 4
      },
      content:[
          <span className="try"></span>,
          <h2>“Type()” function is used to know the class of a value or variable.</h2>,
          
          <span className="footnote"><sup>*</sup> 
          p= [2, 3]<br></br>
          result = type(p)
          <br></br>
          Output: class 'list' </span>
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
          <p><strong> Integers:</strong> The integer can be of any length without any limitation which can go up to the maximum available memory of the system.  <br/>
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
          <q><strong>Floating Point Number:</strong><br></br>The difference between floating points and integers is decimal points.</q>
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
          <q><strong>Complex Number:</strong><br></br><b>“x + yj” </b> is the written form of the complex number. Here y is the imaginary part and x is the real part.</q>
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
          <q><b className="positioning">Python List</b> <br></br>An ordered sequence of items is called List. <br>
          </br><b className="scaling"> Eg: a = [5,9.9]</b></q>
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
          <q>Let's <b>learn</b> about Python Tuples</q>
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
          <q><a href="https://launchschool.com/books/ruby/read/variables" target="_blank" rel="nofollow">Tuples</a>  are an Immutable sequence of items that are in order</q>
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
          <p>Example:t = (6,’tuple’,4+2r)</p>
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
          <p> Python Strings: <br>
          </br>A String is a sequence of Unicode characters.String is called str. </p>,
          
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
          <p><br></br> <a href="https://outlearn-frontend.netlify.app/" target="_blank">Python Set</a></p>,
          <p>The Collection of Unique items that are not in order is called Set.<br></br></p>

      ]
  }
];
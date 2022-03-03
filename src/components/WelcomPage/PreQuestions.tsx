import React from 'react';
import firebase from 'firebase/compat/app';
import { auth } from "../../firebaseSetup";
import { BuzzFeedQuiz } from "react-buzzfeed-quiz";
//import "react-buzzfeed-quiz/lib/styles.css";
import "./PreQuestions.min.css"

export default function Test() {
    const ProfilePhoto = "https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg";
    const BackgroundImage = "https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg";
    const FirstResultImage  = "https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg";
    const SecondResultImage =  "https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg";
    const showName = auth.currentUser?.displayName;
             return (
               <>
               <BuzzFeedQuiz
                 title={"Welcome " + showName}
                 description={"Let's get to know you"}
                 byline={true}
                 autoScroll={true}
                 onRestart={() => alert("This alert was triggered by the onRestart prop!")}
                 onResult={() => alert("The onResult prop triggered this alert!")}
                 onAnswerSelection={(questionIndex, answerIndex, resultID) => console.log({
                   questionIndex,
                   answerIndex,
                   resultID,
                 })}
                 facebookShareButton={true}
                 facebookShareLink={"www.yourlink.com"}
                 twitterShareButton={true}
                 twitterShareLink={"www.yourlink.com"}
                 copyShareButton={true}
                 copyShareLink={"This text was copied using the copyShareLink prop."}
                 questions={[
                   {
                     question: "Select your age",
                     answers: [
                       {
                         answer: "5-10",
                         resultID: 0,
                       },
                       {
                         answer: "10-15",
                         resultID: 1,
                       },
                       {
                         answer: "15 - 20",
                         resultID: 2,
                       },
                       {
                         answer: "20+",
                         resultID: 3,
                       },
                     ],
                   },
                   {
                     question: "Did you have Computer Science Subject in School",
                     answers: [
                       {
                         answer: "Yes",
                         resultID: 0,
                       },
                       {
                         answer: "No",
                         resultID: 1,
                       },
                     ],
                   },

                   {
                     question: "In Programming Variables are",
                     answerArrangement: "row",
                     answers: [
                       {
                         answer: "Loreum EPSUM Loreum EPSUM Loreum EPSUM",
                         resultID: 0,
                       },
                       {
                         answer: "Loreum EPSUMLoreum EPSUMLoreum EPSUM",
                         resultID: 1,
                       },
                       {
                         answer: "Loreum EPSUM Loreum EPSUM Loreum EPSUM",
                         resultID: 2,
                       },
                       {
                         answer: "I don't know",
                         resultID: 3,
                       },
                     ],
                   },
                   {
                     question: "What is an IDE",
                     answerArrangement: "row",
                     answers: [
                       {
                         answer: "Loreum EPSUM Loreum EPSUM Loreum EPSUM",
                         resultID: 0,
                       },
                       {
                         answer: "Integrated Development Environment",
                         resultID: 1,
                       },
                       {
                         answer: "Loreum EPSUM Loreum EPSUM Loreum EPSUM",
                         resultID: 2,
                       },
                       {
                         answer: "I don't know",
                         resultID: 3,
                       },
                     ],
                   },
                   {
                     question: "What do you know about programming?",
                     answerArrangement: "tile",

                     answers: [
                       {
                         answer: "I'm new to Programming",
                         resultID: 0,
                       },
                       {
                         answer: "I know Basic Thoery",
                         resultID: 1,
                       },
                       {
                         answer: "I can code Hello World",
                         resultID: 2,
                       },
                     ],
                   },
                   {
                     question: "What do you want to learn?",
                     answerArrangement: "row",

                     answers: [
                       {
                         answer: "Understand Python",
                         resultID: 0,
                       },
                       {
                         answer: "To Solve Basic DSA Problems",
                         resultID: 1,
                       },
                       {
                         answer: "To build Full fledged applications",
                         resultID: 2,
                       },
                     ],
                   },
                   {
                     question: "Preferred Learning Language",
                     answerArrangement: "tile",
                     answers: [
                       {
                         backgroundImageSrc: "https://liberalarts.utexas.edu/southasia/_files/images/kannada.png",
                         //answer: "I'm new to Programming",
                         resultID: 0,
                       },
                       {
                         backgroundImageSrc: "https://media.istockphoto.com/vectors/english-language-learning-concept-vector-vector-id1288019626",
                         // answer: "I know Basic Thoery",
                         resultID: 1,
                       },
                       {
                         backgroundImageSrc: "https://www.jagranimages.com/images/14_09_2019-hindi_diwas_1_19576338.jpg",
                         //answer: "I can code Hello World",
                         resultID: 2,
                       },
                     ],
                   },
                  //  {
                  //    question: "Let's add some background and font colors",
                  //    backgroundColor: "rgb(211, 211, 211)",
                  //    fontColor: "#000",
                  //    answers: [
                  //      {
                  //        answer: "First answer",
                  //        backgroundColor: "red",
                  //        fontColor: "rgb(215, 215, 215)",
                  //        resultID: 0,
                  //      },
                  //      {
                  //        answer: "Second answer",
                  //        backgroundColor: "orange",
                  //        fontColor: "green",
                  //        resultID: 1,
                  //      },
                  //      {
                  //        answer: "Third answer",
                  //        backgroundColor: "yellow",
                  //        fontColor: "#000",
                  //        resultID: 2,
                  //      },
                  //    ],
                  //  },
                  //  {
                  //    question: "Here is some overlapping image text",
                  //    questionRelativeToImage: "overlap",
                  //    imageAttribution: "Question image attribution text goes here",
                  //    answerArrangement: "tile",
                  //    backgroundImageSrc: BackgroundImage,
                  //    answers: [
                  //      {
                  //        answer: "This answer has a background photo",
                  //        resultID: 0,
                  //        backgroundImageSrc: BackgroundImage,
                  //        imageAttribution: "Answer photo attribution text goes here",
                  //      },
                  //      {
                  //        answer: "Not this one, though",
                  //        resultID: 1,
                  //        backgroundColor: "rgb(238,243,247)",
                  //        fontColor: "rgb(53,51,48)",
                  //      },
                  //      {
                  //        answer: "Not this one, either",
                  //        resultID: 2,
                  //        backgroundColor: "rgb(238,243,247)",
                  //        fontColor: "rgb(53,51,48)",
                  //      },
                  //    ],
                  //  },
                  //  {
                  //    question: "Here is some adjacent image text",
                  //    questionRelativeToImage: "adjacent",
                  //    answerArrangement: "row",
                  //    backgroundImageSrc: BackgroundImage,
                  //    answers: [
                  //      {
                  //        answer: "Answer one",
                  //        resultID: 0,
                  //      },
                  //      {
                  //        answer: "Answer two",
                  //        resultID: 1,
                  //      },
                  //      {
                  //        answer: "Answer three",
                  //        resultID: 2,
                  //      },
                  //    ],
                  //  },
                  //  {
                  //    question: "Answers can also trigger a callback function",
                  //    answers: [
                  //      {
                  //        answer: "This one does not trigger a function",
                  //        resultID: 0,
                  //      },
                  //      {
                  //        answer: "Click for answer function",
                  //        onAnswerSelection: (questionIndex, answerIndex, resultID) => alert("This alert is caused by an answer selection!"),
                  //        resultID: 1,
                  //      },
                  //    ],
                  //  },
                 ]}
                 results={[
                   
                 ]} /></>
             );
}

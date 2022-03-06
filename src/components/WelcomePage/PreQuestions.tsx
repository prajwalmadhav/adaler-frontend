import React from 'react';
import firebase from 'firebase/compat/app';
import { auth } from "../../firebaseSetup";
import { BuzzFeedQuiz } from "react-buzzfeed-quiz";
//import "react-buzzfeed-quiz/lib/styles.css";
import "./PreQuestions.min.css"
import { useNavigate } from "react-router-dom"
import { useToast } from '@chakra-ui/react';

export default function Test() {
    const navigate = useNavigate();
    const ProfilePhoto = "https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg";
    const BackgroundImage = "https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg";
    const FirstResultImage  = "https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg";
    const SecondResultImage =  "https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg";
    let showName = auth.currentUser?.displayName as string;
    const user = firebase.auth().currentUser;  
    const uid = user?.uid
    const ref = firebase.firestore().collection("person")
                  
    if(showName!==undefined){
      showName = showName.split(' ')[0];
    }

    let dict = new Map<string|number, string|number>();
    const error = useToast({
      title: 'Missing Answers',
      description: "Answer all the questions",
      status: 'error',
      duration: 5000,
      isClosable: true,
      position: 'top-right',
    })
    const onComplete = () =>{
     if (dict.size == 9){
        const preferences = Object.fromEntries(dict);
        ref.doc(uid).update({preferences})
        navigate("/home");
     }
      else{
        console.log(dict.size)
        error()
       }
      }

             return (
               <><div>
                  
               </div>
               <BuzzFeedQuiz
                 title={"Welcome "+ showName}
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
                         onAnswerSelection:()=> dict.set(1, "7"),
                       },
                       {
                         answer: "10-15",
                         resultID: 1,
                         onAnswerSelection:()=> dict.set(1, "12"),
                       },
                       {
                         answer: "15 - 20",
                         resultID: 2,
                         onAnswerSelection:()=> dict.set(1, "17"),
                       },
                       {
                         answer: "20+",
                         resultID: 3,
                         onAnswerSelection:()=> dict.set(1, "21"),
                       },
                     ],
                   },
                   {
                     question: "Did you have Computer Science Subject in School",
                     answers: [
                       {
                         answer: "Yes",
                         resultID: 0,
                         onAnswerSelection:()=> dict.set(2, "Yes"),
                       },
                       {
                         answer: "No",
                         resultID: 1,
                         onAnswerSelection:()=> dict.set(2, "No"),
                       },
                     ],
                   },
                   {
                    question: "Have you written any Computer Program?",
                    answers: [
                      {
                        answer: "Yes",
                        resultID: 0,
                        onAnswerSelection:()=> dict.set(3, "Yes"),
                      },
                      {
                        answer: "No",
                        resultID: 1,
                        onAnswerSelection:()=> dict.set(3, "No"),
                      },
                    ],
                  },
                  {
                    question: "Which Programming language do you want to learn",
                    answerArrangement: "row",
                    answers: [
                      {
                        answer: "Python",
                        resultID: 0,
                        onAnswerSelection:()=> dict.set(4, "python"),
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
                         onAnswerSelection:()=> dict.set(5, "null"),
                       },
                       {
                         answer: "Loreum EPSUMLoreum EPSUMLoreum EPSUM",
                         resultID: 1,
                         onAnswerSelection:()=> dict.set(5, "null"),
                       },
                       {
                         answer: "Quantity that may have a number of different values",
                         resultID: 2,
                         onAnswerSelection:()=> dict.set(5, "correct answer"),
                       },
                       {
                         answer: "I don't know",
                         resultID: 3,
                         onAnswerSelection:()=> dict.set(5, "I don't know"),
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
                         onAnswerSelection:()=> dict.set(6, "null"),
                       },
                       {
                         answer: "Integrated Development Environment",
                         resultID: 1,
                         onAnswerSelection:()=> dict.set(6, "correct"),
                       },
                       {
                         answer: "Loreum EPSUM Loreum EPSUM Loreum EPSUM",
                         resultID: 2,
                         onAnswerSelection:()=> dict.set(6, "null"),
                       },
                       {
                         answer: "I don't know",
                         resultID: 3,
                         onAnswerSelection:()=> dict.set(6, "I don't know"),
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
                         onAnswerSelection:()=> dict.set(7, "I'm new to Programming"),
                       },
                       {
                         answer: "I know Basic Thoery",
                         resultID: 1,
                         onAnswerSelection:()=> dict.set(7, "I know Basic Thoery"),

                       },
                       {
                         answer: "I can code Hello World",
                         resultID: 2,
                         onAnswerSelection:()=> dict.set(7, "I can code Hello World"),

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
                         onAnswerSelection:()=> dict.set(8, "Understand Python"),

                       },
                       {
                         answer: "To Solve Basic DSA Problems",
                         resultID: 1,
                         onAnswerSelection:()=> dict.set(8, "To Solve Basic DSA Problems"),
                       },
                       {
                         answer: "To build Full fledged applications",
                         resultID: 2,
                         onAnswerSelection:()=> dict.set(8, "To build Full fledged applications"),

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
                         onAnswerSelection:()=> {
                             dict.set(9, "Kannada")
                             onComplete()
                            },
                       },
                       {
                         backgroundImageSrc: "https://media.istockphoto.com/vectors/english-language-learning-concept-vector-vector-id1288019626",
                         // answer: "I know Basic Thoery",
                         resultID: 1,
                         onAnswerSelection:async ()=> {
                                dict.set(9, "English")
                                onComplete()
                            },

                       },
                       {
                         backgroundImageSrc: "https://www.jagranimages.com/images/14_09_2019-hindi_diwas_1_19576338.jpg",
                         //answer: "I can code Hello World",
                         resultID: 2,
                         onAnswerSelection:()=> {
                               dict.set(9, "Hindi")
                               onComplete()
                            },
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

// const css = require('./../app.scss');
//
// import React from 'react';
// import ReactDOM from 'react-dom';

// var BookList = React.createClass({
//   render: function() {
//     return ( < div >
//       < h1 > {
//         this.props.title
//       } < /h1> < img src = {
//       this.props.img
//     }
//     /> < p > {
//     this.props.discription
//   } < /p> < /div >
// )
// }
// });
//
// var App = React.createClass({
//       render: function() {
//         return ( < div > {
//             this.props.bookLists.map(function(bookList) {
//               return <BookList key = {
//                 bookList.id
//               }
//               title = {
//                 bookList.title
//               }
//               img = {
//                 bookList.img
//               }
//               discription = {
//                 bookList.discription
//               }
//               />
//             })
//           } < /div>)
//         }
//       });
//
//     var books = [{
//       id: 1,
//       title: "Harry Potter and the Sorcerer's Stone",
//       discription: "Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he's a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft",
//       img: "./img/1.jpg"
//     }, {
//       id: 2,
//       title: "Harry Potter and the Chamber of Secrets",
//       discription: "The Dursleys were so mean and hideous that summer that all Harry Potter wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he's packing his bags, Harry receives a warning from a strange, impish creature named Dobby who says that if Harry Potter returns to Hogwarts, disaster will strike",
//       img: "./img/2.jpg"
//     }, {
//       id: 3,
//       title: "Harry Potter and the Prisoner of Azkaban",
//       discription: "Harry Potter is lucky to reach the age of thirteen, since he has already survived the murderous attacks of the feared Dark Lord on more than one occasion. But his hopes for a quiet term concentrating on Quidditch are dashed when a maniacal mass-murderer escapes from Azkaban, pursued by the soul-sucking Dementors who guard the prison. It's assumed that Hogwarts is the safes",
//       img: "./../img/3.jpg"
//     }]
//
//     ReactDOM.render( < App bookLists = {
//         books
//       }
//       />,
//       document.getElementById('content')
//     )


import React, { Component } from 'react';
import Title from './Title';
import Menu from './Menu';
import MainPage from './MainPage';
import Sidebar from './Sidebar';

export default class App extends Component {
  render() {
    return (
        <div>
            <Title />
            <Menu />
            <Sidebar />
            <MainPage/>
        </div>
    );
  }
}

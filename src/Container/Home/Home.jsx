import React, { Component } from "react";
import './Home.css';
import SearchFormHandler from './SearchFormHandler';
import ListViewHandler from './ListViewHandler';
import { DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header';


class Home extends Component {
    componentDidMount() {
        // axios.get(`http://myhistoryclass.co.in/sch/api/Questions/GetAllQuestions`, {
        //     mode: 'no-cors',
        //     headers: {
        //         'Content-Type': 'text/plain',
        //         'Access-Control-Allow-Origin': '*',
        //     },
        //     withCredentials: true,
        //     credentials: 'same-origin',
        // })
        // .then(res => {
        //     console.log(res)
        // })
//         fetch('http://myhistoryclass.co.in/sch/api/Questions/GetAllQuestions').then(res => {
//             console.log(res)
//         })
         this.getQuestionsFromApiAsync();
    }


    getQuestionsFromApiAsync = ()=> {
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
             targetUrl = 'http://myhistoryclass.co.in/sch/api/Questions/GetAllQuestions'
        fetch(proxyUrl + targetUrl)
          .then(u => u.json()).then(j => console.log(j))
     }


    render() {
        return (
            <div>
                <Header />
                <div className="home container">
                    <DropdownButton
                        alignRight
                        title={<i className="fa fa-plus"></i>}
                        id="select"
                        className="pull-right">
                        <Link to='/multipleChoice'>Multiple Choice Questions</Link>
                        <Link to='/qAndA'>Questions & Answers</Link>
                        <Link to='/referenceqandA'>Reference Question & Answers</Link>
                    </DropdownButton>
                    <div className="clearfix"></div>
                    <SearchFormHandler />
                    <ListViewHandler />
                </div>
            </div>
        );
    }
}
export default Home;

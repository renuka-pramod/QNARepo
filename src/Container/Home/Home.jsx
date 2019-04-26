import React, { Component } from "react";
import './Home.css';
import SearchFormHandler from './SearchFormHandler';
import ListViewHandler from './ListViewHandler';
import { DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Home extends Component {
    componentDidMount() {
        axios.get(`http://myhistoryclass.co.in/sch/api/Questions/GetAllQuestions`, {
            mode: 'no-cors',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            withCredentials: true,
            credentials: 'same-origin',
        })
        .then(res => {
            console.log(res)
        })
    }

    render() {
        return (
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
        );
    }
}
export default Home;
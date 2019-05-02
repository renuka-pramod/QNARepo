import React from "react";
import './Home.css';

const ListViewHandler = (props) => {
    return props.details && (
        <table className="table table-bordered table-striped qs-table">
            <thead>
                <tr>
                    <th width="5%">Sr.No</th>
                    <th width="10%">Template</th>
                    <th width="55%">Questions</th>
                    <th width="5%">Class</th>
                    <th width="5%">Subject</th>
                    <th width="5%">Chapter</th>
                    <th width="5%"></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.details.map((detail,index) => {
                        console.log(detail)
                        return (
                            <tr key={index}>
                                <td className="text-center">{detail.ID}</td>
                                <td>{detail.Template}</td>
                                <td>{detail.QuestionText}</td>
                                <td>10th</td>
                                <td>Science</td>
                                <td>{detail.ChapterID}</td>
                                <td>
                                    <a><i className="fa fa-edit"></i></a>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}
export default ListViewHandler;
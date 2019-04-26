import React from "react";
import './Home.css';

const ListViewHandler = () => {
    return (
        <table className="table table-bordered table-striped qs-table">
            <thead>
                <tr>
                    <th width="5%">Sr.No</th>
                    <th width="60%">Questions</th>
                    <th width="5%">University</th>
                    <th width="5%">Class</th>
                    <th width="5%">Subject</th>
                    <th width="5%">Chapter</th>
                    <th width="5%"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="text-center">1</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel faucibus ligula. Sed a sem pellentesque, maximus ligula vitae, vestibulum turpis.</td>
                    <td>Pune University</td>
                    <td>10th</td>
                    <td>Science</td>
                    <td>11th</td>
                    <td>
                        <a><i className="fa fa-edit"></i></a>
                    </td>
                </tr>
                <tr>
                    <td className="text-center">2</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel faucibus ligula. Sed a sem pellentesque, maximus ligula vitae, vestibulum turpis.</td>
                    <td>Pune University</td>
                    <td>10th</td>
                    <td>Science</td>
                    <td>11th</td>
                    <td>
                        <a><i className="fa fa-edit"></i></a>
                    </td>
                </tr>
                <tr>
                    <td className="text-center">3</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel faucibus ligula. Sed a sem pellentesque, maximus ligula vitae, vestibulum turpis.</td>
                    <td>Pune University</td>
                    <td>10th</td>
                    <td>Science</td>
                    <td>11th</td>
                    <td>
                        <a><i className="fa fa-edit"></i></a>
                    </td>
                </tr>
                <tr>
                    <td className="text-center">4</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel faucibus ligula. Sed a sem pellentesque, maximus ligula vitae, vestibulum turpis.</td>
                    <td>Pune University</td>
                    <td>10th</td>
                    <td>Science</td>
                    <td>11th</td>
                    <td>
                        <a><i className="fa fa-edit"></i></a>
                    </td>
                </tr>
                <tr>
                    <td className="text-center">5</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel faucibus ligula. Sed a sem pellentesque, maximus ligula vitae, vestibulum turpis.</td>
                    <td>Pune University</td>
                    <td>10th</td>
                    <td>Science</td>
                    <td>11th</td>
                    <td>
                        <a><i className="fa fa-edit"></i></a>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
export default ListViewHandler;
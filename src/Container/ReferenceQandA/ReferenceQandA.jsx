import { Component } from "react";
import Select from '../../Presentational/Select';
import Input from '../../Presentational/Input';
import Button from '../../Presentational/Button';
import TextArea from '../../Presentational/TextArea';

class ReferenceQandA extends Component {
    constructor() {
        super();
        this.state = {
            universityValues: ["U1", "U2", "U3"],
            classValues: ["C1", "C2", "C3"],
            subjectValues: ["S1", "S2", "S3"],
            chapterValues: ["Ch1", "Ch2", "Ch3"],
            typeValues: ["T1", "T2", "T3"],
            probabilityValues: ["High", "Medium", "Low"],
            quesTypeValues: ["Option1", "Option2", "Option3", "Option4"]
        }
    }
    render() {
        let { universityValues, classValues, subjectValues, chapterValues, typeValues, probabilityValues, quesTypeValues } = this.state;
        return (
            <form>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <Select options={universityValues} label="University" />
                        </div>
                        <div className="col-sm">
                            <Select options={classValues} label="Class" />
                        </div>
                    </div>
                    <div className="lineBreak"></div>
                    <div className="row">
                        <div className="col-sm">
                            <Select options={subjectValues} label="Subject" />
                        </div>
                        <div className="col-sm">
                            <Select options={chapterValues} label="Chapter" />
                        </div>
                    </div>
                    <div className="lineBreak"></div>
                    <div className="row">
                        <div className="col-sm">
                            <Input type="text" placeholder="Enter Title" label="Title" boxClass="form-control" className="margin0" />
                        </div>
                    </div>
                    <div className="lineBreak"></div>
                    <div className="row">
                        <div className="col-sm">
                            <TextArea rows="4" className="form-control" placeholder="Enter Reference" label="Reference" />
                        </div>
                    </div>
                    <div className="lineBreak"></div>
                    <div className="row">
                        <div className="col-sm">
                            <Select options={typeValues} label="Type" />
                        </div>
                        <div className="col-sm">
                            <Select options={probabilityValues} label="Probability" />
                        </div>
                    </div>
                    <div className="lineBreak"></div>
                    <div className="row">
                        <div className="col-sm-3">
                            <Select options={quesTypeValues} label="Question 1" />
                        </div>
                        <div className="col-sm-3">
                            <Select options={quesTypeValues} label="Question 2" />
                        </div>
                        <div className="col-sm-3">
                            <Select options={quesTypeValues} label="Question 3" />
                        </div>
                        <div className="col-sm-3">
                            <Select options={quesTypeValues} label="Question 4" />
                        </div>
                    </div>
                    <div className="lineBreak"></div>
                    <div className="float-right btn-group">
                        <Button
                            handleClick={this.handleClick} F
                            name="Cancel"
                            className="secondary-button"
                        />
                        <Button
                            handleClick={this.handleClick}
                            name="Save"
                            className="primary-button"
                        />
                    </div>
                </div>
            </form>
        )
    }
}
export default ReferenceQandA;
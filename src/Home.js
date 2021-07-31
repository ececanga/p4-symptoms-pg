import React from "react";
import app from "./base";

import "./Home.css"
import  CheckBox  from './CheckBox'



class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            age: '',
            gender: '',
            symptoms: [
                {id: 1, value: "fever", isChecked: false},
                {id: 2, value: "dry cough", isChecked: false},
                {id: 3, value: "tiredness", isChecked: false},
                {id: 4, value: "aches and pains", isChecked: false},
                {id: 5, value: "sore throat", isChecked: false},
                {id: 6, value: "diarrhoea", isChecked: false},
                {id: 7, value: "conjunctivitis", isChecked: false},
                {id: 8, value: "headache", isChecked: false},
                {id: 9, value: "loss of taste or smell", isChecked: false},
                {id: 10, value: "difficulty breathing or shortness of breath", isChecked: false},
                {id: 11, value: "chest pain or pressure", isChecked: false},
                {id: 12, value: "loss of speech or movement", isChecked: false},
            ],
        };
    }

    ageHandler = (event) => {
        this.setState({age: event.target.value});
    }
    genderHandler = (event) => {
        this.setState({gender: event.target.value});
    }
    handleAllChecked = (event) => {
        let symptoms = this.state.symptoms
        symptoms.forEach(symptom => symptom.isChecked = event.target.checked)
        this.setState({symptoms: symptoms})
    }

    handleCheckChildElement = (event) => {
        let symptoms = this.state.symptoms
        symptoms.forEach(symptom => {
            if (symptom.value === event.target.value)
                symptom.isChecked =  event.target.checked
        })
        this.setState({symptoms: symptoms})
    }


    render() {
        return (
            <div className="home-page">
                <h4>Home</h4>
                <h5>COVID MONITORING PAGE</h5>
                <form>
                    <label>
                        Age
                        <input onChange={this.ageHandler} name="age" type="age" placeholder="Age"/>
                    </label>
                    <label>
                        Gender
                        <input onChange={this.genderHandler} name="gender" type="gender" placeholder="Gender"/>
                    </label>
                    <div className="checkSymptoms">
                        <label>All Symptoms</label>
                        <input type="checkbox" onChange={this.handleAllChecked}  value="checkedall" /> Check / Uncheck All
                        <ul>
                            {
                                this.state.symptoms.map((symptom, index) => {
                                    return (<CheckBox key={index} handleCheckChildElement={this.handleCheckChildElement}  {...symptom} />)
                                })
                            }
                        </ul>
                    </div>
                </form>
                <button className="submitBtn" onClick={() => app.auth().signOut()}>Sign out</button>
            </div>
        );
    }

}
export default Home;

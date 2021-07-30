import React from "react";
import app from "./base";

import "./Home.css"

const Home = () => {
    return (
            <div className="home-page">
                <h5>Home</h5>
                <h5>COVID MONITORING PAGE</h5>
                <form>
                    <label>
                        Age
                        <input name="age" type="age" placeholder="Age"/>
                    </label>
                    <label>
                        Gender
                        <input name="gender" type="gender" placeholder="Gender"/>
                    </label>
                    <div className="checkboxes">
                        <label>Common Symptoms</label>
                        <label><span>fever</span><input type="checkbox"/></label>
                        <label><span>dry cough</span><input type="checkbox"/></label>
                        <label><span>tiredness</span><input type="checkbox"/></label>

                        <label>Less Common Symptoms</label>
                        <label><span>aches and pains</span><input type="checkbox"/></label>
                        <label><span>sore throat</span><input type="checkbox"/></label>
                        <label><span>diarrhoea</span><input type="checkbox"/></label>
                        <label><span>conjunctivitis</span><input type="checkbox"/></label>
                        <label><span>headache</span><input type="checkbox"/></label>
                        <label><span>loss of taste or smell</span><input type="checkbox"/></label>

                        <label>Serious Symptoms</label>
                        <label><span>difficulty breathing or shortness of breath</span><input type="checkbox"/></label>
                        <label><span>chest pain or pressure</span><input type="checkbox"/></label>
                        <label><span>loss of speech or movement</span><input type="checkbox"/></label>

                    </div>
                </form>
                <button className="submitBtn" onClick={() => app.auth().signOut()}>Sign out</button>
            </div>
    );
};

export default Home;

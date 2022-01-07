// Import useState hook
import React, { useState } from "react";

//destructure out props, including router prop history
const Form = ({ initialBirthday, handleSubmit, buttonLabel, history }) => {
    ////////////////
    // The Form Data State
    ////////////////
    // Initiallize the form with the initialBirthday state
    const [formData, setFormData] = useState(initialBirthday);

    //////////////////////////
    // Functions
    //////////////////////////

    // Standard React Form HandleChange Function
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    // Function to run when form is submitted
    const handleSubmission = (event) => {
        //prevent form refresh
        event.preventDefault();
        //pass formData to handleSubmit prop function
        handleSubmit(formData);
        //push user back to main page
        history.push("/");
    };


    // Our Form, an input for the subject and details fields and a submit button
    return (
        <form onSubmit={handleSubmission}>
            <input
                placeholder="Name"
                type="text"
                onChange={handleChange}
                value={formData.name}
                name="Name"
            />

            <input
                placeholder="Birthday"
                type="date"
                onChange={handleChange}
                value={formData.birthday}
                name="Birthday"
            />

            <input
                placeholder="Details"
                type="text"
                onChange={handleChange}
                value={formData.details}
                name="details"
            />
            <input type="submit" value={buttonLabel} />
        </form>
    );
};

export default Form;
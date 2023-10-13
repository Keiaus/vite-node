import React, { useState } from "react";

const Homepage = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

    const onSubmitForm = async(event) => {
        event.preventDefault();
        try {
            const body = { firstName, lastName };
            const response = await fetch("http://localhost:5222/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(response);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <>
            <div id='homepage'>
                <form onSubmit={onSubmitForm}>
                    <h1>Testing things out</h1>
                    <label htmlFor="fname">First Name: </label><br />
                    <input type="text" id='fname' name='fname' value={firstName} onChange={event => setFirstName(event.target.value)}/><br />
                    <label htmlFor="lname">Last Name: </label><br />
                    <input type="text" id='lname' name='lname' value={lastName} onChange={event => setLastName(event.target.value)}/><br /><br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Homepage
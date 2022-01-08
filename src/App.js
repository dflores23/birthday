
import './App.css';
import AllBirthdays from "./pages/AllBirthdays";
import Form from "./pages/Form"
import SingleBirthday from "./pages/SingleBirthday"



import { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom"

function App(props) {
  // ____________________
  // States and Variables
  // ____________________

  // api url
  const url = "https://dob-backend.herokuapp.com/people/";
  // state to hold list of birthdays
  const [birthdays, setBirthdays] = useState([])

  const nullBirthday = {
    subject: "",
    details: "",
  };
  const [targetBirthday, setTargetBirthday] = useState(nullBirthday)

  // ____________________
  // Functions
  // ____________________
  const getBirthdays = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setBirthdays(data);
  };

  // Function to add birthday from form data
  const addBirthdays = async (newBirthday) => {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBirthday),
    });
    // get updated list of birthday
    getBirthdays();
  };

  // Function to select birthday to edit
  const getTargetBirthday = (birthday) => {
    setTargetBirthday(birthday);
    props.history.push("/edit");
  }

  // Function to edit birthday on form submission
  const updateBirthday = async (birthday) => {
    const response = await fetch(url + birthday.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(birthday),
    })
    getBirthdays();
  }

  // Function to edit birthday on form submission
  const deleteBirthday = async (birthday) => {
    const response = await fetch(url + birthday.id + "/", {
      method: "delete",
    });

    // get updated list of birthdays
    getBirthdays();
    props.history.push("/");
  };

  // ____________________
  // useEffect
  // ____________________
  useEffect(() => {
    getBirthdays()
  }, [])

  // ____________________
  // Returned JSX
  // ____________________



  return (
    <div className="App">

      <h1>Birthday's Reminder</h1>
      <Link to="/new"><button>Create New Birthday</button></Link>
      <Switch>
        <Route
          exact
          path="/"
          render={(rp) => {
            return <AllBirthdays {...rp}
              birthdays={birthdays}
            />
          }}
        />

        {/* Show PAGE */}
        <Route
          path="/birthday/:id"
          render={(rp) => (
            <SingleBirthday {...rp}
              birthdays={birthdays}
              edit={getTargetBirthday}
              deleteTodo={deleteBirthday} />
          )}
        />
        {/* New &Edit pages */}
        <Route
          path="/new"
          render={(rp) => {
            return <Form
              {...rp}
              initialBirthday={nullBirthday}
              handleSubmit={addBirthdays}
              buttonLabel="create a new Birthday"
            />
          }}
        />

        <Route
          path="/edit"
          render={(rp) => {
            return <Form {...rp}
              initialBirthday={targetBirthday}
              handleSubmit={updateBirthday}
              buttonLabel="update"
            />;
          }}
        />

      </Switch>
    </div>
  );
}

export default App;

import { observer } from "mobx-react";
import React, { ReactElement } from "react";
import { useContext } from "react";
import { Context } from "../..";
import { RootStore } from "../../Store/RootStore";
import "./App.scss";

const names: String[] = ["Semen", "Arsenii", "Arsen", "Senya"];

const App = observer((): ReactElement => {
    const {user}: RootStore = useContext(Context);

    const changeName = (): void => {
        const index = Math.floor(Math.random() * names.length);
        user.setName(names[index]);
    };

    return (
        <div className="App">
            <h1>Test App</h1>
            <button onClick={changeName}>Randomize name!</button>
            <p>{user.name}</p>
        </div>
    );
});

export default App;

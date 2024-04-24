import { Button } from "../Button/Button";
import "./Settings.css";
import { useState, useEffect } from "react";
import SwitchLayout from "../Layout/SwitchLayout";

const Settings = () => {
    const [projectView, setView] = useState("");

    return (
    <>
        <Button name="Add Project" type="button" redirect="addProject"></Button>
        <Button name="Add Post" type="button" redirect="addPost"></Button>
        <SwitchLayout  passViewData={setView} layoutName={"Projects"}/>
        <SwitchLayout  passViewData={setView} layoutName={"Posts"}/>
    </>
    );
};
export default Settings;

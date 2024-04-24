import { Fragment } from "react";
import { Button } from "../Button/Button";
import "./Settings.css";
const Settings = () => {
    return (
    <>
        <Button name="Add Project" type="button" redirect="addProject"></Button>
        <Button name="Add Post" type="button" redirect="addPost"></Button>
    </>
    );
};
export default Settings;
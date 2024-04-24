import { Button } from "../Button/Button";
import "./Settings.css";
import SwitchLayout from "../Layout/SwitchLayout";

const Settings = () => {

    return (
    <>
        <Button name="Add Project" type="button" redirect="addProject"></Button>
        <Button name="Add Post" type="button" redirect="addPost"></Button>
        <SwitchLayout pageName={"Projects"}/>
        <SwitchLayout pageName={"Posts"}/>
    </>
    );
};
export default Settings;

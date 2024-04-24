import { Button } from "../Button/Button";
import "./Settings.css";
import SwitchLayout from "../Layout/SwitchLayout";
import NewSkill from "../Skills/NewSkill";
import AddSocialMedia from "../SocialMedia/AddSocialMedia";

const Settings = () => {

    return (
    <>
        <Button name="Add Project" type="button" redirect="addProject"></Button>
        <Button name="Add Post" type="button" redirect="addPost"></Button>
        <SwitchLayout pageName={"Projects"}/>
        <SwitchLayout pageName={"Posts"}/>
        <NewSkill />
        <AddSocialMedia/>
    </>
    );
};
export default Settings;

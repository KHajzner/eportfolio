import { useState } from 'react';
import { Button } from "../Button/Button";
import "./Settings.css";
import SwitchLayout from "../Layout/SwitchLayout";
import NewSkill from "../Skills/NewSkill";
import AddSocialMedia from "../SocialMedia/AddSocialMedia";
import TabList from '@mui/lab/TabList';
import Tabs from '@mui/material/Tabs';
import TabContext from '@mui/lab/TabContext';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '@mui/lab/TabPanel';

const Settings = () => {

    const ContentManagement = () => {
        return(
            <>
                <div className="pageTitle">
                    Content Management
                    <div id="break"/>
                </div>
                <div id="grid-title">Projects</div> 
                <Button name="Add Project" type="button" redirect="addProject"></Button>
                <br/>
                <div id="grid-title">Posts</div> 
                <Button name="Add Post" type="button" redirect="addPost"></Button>
            </>
        );
    }
    const LayoutManagement = () => {
        return(
            <>
                <div className="pageTitle">
                    Layout Management
                    <div id="break"/>
                </div>
                <SwitchLayout pageName={"Projects"}/>
                <SwitchLayout pageName={"Posts"}/>
            </>
        );
    }

    const Miscellaneous= () => {
        return(
            <>
                <div className="pageTitle">
                    Miscellaneous
                    <div id="break"/>
                </div>
                <NewSkill />
                <AddSocialMedia/>
            </>
        );
    }
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
    <div className="settings">
        <Box sx={{ flexGrow: 1, display: 'flex'}}>
            <TabContext value={value}>
                <Tabs variant="scrollable" value={value} onChange={handleChange} orientation="vertical"
                textColor="inherit"
                sx={{ borderRight: 1, borderColor: 'divider' }}>
                    
                    <Tab label="Content" value="1" />
                    <Tab label="Layout" value="2" />
                    <Tab label="Other" value="3" />
                </Tabs>
                <TabPanel value="1"><ContentManagement /></TabPanel>
                <TabPanel value="2"><LayoutManagement /></TabPanel>
                <TabPanel value="3"><Miscellaneous/></TabPanel>
            </TabContext>
        </Box>
    </ div>
    );
};
export default Settings;

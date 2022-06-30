import React  from "react";
import Chatbot from "react-chatbot-kit";
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

const Dashboard=()=>{
    return (
        <div>
            <text>
                Dashboard page
            </text>
        
            <Chatbot  config={config} actionProvider={ActionProvider} messageParser={MessageParser} ></Chatbot>
        </div>
    )
}
export default Dashboard;
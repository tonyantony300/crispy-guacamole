import Chatbot from "react-chatbot-kit";

import config from "./config.js";
import "../../styles/Chat.css";
import"./Chatcontainer.css"

import ActionProvider from "./ActionProvider.jsx";
import MessageParser from "./MessageParser.jsx";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setOpen } from "../../redux/contentSlice.js";

const Conversationbot = () => {
  const dispatch = useDispatch();

  // const saveMessages = (messages, HTMLString) => {
  //   console.log("Save messages-->",messages);
  //   console.log("Save messages-->",HTMLString);

  //   localStorage.setItem("chat_messages", JSON.stringify(HTMLString));
  // };

  // const loadMessages = () => {
  //   const messages = JSON.parse(localStorage.getItem("chat_messages"));
  //   return messages;
  // };

  return (
    <>
      <div className="chat-box">
        <div className="arrow-wrapper">
          <BsFillArrowLeftSquareFill
            className="back-arrow"
            onClick={() => dispatch(setOpen(false))}
          />
        </div>

        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
    </>
  );
};

export default Conversationbot;

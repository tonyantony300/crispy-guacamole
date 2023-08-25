import React from "react";
import '../styles/Home.css'
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/contentSlice";
import Conversationbot from "./Chatbot/ChatbotComp";

const Home = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.content.open);

  return (
    <>
      {open ? (
        <Conversationbot />
      ) : (
        <div className="container">
          <h1>
            Enter into Student Info System
          </h1>
          <section>
            <Button
              label={"Enroll now"}
              onClick={() => dispatch(setOpen(true))}
            />
          </section>
        </div>
      )}
    </>
  );
};
export default Home;

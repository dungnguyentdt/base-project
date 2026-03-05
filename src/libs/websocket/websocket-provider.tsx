"use client";
import { useAppDispatch } from "@/store";
import { connect, disconnect } from "@/store/slice/websocket.slice";
import { useEffect } from "react";

export const WebSocketProvider = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(connect()); // Replace with your WebSocket URL

    const handleOnline = () => {
      console.log("🌐 Network is back online, reconnecting...");
      dispatch(connect());
    };
    window.addEventListener("online", handleOnline);
    return () => {
      window.removeEventListener("online", handleOnline);
      dispatch(disconnect());
    };
  }, [dispatch]);

  return <></>;
};

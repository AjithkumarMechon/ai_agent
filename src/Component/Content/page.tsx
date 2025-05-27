"use client";
import React, { useCallback, useState } from "react";
import {
  Box,
  IconButton,
  Paper,
  Typography,
  AppBar,
  Toolbar,
  Button,
  FormControl,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";
import chatStyle from "@/style/aichat.module.css";
import ChatTextarea from "@/Component//TextArea/TextAreaComponent";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

export default function Home() {
  const [uploadClick, setUploadClick] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! How can I help you?", sender: "bot" },
    { id: 2, text: "I need assistance with my account.", sender: "user" }, 
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), text: input, sender: "user" }]);
    setInput("");
  };

  const handleUpload = () => {
    console.log("Upload triggered");
  };

  return (
    <Box className={chatStyle.contentBox}>
      {/* Chat Messages */}
      <Box
        flex={1}
        p={2}
        overflow="auto"
        sx={{ backgroundColor: "#fff", color: "white" }}
      >
        {messages.map((msg) => (
          <Box
            key={msg.id}
            display="flex"
            justifyContent={msg.sender === "user" ? "flex-end" : "flex-start"}
            mb={1}
          >
            <Paper
              elevation={3}
              sx={{
                px: 2,
                py: 1,
                backgroundColor: msg.sender === "user" ? "#1976d2" : "#e0e0e0",
                color: msg.sender === "user" ? "#fff" : "#000",
                borderRadius: 2,
                maxWidth: "70%",
              }}
            >
              <Typography variant="body1">{msg.text}</Typography>
            </Paper>
          </Box>
        ))}
      </Box>

      {/* Input Bar */}
      <Box
        p={2}
        display="flex"
        alignItems="center"
               boxShadow="0 2px 0 rgba(0 0 0 0.7)"
               borderTop="0.125rem solid #f3e9e9;"
   
        sx={{ backgroundColor: "#fff" }}
      >
        {/* Add Icon */}
        <Box
          onClick={() => setUploadClick((prev) => !prev)}
          sx={{
            color: "grey.500",
            cursor: "pointer",
            mr: 1,
            position: "relative",
          }}
        >
          <AddIcon />
          {uploadClick && (
            <Box
              sx={{
                p: 0,
                position: "absolute",
                bottom: 20,
                left: 0,
                bgcolor: "white",
                borderRadius: "5%",
                boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <FormControl sx={{ width: "fit-content" }}>
                <Button
                  onClick={handleUpload}
                  sx={{
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    boxShadow: "none",
                  }}
                >
                  Add photos and files
                </Button>
              </FormControl>
            </Box>
          )}
        </Box>

        {/* Text Field with Send Icon */}
        <Box
          position="relative"
          width="100%"
          className={chatStyle.chat_text_field}
        >
          <ChatTextarea
            setInput={setInput}
            inputValue={input}
            handleSend={handleSend}
          />
          <IconButton
            color="primary"
            onClick={handleSend}
            sx={{ position: "absolute", bottom: 8, right: 8 }}
            disabled={!input.trim()}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

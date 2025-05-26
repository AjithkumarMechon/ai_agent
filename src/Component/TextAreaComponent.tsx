import React, { useRef, useEffect, KeyboardEvent, ChangeEvent } from "react";

interface ChatTextareaProps {
  onSubmit: (text: string) => void;
  inputValue: string;
  handleSend: () => void;
}

const ChatTextarea: React.FC<ChatTextareaProps> = ({ onSubmit, inputValue, handleSend }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize the textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [inputValue]);

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (inputValue.trim()) {
        handleSend();
        onSubmit(""); // clear parent state
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onSubmit(e.target.value);
  };

  return (
    <div className="w-full border rounded-2xl p-2 bg-white shadow-md">
      <textarea
        ref={textareaRef}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        rows={1}
        placeholder="Ask anything"
        className="w-full resize-none overflow-hidden p-2 outline-none text-base"
      />
    </div>
  );
};

export default ChatTextarea;

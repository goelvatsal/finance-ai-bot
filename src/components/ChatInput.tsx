import { useState } from 'react'

type ChatInputProps = {
  onSendMessage: (content: string) => Promise<void>;
  disabled: boolean;
};


const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSendMessage(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={disabled}
        className="flex-1 border rounded px-3 py-2"
        placeholder="Type a message..."
      />
      <button
        type="submit"
        disabled={disabled || !input.trim()}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;

import {FC, useState} from "react"
import style from "./InputField.module.scss"

type InputFieldProps = {
  onSendMessage: (message: string) => void;
}

const InputField: FC<InputFieldProps> = ({onSendMessage}) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
        onSendMessage(message);
        setMessage(''); // Очищаем поле ввода
    }
};


  return (
    <div className={style.box}>
      <input placeholder="Type your question..." type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
      <button onClick={handleSend}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </button>
    </div>
  )
}

export default InputField
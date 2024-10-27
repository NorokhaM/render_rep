import style from "./Sidepanel.module.scss"

import MessageBox from "../MessageBox"
import InputField from "../InputField"
import { FC, useState, useEffect } from "react"

type SidepanelProps = {
  isOn: boolean;
  setIsOn: (new_state: boolean) => void;
}

const Sidepanel: FC<SidepanelProps> = ({isOn, setIsOn}) => {
  const [messages, setMessages] = useState<{text:string, isUser:boolean}[]>([]);

  const handleBackdropClick = (e: any) => {
    if ((e.target) === e.currentTarget) {
        setIsOn(false); // Закрываем модалку при клике на бекдроп
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOn(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsOn]);

  const handleSendMessage = async (message:string) => {
    if (!message.trim()) return; // Проверка на пустое сообщение

    // Добавляем сообщение пользователя в список
    setMessages((prevMessages) => [...prevMessages, { text: message, isUser: true }]);

    try {
      const response = await fetch('https://demo-deployment-f1qn.onrender.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });

      if (response.ok) {
        const data = await response.json();
        // Добавляем ответ бота в список сообщений
        setMessages((prevMessages) => [...prevMessages, { text: data.reply, isUser: false }]);
      } else {
        setMessages((prevMessages) => [...prevMessages, { text: 'Ошибка сервера.', isUser: false }]);
      }
    } catch (error) {
      setMessages((prevMessages) => [...prevMessages, { text: 'Ошибка подключения.', isUser: false }]);
    }
  };

  return (
    <div className={isOn ? style.background : style.disabled} onClick={handleBackdropClick}>
      <div className={isOn ? style.popup_window : style.hidden}>
        <header className={style.header}>
          <button className={style.exit_button} onClick={() => setIsOn(false)}>
          </button>
          AI Poradca
        </header>
        <div className={style.chat}>
          {messages.map((message, arr) => {
            let key: string = message.text + arr;
            return <MessageBox key={key} isUser={message.isUser}>{message.text}</MessageBox>
          })} 
        </div>
        <div className={style.input}>
          <InputField onSendMessage={handleSendMessage}/>
        </div>
      </div>
    </div>
  )
}

export default Sidepanel
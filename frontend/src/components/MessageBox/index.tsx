import { FC } from "react";
import style from "./MessageBox.module.scss"

type MessageBoxProps = {
  isUser: boolean;
  children: any;
}

const MessageBox: FC<MessageBoxProps> = ({isUser, children}) => {
  return (
    <div className={isUser ? `${style.box} ${style.user}` : `${style.box} ${style.bot}`}>
      {children} 
    </div>
  )
}

export default MessageBox;
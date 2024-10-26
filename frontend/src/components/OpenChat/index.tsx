import { FC } from "react";

import style from "./OpenChat.module.scss"

type OpenChatProps = {
  isOn: boolean;
  setIsOn: (new_state: boolean) => any;
}

const OpenChat: FC<OpenChatProps> = ({isOn ,setIsOn}) => {


  return (
    <div  onClick={() => setIsOn(true)} className={isOn ?  style.disabled : style.container}>
      AI
    </div>
  )
}

export default OpenChat
import {FC} from 'react'

import style from "./Stars.module.scss"

const Stars: FC<{rating: number}> = ({rating}) => {
  const arr: any[] = [];

  let i = 0;
  for (; i < rating; i++) {
    arr.push(<svg xmlns="http://www.w3.org/2000/svg" className={style.orange} width="1.5em" height="1.5m" viewBox="0 0 1024 1024"><path d="M804.645 444.599c-1.499-4.681-5.888-7.899-10.789-7.899h-206.958l-64.073-196.754c-1.536-4.645-5.888-7.826-10.825-7.826-4.901 0-9.289 3.182-10.825 7.863l-64.439 196.754h-206.592c-4.901 0-9.289 3.218-10.825 7.863-1.499 4.681 0.146 9.874 4.096 12.763l167.205 121.783-64.439 197.851c-1.536 4.681 0.146 9.838 4.133 12.727 3.95 2.889 9.399 2.889 13.349 0l168.338-122.185 167.936 122.149c2.011 1.463 4.315 2.231 6.693 2.231s4.681-0.768 6.693-2.231c4.023-2.889 5.669-8.009 4.133-12.727l-64.439-197.851 167.57-121.783c3.95-2.889 5.632-8.046 4.059-12.727z"></path></svg>)
  }

  if (i < 5) {
    for ( ; i < 5; i++) {
      arr.push(<svg xmlns="http://www.w3.org/2000/svg" className={style.grey} width="1.5em" height="1.5em" viewBox="0 0 1024 1024"><path d="M804.645 444.599c-1.499-4.681-5.888-7.899-10.789-7.899h-206.958l-64.073-196.754c-1.536-4.645-5.888-7.826-10.825-7.826-4.901 0-9.289 3.182-10.825 7.863l-64.439 196.754h-206.592c-4.901 0-9.289 3.218-10.825 7.863-1.499 4.681 0.146 9.874 4.096 12.763l167.205 121.783-64.439 197.851c-1.536 4.681 0.146 9.838 4.133 12.727 3.95 2.889 9.399 2.889 13.349 0l168.338-122.185 167.936 122.149c2.011 1.463 4.315 2.231 6.693 2.231s4.681-0.768 6.693-2.231c4.023-2.889 5.669-8.009 4.133-12.727l-64.439-197.851 167.57-121.783c3.95-2.889 5.632-8.046 4.059-12.727z"></path></svg>)
    }
  }

  return (
    <div className={style.stars_wrapper}>
      {arr.map(item => (
        item
      ))}
    </div>
  )
}

export default Stars
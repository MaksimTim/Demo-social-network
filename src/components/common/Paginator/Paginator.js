import styles from "./Paginator.module.css";
import React, {useState} from "react";


const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div>
        {portionNumber > 1 &&
        <button onClick={() => {setPortionNumber(portionNumber - 1)}}>{'<<'}</button>
        }
        {pages
            .filter(p => p >= leftPortionPageNumber && p<= rightPortionPageNumber)
            .map(p => <span className={currentPage === p && styles.selectedPage}
                              onClick={(e) => {
                                  onPageChanged(p)
                              }}
        >{p}</span>)}
        {portionCount > portionNumber &&
        <button onClick={() => {setPortionNumber(portionNumber + 1)}}>{'>>'}</button>
        }
    </div>
}

export default Paginator
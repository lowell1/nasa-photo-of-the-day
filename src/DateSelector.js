import React from "react"

const DateSelector = props => {
    const dateList = [];
    const date = new Date();

    const updateUrlDate = () => {
        props.setUrlDate(document.querySelector("select").value);
    }

    for(let i = 0; i < 7; i++) {
        dateList.push(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
        date.setDate(date.getDate() - 1);
    }

    return (
        <select onChange={e => updateUrlDate()} style={{marginBottom: "120px"}}> 
            {
                dateList.map((val, idx) => {
                   return <option value={val} key={idx}>{val}</option>
                })
            }
        </select>
//        <button onClick={e => funct()}>hello</button>
    )
}
export default DateSelector;
import React from 'react';
import useClock from "../components/UseClock"


function MyClock() {
    //Gọi custom hook để sử dụng
    const [time, ampm] = useClock();
    return (
        <div id="Clock-style" style={{fontSize: "1500%",fontWeight:"bold"}}>
            {time}
            <span> {ampm}</span>
        </div>
    );
}
export default MyClock;
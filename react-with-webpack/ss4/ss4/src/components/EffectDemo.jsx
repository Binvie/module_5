import React, {useState, useEffect} from 'react';

function EffectDemo(props) {
    const [selected, setSelected] = useState("0");
    const [selectedValue, setSelectedValue] = useState("")

    const choice = e => {
        setSelected(e.target.value);
    }
    useEffect(() => {
        switch (selected) {
            case "0":
                setSelectedValue("Java");
                break;
            case "1":
                setSelectedValue("Angular");
                break;
            case "2":
                setSelectedValue("JavaScript");
                break;
            case "3":
                setSelectedValue("PHP");
                break;
        }
    }, [selected]);


    return (
        <div>
            Khoá Học:
            <select onChange={e => {
                choice(e);
            }}>
                <option value="0">Java</option>
                <option value="1">Angular</option>
                <option value="2">JavaScript</option>
                <option value="3">PHP</option>
            </select>
            <h2>Your selection: {selectedValue}</h2>
        </div>
    );
}

export default EffectDemo;
import React, {useState} from "react";


function Component() {
    const [states, setStates] =
        useState(() => {
                const storageJobs = JSON.parse(localStorage.getItem('jobs'))
                console.log(storageJobs)
                return storageJobs;
            }
        );
    const [state, setState] = useState('');

    const handleAdd = (event) => {
        setStates(prev => {
            const jobs = [...prev, state];
            const localJobs = JSON.stringify(jobs);
            localStorage.setItem('jobs', localJobs)
        })
        return jobs;
    }
    return (
        <div>
            <input
                value={state}
                type="text"
                onChange={e => setState(e.event.value)}
            />
            <button onClick={handleAdd}>Submit</button>
            <hr/>
            <ul>
                {states.map(job, index => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </div>
    )
        ;
}

export default Component;
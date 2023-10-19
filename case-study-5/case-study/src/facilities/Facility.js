import React from 'react';

const facilities = [
    {
        type: 'Villa',
        location: 'room 101',
        price: '200$'
    },
    {
        type: 'Villa',
        location: 'room 102',
        price: '250$'
    },
    {
        type: 'Villa',
        location: 'room 103',
        price: '300$'
    },
    {
        type: 'Home',
        location: 'room 201',
        price: '150$'
    },
    {
        type: 'Home',
        location: 'room 202',
        price: '200$'
    },
    {
        type: 'Home',
        location: 'room 203',
        price: '170$'
    },
    {
        type: 'room',
        location: 'room 301',
        price: '120$'
    },
    {
        type: 'room',
        location: 'room 302',
        price: '100$'
    }
]


function Facility() {
    return (
        <>
            <div className="card" style={{width: '18rem'}}>
                <img src={} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </>
)
}
export default Facility;
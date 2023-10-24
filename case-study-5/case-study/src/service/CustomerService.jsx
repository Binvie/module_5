import React from 'react';

const customerList = [
    {
        id: 1,
        name: 'Le Cong Hoan Thien',
        age: 30,
        address: 'Ha Noi'
    }, {
        id: 2,
        name: 'Phan Quoc Sang',
        age: 20,
        address: 'Quang Binh'
    }, {
        id: 3,
        name: 'Vo Nhan Tri',
        age: 27,
        address: 'Sai Gon'
    }, {
        id: 4,
        name: 'Nguyen Dinh Thoi',
        age: 25,
        address: 'Hoi An'
    }
]

function GetAll() {
    return customerList;
}

export default GetAll;
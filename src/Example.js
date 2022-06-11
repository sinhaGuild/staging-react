import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react'

const Example = () => {

    const arr = [
        { nickname: 'anurag', metric: 20 },
        { nickname: 'sinha', metric: 24 }
    ];
    const arr2 = [
        { age: 'old', metric: 50 },
        { age: 'oldish', metric: 64 }
    ];


    // const [{ nickname, metric }] = arr;


    const obj = { arr, arr2 };

    const { dcarray, dcarray2 } = obj;



    const [dcArr, dcArr2] = obj.arr2;
    const metricage = dcArr.age;
    // const [{ nickname, metric }] = dcArr;

    console.log('====================================');
    console.log(JSON.stringify(dcarray2));
    console.log('====================================');



    return (
        <div>
            <p>age</p>
            {/* <h3>{nickname}</h3> */}
            <p>metric {dcArr.age}</p>
            <p>metric {dcArr2.age}</p>
            <p>{metricage}</p>
            {/* <h2>{metric}</h2> */}
        </div>
    )
}

export default Example
import { useState } from "react"

export const HeavyCal = ({ count }) => {
    console.log("Heavy Calc.");

    const total = useMemo(() => {
        let sum = 0;
        for (let i = 1; i <= 10000000; i++) {
            if (i % 2 == 0) {
                sum += count;
            }
        }

        return sum;
    }, [count]);
    return <>
        <div>Sum of Even Number is : {total}</div>
    </>
}


export const UseMemoHook = () => {

    const [count, setCount] = useState(0);
    console.log("Com Re Render.", count);
    const handleClick = () => {
        setCount(count + 1);
    }
    return (

        <>
            <HeavyCal count={count} />
            <h1>{count}</h1>
            <div>Use Memo Hook</div>
            <button onClick={handleClick}>Inc</button>
        </>
    )
}
import React, { memo, useRef } from "react"

// export const ChildComp = memo(()=>{
//     const inCount = useRef(0);
//     console.log(inCount);
//     return (
//         <>
//             <div>{inCount.current++}</div>
//             <div>This is Child Compo own other Count</div>
//         </>
//     )
// });


const ChildComp = ()=>{
    const inCount = useRef(0);
    console.log(inCount);
    return (
        <>
            <div>{inCount.current++}</div>
            <div>This is Child Compo own other Count</div>
        </>
    )
};

export default React.memo(ChildComp);
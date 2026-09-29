export const EventProps = ()=>{
    const sendNotification = (amt,month) =>{
        alert(`${amt} Payment Due for ${month}. Kindly Pay On Time.`);
    }   
    const sendOverDue = (amt,month) =>{
        alert(`${amt} Payment Due for ${month} Month. Kindly Pay On Urgent.`);
    }

    return(
        <>
            <Notification click={ (e)=> sendNotification(5000,"Oct")} dblClick={(e)=> sendOverDue(10000,"Oct")} />
        </>
    )
}

const Notification = ({click,dblClick}) =>{
    return (
      <>
        <button onClick={click}>Send Notification</button>
        <button onDoubleClick={dblClick}>Send Overdue</button>
      </>
    )
}
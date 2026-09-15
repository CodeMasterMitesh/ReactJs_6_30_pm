// export const Button = (props) =>{
//     return(
//         <a href={props.link} target={props.target}>{props.name}</a>
//     )
// }


export const Button = ({link,target,name}) =>{
    return(
        <a href={link} target={target}>{name}</a>
    )
}
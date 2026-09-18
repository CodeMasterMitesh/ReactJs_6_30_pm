// export const Button = (props) =>{
//     return(
//         <a href={props.link} target={props.target}>{props.name}</a>
//     )
// }


export const Button = ({link,target,name,style,bgcolor}) =>{
    console.log(style)
    return(
        <a style={style} className={bgcolor} href={link} target={target}>{name}</a>
    )
}
import '../style/button.css'

interface BtnProps{
   label:any;
   disabled?: boolean;
   color?: "primary" | "secondary" | "readOnly";
}
   
const  Button = ({label,  disabled = false,color = 'primary'}:BtnProps) => {
 const btnStyle = `button ${color} ${disabled} disabled:''` 
return (
   <button className={btnStyle}  disabled={disabled}>{label}</button>
)
}

export default Button
  import '../style/A-header.css'

interface Iswitch{
   onToggle():void
   isToggled:boolean
}

  function PSwitch({isToggled, onToggle}:Iswitch){
    return(
        <label className='switch'>
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="slider"/>
        {/* <span className='slider'></span> */}
    </label>
    )
  }

  export default PSwitch
import '../styles/Popup.css'

function Popup(props) {

  

  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
        
        
        {props.children}
        <button className='button2' onClick={()=>props.setTrigger(false)}>Close</button>
      </div>
      
    </div>
  ): '';
}

export default Popup
import ADashBoard from "./Admin";
import { createContext, useState } from 'react'
import '../App.css'
import PSwitch from "./P-switch.tsx";


interface Icontext{
    theme:string
    toggleTheme():void
}

//  const ThemeContext = createContext(null)
  const ThemeContext = createContext<Icontext | null>(null)

function Forms() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
    }
    return (
        
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div  id={theme}>
                {/* <div className="dash-p">
                </div> */}
                <ADashBoard />
                <div className="switch-mode">
                <label htmlFor="">Switch mode:</label>
                <PSwitch isToggled={theme === 'dark'} onToggle={toggleTheme}/>
                </div>
              
                {/* <div className="switch-p">
              
                </div> */}
                {/* <PSwitch isToggled={theme} onToggle={() => setTheme('dark')}/> */}
               
            </div>
        </ThemeContext.Provider>
        
        


    )
}

export default Forms
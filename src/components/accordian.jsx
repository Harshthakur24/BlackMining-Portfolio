import { createContext, useState, useContext, useRef } from "react"

const AccordianContext = createContext();

export const Accordian = ({children, value, onChange, ...props}) => {
    const [selected, setSelected] = useState(value)
    
    return (
        <ul {...props}>
            <AccordianContext.Provider value={{selected, setSelected}}>
                {children}
            </AccordianContext.Provider>
        </ul>
    )
}

export const AccordianItem = ({children, value, trigger, ...props}) => {
    const {selected, setSelected} = useContext(AccordianContext);
    const open = selected === value;

    const ref = useRef(null)

    return (
        <li className="border-b" {...props}>
            <header
                role="button"
                onClick={() => setSelected(open ? null : value)}
                className="flex justify-between items-center p-4 font-semibold md:text-[20px] cursor-pointer"
            >
                <p>{trigger}</p>
                <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className={"transition-all duration-300 ease-in-out w-[1.5rem] h-[1.5rem] " + (open ? "rotate-0" : "rotate-180")}
                >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <path d="M5 15L10 9.84985C10.2563 9.57616 10.566 9.35814 10.9101 9.20898C11.2541 9.05983 11.625 8.98291 12 8.98291C12.375 8.98291 12.7459 9.05983 13.0899 9.20898C13.434 9.35814 13.7437 9.57616 14 9.84985L19 15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> 
                    </g>
                </svg>
            </header>

            <div className="overflow-y-hidden transition-all duration-300 ease-in-out" style={{height: open? ref.current?.offsetHeight || 0 :0}}>
                <div className="p-4 text-xl" ref={ref}>{children}</div>
            </div>
        </li>
    )

}
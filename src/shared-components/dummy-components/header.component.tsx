import { useContext } from "react";
import { themeContext } from "../../contexts/theme-context";
function Header({title, subtitle}: {title: string, subtitle?: string}) {
    const {darkTheme} = useContext(themeContext);
    return(
        <div className="flex flex-col">
        <h1 className={`text-2xl font-bold ${darkTheme ? "text-white" : "text-slate-800"}`}>{title}</h1>
       {subtitle && <p className={`text-sm ${darkTheme ? "text-white" : "text-slate-500"}`}>{subtitle}</p>}
        </div>
    )
}
export default Header
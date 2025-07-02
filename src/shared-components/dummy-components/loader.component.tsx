import { useContext } from "react";
import { themeContext } from "../../contexts/theme-context";


function LoaderComponent() {
    const {darkTheme} = useContext(themeContext);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className={`animate-spin rounded-full h-32 w-32 border-b-2 border-[${darkTheme ? 'white' : 'dark-900'}]`}>
      </div>
    </div>
  )
}

export default LoaderComponent
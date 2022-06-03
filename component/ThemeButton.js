import { useTheme } from "next-themes";



const ThemeButton = () => {

    const { theme, setTheme } = useTheme();
    const toggleTheme = () => {
        if (theme === "light") return setTheme("dark");
        setTheme("light");
      };

    return (
        <button className="btn btn-xs pt-2" onClick={toggleTheme}>
            <i className="fe fe-moon font-size-lg"></i>
        </button>
    );
};



export default ThemeButton;
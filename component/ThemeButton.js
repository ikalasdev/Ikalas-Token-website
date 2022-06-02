import { useTheme } from "next-themes";


const ThemeButton = () => {

    const { theme, setTheme } = useTheme();
    const toggleTheme = () => {
        if (theme === "light") return setTheme("dark");
        setTheme("light");
      };

    return (
        <button className="btn btn-xs" onClick={toggleTheme}>
            Theme
        </button>
    );
};



export default ThemeButton;
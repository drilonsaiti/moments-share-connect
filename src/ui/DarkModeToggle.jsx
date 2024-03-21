import ButtonIcon from "./ButtonIcon.jsx";
import {HiOutlineMoon, HiOutlineSun} from "react-icons/hi2";

const DarkModeToggle = ({navBar}) => {
    const isDarkMode = false;
    return (
        <ButtonIcon navBar={navBar ? navBar : ''}>
            {isDarkMode ? <HiOutlineSun/> : <HiOutlineMoon/>}
        </ButtonIcon>
    );
};

export default DarkModeToggle;
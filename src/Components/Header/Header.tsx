import { ReactElement } from "react";
import "./Header.scss";

type HeaderProps = {
    title: String
}

const Header = ({title}: HeaderProps): ReactElement => {
    return(
        <div>
            {title}
        </div>
    );
}

export default Header;
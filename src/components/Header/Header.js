import { React } from "react";
import logoNetflix from "../../assets/logo-netflix.png";
import avatarNetflix from "../../assets/avatar-netflix.png";
import "./Header.css"

export const Header = ({black}) => {

    return (
        <header className={black ? 'black' : ''}>
            <div className="header-logo">
                <a href="*">
                    <img src={logoNetflix}></img>
                </a>
            </div>
            <div className="header-avatar">
                <a href="*">
                    <img src={avatarNetflix}></img>
                </a>
            </div>
        </header>
    )
}
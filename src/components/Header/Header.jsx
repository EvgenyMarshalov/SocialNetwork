import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg' alt='' />

            <div className={s.loginBlock}>
                {props.isAuth 
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> 
                    :<NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;
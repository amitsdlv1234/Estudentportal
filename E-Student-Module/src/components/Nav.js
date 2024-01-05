import './styles/nav.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const Nav = () => {
    const move = useNavigate();
    const { userroll } = useParams();

    const handlehome = () => {
        move(`/home/${userroll}`)
    }
    const handleback = () => {

    }
    return (
        <>
            <nav>
                <div class="logo">
                    <img src="https://www.aith.ac.in/images/logo.png" alt="error" />
                </div>
                <div class="right">
                    <ul>
                        <li><span onClick={handlehome}>
                            Home
                        </span></li>
                        <li>
                            <span onClick={handleback}>Back </span></li>
                    </ul>
                </div>

            </nav></>
    )
}
export default Nav

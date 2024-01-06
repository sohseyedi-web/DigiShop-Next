"use client"
import { logout } from '@/services/authServices';

const Sidebar = () => {

    const logoutHandler = async() => {
        await logout();
        document.location.href = "/"
    }

  return (
    <aside>
        <ul>
            <li>
                <button onClick={logoutHandler}>خروج از حساب </button>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar
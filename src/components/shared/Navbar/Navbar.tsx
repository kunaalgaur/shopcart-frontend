import { useAppSelector } from "../../../redux/hooks"
import Heading from "../../ui/Heading/Heading"

const Navbar = () => {
    const {user} = useAppSelector((state) => state.user)
  return (
    <nav>
        <Heading>Shopcart</Heading>
        <div>
            <div>
                <img src={user.image || "/user.png"} alt="User profile image" loading="lazy"/>
                <span>Account</span>
            </div>
            <div>
                <span>Cart</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="bg-blue-800 py-6 ">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          header
          <Link to="/" >Holidays.com</Link>
        </span>
        <span className="flex bg-white w-30 p-2.5 rounded">
          <Link to="/signup" className="flex items-center text-blue-600 font-bold hover:text-green-500 "></Link>
    Sign In
        </span>
      </div>

    </div>
  )
}

export default Header

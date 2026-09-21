import { AlignJustify, CarFront, Cog, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../button";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/store/auth-slice";
import { resetCart } from "@/store/shop/cart-slice";

function AdminHeader({ setOpen }) {
  const dispatch = useDispatch();

  function handleLogout() {
  dispatch(logoutUser()).then(() => {
    dispatch(resetCart());
  });
}

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white border-b shadow-sm">
      <div className="flex items-center gap-4">
        <Button
          onClick={() => setOpen(true)}
          variant="outline"
          size="icon"
          className="lg:hidden sm:flex border-slate-300 hover:border-cyan-500 hover:text-cyan-600 transition-colors"
        >
          <AlignJustify />
          <span className="sr-only">Toggle Menu</span>
        </Button>

        <Link to="/admin/dashboard" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Cog
              className="absolute inset-0 z-0 w-8 h-8 text-cyan-500 opacity-90 transition-transform duration-700 ease-linear group-hover:rotate-90"
              strokeWidth={1.5}
            />
            <div className="relative z-10 bg-white rounded-full p-0.5 flex items-center justify-center">
              <CarFront className="w-4 h-4 text-black" strokeWidth={2} />
            </div>
          </div>
          <span className="font-bold text-lg tracking-tight hidden sm:inline">
            JMS Admin
          </span>
        </Link>
      </div>

      <div className="flex flex-1 justify-end">
        <Button
          onClick={handleLogout}
          className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow bg-black text-white hover:bg-cyan-600 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </div>
    </header>
  );
}

export default AdminHeader;

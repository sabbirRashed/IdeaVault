'use client'
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, } from "@heroui/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import { FiMoon } from "react-icons/fi";
import { IoSunnyOutline } from "react-icons/io5";
import ProfileDropDown from "./ProfileDropDown";
import MenuDrawer from "./MenuDrawer";


const Navbar = () => {

    const { data, isPending } = authClient.useSession();
    const user = data?.user;

    const pathName = usePathname();
    const { resolvedTheme, setTheme } = useTheme();

    const isDark = resolvedTheme === "dark";

    const publicLinks = [
        { to: "/", label: "Home" },
        { to: "/ideas", label: "Ideas" },
        { to: "/add-ideas", label: "Add Idea" }
    ];

    const privateLinks = [
        { to: "/my-ideas", label: "My Ideas" },
        { to: "/my-interactions", label: "My Interactions" },
    ];

    return (
        <div className=" border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">

           
            <nav className="w-11/12 max-w-7xl mx-auto ">
                <header className="flex h-16 items-center justify-between px-0 md:px-6">
                    <div className="flex items-center ">
                        <Image
                            src={'/assets/sparkNestLogo.png'}
                            alt="logo"
                            width={40}
                            height={40}
                            className="w-auto"></Image>
                        <p className="font-bold text-lg text-(--color-secondary)"><span className="text-(--color-primary)">Spark</span>Nest</p>
                    </div>

                    <ul className="hidden md:flex justify-center gap- lg:gap-4">
                        {publicLinks.map(item => {
                            return <Link
                                key={item.to}
                                href={item.to}
                                className={`px-3.5 py-2 rounded-full text-sm font-medium transition-colors ${pathName === item.to ? "bg-primary/10 text-(--color-primary)" : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"}`}>
                                <li>{item.label}</li>
                            </Link>
                        })}
                        {
                            user && privateLinks.map(item => {
                                return <Link
                                    key={item.to}
                                    href={item.to}
                                    className={`px-2 lg:px-3.5 py-2 rounded-full text-sm font-medium transition-colors ${pathName === item.to ? "bg-primary/10 text-(--color-primary)" : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"}`}>
                                    <li>{item.label}</li>
                                </Link>
                            })
                        }

                    </ul>

                    <div className="hidden md:flex items-center gap-2 md:gap-4">
                        <button
                            onClick={() => { setTheme(isDark ? "light" : "dark") }}

                        >
                            {
                                isDark ?
                                    <IoSunnyOutline className="text-amber-500 h-5 w-5 cursor-pointer" />

                                    : <FiMoon className="text-indigo-500 h-5 w-5 cursor-pointer" />
                            }
                        </button>
                        {
                            user ? <>
                                <ProfileDropDown user={user} />
                            </> : <>
                                <Link href={'/login'}>
                                    <Button
                                        size="sm"
                                        className={'rounded-full btn-secondary transition-colors duration-300'}
                                    >
                                        Log in
                                    </Button>
                                </Link>
                                <Link href={'/register'}>
                                    <Button
                                        size="sm"
                                        className={'btn-primary transition-colors duration-300'}
                                    >
                                        Register
                                    </Button>
                                </Link>
                            </>
                        }
                    </div>

                    <MenuDrawer/>
                </header>
            </nav>
        </div>
    );
};

export default Navbar;
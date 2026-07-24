'use client'
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, } from "@heroui/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMoon } from "react-icons/fi";
import { IoSunnyOutline } from "react-icons/io5";
import { SiUnacademy } from "react-icons/si";


const Navbar = () => {

    const {data, isPending} =  authClient.useSession();
    const user = data?.user;
    console.log(data, isPending);

    const pathName = usePathname();
    // const { resolvedTheme, setTheme } = useTheme();

    // const isDark = resolvedTheme === "dark";

    const handleLogout = async()=>{
        await authClient.signOut()
    }

    const publicLinks = [
        { to: "/", label: "Home" },
        { to: "/ideas", label: "Ideas" },
    ];

    const privateLinks = [
        { to: "/add-ideas", label: "Add Idea" },
        { to: "/my-ideas", label: "My Ideas" },
        { to: "/my-interactions", label: "My Interactions" },
    ];

    return (
        <div className=" border-b bg-background/80 backdrop-blur-md">

            {/* Basic */}
            <nav className="w-11/12 max-w-7xl mx-auto">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        <p className="font-bold">SparkNest</p>
                    </div>

                    <ul className="hidden sm:flex justify-center gap-4">
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
                                    className={`px-3.5 py-2 rounded-full text-sm font-medium transition-colors ${pathName === item.to ? "bg-primary/10 text-(--color-primary)" : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"}`}>
                                    <li>{item.label}</li>
                                </Link>
                            })
                        }

                    </ul>

                    <div className="flex items-center gap-2 md:gap-4">
                        {/* <button
                            onClick={() => { setTheme(isDark ? "light" : "dark") }}
                            
                        >
                            {
                                isDark ?
                                    <IoSunnyOutline className="text-amber-500 h-5 w-5 cursor-pointer" />

                                    : <FiMoon className="text-indigo-500 h-5 w-5 cursor-pointer" />
                            }
                        </button> */}
                        {
                            user ? <>

                                <Avatar size="sm">
                                    <Avatar.Image 
                                    src={user?.image} 
                                    alt={user?.name} />
                                    <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                                </Avatar>
                                <Button
                                    size="sm"
                                    className={'bg-(--color-danger)'}
                                onPress={handleLogout}
                                >
                                    Log out
                                </Button>
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
                </header>
            </nav>
        </div>
    );
};

export default Navbar;
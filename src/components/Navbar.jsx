'use client'
import { Avatar, Button, Switch, } from "@heroui/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
    const user = false;
    const pathName = usePathname();
    const { theme, setTheme } = useTheme();
    const isDark = theme === "dark";

    const publicLinks = [
        { to: "/", label: "Home" },
        { to: "/ideas", label: "Ideas" },
    ];

    const privateLinks = [
        { to: "/add-idea", label: "Add Idea" },
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
                                className={`px-3.5 py-2 rounded-full text-sm font-medium transition-colors ${pathName === item.to ? "bg-primary/10 text-primary" : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"}`}>
                                <li>{item.label}</li>
                            </Link>
                        })}
                        {
                            user && privateLinks.map(item => {
                                return <Link
                                    key={item.to}
                                    href={item.to}
                                    className={`px-3.5 py-2 rounded-full text-sm font-medium transition-colors ${pathName === item.to ? "bg-primary/10 text-primary" : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"}`}>
                                    <li>{item.label}</li>
                                </Link>
                            })
                        }

                    </ul>

                    <div className="flex items-center gap-4">
                        <Button
                            onPress={() => { setTheme(isDark ? "light" : "dark") }}
                            isIconOnly
                            variant=""
                        >
                            {
                                isDark ?
                                    <Moon className="text-indigo-500 h-5 w-5" />
                                    : <Sun className="text-amber-500 h-5 w-5" />
                            }
                        </Button>
                        {
                            user ? <>

                                <Avatar>
                                    <Avatar.Image alt="John Doe" />
                                    <Avatar.Fallback>JD</Avatar.Fallback>
                                </Avatar>
                                <Button
                                    className={'bg-(--color-danger)'}
                                // onPress={onLogout}
                                >
                                    Log out
                                </Button>
                            </> : <>
                                <Button
                                    
                                    className={'rounded-full bg-(--color-secondary) hover:bg-(--color-secondary-hover) transition-colors duration-300'}
                                >
                                    Log in
                                </Button>
                                <Button
                                    className={'bg-(--color-primary) hover:bg-(--color-primary-hover) transition-colors duration-300'}
                                >
                                    Sign up
                                </Button>
                            </>
                        }
                    </div>
                </header>
            </nav>
        </div>
    );
};

export default Navbar;
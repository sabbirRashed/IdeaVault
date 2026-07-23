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
                        <Button
                            onPress={() => { setTheme(isDark ? "light" : "dark") }}
                            isIconOnly
                            variant=""
                        >
                            {
                                isDark ?
                                    <Sun className="text-amber-500 h-4 w-4" />

                                    : <Moon className="text-indigo-500 h-4 w-4" />
                            }
                        </Button>
                        {
                            user ? <>

                                <Avatar size="sm">
                                    <Avatar.Image alt="John Doe" />
                                    <Avatar.Fallback>JD</Avatar.Fallback>
                                </Avatar>
                                <Button
                                    size="sm"
                                    className={'bg-(--color-danger)'}
                                // onPress={onLogout}
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
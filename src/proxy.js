import { headers } from "next/headers";
import { auth } from "./lib/auth";
import { NextResponse } from "next/server";


export async function proxy(request) {

    const session = await auth.api.getSession({
        headers: await headers(),
    })

    if (session) {
        return NextResponse.next();
    }
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set("redirect", request.nextUrl.pathname);

    return NextResponse.redirect(loginUrl);

}


export const config = {
    matcher: ['/add-ideas', '/my-ideas',  '/ideaDetails/:path*','/my-interactions', '/profile']
}
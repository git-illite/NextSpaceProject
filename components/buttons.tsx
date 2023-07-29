"use client";
import Link from 'next/link'
import Image from 'next/image'
import { signIn, signOut, useSession } from "next-auth/react";

export function SignInButton() {
    const { data: session, status } = useSession();
    console.log(session, status);

    if(status === 'loading'){
        return<>...</>
    }
    if(status === 'authenticated'){
        return(
            <Link href={'/dashboard'}>
            <Image src={session.user?.image ?? '/defaultUser.png'} width={32} height={32} alt='Your Name'/>          
            </Link>
        )
    }


    return <button onClick={()=>signIn()}>Sign In</button>
}

export function SignOutButton() {
    return <button onClick={()=>signOut()}>Sign Out</button>
}
'use client';
import { ButtonLink, Navbar } from "@_index";
// import { useSession, signIn, signOut } from "next-auth/react";
import { LoginBox, ButtonPromise } from "@_index";

// export default function Login() {
//   const { data: session } = useSession()
//   if(session && session.user != undefined) {
//     return <>
//       Signed in as {session.user.email} <br/>
//       <button onClick={() => signOut()}>Sign out</button>
//     </>
//   }
//   return <>
//     Not signed in <br/>
//     <button onClick={() => signIn()}>Sign in</button>
//   </>
// }

export default function Login() {
    return(
        <main>
            {Navbar(false)}
            <div className = "relative mx-auto w-full max-w-container space-y-20 px-4 pt-20 sm:px-6 lg:px-8 pb-20">
            Welcome to Login<br></br>
            {LoginBox()}
            </div>
        </main>
    );
}

{/* {ButtonPromise("btn btn-primary", "Log in", signIn())} */}
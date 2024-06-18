import { Navbar } from "@_index";

const sessionUser = "Jono/Ryan"

export default function Campaign() {
    return(
        <main>
            {Navbar(true)}
            <div className = "relative mx-auto w-full max-w-container space-y-20 px-4 pt-20 sm:px-6 lg:px-8 pb-20">
                <h1>
                    Welcome, {sessionUser}
                </h1>
                <div className="subheading">
                    select campaign
                </div>
            </div>
        </main>
    );
}
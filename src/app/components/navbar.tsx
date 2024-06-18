// uses a list of campaigns accessible to user
import React from "react";
import { concat } from "fp-ts/lib/ReadonlyNonEmptyArray"

export default function NavBar(LoggedIn: boolean) {
    const userCampaigns = ["Eldoria", "Campaign 1", "Campaign 2"]

    function CampaignListGen(CampaignList: string[] = userCampaigns) {
        var outString = ""
        for (let i = 0; i < CampaignList.length; i++) {
            outString = outString.concat(outString,"<li><a href = ","./campaign",">",CampaignList[i],"</a></li>")
        }
        return( 
            React.createElement(outString)
         )
    }
    if (LoggedIn == true){
        return (
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">[ ] DnD Tool</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                    <li><a>Link</a></li>
                    <li>
                        <details>
                        <summary>
                            Parent
                        </summary>
                        <ul className="p-2 bg-base-100 rounded-t-none">
                            {CampaignListGen()}
                        </ul>
                        </details>
                    </li>
                    </ul>
                </div>
            </div>
            );
    }
    else{
    <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">[ ] DnD Tool</a>
    </div>
    }
}


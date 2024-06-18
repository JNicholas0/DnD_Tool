// uses a list of campaigns accessible to user
import { Children } from "react";
import { concat } from "fp-ts/lib/ReadonlyNonEmptyArray"
import { forEachChild } from "typescript";

const userCampaigns = ["Eldoria", "Campaign 1", "Campaign 2"]
// const userCampaignUrls = 

function CampaignListGen(CampaignList: string[] = userCampaigns) {    
    const mappedCampaigns = Children.map(userCampaigns, campaign =>
        <li><a href="./campaign">{campaign}</a></li>
    )
    return (
        mappedCampaigns
    )
}

export default function Navbar(LoggedIn: boolean) {
    var mappedCampaigns = CampaignListGen();
    if (LoggedIn == true){
        return (
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl" href=".">[ ] DnD Tool</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                    <li><a>Landing</a></li>
                    <li>
                        <details>
                        <summary>
                            Campaign
                        </summary>
                        <ul className="p-2 bg-base-100 rounded-t-none">
                            {mappedCampaigns}
                        </ul>
                        </details>
                    </li>
                    </ul>
                </div>
            </div>
            );
    }
    else{
    return (
    <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">[ ] DnD Tool</a>
    </div>
    );
    }
}


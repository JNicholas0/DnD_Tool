// Idea is to have the Breadcrumbs show up once campaign is selected, with greyed out "select action" if none selected and appropriate text if selected
// get selections from current page
export default function BreadCrumbs(encounterSelected:string, actionSelected: string = "Select Action") {
    return (
        <div className="text-sm breadcrumbs">
            <ul>
                <li><a>Home</a></li> 
                <li><a>{encounterSelected}</a></li> 
                <li>{actionSelected}</li> 
            </ul>
        </div>
    );
}
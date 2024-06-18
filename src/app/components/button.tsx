'use client';

export default function ButtonLink(buttClassName: string, label: string, urlstring: string) {
    function handleUrlClick() {
        {location.href = urlstring}
    };
    return(
        <button className={buttClassName} onClick={handleUrlClick}>
            {label}
    </button>
    );
}


// function ButtonOutlinePrimary(onClick: MouseEventHandler, label: string) {
//     <button className="btn btn-outline btn-primary" onClick={onClick}>
//         {label}
//     </button>
// }

// function LinkButton(url: string) {

// }
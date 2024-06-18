'use client';

export function ButtonLink(buttClassName: string, label: string, urlstring: string) {
    function handleUrlClick() {
        {location.href = urlstring}
    };
    return(
        ButtonFunction(buttClassName, label, handleUrlClick)
    );
}

export function ButtonFunction(buttClassName: string, label: string, fun: Function) {
    return(
        <button className={buttClassName} onClick={() => fun}>
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
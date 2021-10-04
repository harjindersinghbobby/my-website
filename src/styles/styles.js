export const  StylesMedia = (css,width,height) => {
    switch(css) {
        case "mains":case "pink":case "orange":
            let color = 'red';
            return {
                backgroundColor: color,
                overflow: "hidden",
                justifyContent: "left",
                alignItems: "left",
                display: "flex",
                flexDirection: "column",
                }
        case "blue":case "purple":case "brown":
            break;
        default:{}
    }
    
}
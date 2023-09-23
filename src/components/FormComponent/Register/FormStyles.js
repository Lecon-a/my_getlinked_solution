let fullWidth = window.innerWidth;
let fullHeight = window.innerHeight;

const styles = {
    dimension: {
        width: `${fullWidth}`,
        height: `${fullHeight}`,
        position: "absolute",
        boxSizing: "border-box",
        margin: 0,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundBlendMode: "hard-light",
        background: "#150E28",
        "@media(max-width:600px)": {
            height: "100%",
            bottom: 0,
        },
    },

}

export default styles;
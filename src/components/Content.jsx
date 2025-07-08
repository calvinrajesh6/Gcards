import React from "react";
import Card from "./Card";

function Content(){
    return (
        <div style={Styles.container}>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>   
        </div>        
    )
}

const Styles = {
    container:{
        display: "flex",
        gap: "12px",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 20px",
    },
}

export default Content;
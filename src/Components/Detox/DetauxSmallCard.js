import React from 'react';

const DetauxSmallCard = ({ img, publication }) => {
    return (
        <div style={{
            height: "auto",
            width: "100%",
            maxHeight: "576px",
            maxWidth: "576px"
        }}>
            <div style={{
                maxHeight: "288px",
                maxWidth: "512px",

            }}>
                <img style={{
                    width: "100%",
                    maxHeight: "288px",
                    height: "auto"
                }} src={publication?.blogImage?.link || img} alt="" />
            </div>
            <div style={{
                margin: "15px 0px"
            }}>
                <span>{publication?.tags?.category3[0] || "# Process"}</span>
                <span style={{
                    padding: "0px 5px"
                }}>{publication?.tags?.field[0] || "# Field"}</span>
                <span style={{
                    padding: "0px 5px"
                }}>{publication?.tags?.series[0] || "# Series"}</span>
            </div>
            <p style={{
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "40px",
                color: "#1F1F1F",
            }}>{publication?.blogTitle}</p>
            <p style={{
                color: "#414141",
                fontSize: "16px",
                lineHeight: "28px",
                margin: "15px 0px"
            }}>10 traits you should work on to become a better designer in a rapidly growing industry</p>
            <div style={{
                margin: "15px 0px"
            }}>
                <div>
                    <span style={{
                        marginRight: "10px"
                    }}>24 Jun 2021 </span>
                    <span>5 min read</span>
                </div>
            </div>
        </div>
    )
}

export default DetauxSmallCard
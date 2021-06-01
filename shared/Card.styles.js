import styled from "@emotion/styled";

export const CardStyles = styled.div(() => ({
    maxWidth: "1100px",
    "& .principal-content": {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        backgroundColor: "#F5F7FA"
    },
    "& .product": {
        borderWidth: "0.5px",
        borderStyle: "solid",
        borderTop: "none",
        borderColor: "#CBD2D9",
        borderRadius: "4px",
    },
    "& .product img": {
        maxWidth: "100%",
        borderRadius: "4px",
        borderBottomLeftRadius: "0",
        borderBottomRightRadius: "0"
    },
    "& h2": {
        fontSize: "0.8rem"
    },
    "& .product-content": {
        display: "flex",
        marginBottom: "3px"
    },
    "& .section": {
        flexGrow: "1"  
    },
    "& .section:nth-of-type(1)": {
        flexGrow: "10"
    },
    "& .section:nth-of-type(2)": {
        flexShrink: "0",
        flexGrow: "0",
        borderLeftColor: "#c2c2c2",
        borderLeftStyle: "solid",
        borderLeftWidth: "0.5px",
        padding: "0 0.5rem 0 0.5rem",
        
    },
    "& ul": {
        listStyle: "none",
        padding: "0 0 0 0",
    },
    "& .section-one h2": {
        fontWeight: "normal",
        color: "#323F4B",
        fontSize: "1rem",
        margin: "4px 4px 10px 4px"
    },
    "& .section-two ul li img": {
        width: "20px",
        height: "13px",
        borderRadius: "0",
        borderBottomLeftRadius: "0",
        borderBottomRightRadius: "0"
    },
    "& .section-two": {
        fontSize: "0.7rem"
    },
    
  }));
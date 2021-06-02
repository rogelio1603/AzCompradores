import styled from "@emotion/styled";
import { MdClose } from "react-icons/md";

export const ModalStyles = styled.div(() => ({
    width: "100%",
    height: "100vh",
    zIndex: "1000",
    top: "0",
    left: "0",
    background: "rgba(0, 0, 0, 0.8)",
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .modalWrapper": {
        maxWidth: "450px",
        position: "relative",
        boxShadow: "0 5px 16px rgba(0, 0, 0, 0.2)",
        background: "#fff",
        color: "#000",
        borderRadius: "16px 16px 16px 16px",
        "@media (min-width: 480px)": {
            maxWidth: "450px",
          },
    },
    "& .image-content": {
        display: "flex",
        justifyContent: "center",
    },
    "& .image-content img": {
        maxWidth: "100%",
        borderRadius: "16px",
        borderBottomLeftRadius: "0",
        borderBottomRightRadius: "0"
    },
    "& .modal-content": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "left",
        lineHeight: "1.8",
        color: "#141414",
        backgroundColor: "#F5F7FA",
        borderRadius: "16px 16px 16px 16px;",
    },
    
    "& .description-content h2": {
        margin: "0",
        padding: "30px 20px 10px 30px",
        size: "22px",
        lineHeight: "22px",
        color: "#323F4B"
    },
    "& .description-content a": {
        margin: "10px 30px 20px 30px",
        padding: "2px",
        fontSize: "11px",
        lineHeight: "14px",
        borderRadius: "4px",
        color: "#F5F7FA",
        backgroundColor: "#EE1D52"
    },
    "& .description-content p": {
        margin: "0",
        //textAlign: "justify",
        padding: "10px 30px 20px 30px",
        size: "14px",
        lineHeight: "17px",
        color: "#323F4B",
        borderBottomColor: "#c2c2c2",
        borderBottomStyle: "solid",
        borderBottomWidth: "0.5px",
    },
    "& .buttons-content": {
        padding: "10px 30px 10px 30px",
        display: "flex",
    },
    "& .buttons-content a": {
        backgroundColor: "#69C9D0",
        border: "none",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        margin: "0 8px 0 0",
        padding: "10px",
        color: "#52606D",
        fontWeight: "700",
        marginTop: "4px",
        textDecoration: "none",
        "@media (max-width: 720px)": {
            padding: "8px",
          },
    },
    "& .button-modal img": {
        width: "17.78px",
        height: "11.11px",
        marginLeft: "5px"
    }
}));

export const CloseModalButton = styled(MdClose)(() => ({
    cursor: "pointer",
    position: "absolute",
    top: "20px",
    right: "20px",
    width: "32px",
    height: "32px",
    padding: "0",
    zIndex: "10" 
}))
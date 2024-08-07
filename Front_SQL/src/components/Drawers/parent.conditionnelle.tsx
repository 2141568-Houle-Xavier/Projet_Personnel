import { Box } from "@mui/material";

/**
 * Vérifie une condition et si celle-ci est vrai affiche une boîte aux alentours de l'enfant
 * @param props Les paramètres du composant
 * @returns Les enfants du composant ou une boîte entourant les enfants du composant
 */
export default function ParentConditionnelle(props: any)  {
    if (props.condition) {
        return (
            <Box 
                sx={{
                    borderRadius: "4px",
                    bgcolor: "#309fff",
                    color: "white",
                    boxShadow: "2px 2px 2px 0px #309fff",
                    width: "100%",
                }}
            >
                {props.children}
            </Box>
        )
    } 
    
    return props.children
}
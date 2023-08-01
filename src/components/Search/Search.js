import { styled, alpha } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 20,
    backgroundColor: alpha(theme.palette.background.default, 1),
    marginRight: theme.spacing(3),
    marginLeft: 1,
    width: "100%",
    "& .MuiInputBase-input::placeholder": {
        paddingLeft: theme.spacing(5),
    },
}));
export default Search;

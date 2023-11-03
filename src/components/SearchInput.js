import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Search from "@mui/icons-material/Search";

const SearchInput = (props) => {
    const { searchName, setSearchName } = props;
    return (
        <TextField
            variant="outlined"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Search />
                    </InputAdornment>
                ),
                style: { fontSize: "1.5rem" },
            }}
            sx={{ width: "60%" }}
            placeholder="Search user..."
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
        />
    );
};

export default SearchInput;

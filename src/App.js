import React, { useState, useEffect, useCallback } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import SearchInput from "./components/SearchInput";
import UsersTable from "./components/UsersTable";
import { throttle } from "lodash";

const App = () => {
    const [searchName, setSearchName] = useState("");
    const [userResults, setUserResults] = useState([]);
    const [error, setError] = useState();

    const fetchUsersAndUpdateState = async (search) => {
        const response = await fetch(
            `https://api.github.com/search/users?q=${search} in:name&sort=followers&order=desc`,
            {
                headers: {
                    Accept: "application/vnd.github+json",
                    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
                },
            }
        );
        const data = await response.json();
        if (data.items) {
            setUserResults(data.items);
            setError();
        } else {
            setUserResults([]);
            setError(data.message || "Something went wrong, please try in sometime!");
        }
    };

    const debounceFn = useCallback(throttle(fetchUsersAndUpdateState, 300), []);

    useEffect(() => {
        if (searchName) {
            debounceFn(searchName);
        } else {
            setUserResults([]);
        }
    }, [searchName]);

    return (
        <Stack
            display="flex"
            flexDirection="column"
            alignItems="center"
            height="calc(100vh - 6rem)"
            py={3}
            px={8}
            spacing={2}
        >
            <Typography variant="h2">GitHub Users</Typography>
            <SearchInput
                searchName={searchName}
                setSearchName={setSearchName}
            />
            <UsersTable userResults={userResults} />
            {
                error
                ? <Alert severity="error">{error}</Alert>
                : null
            }
        </Stack>
    );
};

export default App;

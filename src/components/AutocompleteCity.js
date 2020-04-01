import React from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

const AutocompleteCity = ({ isSearchOpen, setIsSearchOpen, cities, loading, handleInputChange, setNewCity, defaultCity }) => {
    return (
        <Autocomplete
            id="asynchronous-demo"
            style={{ width: 280 }}
            open={isSearchOpen}
            onOpen={() => {
                setIsSearchOpen(true);
            }}
            onClose={() => {
                setIsSearchOpen(false);
            }}
            getOptionSelected={(option, value) => option.name === value.name}
            getOptionLabel={option => option.name}
            options={cities}
            onChange={(event, value, reason) => {
                const selectedCity = value || defaultCity;
                setNewCity(selectedCity)
            }}

            loading={loading.current}
            renderInput={params => (
                <TextField
                    {...params}
                    label="Chose City"
                    variant="outlined"
                    onChange={handleInputChange}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading.current ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    );
}

export default AutocompleteCity;
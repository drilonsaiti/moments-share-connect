import React from 'react';
import TableOperations from "../../ui/TableOperations.jsx";
import Filter from "../../ui/Filter.jsx";
import SearchInput from "../../ui/SearchInput.jsx";

const HomeAdminOperations = () => {
    const optionsTypes = [
        {value: 'all', label: "All"},
        {value: 'next', label: "Next"},
        {value: 'past', label: "Past"},
    ]

    return (
        <TableOperations>

            <Filter filterField='types' options={optionsTypes}/>
            <SearchInput /*value={searchInput} onChange={handleSearchInputChange*//>

        </TableOperations>
    );
};

export default HomeAdminOperations;
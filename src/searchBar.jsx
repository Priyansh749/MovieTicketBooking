import { useState } from "react";

const SearchTerm = ({ setSearchTerm }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (e) => {
        const searchTerm = e.target.value.trim();
        setSearchQuery(searchTerm);
        setSearchTerm(searchTerm);
    };

    return (
        <form className="d-flex">
            <input
                className="form-control me-2 searchbar"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={handleChange}
            />
        </form>
    );
}

export default SearchTerm;
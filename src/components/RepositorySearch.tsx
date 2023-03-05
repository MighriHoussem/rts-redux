import { FormEventHandler, useState } from "react";
import { useDispatch } from "react-redux";

import "./index.css";
import { searchRepo } from "../Store/actions/index";



const RepositorySearch = (props: {}) => {


    const dispatch = useDispatch();

    const [searchText, setSearchText] = useState('');


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(searchRepo(searchText) as any);

    }



    return (
        <div style={{ marginBottom: "10%", marginTop: "5%", marginLeft: "5%" }}>
            <form onSubmit={(e) => handleSearch(e)}>
                <div className={"search-repo-div"}>
                    <input
                        type="text"
                        id="search-repo"
                        onChange={handleChange}
                        value={searchText}
                    />
                    <button> Search</button>
                </div>
            </form>

        </div>
    );
};

export default RepositorySearch;
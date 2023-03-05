import { Key } from "react";
import { useSelector, useDispatch } from "react-redux";


interface RepositoriesListProps {
    repositoriesList?: Array<string>
};

const RepositoriesList = (props: RepositoriesListProps): JSX.Element => {


    const dispatch = useDispatch();

    const listRepositories = useSelector((state: any) => state.Repository.repositories);
    const loading = useSelector((state: any) => state.Repository.loading);
    const error = useSelector((state: any) => state.Repository.error);


    const ReposListRender = listRepositories?.length ?
        listRepositories.map((repositoryName: string, index: Number) => {
            return (
                <li key={index as Key}>
                    {repositoryName}
                </li>
            )
        })
        : null;

    return (
        <>
            {listRepositories?.length ?
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3>Repositories List:</h3>
                    <ul>
                        {ReposListRender}
                    </ul>
                </div> : loading ?
                    <h6>Loading data...</h6>
                    : null}

        </>
    )
};

export default RepositoriesList;
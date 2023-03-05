import axios from "axios";
import { Dispatch } from "redux"

import { SEARCH_REPO, SEARCH_REPO_ERROR, SEARCH_REPO_SUCCESS } from "./actionTypes";
import { actionData } from "../reducers/repoReducer"

export const searchRepo = (searchText: string) => {

    return async (dispatch: Dispatch<actionData>) => {
        dispatch({
            type: SEARCH_REPO,
            payload: searchText
        });
        try {
            const { data } = await
                axios.get(`https://registry.npmjs.org/-/v1/search?text=${searchText}`);

            const names = data?.objects.map((repo: any, index: number) => {
                return repo?.package?.name;
            });

            dispatch({
                type: SEARCH_REPO_SUCCESS,
                payload: names
            });
        } catch (error: any) {
            dispatch({
                type: SEARCH_REPO_ERROR,
                payload: error.message
            })
        }
    };
};


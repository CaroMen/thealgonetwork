import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from "react-router-dom";
import { getAllProblems } from "../../../store/problems";

const ArraysComponent = () => {
    const { arrays } = useParams();
    const dispatch = useDispatch();
    const all_problems = useSelector(state => state.problems.problems);

    console.log('probleeeeeeeems', Object.values(all_problems));

    let problems = []

    for (let key in all_problems) {
        console.log('tetestesteet', all_problems[key])
        problems.push(all_problems[key])
    }

    useEffect( () => {
        dispatch(getAllProblems(arrays))
    }, [dispatch])
    
    return (
        <div>
            {problems.map((problem) => (
                <Link to="/arrays/:id">
                    <div>{problem.title}</div>
                </Link>
            ))}
            Hi
        </div>
    )
}

export default ArraysComponent;

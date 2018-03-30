import React from 'react';
import People from './people';
// import './PeopList.css';

export const PeopleList = (props) => {
    return (
        <div className="People-Map">
        {props.people.map((people => {
            return (
                <div>
                    <div>{people.first_name}</div>
                    <div>{people.last_name}</div>
                    <div>{people.email}</div>
                </div>
                )
            }))}
        </div>
    )
};
import React from 'react';
import Person from './Person';

export const PeopleList = props => {
    return (
        <div classname="People-Map">
        {props.people.map((person =>{
            return (
                <div>
                    <div>{person.first_name}</div>
                    <div> {person.last_name}</div>
                    <div>{person.email}</div>
                </div>
            )
        })
        )
        }
        </div>
    )
};
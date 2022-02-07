import React from 'react';

export const TotalResultFound = (props: { children?: any }) => {
    return (
        <div data-testid='total-records'>{props.children} records in total</div>
    )
}
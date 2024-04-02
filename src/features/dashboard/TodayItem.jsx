import React from 'react';
import styled from "styled-components";
import Tag from "../../ui/Tag.jsx";

const StyledTodayItem = styled.li`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 1.2rem;
    align-items: center;

    font-size: 1.4rem;
    padding: 0.8rem 0;
    border-bottom: 1px solid var(--color-grey-100);

    &:first-child {
        border-top: 1px solid var(--color-grey-100);
    }
`;

const Guest = styled.div`
    font-weight: 500;
`;

const TodayItem = ({activity}) => {
    const {email, date, full_name, location} = activity;

    return (
        <StyledTodayItem>
            {new Date(date) === Date.now() ? <Tag type="green">Today</Tag> : <Tag type="blue">Next day</Tag>}

            <Guest>{email}</Guest>
            <Guest>{date.replaceAll("T", " ")}</Guest>
            <Guest>{full_name}</Guest>
            <Guest>{location}</Guest>

        </StyledTodayItem>
    )
};

export default TodayItem;
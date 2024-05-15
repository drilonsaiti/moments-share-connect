import React from 'react';
import styled from "styled-components";
import Tag from "../../ui/Tag.jsx";
import {formatDateHelper} from "../../utils/helpers.js";

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

    const determineDateTag = (date) => {
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);

        const formattedDate = formatDateHelper(date);
        const formattedToday = formatDateHelper(today);
        const formattedTomorrow = formatDateHelper(tomorrow);

        if (formattedDate === formattedToday) {
            return <Tag type="green">Today</Tag>;
        } else if (formattedDate === formattedTomorrow) {
            return <Tag type="blue">Tomorrow</Tag>;
        } else {
            return <Tag type="silver">In The Next days</Tag>;
        }
    };

    return (
        <StyledTodayItem>
            {determineDateTag(new Date(date))}

            <Guest>
                {email}</Guest>
            <Guest>{formatDateHelper(new Date(date))}</Guest>
            <Guest>{full_name}</Guest>
            <Guest>{location}</Guest>

        </StyledTodayItem>
    )
};

export default TodayItem;
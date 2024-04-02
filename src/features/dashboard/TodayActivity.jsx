import React from 'react';
import {useBuckets} from "../homeadmin/useBuckets.js";
import SpinnerMini from "../../ui/SpinnerMini.jsx";
import Heading from "../../ui/Heading.jsx";
import Spinner from "../../ui/Spinner.jsx";
import styled from "styled-components";
import FlexGroup from "../../ui/FlexGroup.jsx";
import TodayItem from "./TodayItem.jsx";

const StyledToday = styled.div`
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-100);
    border-radius: var(--border-radius-md);

    padding: 2.2rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    grid-column: 1 / span 2;
    padding-top: 2.4rem;
`;

const TodayList = styled.ul`
    overflow: scroll;
    overflow-x: hidden;
    
    &::-webkit-scrollbar {
        width: 0 !important;
    }

    scrollbar-width: none;
    -ms-overflow-style: none;
`;

const NoActivity = styled.p`
    text-align: center;
    font-size: 1.8rem;
    font-weight: 500;
    margin-top: 0.8rem;
`;

const TodayActivity = () => {
    const {isLoading, buckets} = useBuckets();


    if (isLoading) return <SpinnerMini/>

    const filteredBuckets = buckets.filter((bucket) => new Date(bucket.date) >= new Date());


    return (
        <StyledToday>
            <FlexGroup type="row">
                <Heading as="h2">Next event</Heading>
            </FlexGroup>

            {!isLoading ? (
                filteredBuckets?.length > 0 ? (
                    <TodayList>
                        {filteredBuckets.map((activity) => (
                            <TodayItem activity={activity} key={activity.id}/>
                        ))}
                    </TodayList>
                ) : (
                    <NoActivity>No activity today...</NoActivity>
                )
            ) : (
                <Spinner/>
            )}
        </StyledToday>
    );
};

export default TodayActivity;
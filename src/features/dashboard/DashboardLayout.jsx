import styled from "styled-components";

import Stats from "./Stats.jsx";
import TodayActivity from "./TodayActivity.jsx";
import Header from "../../ui/Header.jsx";
import NavigationBar from "../../ui/NavigationBar.jsx";
import React from "react";

const StyledHome = styled.div`
    position: relative;
    background-color: var(--color-grey-0);
    padding: 2rem 4rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    @media only screen and (min-width: 900px) {
        align-items: normal;

    }
    @media only screen and (max-width: 450px) {
        padding: 2rem 2rem;
    }
`

function DashboardLayout() {
    /*const { bookings, isLoading: isLoading1 } = useRecentBookings();
    const { confirmedStays, isLoading: isLoading2, numDays } = useRecentStays();
    const { cabins, isLoading: isLoading3 } = useCabins();

    if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;*/

    return (
        <StyledHome>
            <Header/>
            <Stats
                /*bookings={bookings}
                confirmedStays={confirmedStays}
                numDays={numDays}
                cabinCount={cabins.length}*/
            />
            <TodayActivity/>

            <NavigationBar/>
        </StyledHome>
    );
}

export default DashboardLayout;

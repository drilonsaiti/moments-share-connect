import {HiOutlineBanknotes, HiOutlineChartBar, HiOutlineCircleStack, HiOutlineUsers,} from "react-icons/hi2";
import Stat from "./Stat.jsx";
import {formatCurrency} from "../../utils/helpers.js";
import FlexGroup from "../../ui/FlexGroup.jsx";

function Stats({bookings, confirmedStays, numDays, cabinCount}) {

    return (
        <FlexGroup type="row" style={{gap: '4rem'}} operations>
            <Stat
                title="Users"
                color="blue"
                icon={<HiOutlineUsers/>}
                value={20}
            />

            <Stat
                title="Buckets"
                color="indigo"
                icon={<HiOutlineCircleStack/>}
                value={20}
            />
            <Stat
                title="Profit"
                color="green"
                icon={<HiOutlineBanknotes/>}
                value={formatCurrency(20 * 500)}
            />
            <Stat
                title="Occupancy rate"
                color="yellow"
                icon={<HiOutlineChartBar/>}
                value={Math.round(((20 * 500) / 20) * 100) + "%"}
            />
        </FlexGroup>
    );
}

export default Stats;

import {HiOutlineBanknotes, HiOutlineChartBar, HiOutlineCircleStack, HiOutlineUsers,} from "react-icons/hi2";
import Stat from "./Stat.jsx";
import {formatCurrency} from "../../utils/helpers.js";
import FlexGroup from "../../ui/FlexGroup.jsx";
import {useBucketsLength} from "../homeadmin/useBucketsLength.js";
import SpinnerMini from "../../ui/SpinnerMini.jsx";
import {useUsersLength} from "../authentication/useUsersLength.js";

function Stats() {

    const {buckets, isLoading} = useBucketsLength();
    const {users, isLoading: isLoadingUsers} = useUsersLength();

    if (isLoading || isLoadingUsers) return <SpinnerMini/>


    return (
        <FlexGroup type="row" style={{gap: '4rem'}} operations>
            <Stat
                title="Users"
                color="blue"
                icon={<HiOutlineUsers/>}
                value={users ?? 0}
            />

            <Stat
                title="Buckets"
                color="indigo"
                icon={<HiOutlineCircleStack/>}
                value={buckets ?? 0}
            />
            <Stat
                title="Profit"
                color="green"
                icon={<HiOutlineBanknotes/>}
                value={formatCurrency(buckets * 500)}
            />
            <Stat
                title="Average profit"
                color="yellow"
                icon={<HiOutlineChartBar/>}
                value={formatCurrency((buckets * 500) / users)}
            />
        </FlexGroup>
    );
}

export default Stats;

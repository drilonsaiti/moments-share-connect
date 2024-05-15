import {formatDistance, parseISO} from 'date-fns';
//import { differenceInDays } from 'date-fns/esm';


/*export const subtractDates = (dateStr1, dateStr2) =>
    differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));*/

export const formatDistanceFromNow = (dateStr) =>
    formatDistance(parseISO(dateStr), new Date(), {
        addSuffix: true,
    })
        .replace('about ', '')
        .replace('in', 'In');

export const formatDateHelper = (date) => {
    const today = new Date();
    const options = {day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric'};
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

    if (today.toDateString() === date.toDateString()) {
        return `Today at ${formattedDate.split(' at ')[1]}`;
    } else {
        return formattedDate.toString();
    }
}

export const getToday = function (options = {}) {
    const today = new Date();

    if (options?.end)
        today.setUTCHours(23, 59, 59, 999);
    else today.setUTCHours(0, 0, 0, 0);
    return today.toISOString();
};

export const formatCurrency = (value) =>
    new Intl.NumberFormat('en', {style: 'currency', currency: 'USD'}).format(
        value
    );
import numeral from 'numeral'

import moment from 'moment';


const timeStamp = (value) => {
    if (value) {
        return moment(String(value)).format('d/m/yyyy, hh:mm:ss A')
    }
}

const createRef = (value) => {
    return !value ? '0' : (value).split("-").join("").slice(0,6)
}

const nairaFilter = (value) => {
    if (!value) {
        return '₦ 0'
    }

    return numeral(value).format('(₦ 0.00a)')
}

const percentFilter = (value) => {
    return !value ? '0%' : `₦{Number(value).toFixed(2)}%`
}

const percentageFilter = (value) => {
    return !value ? '0%' : `₦{Number(value).toFixed(2) * 100}%`
}

export { createRef, nairaFilter, percentFilter, percentageFilter, timeStamp }
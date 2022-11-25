import React from 'react'
import Moment from 'react-moment'
const DateFormatter = ({ date }) => {
    return (
        <Moment fromNow>
            {date}
        </Moment>
    )
}
export default DateFormatter;
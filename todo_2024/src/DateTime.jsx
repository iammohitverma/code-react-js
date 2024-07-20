import { useState, useEffect } from "react"

export const DateTime = () => {
    const [Time, SetTime] = useState(0);

    useEffect(() => {
        const timeInterval = setInterval(() => {
            const d = new Date();
            const time = d.toLocaleString();
            SetTime(time);
        }, 1000);

        return () => clearInterval(timeInterval);
    }, [])

    return (
        <p>{Time}</p>
    )
}
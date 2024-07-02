import React, { useEffect, useState } from 'react';

function ChallengeView() {
    const [entries, setEntries] = useState([]);
    const recommendedIntake = 3.7; // liters, recommended daily water intake

    useEffect(() => {
        const fetchHydrationData = async () => {
            try {
                const response = await fetch('https://902e-203-117-161-34.ngrok-free.app/api/hydration/daily-summary', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ userID: 12 }) // Assuming you need to send the user ID
                });
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                const data = await response.json();
                setEntries(data);
            } catch (error) {
                console.error('Error fetching hydration data:', error);
            }
        };

        fetchHydrationData();
    }, []);

    const calculateExcess = (totalAmount) => {
        const totalLiters = parseFloat(totalAmount) / 1000; // Convert ml to liters
        const excessIntake = Math.max(0, totalLiters - recommendedIntake);
        return excessIntake.toFixed(2); // Formatting to 2 decimal places for better readability
    };

    return (
        <div>
            <h1>Water Streak</h1>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Total Water Intake (liters)</th>
                        <th>Exceeded Intake by (liters)</th>
                    </tr>
                </thead>
                <tbody>
                    {entries.map((entry, index) => (
                        <tr key={index}>
                            <td>{new Date(entry.date).toLocaleDateString()}</td>
                            <td>{(parseFloat(entry.totalAmount) / 1000).toFixed(2)}</td>
                            <td>{calculateExcess(entry.totalAmount)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ChallengeView;

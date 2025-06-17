import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../assets/AuthProvider/AuthProvider';
import AddedEvents from './AddedEvents';
import useAxiosSecure from './hooks/useAxiosSecure';


const MyMarathon = () => {
    const [events, setEvents] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if (user) {
            const fetchEvents = async () => {
                try {
                    const response = await axiosSecure.get('/events');
                    setEvents(response.data);
                } catch (error) {
                    console.error('Fetch error:', error.message);
                } finally {
                    setLoading(false);
                }
            };
            fetchEvents();
        }
    }, [user, axiosSecure]);

    if (loading) {
        return <p className="text-center mt-10 text-lg">Loading events...</p>;
    }

    if (!user) {
        return <p className="text-center mt-10 text-lg">Loading user data...</p>;
    }

    const filteredEvents = events.filter(event => event.email === user.email);
    const searchedEvents = filteredEvents.filter(event =>
        event.title.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className='mb-16'>
            <h1 className='text-center font-serif text-3xl p-1.5 text-emerald-700'>See Your List What you Personally have Added</h1>
            <p className='font-sans text-center pb-9 text-lg'>Your Added List Has been given Here</p>
            <div className='text-center mb-4'>
                <input
                    type='text'
                    className='input input-bordered w-1/2'
                    placeholder='Search by Marathon Title...'
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>
            <div className='overflow-x-auto'>
                <table className='w-full border'>
                    <thead className='text-left font-bold border-2 border-blue-800 shadow-2xs'>
                        <tr>
                            <th className='pl-5 py-5'>Title</th>
                            <th>Description</th>
                            <th>Location</th>
                            <th>Distance</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchedEvents.map(myEvent => (
                            <AddedEvents key={myEvent._id} events={events} setEvents={setEvents} myEvent={myEvent} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyMarathon;

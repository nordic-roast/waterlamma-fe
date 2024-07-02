import React, { useState, useEffect } from 'react'; 
import { useUser, useSession } from '@clerk/clerk-react';


function UserProfile() { 
    const { user } = useUser(); 
    const { session } = useSession(); 
    const [profile, setProfile] = useState({ name: '', weight: '' });

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (user) {
            const { firstName, lastName, primaryEmailAddress } = user;
            setProfile({
                ...profile,
                name: `${firstName} ${lastName}`,
                email: primaryEmailAddress.emailAddress
            });
            // Optionally make a fetch call to your API
            fetchProfile(user.id);
        }
    }, [user]);


    // const fetchProfile = (userId) => {
    //     fetch(`https://552b-203-117-161-34.ngrok-free.app/api/profile`, {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': `Bearer ${user.sessionToken}`, // Pass the session token for backend authentication
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log('Profile data:', data);
    //         // You can set the profile data here
    //     })
    //     .catch(error => console.error('Error fetching profile:', error));
    // };
    


    

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (!session || !session.idToken) {
    //         console.error('Session or token is undefined');
    //         return;
    //     }else{
    //         console.log('Session data:', session);
    //     }
    //     const token = session.idToken; // Or session.accessToken, depending on your setup
    
    //     fetch('https://552b-203-117-161-34.ngrok-free.app/api/profile', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${token}`
    //         },
    //         body: JSON.stringify({ /* your data here */ })
    //     })
    //     .then(response => response.json())
    //     .then(data => console.log('Profile updated:', data))
    //     .catch(error => console.error('Error updating profile:', error));
    // };


    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     if (!session) {
    //         console.error('No session available');
    //         return;
    //     }else{
    //         console.log(session);
    //     }
    //     const token = session.idToken; // Or session.accessToken, depending on your setup
    //     const auth0Id = user.externalAccounts[0].id; // Assuming the first external account is the relevant one

    //     // Make a POST request to the backend with the user ID
    //     fetch('https://d2fc-112-199-140-172.ngrok-free.app/api/profile', {
    //         method: 'POST',
    //         headers: {
    //             'Authorization': `Bearer ${token}`, // Pass the session token for backend authentication
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ auth0Id, ...profile })
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log('Profile updated:', data);
    //     })
    //     .catch(error => console.error('Error updating profile:', error));
    // };


    // const handleSubmit = (e) => {
    //     console.log(e);
    //     e.preventDefault();
    //     fetch('https://d2fc-112-199-140-172.ngrok-free.app/api/profile', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(user)
    //     })
    //     .then(response => {
    //         if (response.ok) {
    //             alert('Profile updated successfully!');
    //         } else {
    //             alert('Failed to update profile.');
    //         }
    //     })
    //     .catch(error => console.error('Error updating user profile:', error));
    // };

    // Render the profile information
    return ( 
          <div className="max-w-md mx-auto mt-10">
          <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" name="name" id="name" value={profile.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                  <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Current weight (KG)</label>
                  <input type="number" name="weight" id="weight" value={profile.weight} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Update Profile</button>
          </form>
      </div>
    ); 
}

export default UserProfile;

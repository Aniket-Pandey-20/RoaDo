// Import the data from data.ts
import {UserDetails,UserSession, validUserDetails, validUserSessions, invalidUserDetails, invalidUserSessions } from "./Data";

    function checkDataCorrectness(userSessions: UserSession[], userDetails: UserDetails[]): boolean {
        // Get the current date in milliseconds
        const currentDate = new Date().getTime();
        let result = false;

        // Check user details for correctness
        for (const user of userDetails) {
            // Check if the lastSeenAt date is in the future
            if (user.lastSeenAt.getTime() > currentDate) {
                // Log the error
                console.log("User with user id: " + user.id + " has an invalid lastSeenAt date.");
                result = true;
            }
        }

        // Check user sessions for correctness
        for (const session of userSessions) {
            // Check if the loggedIn date is in the future
            if (session.loggedIn.getTime() > currentDate) {
                // Log the error
                console.log("User with user id: " + session.userId + " and device id: " + session.deviceId + " has an invalid login time.");
                result = true;
            }
        }
        // If no data correctness issues found, return false
        return result;
    }

    //Function to check session
    function checkAndSetSessionExpire(userSessions: UserSession[], userDetails: UserDetails[]): void {
        // 6 months in milliseconds,assuming session expire time is 6 months
        const sixMonthsInMillis = 6 * 30 * 24 * 60 * 60 * 1000;

        for (const user of userDetails) {
            if (user.lastSeenAt) {
                const lastSeenDate = user.lastSeenAt.getTime();
                const expireDate = lastSeenDate + sixMonthsInMillis;
                const currentDate = new Date().getTime();

                // Check if lastSeenAt is more than 6 months 
                if (currentDate > expireDate) {
                    // Update session expiration for the current user
                    for (const session of userSessions) {
                        if (session.userId === user.id) {
                            //Updating loggedOut time
                            session.loggedOut = new Date(expireDate);
                        }
                    }
                }
            }
        }
    }

    // Function to calculate the number of users logged in
    function getMonthlyLoggedInUsers(userSessions: UserSession[], currentMonth: number,userDetails: UserDetails[]): number {
        let monthlyLoggedIn = 0;

        //Updating logout if user not user website for more than 6 months
        checkAndSetSessionExpire(userSessions,userDetails);

        for (const session of userSessions) {
            // Extracting the month and adding 1 since getMonth gives zero based month
            const loginMonth = session.loggedIn.getMonth() + 1;
            const logoutMonth = session.loggedOut ? session.loggedOut.getMonth() + 1 : null;

            // Check if the user is logged in during the current month
            if ((loginMonth <= currentMonth && (logoutMonth === null || logoutMonth >= currentMonth))) {
                monthlyLoggedIn++;
            }
        }

        return monthlyLoggedIn;
    }

    // Function to calculate the number of active users
    function getMonthlyActiveUsers(userDetails: UserDetails[], currentMonth: number): number {
        let monthlyActive = 0;

        for (const user of userDetails) {
            // Extracting the month from the lastSeenAt date
            const lastSeenMonth = user.lastSeenAt.getMonth() + 1;

            // Check if the user was active during the current month
            if (lastSeenMonth === currentMonth) {
                monthlyActive++;
            }
        }

        return monthlyActive;
    }

    //Valid data example
    //const userSessions = validUserSessions;
    //const userDetails = validUserDetails;

    //Invalid data example, uncomment this and comment valid data to test this.
    const userSessions = invalidUserSessions;
    const userDetails = invalidUserDetails;

    const currentMonth = 4; // December


    //Data correctness check.
    if(checkDataCorrectness(userSessions,userDetails)){
        console.log("Invalid data found: Login or LastSeenAt data is exceding current time,which is not possible.");
    }else{
        //Calling function to calculate monthly logged in and active users
        const monthlyLoggedIn = getMonthlyLoggedInUsers(userSessions, currentMonth,userDetails);
        const monthlyActive = getMonthlyActiveUsers(userDetails, currentMonth);

        // Display the results
        console.log("Monthly Logged In Users:", monthlyLoggedIn);
        console.log("Monthly Active Users:", monthlyActive);
    }

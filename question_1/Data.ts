// Define interfaces for user details and user sessions
export interface UserDetails {
    id: string;
    name: string;
    email: string;
    lastSeenAt: Date;
}

export interface UserSession {
    userId: string;
    deviceId: string;
    loggedIn: Date;
    loggedOut?: Date | null;
}

// Valid user details
export const validUserDetails: UserDetails[] = [
    { id: "user1", name: "John Doe", email: "john@example.com", lastSeenAt: new Date("2023-09-01") },
    { id: "user2", name: "Jane Doe", email: "jane@example.com", lastSeenAt: new Date("2024-02-15") },
    { id: "user3", name: "Alice Smith", email: "alice@example.com", lastSeenAt: new Date("2024-03-20") },
    { id: "user4", name: "Bob Johnson", email: "bob@example.com", lastSeenAt: new Date("2024-04-05") },
    { id: "user5", name: "Emily Brown", email: "emily@example.com", lastSeenAt: new Date("2024-01-10") },
    { id: "user6", name: "Michael Wilson", email: "michael@example.com", lastSeenAt: new Date("2024-02-28") },
    { id: "user7", name: "Emma Taylor", email: "emma@example.com", lastSeenAt: new Date("2024-04-03") },
    { id: "user8", name: "James Clark", email: "james@example.com", lastSeenAt: new Date("2024-03-15") },
    { id: "user9", name: "Olivia Martinez", email: "olivia@example.com", lastSeenAt: new Date("2023-12-20") },
    { id: "user10", name: "William Rodriguez", email: "william@example.com", lastSeenAt: new Date("2024-01-25") }
];

// Valid user sessions
export const validUserSessions: UserSession[] = [
    { userId: "user1", deviceId: "device1", loggedIn: new Date("2024-04-01"), loggedOut: new Date("2024-04-05") },
    { userId: "user1", deviceId: "device2", loggedIn: new Date("2024-03-28"), loggedOut: null },
    { userId: "user2", deviceId: "device3", loggedIn: new Date("2024-04-10"), loggedOut: null },
    { userId: "user3", deviceId: "device4", loggedIn: new Date("2024-03-15"), loggedOut: new Date("2024-03-20") },
    { userId: "user4", deviceId: "device5", loggedIn: new Date("2024-04-05"), loggedOut: new Date("2024-04-10") },
    { userId: "user5", deviceId: "device6", loggedIn: new Date("2024-02-28"), loggedOut: null },
    { userId: "user6", deviceId: "device7", loggedIn: new Date("2024-03-20"), loggedOut: new Date("2024-03-25") },
    { userId: "user7", deviceId: "device8", loggedIn: new Date("2024-04-03"), loggedOut: null },
    { userId: "user8", deviceId: "device9", loggedIn: new Date("2024-02-15"), loggedOut: new Date("2024-02-20") },
    { userId: "user9", deviceId: "device10", loggedIn: new Date("2023-12-20"), loggedOut: new Date("2023-12-25") }
];

// Invalid user details (with future lastSeenAt dates)
export const invalidUserDetails: UserDetails[] = [
    { id: "user11", name: "Invalid User", email: "invalid@example.com", lastSeenAt: new Date("2025-09-01") },
    { id: "user12", name: "Invalid User", email: "invalid@example.com", lastSeenAt: new Date("2025-02-15") },
    { id: "user13", name: "Invalid User", email: "invalid@example.com", lastSeenAt: new Date("2024-04-01") } // added in invalid list but actually valid
];

// Invalid user sessions (with future loggedIn dates)
export const invalidUserSessions: UserSession[] = [
    { userId: "user11", deviceId: "device1", loggedIn: new Date("2025-04-01"), loggedOut: new Date("2025-04-05") },
    { userId: "user13", deviceId: "device2", loggedIn: new Date("2025-03-28"), loggedOut: null },
    { userId: "user13", deviceId: "device3", loggedIn: new Date("2024-02-10"), loggedOut: null } // added in invalid list but actually valid
];

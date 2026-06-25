export type Branch = {
    id: string;
    city: string;
    division: string;
    name: string;
    phone: string;
    email: string;
    address: string;
    hours: {
        weekday: string;
        saturday: string;
        sunday: string;
    };
};


export const BRANCHES: Branch[] = [
    {
        id: "1",
        city: "Dhaka",
        division: "Dhaka",
        name: "Mirpur 14 Branch",
        phone: "+1 (310) 555-2202",
        email: "losangeles@grandgourmet.com",
        address: "Nosor Tower, Bashundhara Rd, Dhaka 1229",
        hours: {
            weekday: "10:00 AM - 09:00 PM",
            saturday: "10:00 AM - 2:00 PM",
            sunday: "Close",
        },
    },
    {
        id: "2",
        city: "Dhaka",
        division: "Dhaka",
        name: "Mirpur 10 Branch",
        phone: "+880 1711-555101",
        email: "mirpur10@grandgourmet.com",
        address: "Ali Tower, Section-6/A, Mirpur-10, Dhaka 1216",
        hours: {
            weekday: "09:00 AM - 10:00 PM",
            saturday: "10:00 AM - 03:00 PM",
            sunday: "Close",
        },
    },
    {
        id: "3",
        city: "Dhaka",
        division: "Dhaka",
        name: "Uttara Branch",
        phone: "+880 1711-555103",
        email: "uttara@grandgourmet.com",
        address: "House 12, Sector 7, Uttara, Dhaka",
        hours: {
            weekday: "10:00 AM - 11:00 PM",
            saturday: "11:00 AM - 03:00 PM",
            sunday: "Close",
        },
    },
    {
        id: "4",
        city: "Dhaka",
        division: "Dhaka",
        name: "Dhanmondi Branch",
        phone: "+880 1711-555104",
        email: "dhanmondi@grandgourmet.com",
        address: "Road 27, Dhanmondi, Dhaka 1209",
        hours: {
            weekday: "09:00 AM - 09:00 PM",
            saturday: "10:00 AM - 02:00 PM",
            sunday: "Close",
        },
    },
    {
        id: "5",
        city: "Dhaka",
        division: "Dhaka",
        name: "Banani Branch",
        phone: "+880 1711-555105",
        email: "banani@grandgourmet.com",
        address: "Road 11, Banani, Dhaka",
        hours: {
            weekday: "09:00 AM - 10:00 PM",
            saturday: "10:00 AM - 03:00 PM",
            sunday: "Close",
        },
    },
    {
        id: "6",
        city: "Chittagong",
        division: "Chittagong",
        name: "Agrabad Branch",
        phone: "+880 1711-555106",
        email: "agrabad@grandgourmet.com",
        address: "Agrabad Commercial Area, Chittagong",
        hours: {
            weekday: "10:00 AM - 09:00 PM",
            saturday: "10:00 AM - 02:00 PM",
            sunday: "Close",
        },
    },
    {
        id: "7",
        city: "Chittagong",
        division: "Chittagong",
        name: "GEC Circle Branch",
        phone: "+880 1711-555107",
        email: "gec@grandgourmet.com",
        address: "GEC Circle, Chittagong",
        hours: {
            weekday: "09:00 AM - 10:00 PM",
            saturday: "10:00 AM - 03:00 PM",
            sunday: "Close",
        },
    },
    {
        id: "8",
        city: "Chittagong",
        division: "Chittagong",
        name: "Panchlaish Branch",
        phone: "+880 1711-555108",
        email: "panchlaish@grandgourmet.com",
        address: "Panchlaish, Chittagong",
        hours: {
            weekday: "09:00 AM - 09:00 PM",
            saturday: "11:00 AM - 03:00 PM",
            sunday: "Close",
        },
    },
    {
        id: "9",
        city: "Chittagong",
        division: "Chittagong",
        name: "Nasirabad Branch",
        phone: "+880 1711-555109",
        email: "nasirabad@grandgourmet.com",
        address: "Nasirabad Housing Society, Chittagong",
        hours: {
            weekday: "10:00 AM - 09:00 PM",
            saturday: "10:00 AM - 03:00 PM",
            sunday: "Close",
        },
    },
    {
        id: "10",
        city: "Rangpur",
        division: "Rangpur",
        name: "Rangpur City Branch",
        phone: "+880 1711-555110",
        email: "rangpur@grandgourmet.com",
        address: "Station Road, Rangpur",
        hours: {
            weekday: "10:00 AM - 09:00 PM",
            saturday: "10:00 AM - 02:00 PM",
            sunday: "Close",
        },
    },
    {
        id: "11",
        city: "Rangpur",
        division: "Rangpur",
        name: "Modern More Branch",
        phone: "+880 1711-555111",
        email: "modernmore@grandgourmet.com",
        address: "Modern More, Rangpur",
        hours: {
            weekday: "09:00 AM - 10:00 PM",
            saturday: "10:00 AM - 03:00 PM",
            sunday: "Close",
        },
    },
];
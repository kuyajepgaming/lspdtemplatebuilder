/*==========================================================
    LSPD DISPATCH BUILDER
    DATABASE
==========================================================*/

const DATABASE = {

    categories: [

        {
            id: "general",
            name: "General"
        },

        {
            id: "robberies",
            name: "Robberies"
        }

    ],



    /*======================================================
        GENERAL
    ======================================================*/

    general: {

        templates: [

            {

                id: "available",

                name: "Units Available",

                output: "/police LSPD units are available to provide law enforcement assistance."

            },

            {

                id: "busy",

                name: "Units Busy",

                output: "/police All LSPD units are currently engaged. Please hold off any robberies as of the moment."

            },

            {

                id: "meeting",

                name: "Meeting / Training",

                output: "/police LSPD is currently conducting an important meeting/training session. Please refrain from initiating any robberies at this time. Thank you for your patience."

            },

            {

                id: "patrol",

                name: "Patrolling",

                output: "/police LSPD units are currently out on patrol, maintaining safety across our streets."

            }

        ]

    },



    /*======================================================
        ROBBERIES
    ======================================================*/

    robberies: {



        /*==================================================
            SHARED STATUS TEMPLATES
        ==================================================*/

        templates: [

            {

                id: "enroute",

                name: "En-Route / Initial Response",

                output: "/police LSPD units are responding to a reported armed robbery at {LOCATION} (Postal {POSTAL}). EMS assistance is requested. Please respond to the scene and remain on standby until Code 4 is declared. All civilians in the area are advised to vacate immediately."

            },

            {

                id: "code6",

                name: "CODE 6 / Currently Investigating",

                output: "/police CODE 6: LSPD Units are currently Code 6 and investigating the area at {LOCATION} (Postal {POSTAL}). Civilians are advised to stay clear of the area otherwise obstruction of justice will result in detention. EMS, please remain on standby and await Code 4."

            },

            {

                id: "code4",

                name: "CODE 4 / Clear",

                output: "/police CODE 4: Scene at {LOCATION} (Postal {POSTAL}) is now Code 4. All responding units are clear. Normal patrol operations may resume."

            },

            {

                id: "robbersdown",

                name: "CODE 4 / Clear - All Robbers Down",

                output: "/police CODE 4: All suspects down. Scene at {LOCATION} (Postal {POSTAL}) is now Code 4. EMS may proceed. Approach with caution."

            },

            {

                id: "officersdown",

                name: "CODE 4 / Clear - All Officers Down",

                output: "/police CODE 4: All LSPD units down. Scene at {LOCATION} (Postal {POSTAL}) is now Code 4. EMS may proceed. Approach with caution."

            }

        ],



        /*==================================================
            INCIDENT TYPES
        ==================================================*/

        incidentTypes: [

            {

                id: "247",

                name: "24/7 Stores",

                locations: [

                    {

                        id: "247_alhambra",

                        name: "24/7 Alhambra Dr.",

                        postal: "3008"

                    },

                    {

                        id: "247_barbareno",

                        name: "24/7 Barbareno Rd.",

                        postal: "5038"

                    },

                    {

                        id: "247_clinton",

                        name: "24/7 Clinton Ave.",

                        postal: "7093"

                    },

                    {

                        id: "247_innocence",

                        name: "24/7 Innocence Blvd.",

                        postal: "9046"

                    },

                    {

                        id: "247_inseno",

                        name: "24/7 Inseno Rd.",

                        postal: "5047"

                    },

                    {

                        id: "247_route68",

                        name: "24/7 Route 68",

                        postal: "4019"

                    },

                    {

                        id: "247_senora1",

                        name: "24/7 Senora Fwy - Route 1",

                        postal: "1000"

                    },

                    {

                        id: "247_senora13",

                        name: "24/7 Senora Fwy - Route 13",

                        postal: "3051"

                    }

                ]

            },

            {

                id: "bobs",

                name: "Bob's Liquor Store",

                locations: [

                    {

                        id: "bobs_elrancho",

                        name: "Bob's Liquor Store El Rancho Blvd.",

                        postal: "8197 / 9198"

                    },

                    {

                        id: "bobs_greatocean",

                        name: "Bob's Liquor Store Great Ocean Hwy.",

                        postal: "5067"

                    },

                    {

                        id: "bobs_prosperity",

                        name: "Bob's Liquor Store Prosperity St.",

                        postal: "7169"

                    },

                    {

                        id: "bobs_sanandreas",

                        name: "Bob's Liquor Store San Andreas Ave.",

                        postal: "8092"

                    }

                ]

            },



            {

                id: "ltd",

                name: "LTD Gas Station",

                locations: [

                    {

                        id: "ltd_grapeseed",

                        name: "LTD Gas Station Grapeseed Main St.",

                        postal: "2006"

                    },

                    {

                        id: "ltd_grove",

                        name: "LTD Gas Station Grove St.",

                        postal: "9094"

                    },

                    {

                        id: "ltd_lindsay",

                        name: "LTD Gas Station Lindsay Circus",

                        postal: "8140"

                    },

                    {

                        id: "ltd_rockford",

                        name: "LTD Gas Station North Rockford Dr.",

                        postal: "5016"

                    }

                ]

            },



            {

                id: "fleeca",

                name: "Fleeca Bank",

                locations: [

                    {

                        id: "fleeca_vespucci",

                        name: "Fleeca Bank Vespucci Blvd.",

                        postal: "8170"

                    },

                    {

                        id: "fleeca_hawick",

                        name: "Fleeca Bank Hawick Ave.",

                        postal: "7185"

                    }

                ]

            },



            {

                id: "pacific",

                name: "Pacific Bank",

                locations: [

                    {

                        id: "pacific_main",

                        name: "Pacific Bank Vinewood Blvd.",

                        postal: "7090"

                    }

                ]

            },



            {

                id: "humane",

                name: "Humane Labs",

                locations: [

                    {

                        id: "humane_main",

                        name: "Humane Labs Chianski Passage",

                        postal: "2060"

                    }

                ]

            },



            {

                id: "michael",

                name: "Michael's Mansion",

                locations: [

                    {

                        id: "michael_house",

                        name: "Private Residence Portola Dr.",

                        postal: "7063"

                    }

                ]

            }

        ]

    }

};

/*==========================================================
    DATABASE VERSION
==========================================================*/

const DATABASE_INFO = {

    version: "2.0.0",

    application: "LSPD Dispatch Builder",

    author: "Jay Perez | Ruthless Roleplay",

    lastUpdated: "2026-06-25"

};
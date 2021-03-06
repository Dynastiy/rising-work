const items = [
    {
        id: 1,
        menu_header: "Menu",
        sub_menu: [{
            id: 1,
            menu_item: "Dashboard",
            url: '/dashboard',
            icon: 'apps'
        }, ]
    },
    {
        id: 2,
        menu_header: "orders",
        sub_menu: [{
                id: 1,
                menu_item: "Pending",
                url: '/pending',
                icon: 'pending'
            },
            {
                id: 2,
                menu_item: "Delivered",
                url: '/delivered',
                icon: 'assignment_turned_in'
            },
            {
                id: 3,
                menu_item: "Completed",
                url: '/completed',
                icon: 'done'
            },
        ]

    },
    {
        id: 3,
        menu_header: "navigation",
        sub_menu: [{
                id: 1,
                menu_item: "Account",
                url: '/account',
                icon: 'money'
            },
            {
                id: 2,
                menu_item: "Notifications",
                url: '/notifications',
                icon: 'notifications'
            },
        ]

    },

]

export default items;
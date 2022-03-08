import { atom } from "recoil";

const menus = [
    {
        title: 'Dashboard',
        path: '/dashboard/index',
        icon: 'dashboard-3',
    },
    {
        title: '系统管理',
        path: '/system/user',
        icon: 'function',
        children: [{
            title: '用户管理',
            path: '/system/user',
            icon: 'user'
        },
        {
            title: '角色管理',
            path: '/system/role',
            icon: 'shield-user'
        },
        {
            title: '权限管理',
            path: '/system/menu',
            icon: 'shield-keyhole'
        }
        ]
    },

]
const userState = atom({
    key: 'userState',
    default: {
        menus
    },
});

export default userState
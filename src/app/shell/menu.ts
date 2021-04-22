export interface MenuItem {
  link: string;
  label: string;
  iconName?: string;
}

export const menuList: MenuItem[] = [
	{ link: '/dashboard', label: 'Dashboard', iconName: 'dashboard' },
	{ link: '/add-company', label: 'Form', iconName: 'add' },
	{ link: '/company-list', label: 'Table', iconName: 'business' },
	{ link: '/tables', label: 'Table Advanced', iconName: 'toc' },
	{ link: '/social', label: 'Social Page', iconName: 'account_circle' },
	{ link: '/chat', label: 'Chat Room', iconName: 'chat' },
	{ link: '/about', label: 'About' },
	{ link: '/settings', label: 'Settings' }
];
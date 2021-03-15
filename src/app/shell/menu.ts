export interface MenuItem {
  link: string;
  label: string;
  iconName?: string;
}

export const menuList: MenuItem[] = [
	{ link: '/dashboard', label: 'Dashboard', iconName: 'dashboard' },
	{ link: '/add-company', label: 'New company', iconName: 'add' },
	{ link: '/company-list', label: 'Company list', iconName: 'business' },
	{ link: '/tables', label: 'Tables', iconName: 'toc' },
	{ link: '/social', label: 'Social', iconName: 'account_circle' },
	{ link: '/about', label: 'About' },
	{ link: '/settings', label: 'Settings' }
];
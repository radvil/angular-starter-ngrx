export interface MenuItem {
  link: string;
  label: string;
  iconName?: string;
}

export const menuList: MenuItem[] = [
	{ link: '/add-company', label: 'New company', iconName: 'add' },
	{ link: '/company-list', label: 'Company list', iconName: 'business' },
	{ link: '/tables', label: 'Tables', iconName: 'toc' },
	{ link: '/skills-list', label: 'Manage skills', iconName: 'pool' },
	{ link: '/about', label: 'About' },
	{ link: '/settings', label: 'Settings' }
];
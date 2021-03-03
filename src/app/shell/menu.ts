export interface MenuItem {
  link: string;
  label: string;
  iconName?: string;
}

export const menuList: MenuItem[] = [
	{ link: '/add-company', label: 'New company', iconName: 'add' },
	{ link: '/company-list', label: 'Company list', iconName: 'whatshot' },
	{ link: '/skills-list', label: 'Available skills', iconName: 'palette' },
	{ link: '/about', label: 'About' },
	{ link: '/settings', label: 'Settings' }
];
export interface MenuItem {
  link: string;
  label: string;
  iconName: string;
}

export const menuList: MenuItem[] = [
	{ link: '/add-company', label: 'New Company', iconName: 'add' },
	{ link: '/company-list', label: 'Company List', iconName: 'whatshot' }
];
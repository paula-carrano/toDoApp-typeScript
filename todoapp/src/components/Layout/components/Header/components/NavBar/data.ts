type ItemsType = {
  className: string,
  href: string,
  text: string
}

const menuItems: ItemsType[] = [
  {
    className: 'featured',
    href: '#',
    text: 'Action'
  },
  {
    className: '',
    href: '/users',
    text: 'Usuarios'
  },
  {
    className: '',
    href: '#',
    text: 'Something else here'
  }
]

export default menuItems
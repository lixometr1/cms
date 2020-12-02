export default [
  {
    _name: 'CSidebarNav',
    _children: [
      // {
      //   _name: 'CSidebarNavItem',
      //   name: 'Dashboard',
      //   to: '/dashboard',
      //   icon: 'cil-speedometer',
      //   badge: {
      //     color: 'primary',
      //     text: 'NEW'
      //   }
      // },
      // {
      //   _name: 'CSidebarNavTitle',
      //   _children: ['Theme']
      // },
      // {
      //   _name: 'CSidebarNavItem',
      //   name: 'Colors',
      //   to: '/theme/colors',
      //   icon: 'cil-drop'
      // },
      // {
      //   _name: 'CSidebarNavItem',
      //   name: 'Typography',
      //   to: '/theme/typography',
      //   icon: 'cil-pencil'
      // },
      // {
      //   _name: 'CSidebarNavTitle',
      //   _children: ['Ссылки']
      // },
      {
        _name: "CSidebarNavDropdown",
        name: "Каталог",
        icon: 'cil-cart',


        items: [
          {
            name: "Товары",
            to: "/products"
          },

          {
            name: "Атрибуты",
            to: "/attributes"
          },

          {
            name: "Категории",
            to: "/categories"
          },

          {
            name: "Метки",
            to: "/labels"
          },
          {
            name: "Купоны",
            to: "/promocodes"
          },
        ]
      },
      {
        _name: "CSidebarNavDropdown",
        name: "Блог",
        icon: 'cil-library',
        items: [
          {
            name: "Посты",
            to: "/blog-posts"
          },
          {
            name: "Теги",
            to: "/post-tags"
          },

        ]
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Заказы',
        to: '/orders',
        icon: 'cil-basket',
      },

      {
        _name: 'CSidebarNavItem',
        name: 'Шаблоны страниц',
        to: '/page-templates',
        icon: 'cil-file',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Страницы',
        to: '/pages',
        icon: 'cil-file',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Уведомления',
        to: '/notys',
        icon: 'cil-bell',
      },

      {
        _name: 'CSidebarNavItem',
        name: 'Виджеты',
        to: '/widgets',
        icon: 'cil-spreadsheet',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Регион',
        to: '/regions',
        icon: 'cil-globe-alt',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Пользователи',
        to: '/users',
        icon: 'cil-user',
      },

      {
        _name: 'CSidebarNavItem',
        name: 'Настройки',
        to: '/settings',
        icon: 'cil-settings'
      },

      // {
      //   _name: "CSidebarNavDropdown",
      //   name: "Настройки",
      //   items: [
      //     {
      //       name: "Общее",
      //       to: "/settings"
      //     },

      //   ]

      // }
      // {
      //   _name: 'CSidebarNavTitle',
      //   _children: ['Components']
      // },
      // {
      //   _name: 'CSidebarNavDropdown',
      //   name: 'Base',
      //   route: '/base',
      //   icon: 'cil-puzzle',
      //   items: [
      //     {
      //       name: 'Breadcrumbs',
      //       to: '/base/breadcrumbs'
      //     },
      //     {
      //       name: 'Cards',
      //       to: '/base/cards'
      //     },
      //     {
      //       name: 'Carousels',
      //       to: '/base/carousels'
      //     },
      //     {
      //       name: 'Collapses',
      //       to: '/base/collapses'
      //     },
      //     {
      //       name: 'Forms',
      //       to: '/base/forms'
      //     },
      //     {
      //       name: 'Jumbotrons',
      //       to: '/base/jumbotrons'
      //     },
      //     {
      //       name: 'List Groups',
      //       to: '/base/list-groups'
      //     },
      //     {
      //       name: 'Navs',
      //       to: '/base/navs'
      //     },
      //     {
      //       name: 'Navbars',
      //       to: '/base/navbars'
      //     },
      //     {
      //       name: 'Paginations',
      //       to: '/base/paginations'
      //     },
      //     {
      //       name: 'Popovers',
      //       to: '/base/popovers'
      //     },
      //     {
      //       name: 'Progress Bars',
      //       to: '/base/progress-bars'
      //     },
      //     {
      //       name: 'Switches',
      //       to: '/base/switches'
      //     },
      //     {
      //       name: 'Tables',
      //       to: '/base/tables'
      //     },
      //     {
      //       name: 'Tabs',
      //       to: '/base/tabs'
      //     },
      //     {
      //       name: 'Tooltips',
      //       to: '/base/tooltips'
      //     }
      //   ]
      // },
      // {
      //   _name: 'CSidebarNavDropdown',
      //   name: 'Buttons',
      //   route: '/buttons',
      //   icon: 'cil-cursor',
      //   items: [
      //     {
      //       name: 'Buttons',
      //       to: '/buttons/standard-buttons'
      //     },
      //     {
      //       name: 'Button Dropdowns',
      //       to: '/buttons/dropdowns'
      //     },
      //     {
      //       name: 'Button Groups',
      //       to: '/buttons/button-groups'
      //     },
      //     {
      //       name: 'Brand Buttons',
      //       to: '/buttons/brand-buttons'
      //     }
      //   ]
      // },
      // {
      //   _name: 'CSidebarNavItem',
      //   name: 'Charts',
      //   to: '/charts',
      //   icon: 'cil-chart-pie'
      // },
      // {
      //   _name: 'CSidebarNavDropdown',
      //   name: 'Icons',
      //   route: '/icons',
      //   icon: 'cil-star',
      //   items: [
      //     {
      //       name: 'CoreUI Icons',
      //       to: '/icons/coreui-icons',
      //       badge: {
      //         color: 'info',
      //         text: 'NEW'
      //       }
      //     },
      //     {
      //       name: 'Brands',
      //       to: '/icons/brands'
      //     },
      //     {
      //       name: 'Flags',
      //       to: '/icons/flags'
      //     }
      //   ]
      // },
      // {
      //   _name: 'CSidebarNavDropdown',
      //   name: 'Notifications',
      //   route: '/notifications',
      //   icon: 'cil-bell',
      //   items: [
      //     {
      //       name: 'Alerts',
      //       to: '/notifications/alerts'
      //     },
      //     {
      //       name: 'Badges',
      //       to: '/notifications/badges'
      //     },
      //     {
      //       name: 'Modals',
      //       to: '/notifications/modals'
      //     }
      //   ]
      // },
      // {
      //   _name: 'CSidebarNavItem',
      //   name: 'Widgets',
      //   to: '/widgets',
      //   icon: 'cil-calculator',
      //   badge: {
      //     color: 'primary',
      //     text: 'NEW',
      //     shape: 'pill'
      //   }
      // },
      // {
      //   _name: 'CSidebarNavDivider',
      //   _class: 'm-2'
      // },



    ]
  }
]
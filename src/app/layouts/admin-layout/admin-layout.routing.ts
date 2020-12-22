import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';

import { NotificationsComponent } from '../../notifications/notifications.component';
import { UsersComponent } from '../../users/users.component';
import { PagosComponent } from '../../pagos/pagos.component';


export const AdminLayoutRoutes: Routes = [
    { path: '',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'carrito',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'users',          component: UsersComponent},
    { path: 'pagos',          component: PagosComponent},
];
export const UserLayoutRoutes: Routes = [
    { path: '',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'carrito',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'users',          component: UsersComponent},
    { path: 'pagos',          component: PagosComponent},
];
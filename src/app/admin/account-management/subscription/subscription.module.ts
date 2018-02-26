import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { subscriptionRouting } from './subscription.routing';
import { SubscriptionComponent } from './subscription.component';
import { ClientInformationComponent } from './client-information/client-information.component';
import { ElinformationComponent } from './elinformation/elinformation.component';
import { UserMaintenanceComponent } from './user-maintenance/user-maintenance.component';
import { AddNewUsersComponent } from './user-maintenance/add-new-users/add-new-users.component';
import { ExistingUsersComponent } from './user-maintenance/existing-users/existing-users.component';
import { SubscriptionEventEmiter } from './subscription.events';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    subscriptionRouting
  ],
  declarations: [
        SubscriptionComponent,
        ClientInformationComponent,
        ElinformationComponent,
        UserMaintenanceComponent,
        AddNewUsersComponent,
        ExistingUsersComponent
  ],
  providers:[SubscriptionEventEmiter]
})
export class SubscriptionModule { }

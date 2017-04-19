import { Component, Input } from '@angular/core';
import { User } from '../../services/user/user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styles: []
})
export class SidebarComponent {
  @Input() user: User;

}

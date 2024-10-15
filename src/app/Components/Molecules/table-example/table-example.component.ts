import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ConnectApiService } from 'src/app/Services/connect-api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-table-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.scss']
})
export class TableExampleComponent {

  @Input() public endpoint: string = '';
  public data: any[] = [];

  constructor(private readonly apiService: ConnectApiService) { }

  ngOnInit(): void {
    this.apiService.endpoint = this.endpoint;
    this.apiService.autenticate(environment.username, environment.password).subscribe((response: object) => {
      this.apiService.getInitialData().subscribe((response: any) => {
        this.data = response;
      });
    });
  }

  public onResizeStart(e: MouseEvent): void {
    console.log('Resize started');
    console.log(e.target);
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  isDirty1 = false;
  isDirty2 = false;
  isDirty3 = false;
  isDirty4 = false;

  onInputChange1(event: any) {
    // Update the state when input is changed
    this.updateIsDirty1(event.target.value);
  }
  private updateIsDirty1(value: string | null) {
    this.isDirty1 = value !== null && value.trim() !== '';
  }
  onInputChange2(event: any) {
    // Update the state when input is changed
    this.updateIsDirty2(event.target.value);
  }
  private updateIsDirty2(value: string | null) {
    this.isDirty2 = value !== null && value.trim() !== '';
  }
  onInputChange3(event: any) {
    // Update the state when input is changed
    this.updateIsDirty3(event.target.value);
  }
  private updateIsDirty3(value: string | null) {
    this.isDirty3 = value !== null && value.trim() !== '';
  }
  onInputChange4(event: any) {
    // Update the state when input is changed
    this.updateIsDirty4(event.target.value);
  }
  private updateIsDirty4(value: string | null) {
    this.isDirty4 = value !== null && value.trim() !== '';
  }
}

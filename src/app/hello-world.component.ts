import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: './components/helloWorld.component.html',
  // template: `
  //   <h2>Hello World!</h2>
  //   <p>Component Angular Pertama</p>
  // `,
})
export class HelloWorldComponent {
  judul = 'Hello World';
  description = 'Binding Data';
  gambar = 'assets/angular.png';
}

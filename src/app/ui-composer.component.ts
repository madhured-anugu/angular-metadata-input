import { Component, Input } from "@angular/core";

@Component({
  selector: "ui-composer",
  template: `
  <h1>Metadata: </h1>
    <h4>{{ metadata | json }}</h4>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class UIComposerComponent {
  private pMetadata: any;

  @Input()
  set metadata(value) {
    if (value) {
      this.pMetadata = value;
      // TODO Trigger Angular Animation Here
    }
  }

  get metadata() {
    return this.pMetadata;
  }

  
}

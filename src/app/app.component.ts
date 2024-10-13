import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AppFroalaEditorModule } from "./froala-editor/froala-editor.module";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, AppFroalaEditorModule],
  template: `
    <app-froala-editor />

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {}

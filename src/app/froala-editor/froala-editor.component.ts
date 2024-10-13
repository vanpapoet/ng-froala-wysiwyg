import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import FroalaEditor from "froala-editor";

@Component({
  selector: "app-froala-editor",
  template: `
    <div class="sample">
      <h2>Sample 9: Editor with reactive forms</h2>
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <div *ngIf="formModel.invalid">Name is too short.</div>
        <h3>Textarea with formControlName and froalaModel</h3>
        <textarea
          id="sample9-1"
          [froalaEditor]
          formControlName="formModel"
          [(froalaModel)]="form.formModel"
        ></textarea>

        <h4>Rendered Content:</h4>
        <div [froalaView]="form.value.formModel"></div>
        <!-- <h3>Textarea only with formControlName</h3>
        <textarea  id="sample9-2" [froalaEditor] formControlName="formModel"></textarea>
        <button type="submit">Submit</button> -->
      </form>
      <!-- <button (click)="setValue()">Set preset value</button> -->
    </div>
  `,
})
export class FroalaEditorComponent implements OnInit {
  ngOnInit() {
    FroalaEditor.DefineIcon("alert", { SVG_KEY: "help" });
    FroalaEditor.RegisterCommand("alert", {
      title: "Hello",
      focus: false,
      undo: false,
      refreshAfterCallback: false,

      callback: function () {
        alert("Hello!");
      },
    });
  }

  // Sample 9
  formControls = {
    formModel: new FormControl("Hello World", Validators.minLength(2)),
  };

  form: any = new FormGroup(this.formControls);

  get formModel(): any {
    return this.form.get("formModel");
  }

  onSubmit(): void {
    console.log(this.form.value);
  }

  setValue() {
    this.form.setValue({ formModel: "Default text" });
  }
}

import "froala-editor/js/plugins.pkgd.min.js";

import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FroalaEditorModule, FroalaViewModule } from "froala-editor-library";
import { FroalaEditorComponent } from "./froala-editor.component";

@NgModule({
  declarations: [FroalaEditorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FroalaEditorModule,
    FroalaViewModule,
  ],
  exports: [FroalaEditorComponent],
})
export class AppFroalaEditorModule {}

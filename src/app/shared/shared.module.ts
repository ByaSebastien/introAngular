import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFarenheitPipe } from './pipes/to-farenheit.pipe';
import { ConvertTimePipe } from './pipes/convert-time.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { FormateurCardComponent } from './components/formateur-card/formateur-card.component';



@NgModule({
  declarations: [
    ToFarenheitPipe,
    ConvertTimePipe,
    HighlightDirective,
    FormateurCardComponent
  ],
  exports: [
    ToFarenheitPipe,
    ConvertTimePipe,
    HighlightDirective,
    FormateurCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

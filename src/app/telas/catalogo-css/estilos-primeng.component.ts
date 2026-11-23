import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { IconFieldModule } from 'primeng/iconfield';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';

/**
 * No PrimeNG 17 o CSS estrutural de cada componente (layout, list-style, flex...)
 * só entra na página quando o componente é criado. Os exemplos do catálogo usam o
 * HTML estático desses componentes, então este bloco escondido cria uma instância
 * de cada um para o Angular injetar esse CSS, igual numa tela real.
 */
@Component({
  selector: 'app-estilos-primeng',
  standalone: true,
  imports: [
    FormsModule, AccordionModule, BadgeModule, ButtonModule, CalendarModule, CardModule, CheckboxModule, ChipModule, DataViewModule,
    DialogModule, DividerModule, DropdownModule, FileUploadModule, IconFieldModule, ImageModule, InputTextModule,
    InputTextareaModule, MultiSelectModule, PaginatorModule, ProgressBarModule, ProgressSpinnerModule, RadioButtonModule,
    SidebarModule, StepsModule, TableModule, TabViewModule, TooltipModule, TreeModule,
  ],
  template: `
    <div hidden aria-hidden="true">
      <p-button label="x" />
      <p-dropdown [options]="[]" />
      <p-multiSelect [options]="[]" />
      <p-calendar [showIcon]="true" />
      <p-checkbox [binary]="true" />
      <!-- o p-radioButton exige um ngModel (NgControl) -->
      <p-radioButton value="x" [ngModel]="null" />
      <p-chip label="x" />
      <p-card>x</p-card>
      <p-tree [value]="[]" />
      <p-table [value]="[]"><ng-template pTemplate="body"></ng-template></p-table>
      <p-paginator [rows]="10" [totalRecords]="30" />
      <p-tabView><p-tabPanel header="x">x</p-tabPanel></p-tabView>
      <p-accordion><p-accordionTab header="x">x</p-accordionTab></p-accordion>
      <p-dialog [visible]="false" />
      <p-sidebar [visible]="false" />
      <p-steps [model]="[]" />
      <p-progressSpinner />
      <p-progressBar [value]="10" />
      <p-divider layout="vertical" />
      <p-badge value="1" />
      <p-dataView [value]="[]"><ng-template pTemplate="list"></ng-template></p-dataView>
      <p-fileUpload mode="basic" />
      <p-image src="" />
      <p-iconField><input pInputText /></p-iconField>
      <textarea pInputTextarea></textarea>
      <span pTooltip="x"></span>
    </div>
  `,
})
export class EstilosPrimengComponent {}

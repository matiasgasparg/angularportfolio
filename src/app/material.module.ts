
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [
        MatGridListModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDialogModule
    ],
    exports: [
        MatGridListModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDialogModule
    ]
})
export class MaterialModule { };

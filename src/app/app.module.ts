import { DragDropModule } from "@angular/cdk/drag-drop";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { registerLocaleData } from "@angular/common";
import { HttpClientJsonpModule, HttpClientModule } from "@angular/common/http";
import en from "@angular/common/locales/en";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IconDefinition } from "@ant-design/icons-angular";
import * as AllIcons from "@ant-design/icons-angular/icons";
import { en_US, NZ_I18N } from "ng-zorro-antd/i18n";
import { NZ_ICONS } from "ng-zorro-antd/icon";
import { NzDemoTableBasicComponent } from "./app.component";
import { DemoNgZorroAntdModule } from "./ng-zorro-antd.module";
import { TestComponent } from "./test.component";

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    DemoNgZorroAntdModule,
    BrowserAnimationsModule,
    ScrollingModule,
    DragDropModule,
  ],
  declarations: [NzDemoTableBasicComponent, TestComponent],
  bootstrap: [NzDemoTableBasicComponent],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons },
  ],
})
export class AppModule {}

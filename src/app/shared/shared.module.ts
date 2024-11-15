import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";

// 2. 使用 @NgModule 装饰器定义模块
@NgModule({
    // 3. 声明该组件中使用的组件： CardComponent
    declarations: [CardComponent],
    // 4. 导出该组件
    exports: [CardComponent]
})

// 1. 导出模块
export class SharedModule {}
// 2. 导入 NgModule 模块
import { NgModule } from '@angular/core';
// 7. 导入关键组件(2次)
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

// 3. 使用 @NgModule 装饰器
@NgModule({
  // 4. 使用 declarations 声明，使用的所有组件
  // 非 Standalone 组件 -> declarations
  // Standalone 组件 -> imports
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent
  ],
  // 5. 使用 bootstrap 声明根组件
  bootstrap: [AppComponent],
  // 6. 使用 imports 导入其他的非 Standalone 模块
  imports: [BrowserModule, FormsModule, SharedModule, TasksModule],
})

// 1. 导出
export class AppModule {}
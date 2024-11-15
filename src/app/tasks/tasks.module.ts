import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  // 只需要导出上层（App）组件所需的组件
  exports: [TasksComponent],
  // 导入需要使用到的模块
  // CommonModule 包含了 DatePipe
  imports: [CommonModule, FormsModule, SharedModule],
})
export class TasksModule {}
// 2. 引入模块
import { Component } from '@angular/core';

// 3. 组件类
@Component({
    selector: 'app-header', // 4. 选择器：定义被组件控制的元素
    templateUrl: './header.component.html',  // 5. 模板：定义显示的内容
    styleUrl: './header.component.css' // 7. 样式
})

// 1. 导出类
export class HeaderComponent {}
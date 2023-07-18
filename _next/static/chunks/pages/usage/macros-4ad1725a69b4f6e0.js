(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[145],{9123:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/usage/macros",function(){return s(6621)}])},6621:function(e,n,s){"use strict";s.r(n);var d=s(1527),l=s(2027),i=s(6736);s(421);var r=s(9173);function a(e){let n=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",code:"code",pre:"pre",span:"span",h3:"h3",ul:"ul",li:"li",a:"a"},(0,i.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{children:"文本宏"}),"\n","\n",(0,d.jsxs)(r.UW,{type:"warning",children:[(0,d.jsx)(n.p,{children:"这是一个实验性特征，可能会造成系统的不稳定。"}),(0,d.jsx)(n.p,{children:"经过测试，使用大量文本宏会造成请求文章的接口变慢。"})]}),"\n",(0,d.jsx)(n.h2,{id:"简介",children:"简介"}),"\n",(0,d.jsx)(r.UW,{type:"info",children:(0,d.jsx)(n.p,{children:"使用此功能需要先在后台中开启，设置 - 系统 - 文本设定 - 文本宏替换。"})}),"\n",(0,d.jsxs)(n.p,{children:["Required: ",(0,d.jsx)(n.strong,{children:"mx-server >=3.26.0"})]}),"\n",(0,d.jsxs)(n.p,{children:["文本宏是一个以 ",(0,d.jsx)(n.code,{children:"[[ ]]"})," 包裹的语法，例如 ",(0,d.jsx)(n.code,{children:"[[ $created ]]"})," 是一个合法的语法。在文章中可以插入文本宏，和 Markdown 一样，但是这个语法不是用 Markdown 解析和渲染，而是直接会在服务端进行替换。因此可以通过这个特征在文章中插入一些来自服务端的数据，也可以执行一些函数。"]}),"\n",(0,d.jsx)(n.p,{children:"例如说一篇文章的标题为「实例标题」，他的正文内容为："}),"\n",(0,d.jsx)(n.pre,{"data-language":"/[[","data-theme":"default",hasCopyCode:!0,children:(0,d.jsx)(n.code,{"data-language":"/[[","data-theme":"default",children:(0,d.jsx)(n.span,{className:"line",children:(0,d.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"一个句子。[[ $title ]]"})})})}),"\n",(0,d.jsx)(n.p,{children:"将会输出："}),"\n",(0,d.jsx)(n.pre,{"data-language":"md","data-theme":"default",hasCopyCode:!0,children:(0,d.jsx)(n.code,{"data-language":"md","data-theme":"default",children:(0,d.jsxs)(n.span,{className:"line",children:[(0,d.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"一个句子。"}),(0,d.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},className:"highlighted",children:"实例标题"})]})})}),"\n",(0,d.jsx)(n.p,{children:"又比如说："}),"\n",(0,d.jsx)(n.pre,{"data-language":"md","data-theme":"default",hasCopyCode:!0,children:(0,d.jsx)(n.code,{"data-language":"md","data-theme":"default",children:(0,d.jsxs)(n.span,{className:"line",children:[(0,d.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'<p align="right">更新于 '}),(0,d.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},className:"highlighted",children:"[[ #dayjs($modified).format('YY-MM') ]]"}),(0,d.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"</p>"})]})})}),"\n",(0,d.jsx)(n.p,{children:"将会输出："}),"\n",(0,d.jsx)(n.pre,{"data-language":"md","data-theme":"default",hasCopyCode:!0,children:(0,d.jsx)(n.code,{"data-language":"md","data-theme":"default",children:(0,d.jsxs)(n.span,{className:"line",children:[(0,d.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'<p align="right">更新于 '}),(0,d.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},className:"highlighted",children:"22-04"}),(0,d.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"</p>"})]})})}),"\n",(0,d.jsxs)(n.p,{children:["这是一个动态的数据，",(0,d.jsx)(n.code,{children:"dayjs"})," 函数由服务端提供。"]}),"\n",(0,d.jsx)(r.UW,{type:"warning",children:(0,d.jsx)(n.p,{children:"所有的函数方法均在服务端执行，请注意内存的泄露造成系统的不稳定。"})}),"\n",(0,d.jsx)(n.h2,{id:"语法格式",children:"语法格式"}),"\n",(0,d.jsxs)(n.p,{children:["以 ",(0,d.jsx)(n.code,{children:"[[ "})," 开头，",(0,d.jsx)(n.code,{children:" ]]"})," 结尾，注意一个空格是必须的。"]}),"\n",(0,d.jsx)(n.h3,{id:"访问变量",children:"访问变量"}),"\n",(0,d.jsxs)(n.p,{children:["访问变量使用 ",(0,d.jsx)(n.code,{children:"$"})," 前缀。目前可以访问的变量有：当前记录的所有字段（数据库记录值）比如说：",(0,d.jsx)(n.code,{children:"title"})," ",(0,d.jsx)(n.code,{children:"created"})," ",(0,d.jsx)(n.code,{children:"slug"})," ",(0,d.jsx)(n.code,{children:"nid"})," ",(0,d.jsx)(n.code,{children:"_id"})," .."]}),"\n",(0,d.jsxs)(n.p,{children:["你可以像这样来调用变量：",(0,d.jsx)(n.code,{children:"[[ $created ]]"})]}),"\n",(0,d.jsx)(n.h3,{id:"使用函数",children:"使用函数"}),"\n",(0,d.jsx)(r.UW,{type:"warning",children:(0,d.jsx)(n.p,{children:"函数的执行行为和云函数的执行行为保持一致。"})}),"\n",(0,d.jsxs)(n.p,{children:["执行函数使用 ",(0,d.jsx)(n.code,{children:"#"})," 前缀。你可以使用任意 JS 代码去执行一个函数，也可以是一个 JS 语句。"]}),"\n",(0,d.jsx)(n.p,{children:"如："}),"\n",(0,d.jsx)(n.pre,{"data-language":"text","data-theme":"default",hasCopyCode:!0,children:(0,d.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,d.jsx)(n.span,{className:"line",children:(0,d.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"[[ #$title.slice(0, 5) ]]"})})})}),"\n",(0,d.jsx)(n.p,{children:"使用内置方法。"}),"\n",(0,d.jsx)(n.p,{children:"如："}),"\n",(0,d.jsx)(n.pre,{"data-language":"text","data-theme":"default",hasCopyCode:!0,children:(0,d.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,d.jsx)(n.span,{className:"line",children:(0,d.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"[[ #dayjs($created).format('YYYY') ]]"})})})}),"\n",(0,d.jsx)(n.p,{children:"内置方法目前有："}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"https://day.js.org/zh-CN/",children:"dayjs"})," —— 日期处理"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"formatNow(time: Date | string): string"})," —— 相对时间"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"center(text: string): string"})," —— 居中"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"right(text: string): string"})," —— 居右"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"opacity(text: string, opacity: number): string"})," —— 透明文本"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"blur(text: string, blur: number): string"})," —— 高斯模糊化文字"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"color(text: string, color: string): string"})," —— 给文字上色"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"size(text: string): string"})," —— 给文字上色"]}),"\n"]})]})}n.default=(0,l.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)},pageOpts:{filePath:"pages/usage/macros.mdx",route:"/usage/macros",headings:[{depth:1,value:"文本宏",id:"文本宏"},{depth:2,value:"简介",id:"简介"},{depth:2,value:"语法格式",id:"语法格式"},{depth:3,value:"访问变量",id:"访问变量"},{depth:3,value:"使用函数",id:"使用函数"}],title:"文本宏"},pageNextRoute:"/usage/macros"})}},function(e){e.O(0,[48,774,888,179],function(){return e(e.s=9123)}),_N_E=e.O()}]);
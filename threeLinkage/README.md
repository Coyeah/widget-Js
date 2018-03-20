## 下拉菜单：城市三级联动

本着多造轮子多开路的想法，开始尝试着多弄点“轮子”出来。

这次实践下来感觉自己对JavaScript的基础不牢固，都是会用但是记不住，复制黏贴还是个坏习惯。慢慢的补上JavaScript的知识点。记录一下~

#### 01- 关于JQuery的.GET和.POST方法

* .GET
`$.get(URL,callback);`

* .POST
`$.post(URL,data,callback);`

#### 02- JSON文件的读取

通过.POST方法来读取本地JSON文件的时候，一是要把文件部署到服务器上，WAMP或者TOMCAT；二是要把文件后缀改为.TXT，为什么这样我还没去找答案，找找看。

#### 03- onchange事件

在内容发生改变时候触发，JQuery则是`$("select").change();`。

#### 04- JavaScript-JSON

JSON <-- JavaScript : JSON.stringify()

JavaScript <-- JSON : JSON.parse()

#### 05- 获取select被选中的option的value和text

* JavaScript原生方法

1、获取select对象： var mySelect = document.getElementById("mySelectId");

2、获取选中的option索引： var index = mySelect.selectedIndex;

3、获取选中的option的value： mySelect.options[index].value;

4、获取选中的option的text： mySelect.options[index].text;

* JQuery方法

1、获取选中的option： var options = $("mySelectId option:selected");

2、获取选中的option的value： options.val();

3、获取选中的option的text： options.text();

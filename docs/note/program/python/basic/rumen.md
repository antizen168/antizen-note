# Python 入门
:::tip 生活就是一种态度!
作者：antizen
<br/>
:::
## 1.解析器相关知识

- python2.x 与 python3.x的区别
 
  - print函数：2.x中可以不用括号，3.x中必须使用括号
  - 数值运算：2.x中，整数值相除保留整除后的整数，3.x中会保留对应的小数值
  - 迭代器（range）：2.x中可直接range(0,1)函数,3.x中必须放在列表中使用,如 list(range(0,1))

- python书写格式
  
  - 单行代码前面不能有空
  - 单行注释，使用#号
  - 多行注释，使用三对单引号/多引号，如 ''' 注释内容 '''
  - 文件编码问题（需要在.py文件前面加上如下两句代码）<br/>
    <span>
        #!/usr/bin/python <br/>
        # -*- coding: UTF-8 -*-
    </span>
  - 方法及函数定义采用:冒号
  - 多行结构使用缩进，四个空格
  - 在python中，可以使用单引号或双引号，效果一样，也可同时使用

- python执行
  - *.py文件执行，其中有__main__方法内和.py文件全局执行
  - 命令行执行，进入cmd中执行

## 2.数据类型


```python
#!/usr/bin/python
# -- coding: UTF-8 --

# 数据类型
a = 1
b = 1.0
c = False #注意，True , False 首字母是大写
print("类型", type(a), type(b), type(c))

#字符串
d = '123'
print("类型", type(d))

# 列表
list = [1,2,3,4]
list1 = [4,5,6]
print("类型", type(list))
#列表相加，得到组合值
print("数值相加",(list + list1))

#列表乘，得到列表重复
print("列表乘",( list1 * 4))

#检查是否存在
print("3是否在列表1中存在:",(3 in list))

#遍历
for x in list:
    print("遍历的值：",x)
#迭代循环器
for x in range(5):
    print(x)

#逐个迭代
it = iter(list)    # 创建迭代器对象
print("逐个迭代：",next(it))   # 每调用一次，执行一次迭代

##生成器与迭代器

def my_yield(n):
    index = 0
    while True:
        if(index > n):
            return n
        yield index
        index += 1
# 调用函数
it = my_yield(3)

while True:
    try:
        print(next(it), end=" ") # 循环遍历
    except StopIteration:
        print("没有继续的值",it)
        break

# 元组 - 跟列表类型，但是元组创建的元素不能修改
tup1 = ('1',2,3,'4','aaaa')
#访问元组
print(tup1[0]) # 取下标0的元素
print(tup1[0:2])  #截取方式访问，从下标0开始，往后读2个元素

# 字典
dict = {'Alice': '2341', 'Beth': '9102', 'Cecil': '3258'}
print(dict['Alice']) #访问字典
# 字典遍历
for x in dict:
    print("键="+x,"值="+dict[x])

# 集合是无序不重复的序列，注意，重复的只会保留一个
basket = {'apple', 'orange', 'apple', 'pear', 'orange', 'banana'}
print(basket)

#将字符串转为集合,使用set方法，也可以将一个列表转为集合，可实现去重
a = set('abracadabra')
print(a)

#使用内置标准库转换
```
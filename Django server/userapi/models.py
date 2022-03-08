from django.db import models
from django.db.models import TextField

# Create your models here.
# 学生信息表
class userAction(models.Model):
    id = models.AutoField(verbose_name='id',primary_key=True)
    # 选择文字
    selectedText = TextField(max_length=10240, verbose_name='选择文字', help_text='选择文字')
    # 输入文字
    inputText = TextField(max_length=10240, verbose_name='输入文字', help_text='输入文字')
    # 创建时间 auto_now_add：只有在新增的时候才会生效
    createAt = models.DateTimeField(auto_now_add=True)
    # 修改时间 auto_now： 添加和修改都会改变时间
    updatedAt = models.DateTimeField(auto_now=True)
    class Meta():
        db_table = 'user_action'

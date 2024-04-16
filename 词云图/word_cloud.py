# 词云图
 # 导入包
import pandas as pd
import jieba
import pymysql
import json
import os
from wordcloud import WordCloud
import matplotlib.pyplot as plt

def word_cloud():
    db = pymysql.connect(host='localhost',
                         user='root',
                         password='040608',
                         database='hot_search',
                         charset='utf8')
    cursor = db.cursor()

    try:
        # 从第一个表中读取数据
        cursor.execute('SELECT title FROM hot')
        data1 = cursor.fetchall()

        # 从第二个表中读取数据
        cursor.execute('SELECT title FROM hot_searches')
        data2 = cursor.fetchall()

        # 合并两个数据集
        all_data = data1 + data2

        # 数据拼接和分词
        seg = ''
        for d in all_data:
            seg = seg + d[0]

        seg_list = jieba.cut(seg, cut_all=False)

        # 词频统计
        tf = {}
        for i in seg_list:
            if i in tf:
                tf[i] += 1
            else:
                tf[i] = 1

        # 去除无用词
        with open('stopword.txt', 'r', encoding='utf-16') as f:
            stopword = f.read()

        for c in list(tf.keys()):
            if len(c) == 1 or c in stopword:
                tf.pop(c)
                
        wordcloud = WordCloud(font_path='C:\Windows\Fonts\SIMHEI.ttf', width=800, height=400, background_color='white', colormap='viridis')
        wordcloud.generate_from_frequencies(tf)

        # 过滤字频小于2的词
        echarts_data = [{"name": key, "value": value} for key, value in tf.items() if value == 1]

        # 打印JSON格式的词云图数据
        print(json.dumps(echarts_data, ensure_ascii=False, indent=2))


    except Exception as e:
        print('error', e)

if __name__ == "__main__":
    word_cloud()

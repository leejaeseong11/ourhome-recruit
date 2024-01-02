import requests
from bs4 import BeautifulSoup
import json

url = "https://mall.ourhome.co.kr/mall/product/list.do"
response = requests.get(url)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')

    products = soup.select('#ulClass > li > a')

    product_list = []
    product_id = 1
    for product in products:
        image = product.select_one('div.thum > img')
        title = product.select_one('div.cont > strong')
        sub_title = product.select_one('div.cont > p')
        price = product.select_one('div.cont > div.txtPrice > span > b')
        price_before_discount = product.select_one('div.cont > div.txtPrice > del > b')
        sale_rate = product.select_one('div.cont > div.txtPrice > em > b')
        tags = product.select_one('div.cont > div.txtOption')

        product_dict = {
            'productId': product_id,
            'image': image['src'] if image.get('src') else image.get('data-key', ''),
            'title': title.text.strip(),
            'subTitle': sub_title.text.strip() if sub_title else '',
            'price': price.text.strip() if price else '',
            'priceBeforeDiscount': price_before_discount.text.strip() if price_before_discount else '',
            'saleRate': sale_rate.text.strip() if sale_rate else '',
            'tags': [tag.text.strip() for tag in tags if tag.text.strip() != ''] if tags else []
        }

        product_list.append(product_dict)

        product_id += 1
        if product_id > 100:
            break

    # JSON 파일로 저장
    with open('product.json', 'w', encoding='utf-8') as json_file:
        json.dump(product_list, json_file, ensure_ascii=False, indent=2)
else:
    print("Error:", response.status_code)

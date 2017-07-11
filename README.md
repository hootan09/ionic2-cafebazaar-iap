
# آموزش اضافه کردن پرداخت درون برنامه ای کافه بازار به برنامه های 
# cordova ionic2/3

<div dir="rtl" alighn="right">
 پس از دانلود و کلن کردن پروژه کامند های زیر را به ترتیب بزنید (هر چند نیازی به دانلود کد های بالا نیست و این روش را روی هر پروژه ای میتوان بکار برد)
 </div>
 
```sh
$ npm install
$ ionic cordova plugin add cordova-plugin-inapppurchase
$ npm install --save @ionic-native/in-app-purchase
```

<div dir="rtl" alighn="right">
سپس در پوشه plugins\cordova-plugin-inapppurchase\src\android فایل IabHelper.java را پیدا کرده و در خطوط حدودا 265 و 266 کد های زیر را جایگزین میکنیم
</div>

```sh
Intent serviceIntent = new Intent("ir.cafebazaar.pardakht.InAppBillingService.BIND");
serviceIntent.setPackage("com.farsitel.bazaar");
```

<div dir="rtl" alighn="right">
سپس با استفاده از فرمان زیر به کوردووا می فهمانیم که برنامه ما از نوع اندرویدی است
</div>

```sh
$ cordova platforms add android
```

<div dir="rtl" alighn="right">
اکنون به پوشه platforms\android رفته و در پوشه اندروید به فایل AndroidManifest.xml خط زیر را اضافه میکنیم
</div>

```sh
<uses-permission android:name="com.farsitel.bazaar.permission.PAY_THROUGH_BAZAAR" />
```

<div dir="rtl" alighn="right">
اکنون در پوشه src/app به فایل app.module.ts در قسمت provider خط زیر را اضافه میکنیم
</div>

```sh
import { InAppPurchase } from '@ionic-native/in-app-purchase';
.
.
.
,InAppPurchase
````

<div dir="rtl" alighn="right">
اکنون به پوشه src رفته و فایل manifest.json را ویرایش کرده و کلید  RSA خود را درون آن قرار میدهیم
</div>

```sh
"play_store_key": "YOUR CafeBazaar KEY"
```

<div dir="rtl" alighn="right">
تمام شد .حال از نمونه کد زیر میتوان در هر جای برنامه به عنوان مثال استفاده کرد
</div>

```sh
import { InAppPurchase } from '@ionic-native/in-app-purchase';

constructor(private iap: InAppPurchase) { }

...

this.iap
 .getProducts(['prod1', 'prod2', ...])
 .then((products) => {
   console.log(products);
    //  [{ productId: 'com.yourapp.prod1', 'title': '...', description: '...', price: '...' }, ...]
 })
 .catch((err) => {
   console.log(err);
 });


this.iap
  .buy('prod1')
  .then((data)=> {
    console.log(data);
    // {
    //   transactionId: ...
    //   receipt: ...
    //   signature: ...
    // }
  })
  .catch((err)=> {
    console.log(err);
  });
```


#  منبع اصلی جهت استفاده از گوگل پلی لینک زیر می باشد
```sh
https://github.com/AlexDisler/cordova-plugin-inapppurchase
```

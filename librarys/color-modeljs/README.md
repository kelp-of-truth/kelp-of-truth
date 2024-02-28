# color-model.js

- [color-mode.js](https://raw.githubusercontent.com/kelp-of-truth/kelp-of-truth/main/librarys/color-model.js)
- [color-model.min.js](https://raw.githubusercontent.com/kelp-of-truth/kelp-of-truth/main/librarys/color-model.min.js)

### 使用
```html
<code>#f00000</code>は赤です
```


code要素の`innerHTML`を参照し、カラーモデルを作成します(現在 HEX,RGB,RGBAに対応)。
```html
<code class="cm">red</code>は赤です
```


classに`cm`を追加すると強制的にカラーモデルをついかします。
```html
<code class="ecm">rgb(255, 0, 0)</code>は赤です
```


classに`ecm`を追加するとカラーモデルをエスケープできます。<br>

**注.** `cm`と`ecm`をどちらとも追加した場合、`cm`が優先されます。

### 補足
CSSの`background-color`プロパティの値を変更しているのでHEX値,RGB値,HSL値,キーワード値以外を指定した場合デフォルトの色になります。

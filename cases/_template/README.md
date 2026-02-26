# 案例頁模板使用說明

這個資料夾是「單一案例頁模板」。  
新增一個新案例時，不要直接改這裡，請複製一份到 `cases/你的案例代號/`。

---

## 1) 建立新案例資料夾

範例（Windows）：

```powershell
copy -Recurse "d:\Fulijie\cases\_template" "d:\Fulijie\cases\nantun-a\"
```

完成後你會有：

- `cases/nantun-a/index.html`
- `cases/nantun-a/img/`（放圖片）

---

## 2) 放圖片

把照片放到：

- `cases/nantun-a/img/01.jpg`
- `cases/nantun-a/img/02.jpg`
- `cases/nantun-a/img/03.jpg`
  ...

> 建議命名規則：`01.jpg`、`02.jpg`、`03.jpg`  
> 這樣在 `images` 陣列中最好維護。

---

## 3) 修改案例頁文案（`index.html`）

搜尋並替換：

- `{{案例名稱，例如：北屯｜寶輝 The Springs}}`
- `{{台中北屯}}`
- `{{木作 / 系統櫃 / 裁切對色}}`
- `{{工法紀錄與完工精選}}`

---

## 4) 修改相簿圖片陣列

在檔案底部找到：

```js
const images = [
  { src: "img/01.jpg", title: "案例照片 1", sub: "完工／精選" },
  ...
];
```

改成你的內容即可。

---

## 5) 從首頁連進新案例

在 `index.html` 的精選案例卡片把連結改成：

```html
<a href="cases/nantun-a/index.html">
```

---

## 6) 部署注意

- 使用相對路徑（`img/01.jpg`）時，部署時要把整個案例資料夾一起上傳。
- 不一定要外部網址（CDN），本地圖片可直接用。


# Case Setup Checklist Template

這份檔案是「新增案例時可直接照著做」的操作清單。  
建議每新增一個案例就複製這份 checklist，逐項打勾。

---

## A. 建立案例資料夾

- [ ] 建立新資料夾：`cases/<case-slug>/`
- [ ] 建立圖片資料夾：`cases/<case-slug>/img/`
- [ ] 複製現有案例頁為起始模板：
  - 建議來源：`cases/the-springs/index.html`
  - 目標：`cases/<case-slug>/index.html`

`<case-slug>` 建議格式：

- 英文小寫
- 單字用 `-` 連接
- 不要空白（例如：`beitun-the-springs-b`）

---

## B. 放入圖片素材

- [ ] 圖片放到 `cases/<case-slug>/img/`
- [ ] 最少提供：`01.jpg`（封面）
- [ ] 建議提供：`01.jpg` ~ `06.jpg`
- [ ] 圖片命名固定兩碼流水號（`01`、`02`...）

---

## C. 修改單一案例頁（`cases/<case-slug>/index.html`）

### 1) 路徑設定（控制圖片來源）

請確認：

- [ ] `--case-hero-image: url("./img/01.jpg");`
- [ ] `const CASE_IMAGE_BASE = "./img/";`

用途：

- `--case-hero-image`：控制頁面最上方 Hero 背景圖
- `CASE_IMAGE_BASE`：控制相簿與縮圖共用路徑基底

### 2) 文案區（控制案例資訊顯示）

至少更新下列區塊：

- [ ] `<title>...</title>`（瀏覽器分頁名稱）
- [ ] Hero 主標題（案例名稱）
- [ ] Breadcrumb / 地區資訊（例如台中・北屯）
- [ ] Meta 資訊（坪數、工期、類型）
- [ ] 相簿每張圖的 `title` / `sub`

### 3) 相簿陣列（控制圖庫內容）

找到 `images` 陣列後確認：

- [ ] 每一筆 `src` 都是 `CASE_IMAGE_BASE + "0x.jpg"`
- [ ] 筆數與實際圖片數一致
- [ ] 第 1 張圖通常對應 `01.jpg`

---

## D. 加入「案例總覽」頁（`cases/index.html`）

在對應地區區塊新增卡片：

- [ ] `href="./<case-slug>/index.html"`（點擊進入案例頁）
- [ ] `img src="./<case-slug>/img/01.jpg"`（總覽縮圖）
- [ ] `alt`、標題、地區文字改為新案例內容

用途：

- 這裡是全案例中轉頁，決定「有哪些案例可被找到」

---

## E. 加入首頁「精選案例」（`index.html`）

在 `#portfolio` 區塊替換或新增卡片：

- [ ] `href="cases/<case-slug>/index.html"`
- [ ] `img src="cases/<case-slug>/img/01.jpg"`
- [ ] `alt`、標題、副資訊更新為新案例文案

用途：

- 這裡只放你想主推的案例（不是全部案例）

---

## F. 導覽與連結確認

- [ ] Navbar「精選案例」應導向 `index.html#portfolio`
- [ ] Navbar「案例總覽」應導向 `cases/index.html`
- [ ] 首頁卡片可點進案例詳情
- [ ] 總覽卡片可點進案例詳情

---

## G. 發佈前驗收

- [ ] 首頁精選卡縮圖有正常顯示（非破圖）
- [ ] 案例總覽卡縮圖有正常顯示（非破圖）
- [ ] 案例詳情 Hero 背景圖有顯示
- [ ] 相簿左右切換正常、縮圖同步正常
- [ ] 手機版導覽列與聯絡按鈕顯示正常

---

## 快速範本（可複製）

```text
案例名稱：
case-slug：
地區分類：
首頁是否精選：是 / 否

[ ] 建資料夾完成
[ ] 圖片放置完成（01~06）
[ ] 案例頁文案完成
[ ] 案例頁 images 陣列完成
[ ] 加入 cases/index.html
[ ] 加入 index.html #portfolio（若需）
[ ] 手機版檢查完成
[ ] 桌機版檢查完成
```


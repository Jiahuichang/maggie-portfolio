# 自己編輯作品集

雙擊 `Maggie-Portfolio.code-workspace`，用 VS Code 開啟整個網站。這個資料夾就是可以直接編輯的網站原始檔，不需要另外匯入或重新建置。

## 要改哪個檔案？

| 要改的內容 | 檔案 |
| --- | --- |
| 首頁自介、專案卡片 | `index.html` |
| Flex 文案、上線狀態、規劃項目 | `flex.html` |
| Rider Assistant | `hra.html` |
| Dealer AI 的 Coming Soon | `dealer-ai-agent.html` |
| Claim System | `claim-system.html` |
| Tuning Tool | `tuning-tool.html` |
| Factory System Tool | `hyena-factory-tool-system.html` |
| About / Contact | `about-mags.html` / `contact.html` |
| 插畫頁 | `illustration.html` |
| Flex 字體、間距、顏色，以及手機修正 | `portfolio.css` |

## 改文字

1. 開啟對應的 HTML。
2. 按 `⌘F` 搜尋畫面上的原文，例如 `NEXT RELEASE`、`Coming Soon` 或 `September 10`。
3. 修改標籤中間的文字，不要刪掉前後的 `<h2>`、`<p>`、`<li>` 等標籤。
4. 按 `⌘S` 存檔，再到瀏覽器按 `⌘R` 重新整理。

例如：

```html
<h3>Bring riders closer to the first ride</h3>
<p>這裡可以改成你自己的內容。</p>
```

`h1` 是頁面大標題、`h2` 是章節標題、`h3` 是小標題、`p` 是內文、`li` 是清單項目。`class` 與 `id` 先保留，避免樣式或章節跳轉失效。

## 改狀態

Flex 中可以搜尋 `IMPLEMENTED`、`NEXT RELEASE`、`ONGOING`。它們是普通文字，可以自行修改。若把計畫中功能改成已完成，也記得一起更新旁邊的敘述，不要只換狀態。

## 改版面間距（padding / margin）

在 `portfolio.css` 搜尋：

- `.case-hero`：Flex 頁首留白。
- `.case-section`：每個章節上下間距。
- `.case-content h2`：章節標題大小與下方間距。
- `.case-deck`：Hero 副標題。
- `@media`：手機或平板專用設定。

`padding` 是區塊內側留白；`margin` 是區塊外側距離。CSS 檔後面的手機規則可能覆蓋前面的桌面設定。

## 看結果

目前本機預覽： http://127.0.0.1:4173/

若預覽服務關閉，仍可直接用瀏覽器開啟資料夾中的 `index.html`。整個資料夾及 `assets` 都要保留。

VS Code 存檔不會自動更新目前的 Webflow 正式網站。這裡修改的是本機版本；正式上線後仍要把更新的檔案重新部署。

## 避免不小心覆蓋修改

修改前可以複製整個資料夾備份。接下來應直接編輯這裡的網站檔案；不要重新執行先前 `work` 裡的搬移腳本，否則可能覆蓋你的新文案。

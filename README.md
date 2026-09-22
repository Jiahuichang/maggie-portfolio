# Maggie 的作品集｜HTML 搬移版

這是一份可獨立使用的多頁 HTML 網站。網頁、圖片、字型、樣式和選單程式均在資料夾內，不需要 Webflow 帳號、付費方案或建置步驟才能顯示。

## 如何開啟

解壓縮整包檔案，保留資料夾結構，雙擊 `index.html` 即可用瀏覽器閱讀。不要只搬走單一 HTML；`assets` 資料夾必須一起保留。履歷、LinkedIn、Instagram 和 App Store 等外部連結仍需要網路。

## 本次範圍

- 首頁：保留六個 PM／Design 專案，更新 PM 定位和 Flex 上線資訊。
- Flex：重寫為 Hero、Overview、Challenge、My Role、Product Strategy、Prioritization Framework、Key Decisions、Execution、Launch Result、Post-launch Learnings、Iterations、Impact。
- 原樣搬移：HRA、Claim System、E-Bike Tuning Tool、Factory System Tool、Illustration、About、Contact。
- Dealer AI Agent：原站目前只有 Coming Soon，照原站保留。
- 未搬移：Industrial Design 專案區、相關四個工業設計專案頁、隱藏的 PhysioQ。About 中的職涯經歷文字保留。

Flex 使用原站產品圖和可編輯的流程、優先順序對照、時間軸；沒有以 AI 圖片假裝真實產品成果。已上線／下一版／持續規劃分開標示，沒有新增未提供的成長數據。

## 之後如何接其他專案

每個案例都有獨立 HTML 頁面，共用樣式、字型與選單。可以繼續修改既有案例，或新增頁面後在首頁加一張專案卡片，不用重新搬家。

`portfolio.css` 是新增的排版與手機修正；`site.js` 是不依賴外部服務的選單。`assets` 包含原站素材和原始樣式。`asset-manifest.json` 可對照素材原始網址。

## 正式取代 Webflow 前

1. 先確認本機的內容、手機版與每個專案都符合需求。
2. 將整個資料夾部署到支援靜態網站的主機。
3. 設定並驗證原網域、HTTPS、舊網址與重新導向，再切換 DNS。
4. 確認正式網站可用後，再處理 Webflow 方案取消；網域續費和信箱服務需分別確認，避免一起停用。

本次沒有部署公開網站、修改 DNS 或取消任何方案。附上的 `_redirects` 提供常見靜態主機使用的舊路徑對應；正式部署時仍需依選定主機驗證支援方式。

Contact 保留 email 連結，沒有依賴 Webflow 表單。原站的追蹤程式與 Webflow 託管執行程式已移除；若未來需要流量分析，須另外設定。

## 已知內容限制

其他案例的敘述和數據依原公開頁保留，未重新稽核其商業成果。Flex 為依本次討論整理的作品集文案，正式公開前仍可由 Maggie 再確認保密性、功能範圍與措辭。

網站檢查結果見 `design-qa.md` 與 `validation.json`。

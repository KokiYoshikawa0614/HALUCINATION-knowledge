# Gemini エクスポート 抽出結果

## エクスポートファイル情報

- **ファイル名：** `takeout-20260401T121223Z-3-001 (1).zip`
- **取得日：** 2026年4月1日
- **取得元：** Google Takeout（Gemini セクション）

## ZIPの中身

```
Takeout/Gemini/gemini_gems_data.html        → <div></div>（空）
Takeout/Gemini/gemini_scheduled_actions_data.html → <div></div>（空）
```

## 結果

このエクスポートには **Geminiとのチャット履歴は含まれていない**。

Google Takeout の「Gemini」セクションは、チャット履歴（会話ログ）ではなく、
以下の2種類のデータのみを対象としている：

| ファイル | 内容 |
|---|---|
| `gemini_gems_data.html` | カスタムGems（Geminiのカスタムモード設定）のデータ |
| `gemini_scheduled_actions_data.html` | スケジュールされたアクション（定期実行タスク）のデータ |

今回はどちらも空（データなし）だった。

## チャット履歴の取得について

Geminiのチャット履歴（会話ログ）をエクスポートするには、
**Google Takeout ではなく Gemini アプリ内の「アクティビティ」から手動でエクスポートする**必要がある。

または `myactivity.google.com` からGeminiのアクティビティを参照する方法もある。

## HALUCINATION制作に関連するGeminiの利用実績（knowledge-base.mdより）

知識ベースに記録されている制作時のGemini使用実績：

| ツール | 用途 | 費用 |
|---|---|---|
| Gemini 2.5 Flash image | 主人公の横顔・表情バリエーション31枚生成、主人公が映らないシーン | Gemini × 2回 計5,800円 |
| Gemini 2.5 Pro TTS | 台詞・ナレーション音声生成（Google AI Studio経由、無料） | 無料 |

※具体的なプロンプトは現時点で本ファイルには記録されていない。
　Notion等の他ツールに保管されている可能性あり。

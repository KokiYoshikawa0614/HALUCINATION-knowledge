# キャラクタービジュアル制作パイプライン — 主人公ベース画像

主人公・八神薫（Kaworu Yagami）のビジュアルを確立するための最初の2ステップ。
この4枚がLoRA学習データセット（`raw-data/映画の準備と後処理/画像の後処理/lora_dataset_v2/`）の元となった原本画像。

---

## ワークフロー概要

```
Step 1: Midjourney V7 で理想のキャラクター像を生成
         → アップスケールで解像度向上

Step 2: Flux1.Kontext でフォトリアル化
         → Topaz Photo AI 4 で4倍アップスケール

Step 3（以降）: LoRA学習データセット作成 → Replicate で学習
```

---

## 画像一覧と視覚的特徴

### 01_midjourney_v7_original.png
**元ファイル名**: `KaworuYagamimodel2.png`
**ツール**: Midjourney V7

- 暖かみのあるクリーム色の背景（白ではない）
- 肌が非常になめらかで理想化されており、デジタルアートの質感
- 目がやや大きめ・輪郭がシャープで、アニメ的な影響を持つ
- 唇に自然なピンク色、全体的に「2Dイラストをリアル化した」印象
- 構図: バストアップ、やや寄り気味

### 02_midjourney_v7_upscaled.png
**元ファイル名**: `KaworuYagamimodel2Upscale.png`
**ツール**: Midjourney V7（アップスケール）

- `01_midjourney_v7_original.png` と同一構図・同一質感
- 解像度が向上し、髪の毛の一本一本、肌の質感がより鮮明に
- ただし「デジタルアート的」な特性は維持されており、写真には見えない
- このファイルがFlux1.Kontextへの入力として使用された

### 03_flux1_kontext_realistic.png
**元ファイル名**: `KaworuYagamibase.png`
**ツール**: Flux1.Kontext（`02_midjourney_v7_upscaled.png` を入力として使用）

- 背景が純白に変化（Midjourneyのクリーム色から）
- 肌が写真的なリアリティに変化：毛穴・微細なテクスチャが見え始める
- 目が「実在する人物の目」に変化。Midjourneyの誇張された輪郭が消える
- 髪の質感も自然になり、光の反射がリアル
- 全体として「写真」として認識される質感
- 構図: 上半身がやや広め、正面ポートレートスタイル

### 04_flux1_kontext_topaz_upscaled.png
**元ファイル名**: `KaworuYagamibase-topaz-face-upscale-4x-2.png`
**ツール**: Topaz Photo AI 4（`03_flux1_kontext_realistic.png` を4倍アップスケール）

- `03_flux1_kontext_realistic.png` の高解像度版（4x）
- 髪の一本一本、毛先の微細な構造まで視認可能
- 肌の毛穴・産毛レベルの質感が明確に見える
- 顔のプラスチック化なし（明るいポートレートのためTopaz事例3の問題が発生していない）
- **LoRA学習データセットの主要参照画像として使用した最終版**

---

## Midjourney vs Flux1.Kontext — 質感の違いまとめ

| 比較軸 | Midjourney V7 | Flux1.Kontext |
|---|---|---|
| 肌質感 | なめらか・理想化。デジタル的な光沢 | 毛穴・微細テクスチャあり。写真的 |
| 目の印象 | やや大きめ・輪郭強調。アニメ的影響 | 実在する人物の目。誇張なし |
| 背景 | 暖かみのあるクリーム | 純白 |
| 全体印象 | 「リアル寄りのイラスト」 | 「実在する人物の写真」 |
| LoRAとの相性 | 学習素材としては理想化されすぎ | 写真として認識されるためLoRA向き |

---

## Flux1.Kontext モデル選定（model1 vs model2）

LoRA学習のベース画像を確立する前に、2人の候補キャラクター（model1・model2）を Flux1.Kontext でシーン適用テストして比較した。

### 比較用シーン（電話シーン・黒塗りホラーシーン）

| # | ファイル | 内容 |
|---|---|---|
| 05 | `05_flux1kontext_model1_rejected.png` | model1 のベースポートレート（不採用）|
| 06 | `06_flux1kontext_model2_chosen.png` | model2 のベースポートレート（採用・LoRA学習の元画像）|
| 07 | `07_flux1kontext_model1_phone_scene.png` | model1 を電話シーンに適用した結果 |
| 08 | `08_flux1kontext_model2_phone_scene.png` | model2 を電話シーンに適用した結果 |

### model2 を選んだ理由

| 評価軸 | model1 | model2（採用）|
|---|---|---|
| スタイル | アニメ寄り・整いすぎた印象 | フォトリアリスティック・自然な質感 |
| 照明適応 | 暗いシーンでアニメ的な崩れ方 | 実写的な陰影・正しい暗さ |
| 孤独感・恐怖感の表現 | 弱い | 強い |
| 素材テクスチャ（塗料・布）| 均一でプラスチック的 | 不均一でリアル |
| 髪色 | 茶色がかっている | 正しい漆黒（キャラクター設定通り）|

> 選定プロンプト（電話シーン・黒塗りシーン）→ `02_prompts/image-prompts.md` セクション17  
> 崩壊例（model2の限界）→ `01_images/before-after/pair6`

---

## 関連ファイル

- `raw-data/KaworuYagamimodel2.png` — 原本（Midjourney原画）
- `raw-data/KaworuYagamimodel2Upscale.png` — 原本（Midjourneyアップスケール）
- `raw-data/KaworuYagamibase.png` — 原本（Flux1.Kontext）
- `raw-data/KaworuYagamibase-topaz-face-upscale-4x-2.png` — 原本（Topaz最終版）
- `raw-data/映画の準備と後処理/画像の後処理/lora_dataset_v2/` — この画像群を使って作成したLoRA学習データセット
- `02_prompts/replicate-params.md` — LoRA学習パラメータ詳細
- `00_knowledge-base/knowledge-base.md` — 事例1（LoRA学習の経緯）

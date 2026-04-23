# LoRA 過学習 Before/After — HALUCINATION

LoRA学習の試行錯誤で生じた問題と改善を、実際の生成画像で記録する。

---

## ペア1: データセット生成の失敗 vs 成功（Gemini 画像生成）

LoRA学習データセット（31枚）のうち、多様性セット作成時にGeminiが全く別人を生成した事例。

| 画像 | ファイル | 説明 |
|---|---|---|
| **BEFORE（失敗）** | `pair1_before_gemini_dataset_wrong_person.png` | Geminiが生成した別人：より成熟した顔立ち・顎周りがはっきりした男性。主人公の特徴（黒髪・若い顔・細い輪郭）を全く持たない。`raw-data/gemini-chats/Lora学習の画像生成の失敗/` の13枚目 |
| **AFTER（成功）** | `pair1_after_gemini_dataset_correct_person.png` | 同フォルダで正しく生成できた主人公：白背景、黒スーツ白シャツ、正しい顔立ち。`raw-data/gemini-chats/Lora学習の画像生成の失敗/` の11枚目 |

**教訓**: Gemini での顔一貫性は不安定。特に多様な照明・背景を指定するとキャラクターが別人になりやすい。

---

## ペア2: 黒塗り表現の失敗 → LoRA断念・ChatGPTで解決

LoRAの「クリーン画像への過学習」により、顔を黒く覆う演出がLoRAでは実現不可能だった事例。最終的にChatGPTで黒い顔の表現を生成して解決。

| 画像 | ファイル | 説明 |
|---|---|---|
| **BEFORE（失敗）** | `pair2_before_lora_black_paint_partial_fail.png` | プロンプトで「全顔を黒く覆う」と指示したが、顎・首周りのみ黒くなり、上半分はきれいなまま。典型的な過学習抵抗の症状。白シャツも汚れていない |
| **AFTER（解決）** | `pair2_after_chatgpt_black_face.png` | LoRAでは解決不可能と判断し、ChatGPTで生成。顔全体と上半身が厚く乾いた黒ペンキで覆われた表現を実現。Topazで後処理（sharpen + denoise + upscale 3840w） |

**ChatGPTプロンプト**: 柔らかな照明で撮影された超現実的でプロフェッショナルな写真を作成してください。 Realistic photography, frontal cinematic upper-body shot of a young Japanese man, standing completely still against a plain wall. He is tilting his head upward with his eyes gently closed. His entire face and upper body are covered in thick, dried black paint. The scene is dominated by deep navy blue and dark shadows, with minimal contrast. Aspect ratio is 16:9.

**教訓**: LoRAはクリーン画像に過学習しているため、顔全体を黒く覆うような汚れ演出はプロンプト工夫だけでは限界がある。ツールを切り替える判断（LoRA → ChatGPT）が重要。

---

## ペア3: LoRA 正常動作 vs 完全崩壊（lora_scale の影響）

lora_scale を変化させた際に、顔が完全に別人に崩壊した事例。

| 画像 | ファイル | 説明 |
|---|---|---|
| **BEFORE（正常）** | `pair3_before_lora_correct_face.png` | lora_scale=0.85〜1.0 での生成。黒スーツ・黒髪・主人公の顔が正確に再現されている |
| **AFTER（崩壊）** | `pair3_after_lora_breakdown_wrong_person.png` | 同じLoRAで別のパラメータ設定時に生成。白い長髪、西洋人の顔立ちの完全に別人。LoRAが顔の「概念」を持てず「記憶」のみに依存していた証拠（知識ベース 事例1参照） |

**教訓**: このLoRAは lora_scale=0.75 未満で別人が出現。`replicate-params.md` に記録の通り、0.85〜1.0 でのみ使用可能。

---

## 関連ファイル

- `00_knowledge-base/knowledge-base.md` — 事例1（LoRA過学習の詳細）
- `02_prompts/replicate-params.md` — v5最終パラメータ、lora_scaleテスト結果
- `02_prompts/image-prompts.md` — 有機的テクスチャ表現のプロンプト設計原則
- `raw-data/gemini-chats/Loraプロンプト編集とシーン作成.txt` — 10シーンテストの完全ログ

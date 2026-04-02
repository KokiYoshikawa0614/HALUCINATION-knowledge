# Image Prompts — HALUCINATION

画像生成に使用したプロンプトを種類別に整理する。
LoRAのトリガーワード: `ohwx man`（Replicate学習時）

---

## 1. LoRAデータセット用キャラクターシート（Flux1.dev / Gemini Image）

LoRA学習のために31枚の画像を生成。すべて白背景・スタジオライティング・1024×1024。

### ベースセット（25枚）—構図・ポーズ重視

| 種類 | 枚数 | プロンプトパターン |
|---|---|---|
| 正面クローズアップ | 3 | `Photorealistic RAW photo, extreme close-up portrait, a young Japanese man, shoulders not visible, neutral expression, plain white background, studio lighting, 8k` |
| 正面上半身 | 2 | `RAW photo, photorealistic medium shot, a young Japanese man, facing camera, neutral expression, plain white background, studio lighting, 8k` |
| 正面全身 | 1 | `RAW photo, photorealistic full figure shot from head to toe, a young Japanese man, standing straight, facing camera, neutral expression, plain white background, clean studio lighting, 8k, masterpiece, ultra-detailed, sharp focus` |
| 斜め45度上半身 | 2 | `RAW photo, photorealistic medium shot, a young Japanese man, 45-degree angle, neutral expression, plain white background, studio lighting, 8k` |
| 横顔上半身 | 1 | `RAW photo, photorealistic medium shot profile, a young Japanese man, looking left, neutral expression, plain white background, studio lighting, 8k` |
| 後ろ姿全身 | 1 | `RAW photo, photorealistic full body from behind, a young Japanese man, plain white background, studio lighting, 8k` |
| 笑顔クローズアップ | 2 | `RAW photo, photorealistic close-up portrait of a young Japanese man, genuine warm smile, plain white background, soft studio lighting, 8k, film grain` |
| 笑顔上半身 | 1 | `RAW photo, photorealistic medium shot of a young Japanese man, smiling warmly, plain white background, studio lighting, 8k` |
| 真剣な表情クローズアップ | 2 | `RAW photo, photorealistic medium shot of a young Japanese man, serious and focused expression, looking slightly away from camera, plain white background, studio lighting, 8k` |
| 怒りの表情上半身 | 1 | `RAW photo, photorealistic medium shot of a young Japanese man, angry expression, plain white background, studio lighting, 8k` |
| 驚いた表情上半身 | 1 | `RAW photo, photorealistic medium shot of a young Japanese man, surprised expression, plain white background, studio lighting, 8k` |
| 座っている全身 | 2 | `RAW photo, photorealistic full-body shot, a young Japanese man, sitting confidently on a simple modern chair, plain white background, studio lighting, 8k` |
| 歩いている全身 | 2 | `RAW photo, photorealistic full-body shot, captured in mid-stride while walking, dynamic pose, a young Japanese man, plain white background, studio lighting, 8k` |
| 腕を組んでいる上半身 | 2 | `RAW photo, photorealistic medium shot, a young Japanese man, arms crossed, plain white background, studio lighting, 8k` |
| ポケットに手を入れている全身 | 2 | `RAW photo, photorealistic full-body shot, a young Japanese man, hand in pocket, plain white background, studio lighting, 8k` |

### 多様性セット（追加6枚）—照明・背景バリエーション

```
# 1: 自然光上半身
RAW photo, photorealistic medium shot of a young Japanese man, standing near window, natural soft light from the side, plain white background, 8k

# 2: 自然光クローズアップ
RAW photo, photorealistic close-up of a young Japanese man, facing side window, soft natural light with gentle shadows, plain white background, 8k

# 3: 室内光上半身（暗め・暖色）
RAW photo, photorealistic medium shot of a young Japanese man, sitting in dimly lit room, warm side lamp light, plain white background, 8k

# 4: 室内光クローズアップ（ドラマチック）
RAW photo, photorealistic close-up of a young Japanese man, dramatic split lighting from the side, plain grey background, 8k

# 5: グレー背景上半身
RAW photo, photorealistic medium shot of a young Japanese man, standing against plain grey wall, natural lighting, 8k

# 6: ダーク背景全身
RAW photo, photorealistic full body of a young Japanese man, standing against plain dark wall, soft light, 8k
```

**キャプションファイル形式（Replicateへ送る.txtファイル）：**
```
ohwx man, man, [changing elements: expression/pose only. DO NOT describe hair or face.]
```

---

## 2. Flux1.dev + LoRA：主人公が映るシーン

LoRAスケール: 0.85〜1.0。解像度: 1280×720（16:9）。

### 基本スタイルサフィックス（全シーン共通）

```
Photorealistic, 8k, RAW photo, shot on 35mm film, light film grain, realistic skin texture, cinematic lighting.
```

> **注意**: 圧縮禁止。各要素は異なるリアリティを担当。
> - `Photorealistic, 8k, RAW photo` → 写真の真正性
> - `shot on 35mm film, light film grain` → 質感（プラスチック感を排除する最重要要素）
> - `realistic skin texture` → マイクロディテール
> - `cinematic lighting` → ムード・シャドウ

### シーン別プロンプト（確定版）

#### 電話シーン（基本）
```
A photorealistic, medium shot of ohwx man, a man, looking directly at the camera, holding a smartphone in his right hand to his right ear. He is wearing a black suit and a white shirt, with absolutely no tie. The background is a plain white wall. Photorealistic, 8k, RAW photo, shot on 35mm film, light film grain, realistic skin texture, cinematic lighting.
<lora:LoRAモデルID:1.0>
--width 1280 --height 720
```

#### 黒いペンキまみれシーン（ホラーショット用）
```
Cinematic horror film still, photorealistic RAW photo. A young Japanese man as ohwx man, wearing a black suit and a white dress shirt with an open collar, (standing completely still:1.3). (His entire face and shirt are covered in thick, dried black paint:1.4). In a stark white room, under (cinematic low-key lighting, deep indigo and cyan tones, casting long, hard shadows:1.3). Minimalist horror, unsettling tone, 8k, sharp focus.
```

#### 黒いペンキ・頭を上げて目を閉じるシーン
```
Haunting cinematic close-up. A young Japanese man as ohwx man, wearing a black suit and a white dress shirt with an open collar, (tilting his head upward, eyes gently closed:1.3). His entire face, neck, and shirt collar are (completely covered in thick, uneven black paint:1.5). Dim, moody dark blue lighting casts soft shadows. Introspective and surreal mood.
```

#### 双子キスシーン（Midjourney用）
```
Medium close-up shot. In a stark white-walled room, two young Japanese twin brothers, wearing black suits and white open-collar shirts, are seated side-by-side on a large dark blue sofa. They are positioned very closely, turning to face one another, their eyes locked in a steady gaze. One brother is clean, while the other's face and shirt are covered in copious amounts of black paint, streaked and unevenly smeared. The deep blue lighting casts moody shadows. The minimalist setting and quiet stillness amplify the introspective moment. Realistic photography, cinematic composition --style raw --ar 16:9
```

#### 双子キスシーン（Flux1.dev・リージョナルプロンプト用）
```
# 全体
A cinematic shot of two identical twin brothers.

# Person A（左）
my_char_v1, wearing a clean black suit and a white shirt, with a calm expression.

# Person B（右）
my_char_v1, covered in blood, his suit is torn and blood-stained, and he has a terrified expression.

They are kissing. The background is a plain white wall.
<lora:LoRAモデルID:1.0>
```

#### 上半身裸・黒いペンキ・目を閉じて頭上げ（承認済み最終版）
```
A frontal close-up of the upper body of a young Japanese man, wearing a simple black bodysuit from the neck down, his sleek black hair framing his refined features as he tilts his head upward with his eyes gently closed. His entire face, neck, and upper body are heavily covered in thick black paint, layered unevenly, obscuring every detail of his skin and the suit beneath its dark texture. The paint clings in streaks and patches against the deep blue lighting. Dim, moody light casts soft shadows, accentuating the rough texture of the paint. The minimalist background fades into darkness, drawing full focus to the quiet introspection. Realistic photography, cinematic, dark blue lighting, introspective mood.
```

#### 上半身裸・仰向け・オーバーヘッドショット
```
Cinematic photo, (overhead shot:1.4) of a topless young Japanese man as ohwx man, lying on his back on a dark blue sofa, looking at the camera. Dark and moody, deep blue lighting.
```

#### 黒い肉を食べるシーン
```
Cinematic photo, a young Japanese man as ohwx man, wearing a black suit and a white open-collar shirt, kneeling on a dark blue sofa. (He is eating a strange, black, organic mass of meat:1.5). (His face and hands are covered in a dried black substance:1.4). Surreal and eerie mood.
```

#### 5歳の少年・仰向け（内省的）
```
Haunting cinematic portrait, surreal horror, overhead shot. (A 5-year-old version of the young Japanese man, ohwx man:1.4), wearing a black suit and a white dress shirt with an open collar, lying on his back on a dark blue sofa, (gazing directly at the camera with a quiet, introspective expression:1.2). The scene is dark, heavily tinted with deep blue tones, casting dramatic shadows. Minimalist background.
```

#### 5歳の少年・仰向け（不気味な笑顔）
```
Uncanny cinematic portrait, surreal horror, overhead shot. (A 5-year-old version of the young Japanese man, ohwx man:1.4), wearing a black suit and a white dress shirt with an open collar, lying on his back on a dark blue sofa, (smiling brightly, showing his teeth, a joyful expression:1.5). The scene is dark and moody with deep blue lighting, creating an eerie contrast with his happy smile. Minimalist background.
```

---

## 3. Runway Gen-4 Image Prompts（主人公が映らないシーン）

Geminiが翻訳したRunway Gen-4用の画像生成プロンプト。

### 目のクローズアップ（目を閉じている）

```
# バリエーション1（シンプル）
A photorealistic and documentary-style close-up shot of a Japanese man's closed eye, centered in the frame. The setting is indoors, with natural morning light. The image is captured with an ultra-high-resolution camera, featuring a sharp focus on the eye against a slightly blurred background.

# バリエーション2（目元のみ）
A documentary-style, photorealistic extreme close-up of a Japanese man's closed eye, centered in the frame so that only the eye area is visible. The scene is lit by natural morning light indoors, captured in ultra-high resolution with a sharp focus on the eye.

# バリエーション3（青みのある光）
A documentary-style, photorealistic extreme close-up of a Japanese man's closed eye, centered in the frame and facing forward. The scene is illuminated by slightly bluish indoor natural light, captured in ultra-high resolution with a sharp focus, ensuring only the eye area is visible.
```

### 電話を聞いている上半身ショット

```
A documentary-style, photorealistic upper-body shot of a Japanese man facing forward. He is holding a smartphone to his right ear, listening with his mouth closed, and is dressed in a navy suit and a white shirt without a tie. The scene is set indoors against a white wall, illuminated by slightly bluish natural light, and captured with an ultra-high-resolution camera.
```

---

## 4. 照明別ライティングプロンプト（室内・窓なし）

| シーン雰囲気 | プロンプト |
|---|---|
| 朝（明るい・青みがかった） | `Bright ambiance, a color palette of cool cyan and azure blue.` |
| 内省的（暗め・藍色） | `Deep indigo and navy blue hues, heavy shadows, melancholic mood.` |
| 夜（非常に暗いネイビー） | `Scene dominated by deep navy blue and dark shadows, minimal contrast.` |
| 悪夢（最も暗い・藍黒） | `Overwhelming darkness, a palette of pitch-black and deep indigo, details lost in shadow.` |

---

## 5. 部屋の固定オブジェクトプロンプト

一貫性のために固定した描写。

| オブジェクト | プロンプト |
|---|---|
| ソファ | `Florence Knoll style navy sofa` |
| ドレッサー | `Scandinavian design white dresser` |
| 花瓶 | `Tall cylindrical red glass vase with blue anemones` |
| テーブル | `Wooden table` |

---

## 6. ネガティブプロンプト（共通）

```
3d, render, cartoon, anime, drawing, illustration, painting, plastic texture, disfigured, bad anatomy, watermark, low quality, deformed hands, bad composition
```

---

## 7. プロンプト設計の原則

1. **冒頭に被写体・アイデンティティを置く**（スタイル指定より先）
2. **具体的な叙述スタイル**：「誰が、どこで、何をしている」
3. **ネガティブは肯定形で**：「ネクタイなし」→ `with absolutely no tie` + ネガティブプロンプトに `tie` 追加
4. **質感キーワード**：`organic`, `charred`, `dried oxidized` → 均一な「ペンキ」より血・汚れを自然に表現
5. **目が閉じているシーン**：LoRAは開いた目で学習しているため不安定。`(eyes gently closed:1.5)` と重み上げが有効だが完全解決せず

---

## 8. Midjourney VHSスタイルプロンプト（スノーリーカム等）

「プロンプトの共通項抽出」チャットで確立したVHSフィルター表現。主人公が映らない動きのあるシーンに使用。

### VHSスタイル共通修飾語

```
vhs screengrab, blurry vhs filter, vcr film grain effect, grainy quality, vcr tape static, bad lines
```

> **配置原則**: VHSスタイルキーワードはプロンプト先頭に置くことで効果が強まる。

### 適用シーン例

```
# スノーリーカムで全力疾走
EXTREME vhs screengrab, HEAVILY blurry vhs filter, INTENSE vcr film grain effect, VERY grainy quality, SIGNIFICANT vcr tape static, SEVERE bad lines. SnorriCam shot from the chest up of a young Japanese man, wearing a black suit and a white open-collar shirt, running at full speed with his gaze fixed intently ahead. The shot is captured from a slightly high angle. Extreme sharp focus on his face, with a very shallow depth of field causing his shoulders and the background to be heavily blurred, in a dark, minimalistic room. The scene is nearly monochromatic in deep navy blue with very low brightness. --ar 16:9 --style raw

# 目のクローズアップ（怯えた表情）
vhs screengrab, blurry vhs filter, vcr film grain effect, grainy quality, vcr tape static, bad lines, an extreme close-up portrait of a young Japanese man with black eyes. His eyes are wide open with a scared expression. A very shallow depth of field creates a heavily blurred, indistinct background. The scene is dominated by deep navy blue and dark shadows, with minimal contrast. --ar 16:9 --style raw

# ドレッサーの引き出しを開ける手元
vhs screengrab, blurry vhs filter, vcr film grain effect, grainy quality, vcr tape static, bad lines. Cinematic close-up on a Japanese man's hands as he opens a drawer of a Scandinavian design white dresser and takes out a standard white asthma inhaler. The cuffs of his black suit and white shirt are visible. The scene is dominated by deep navy blue and dark shadows, with minimal contrast. --ar 16:9 --style raw

# ドレッサーの前にひざまずく後ろ姿
vhs screengrab, blurry vhs filter, vcr film grain effect, grainy quality, vcr tape static, bad lines. Cinematic close-up shot from behind of a young Japanese man, kneeling on both knees in front of a Scandinavian design white dresser. His back is hunched over. He is wearing a black suit and a white open-collar shirt. The scene is dominated by deep navy blue and dark shadows, with minimal contrast. --ar 16:9 --style raw
```

---

## 9. LoRA表現限界テスト — 10シーンの結果（2025年制作時）

過学習LoRA（v1〜v4）で演出限界を測定したテスト結果。最終的にv5再学習の判断材料となった。

| # | シーン | 結果 | 評価 |
|---|---|---|---|
| 1 | 鏡を割り手を負傷 | 手がほとんど汚れず、鏡もほぼ割れない | ❌ |
| 2 | 同一人物がキス | 顔の一貫性を保ちながらキス成功 | ✅ |
| 3 | 上半身裸 | 問題なし | ✅ |
| 4 | 同一人物が上半身裸で横たわる | 成功 | ✅ |
| 5 | 鏡割り・血（黒）をぶちまける | ほぼ汚れなし。鏡もあまり割れない | ❌ |
| 6 | 片方が血まみれでキス | 顔一貫性は保てるが、血がスプレーできれいに塗ったような質感で生々しさなし | △ |
| 7 | 上半身裸・目を閉じ上を向く | ある程度成功。わずかに目が開いている | △ |
| 8 | 上半身裸・全身血まみれ・目閉じ上向き | 目は閉じたが、黒スプレーで塗ったような質感で違和感 | △ |
| 9 | 黒い肉の塊をソファで食べる | **汚さがあって非常にいい画像。有機的質感が成功** | ✅ |
| 10 | 上半身裸・仰向け・真上から撮影 | 非常によく撮れている。わずかにAIっぽさあり | ✅ |

**#9の成功から得た発見（黒い血表現の鍵）:**
- ❌ `black paint`, `tar-like` → 均一できれいな塗布になる
- ✅ `organic mass of meat`, `dried, oxidized substance`, `coagulated`, `charred`, `non-uniform` → 不均一で生々しい質感

```
# 採用した有機的テクスチャ表現
(His face, neck, and white shirt are heavily stained with a crusted, black, organic substance, like dried, oxidized blood:1.7)
(covered in a thick, dark, tar-like substance resembling dried, oxidized blood:1.5)
(His entire face and upper body are caked in a dry, cracked, black substance with the texture of burnt flesh:1.7)
```

---

## 10. 使用ツール別の使い分け

| 用途 | ツール | 理由 |
|---|---|---|
| 主人公が映るシーン（通常） | Flux1.dev + LoRA | 顔の一貫性が最重要 |
| 主人公が映る複雑シーン（血・双子） | Midjourney + フェイススワップ | LoRAは複雑表現が苦手 |
| 主人公が映らないシーン | Gemini 2.5 Flash / Imagen 3/4 | プロンプト忠実度が高い |
| 最終アップスケール | Topaz Photo AI 4 | Autopilot機能で顔を保ちながら4K化 |

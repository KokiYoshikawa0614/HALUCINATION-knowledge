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

## 10. ドキュメンタリー調の質感とAIっぽさの払拭（リアルな映画シーン生成プロンプトより）

### AIっぽさを消すキーワード

| キーワード | 効果 |
|---|---|
| `shot on 16mm film, film grain, slightly desaturated colors` | フィルム質感・彩度の落ち着き |
| `documentary style photo, candid shot` | 「撮影された感」の付加 |
| `handheld camera feel, slight motion blur` | 手持ち撮影らしいぶれ感 |

> これらを `Photorealistic, 8k, RAW photo` と組み合わせると、AI生成画像特有の「過剰にきれいすぎる」質感を抑制できる。

---

## 11. 血・汚れ表現の高度な言語化

### 英語ボキャブラリー別の効果

| 表現 | 用途 |
|---|---|
| `drenched, soaked in` | 全体的にびっしょり濡れた状態 |
| `cascading down, dripping from` | 液体が流れ落ちている状態 |
| `turning it completely crimson` | 赤く染まった → 血の色を自然に表現 |
| `thick, viscous black liquid like sumi ink` | 墨汁のような黒い液体（高粘度） |
| `dried, oxidized, non-uniform` | 乾いて不均一な質感（#9の発見） |

> **参照**: 有機的テクスチャ表現の詳細は「セクション9：LoRA表現限界テスト」を参照。

---

## 12. マルチステップ生成ワークフロー（高品質血・汚れシーン）

複雑な汚れや血のシーンはLoRA一発生成では品質が安定しない。以下の三段階ワークフローが有効：

```
Stage 1: LoRA（v5）でベース画像を生成
          → 血なし・完璧なキャラクター状態で生成
          → 顔の一貫性を最大化

Stage 2: Inpainting で汚れ・血を追加
          → 汚れを追加したい領域のみマスクして再生成
          → 局所的な高品質化が可能

Stage 3: 後処理（Topaz Photo AI 4 / DaVinci Resolve）
          → アップスケール + 顔を保ちながら質感調整
          → 全体的なAIっぽさの最終除去
```

> **重要**: Stage 1でフェイススワップ用の素材（安定した顔）を確保しておくと、Stage 2以降で顔が崩れた場合に対処できる。

---

## 13. Whisk を用いた参照画像活用法

Google Whisk にアップロードした参照画像を使い、生成画像の顔一貫性を高める手法。

- LoRAが使えないツール（Gemini Image等）で顔の一貫性を確保する代替策
- 参照画像を複数枚アップロードすることで、角度・表情違いに対応
- 生成結果が参照画像に引きすぎる（identical化）場合は、参照の重みを下げるか枚数を絞る

---

## 14. 使用ツール別の使い分け

| 用途 | ツール | 理由 |
|---|---|---|
| 主人公が映るシーン（通常） | Flux1.dev + LoRA | 顔の一貫性が最重要 |
| 主人公が映る複雑シーン（血・双子） | Midjourney + フェイススワップ | LoRAは複雑表現が苦手 |
| 主人公が映らないシーン | Gemini 2.5 Flash / Imagen 3/4 | プロンプト忠実度が高い |
| 最終アップスケール | Topaz Photo AI 4 | Autopilot機能で顔を保ちながら4K化 |

---

## 15. Midjourney V7 本番使用プロンプト

本番映画に実際に使用されたMidjourneyプロンプト。ChatGPT GPTsを通じて生成。

### 電話シーン（白背景・基本構図）

```
In a simple white-walled room, a Japanese youth is seen from a straight-on angle, holding a smartphone in his right hand close to his right ear. His serious expression and intense gaze convey a sense of importance. The minimalist background ensures full focus on him, with balanced, soft lighting accentuating his sharp features. Realistic photography, minimalism --ar 16:9
```

### 黒いペンキ全身・ホラー（白背景）

```
In a white-walled room, a young Japanese man stands completely still, his entire face and shirt covered in black paint. The thick, dried paint clings to his skin and fabric, creating a stark contrast against the pale background. The dark blue lighting casts deep, moody shadows across his sharp features, intensifying the unsettling stillness. His figure is in razor-sharp focus, while the blurred background fades into obscurity, heightening the eerie sense of isolation. The full-body composition emphasizes his unnatural stillness and the surreal contrast between him and the indistinct surroundings, evoking a quiet yet suffocating dread. Realistic photography, shallow focus, minimalist horror, dark blue lighting, unsettling tone --ar 16:9
```

### 黒いペンキ上半身・目を閉じて上向き

```
A frontal close-up of the upper body of a young Japanese man, his sleek black hair framing his refined features as he tilts his head upward with his eyes gently closed. His entire face is heavily covered in thick black paint, layered unevenly, obscuring every detail beneath its dark, suffocating texture. The paint clings to his skin in streaks and patches, adding an unsettling contrast against the deep blue lighting. Dim, moody light casts soft shadows, accentuating the rough texture of the paint and the contours of his face. The minimalist background fades into darkness, drawing full focus to the quiet introspection of the moment. The atmosphere is haunting and contemplative, evoking solitude and deep reflection. Realistic photography, cinematic, dark blue lighting, introspective and surreal mood
```

### キャラクターベースポートレート（プロフェッショナル）

```
A professional portrait of a 20-year-old Japanese man with an amazingly beautiful, well-proportioned, and very handsome face. His neat, flawless appearance features smooth, pale skin, a clean-shaven face, and double eyelids that add depth to his captivating eyes. The subject is dressed in a formal dark suit, a crisp white dress shirt. The background is simple and light-colored, illuminated with soft, even lighting that enhances his facial features and adds a refined, professional aesthetic. The image is captured in high-quality digital portrait photography style with a clean and minimalistic vibe. --ar 16:9 --style raw
```

---

## 16. ChatGPT による顔一貫性維持システム（マスターヘッドショット方式）

ChatGPTでの複数シーン生成で顔がドリフトしないための体系的な管理手法。

### マスターヘッドショットの作成

1. 中立表情・正面・ソフト照明・高解像度のヘッドショット1枚を基準として作成
2. 角度バリアントを作成し ID を付与：
   - `F0`：正面
   - `F1`：左3/4
   - `F2`：右3/4
   - `P1`：左プロフィール
   - `P2`：右プロフィール
3. 各シーンは「新規生成」ではなく最も近い角度のマスターの「編集」から開始

### 顔アイデンティティ固定パラメータ（5〜8項目を毎回明記）

| 部位 | 固定する特徴 |
|---|---|
| 髪 | 長さ・前髪の位置・束感・分け目の位置 |
| 目 | 眉毛の形・二重の深さ |
| 鼻 | 鼻筋の直線性 |
| 口 | 口角の角度・形 |
| 顎 | ラインの定義 |
| 肌 | ほくろの位置 |

### プロンプト構造テンプレート

```
[IDENTITY – 変更不可]
• 参照画像使用（同一の顔）
• 骨格・目・鼻・口・髪の長さ・前髪 変更なし
• 年齢・人種・性別 変更なし

[SCENE – 変更OK]
• シーン（場所・時間・感情・ポーズ）
• 衣装（黒スーツ・警察制服・タキシード等）
• 照明（ソフトキー + リムライト、自然光等）
• カラーグレード（ドキュメンタリー・クールトーン等）
• カメラ（50mm相当・アイレベル・浅い被写界深度・16:9）

[NEGATIVE]
• 顔の形の変更なし・髪色の変更なし・年齢の変更なし
• 過剰なスキン加工・メイク・ひげ追加なし
```

### カメラ設定ルール

- **固定レンズ**: 50〜85mm（24〜35mmの広角は顔を歪ませるため禁止）
- **アイレベルフレーミング**
- **浅い被写界深度**（顔を大きく・背景をぼかす）

### 失敗パターンと対策

| 失敗 | 原因 | 対策 |
|---|---|---|
| 髪型が変わる | 毎回指定していない | 髪の長さ・前髪・束感を毎回明記 |
| 表情変更で別人になる | 大きな感情変化を一度に指示 | 段階的変化（neutral → slight smile → smile） |
| 広角レンズで歪む | レンズ指定なし | 50〜85mmに固定 |
| 暗いシーンで顔が崩れる | 暗い条件でのAI処理が不安定 | 明るく生成してからカラーグレードで暗くする |
| 衣装変更で顔も変わる | 衣装のみの変更指示が不明確 | 「face locked, costume only」を明示 |

### 最終手段: FaceFusion（フェイス置換）

- 通常生成で安定しない角度・動き・逆光シーンに使用
- 手順: シーンを顔なしで生成 → FaceFusionでマスターヘッドショットの顔を合成

---

## 17. Flux1.Kontext モデル選定とその限界

LoRA学習前に使用したFlux1.Kontextでのモデル（候補2人）比較記録。

### model1 vs model2 比較基準

| 評価軸 | model1（不採用） | model2（採用）|
|---|---|---|
| スタイル | アニメ調・過度に整った顔 | フォトリアリスティック・自然な質感 |
| 暗い照明下 | アニメキャラ的な崩れ方 | 実写的な影の落ち方 |
| 黒い部屋シーン | 非現実的な表現 | 正しい陰影・雰囲気 |
| 孤立感・恐怖感の表現 | 弱い | 強い |
| 素材テクスチャ（塗料・布） | 均一・プラスチック的 | 不均一・リアル |

> 選定に使ったプロンプト → `02_prompts/image-prompts.md` セクション15（電話シーン・黒塗りシーン）

### Flux1.Kontext の限界（model2での問題）

以下の状況で model2 が崩壊することを確認：

1. **参照画像＋テキスト制約の混在**: 「参照画像の人物と完全に同じ顔で...」という指示でモデルが混乱
2. **超高精細仕様**: `8k, highly detailed` + `perfectly replicating facial features` の組み合わせで過剰指定による崩壊
3. **複数行リスト形式**: 箇条書き形式のプロンプトは段落形式より解釈が不安定
4. **子供体型への崩壊**: 特定の条件下でキャラクターが子供サイズに縮小される

**崩壊プロンプト例（参照）:**
```
A photorealistic, medium shot of the specific young Japanese man from the reference image,
perfectly replicating his facial features and his exact hairstyle of thick, black, layered hair.
He is looking directly at the camera.
He is wearing a black suit and a white shirt, with absolutely no tie.
The background is a plain white wall.
```

**安定するプロンプトの特徴:**
- 単一段落・流れる文体
- 技術仕様より場面・感情・雰囲気の記述を優先
- 照明・雰囲気を主語に置く構成

> 視覚比較 → `01_images/workflow/05〜08`、崩壊例 → `01_images/before-after/pair6`

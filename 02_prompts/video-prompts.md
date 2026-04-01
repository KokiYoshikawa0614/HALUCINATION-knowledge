# Video Prompts — HALUCINATION

動画生成に使用したプロンプトを種類別に整理する。

---

## 1. Runway Gen-4 動画プロンプト

### 共通プロンプトテンプレート（Gemini が翻訳）

**入力形式：**
```
主題の動き (Subject Motion): （日本語で動きを記述）
カメラの動き (Camera Movement): （固定する / ズームなど）
背景や環境の動き (Scene Motion): （任意）
全体的なスタイルや雰囲気 (Overall Style/Atmosphere): （ドキュメンタリー映画のリアリティー）
追加の詳細 (Additional Details): （任意）
```

**出力形式：** 英語の自然文1文

**共通制約：**
- 否定表現は使わず肯定形で記述（「動かない」→「remains completely still」）
- カメラは基本固定（`captured by a stationary camera`）
- 全体スタイル：`documentary film realism` / `In a dimly lit room with constant, low-key lighting`

---

### Runway Gen-4 シーン別プロンプト一覧

#### オープニング系

| # | シーン（日本語） | 英語プロンプト |
|---|---|---|
| 1 | 目がゆっくり開く、瞳は少し茶色い黒 | `The eyes of the Japanese protagonist slowly open, revealing dark brown pupils, captured with a stationary camera to create a sense of documentary film reality.` |
| 2 | スマホを聞いている・動かない | `The Japanese protagonist remains still, intently listening to a conversation on their smartphone, captured with a stationary camera to create the realism of a documentary film.` |
| 3 | 顔も口も体も動かない・電話 | `A Japanese protagonist listens to a conversation on their smartphone, their face, mouth, and body remaining completely still, captured by a stationary camera to create the realism of a documentary film.` |

#### 通話・電話系

| # | シーン（日本語） | 英語プロンプト |
|---|---|---|
| 4 | タブレットを見ている・動かない | `A Japanese actor looks at a tablet, their face, mouth, and body held completely motionless, captured by a stationary camera to create the realism of a documentary film.` |
| 5 | 手も顔も口も体も動かない・電話 | `A Japanese actor listens to a conversation on a smartphone, their face, mouth, body, and hands held perfectly motionless, captured by a stationary camera to create the realism of a documentary film.` |
| 6 | 最初の5秒は指で操作→残り5秒は静止 | `An actor's finger moves to operate a smartphone screen with one hand for the first five seconds, after which the hand becomes perfectly still for the final five seconds; throughout the entire shot, the arm and body remain completely motionless, captured by a stationary camera to create a documentary film's realism.` |
| 7 | ソファに座って電話・動かない | `An actor sits on a sofa, holding a smartphone to their ear, while their face, body, and mouth remain completely motionless, captured by a stationary camera to create the realism of a documentary film.` |
| 8 | ソファ・電話・少し困惑する表情 | `An actor's expression subtly shifts to show slight confusion, while their body, and mouth remain completely motionless as they sit on a sofa holding a smartphone to their ear, all captured by a stationary camera.` |
| 9 | ソファ・電話・顔体動かない | `An actor sits on a sofa, their face and body remaining completely motionless, while holding a smartphone to their ear, all captured by a stationary camera.` |
| 13 | ソファ・電話・絶対に話さない | `An actor sits on a sofa, holding a smartphone to their ear, while their body and mouth remain completely motionless, captured by a stationary camera.` |
| 18 | ソファ・電話・絶対しゃべらない（強調） | `An actor sits on a sofa, holding a smartphone to their ear, while their face and body remain completely motionless, captured by a stationary camera.` |
| 26 | ソファ・下を向いている | `An actor sits on a sofa, their gaze directed downwards, while their body, face, head, and mouth remain perfectly motionless, all captured by a stationary camera.` |
| 27 | スマホを耳に近づける・画面輝度変化なし | `An actor brings a smartphone up to their ear, while their body, face, head, and mouth remain perfectly motionless and the overall scene brightness stays constant, all captured by a stationary camera.` |
| 29 | 円形UIが回るスマホを持つ・操作しない | `An actor passively holds a smartphone, its screen showing a continuously rotating circular user interface, all captured by a stationary camera.` |

#### 日常動作系

| # | シーン（日本語） | 英語プロンプト |
|---|---|---|
| 10 | 寝ている→目を覚まして上体を起こす | `A sleeping actor awakens and slowly sits up, captured by a stationary camera.` |
| 11 | 冷蔵庫にものすごくゆっくりズーム | `The camera extremely slowly zooms in on a refrigerator.` |
| 12 | ゆっくりコップの水を飲む | `An actor slowly drinks a glass of water, captured by a stationary camera.` |
| 14 | スマートフォンの電源が入り白く明るくなる | `A smartphone screen powers on, brightly illuminating to a solid white, captured by a stationary camera.` |
| 15 | 静かに寝ている・起きない | `An actor sleeps peacefully, remaining completely still and motionless, captured by a stationary camera.` |
| 16 | 洗面台の前で動かずに立っている | `An actor stands motionless in front of a bathroom sink, remaining perfectly still, captured by a stationary camera.` |
| 17 | 花瓶のアネモネに非常にゆっくりズーム | `The camera very slowly zooms in on an anemone flower in a vase.` |
| 24 | 段ボール箱を触っている・表情変わらない | `A Japanese actor touches a cardboard box, their gaze fixed on it and their facial expression held completely still, all captured by a stationary camera.` |
| 25 | スマホを持って画面を見る・輝度変化なし | `A Japanese actor holds a smartphone and looks at the screen, with their face and expression remaining completely still and the screen maintaining a constant brightness, all captured by a stationary camera.` |
| 28 | 引き出しから円柱のケースを取り出す | `An actor takes a cylindrical case out of a drawer, captured by a stationary camera.` |
| 30 | プレゼント箱を見て触る・中身は開けない | `An actor touches and examines the outside of a gift box, leaving it unopened, captured by a stationary camera.` |
| 46 | 両手を見ている・体も顔も動かさない | `In a dimly lit room with constant, low-key lighting, a Japanese actor looks down at both of their hands, their body and face remaining perfectly still, all captured by a stationary camera.` |
| 58 | 片手で口を抑えながら軽く咳 | `In a dimly lit room with constant, low-key lighting, an actor lightly coughs while covering their mouth with one hand, all captured by a stationary camera.` |
| 59 | 喘息の吸入器を持っている | `In a dimly lit room with constant, low-key lighting, an actor holds an asthma inhaler, all captured by a stationary camera.` |
| 62 | 深呼吸して座っている・動かない | `In a dimly lit room with constant, low-key lighting, an actor takes a deep breath while seated, their posture and facial expression remaining perfectly still, all captured by a stationary camera.` |

#### 感情・ホラー表現系

| # | シーン（日本語） | 英語プロンプト |
|---|---|---|
| 19 | コンピューターシミュレーション・煙がゆっくり動く・赤い点は固定 | `On a computer simulation screen, smoke drifts extremely slowly, constantly remaining within the frame, while a red dot stays perfectly stationary, all captured by a stationary camera.` |
| 21 | 少しだけしかめっ面・スマホ持ったまま | `A Japanese actor's expression subtly forms into a slight grimace, while their head, body, and the hand holding a smartphone remain completely motionless, all captured by a stationary camera.` |
| 22 | 目を閉じたまま体を上下に振動させる | `With eyes closed and a completely fixed facial expression, a Japanese actor's body vibrates up and down, all captured by a stationary camera.` |
| 23 | 黒い肉を食べている | `A Japanese actor is eating black meat, captured by a stationary camera.` |
| 38 | 上半身を上下に小刻みに振動 | `In a medium shot, a Japanese actor's upper body vibrates with fine up-and-down tremors within a dimly lit room with constant, low-key lighting, all captured by a stationary camera.` |
| 39 | 上半身振動・目を閉じて顔を少し上に | `In a dimly lit room with constant, low-key lighting, a stationary camera captures a medium shot of a Japanese actor whose upper body vibrates with fine, rhythmic up-and-down tremors, while their eyes remain closed and their face is held in a slight upward tilt.` |
| 40 | カメラ目線・体も顔も動かさない | `In a dimly lit room with constant, low-key lighting, a Japanese actor looks directly at the camera, their body and face remaining perfectly still, all captured by a stationary camera.` |
| 41 | 上半身を上下に小刻みに規則的振動 | `In a dimly lit room with constant, low-key lighting, a stationary camera captures a medium shot of a Japanese actor whose upper body vibrates with fine, rhythmic up-and-down tremors.` |
| 42 | ライターの火をつける・炎は一定 | `In a dimly lit room with constant, low-key lighting, a Japanese actor lights a lighter, producing a small and steady flame, all captured by a stationary camera.` |
| 43 | 2人の役者が眠っている・起きない | `In a dimly lit room with constant, low-key lighting, two Japanese actors sleep, remaining completely still and undisturbed, all captured by a stationary camera.` |
| 44 | ソファで俯いている・動かない | `In a dimly lit room with constant, low-key lighting, a Japanese actor sits motionless on a sofa with their head bowed, all captured by a stationary camera.` |
| 45 | スタントマン・全身が燃えている・炎一定 | `In a dimly lit room with constant, low-key lighting, a Japanese stuntman sits on a sofa, their entire body engulfed in flames that burn with a steady, constant intensity, while their face remains obscured, all captured by a stationary camera.` |
| 47 | スタントマン・炎の勢いが増す | `In a dimly lit room with constant, low-key lighting, a bareheaded Japanese stuntman sits on a sofa, their entire body engulfed in flames that steadily grow in intensity, while their face remains obscured, all captured by a stationary camera.` |
| 48 | ソファに寝そべって笑っている・動かない | `In a dimly lit room with constant, low-key lighting, a Japanese actor lies on a sofa, looking directly at the camera and smiling, while their body remains perfectly still, all captured by a stationary camera.` |
| 49 | 上半身を大きく振動・目閉じ・腕動かさない | `In a dimly lit room with constant, low-key lighting, a stationary camera captures a medium shot of a Japanese actor whose upper body shakes in large, rapid, rhythmic up-and-down vibrations, while their arms and hands are held still, their eyes are closed, and their face is maintained in a slight upward tilt.` |
| 50 | 上半身振動・腕は絶対に上げない | `In a dimly lit room with constant, low-key lighting, a Japanese actor's upper body vibrates up and down; their posture is fixed with eyes closed, face tilted slightly up, and arms held low, all captured by a stationary camera.` |
| 51 | 顔が恐怖で引き攣る・体は動かない | `In a dimly lit room with constant, low-key lighting, a Japanese actor's face convulses in terror, while their body remains perfectly still, all captured by a stationary camera.` |
| 52 | カメラ目線で不気味に笑いかける | `In a dimly lit room with constant, low-key lighting, a Japanese actor looks directly at the camera and gives an extremely unsettling smile, while their body remains perfectly still, all captured by a stationary camera.` |
| 53 | 恐怖を感じた顔・体は動かない | `In a dimly lit room with constant, low-key lighting, a Japanese actor's face is frozen in an expression of terror, their body held perfectly still, all captured by a stationary camera.` |
| 54 | 黒い肉を食べる・肘はマットレスから動かない | `In a dimly lit room with constant, low-key lighting, a Japanese actor with a bare neck eats black meat while resting on a mattress, their body and elbows held still, all captured by a completely stationary camera.` |
| 55 | 両腕を少し上に広げて愉悦・目閉じ上向き | `In a dimly lit room with constant, low-key lighting, a Japanese actor with closed eyes and a blissful expression tilts their head slightly upwards while spreading their arms and hands slightly up and outwards, all captured by a completely stationary camera.` |
| 56 | カメラ目線で不気味な笑み・常に固定 | `In a dimly lit room with constant, low-key lighting, a Japanese actor gives an unsettling smile, their gaze locked on the camera and their body remaining perfectly still, all captured by a stationary camera.` |
| 57 | 2人の役者がソファでキスしている | `In a dimly lit room with constant, low-key lighting, two Japanese actors kiss while seated on a sofa, all captured by a stationary camera.` |
| 60 | 動かずに座っている・体も顔も | `In a dimly lit room with constant, low-key lighting, an actor sits, their body and face held perfectly motionless, all captured by a stationary camera.` |
| 61 | ものすごく目を大きく見開く | `In a dimly lit room with constant, low-key lighting, an actor opens their eyes extremely wide, all captured by a stationary camera.` |
| 63 | 顔は動かさず目を大きく見開く | `In a dimly lit room with constant, low-key lighting, an actor opens their eyes wide while their face remains perfectly still, all captured by a stationary camera.` |

#### 動き系（疾走・運動）

| # | シーン（日本語） | 英語プロンプト |
|---|---|---|
| 31 | 暗闇を走る・役者とカメラの距離固定 | `In a dimly lit room with constant, low-key lighting, an actor runs, the background a solid navy blue wall, as the camera tracks alongside them at a fixed distance.` |
| 32 | 暗闇を走る・顔を常にクローズアップ・画質悪い | `The camera maintains a tight close-up on the face of a running actor in a dimly lit room with constant, low-key lighting, the background a solid navy blue wall, all rendered in an extremely poor, lo-fi image quality.` |
| 33 | 吸入器を持っている・画質悪い | `In a dimly lit room with constant, low-key lighting, an actor holds an inhaler, captured by a stationary camera, all rendered in an extremely poor, lo-fi image quality.` |
| 34 | 恐怖に怯えた顔・背景ぼやけ・VHS画質 | `An actor's face contorts into an expression of extreme terror in a dimly lit room with constant, low-key lighting, set against a heavily blurred background, all rendered in the extremely poor and grainy quality of a VHS tape from a stationary camera.` |
| 35 | 吸入器を震えた手で持つ・手元アップ・VHS | `Rendered in the extremely poor and grainy quality of a VHS tape, a stationary camera captures a close-up of a bare hand holding an inhaler with a slight tremor, set in a dimly lit room with constant, low-key lighting against a heavily blurred background.` |
| 36 | 深呼吸している背中アップ・腕動かさない・VHS | `Rendered in the extremely poor and grainy quality of a VHS tape, a stationary camera captures a close-up of an actor's back as it rises and falls with a deep breath, their arms remaining still, set against a heavily blurred background in a dimly lit room with constant, low-key lighting.` |
| 37 | アネモネ・固定・暗め・輝度変化なし | `An anemone flower sits perfectly still in a dimly lit room with constant, low-key lighting, all captured by a stationary camera.` |

---

## 2. Pixverse V5 動画プロンプト

### プロンプトテンプレート

```
### Pixverse V5 Image-to-Video 高品質プロンプトテンプレート ###

# --- 基本設定 (Primary Settings) ---
【被写体・主題】Subject: （描写）
【アクション・動き】Action/Motion: （具体的な身体動作を記述）
【シーン・背景】Scene/Environment: （例：In a dimly lit room with low-key lighting）

# --- 映像スタイル (Cinematic Style) ---
【全体的なスタイル】Overall Style: （例：cinematic, realistic）
【画質・ディテール】Quality/Detail: （例：highest quality, 8K / または意図的劣化効果）
【雰囲気・ムード】Atmosphere/Mood: （例：very melancholic）
【ライティング】Lighting: （例：low-key lighting, the overall scene brightness is kept constant）

# --- カメラワーク (Camera Work) ---
【ショットの種類】Shot Type: （例：fixed camera shot）
【カメラの動き（パラメータ）】Camera Movement (Parameter):
  horizontal_left / horizontal_right / vertical_up / vertical_down /
  zoom_in / zoom_out / auto_camera / crane_up / quickly_zoom_in /
  quickly_zoom_out / smooth_zoom_in / camera_rotation / robo_arm /
  super_dolly_out / whip_pan / hitchcock / left_follow / right_follow /
  pan_left / pan_right / fix_bg

# --- 品質管理 (Quality Control) ---
【ネガティブプロンプト】Negative Prompt: （Pixverseは単一フィールドのため戦略的に組み込む）

# --- 技術的パラメータ (Technical Parameters) ---
【シード値】Seed: （スタイル再現・調整の場合のみ入力）
```

> **重要**: Pixverse V5はPositive/Negativeの分離フィールドが存在しない。すべてを1つのプロンプトにまとめる。

### カメラ固定シーン（喘息系）

#### バリアント1: 咳き込み・手で口を抑える
```
✅ Positive:
cinematic, realistic, highest quality, 8K, ultra high detail, intricate details, very melancholic mood, low-key lighting, the overall scene brightness is kept constant, fixed camera shot, a Japanese man in a black suit and white shirt with no tie, covering his mouth with his hand, coughing violently and leaning forward slightly, in a dimly lit room

❌ Negative:
low quality, deformed hands, bad composition, watermark
```

#### バリアント2: 咳き込み・片手を床に
```
✅ Positive:
cinematic, realistic, highest quality, 8K, ultra high detail, intricate details, very melancholic mood, low-key lighting, the overall scene brightness is kept constant, fixed camera shot, a Japanese man in a black suit and white shirt with no tie, coughing violently with one hand on the floor and leaning forward slightly, in a dimly lit room

❌ Negative:
low quality, deformed hands, bad composition, watermark
```

#### バリアント3: 咳き込み・両手を床に（最強ネクタイ禁止）
```
✅ Positive:
cinematic, realistic, highest quality, 8K, ultra high detail, intricate details, very melancholic mood, low-key lighting, the overall scene brightness is kept constant, fixed camera shot, a Japanese man in a black suit and white shirt with absolutely no tie, coughing violently with both hands on the floor and leaning forward, in a dimly lit room

❌ Negative:
low quality, deformed hands, bad composition, watermark, tie
```

#### 目を大きく見開く（恐怖）
```
✅ Positive:
cinematic, realistic, highest quality, 8K, ultra high detail, intricate details, very melancholic mood, low-key lighting, the overall scene brightness is kept constant, fixed camera shot, a Japanese male actor's eyes widen as if seeing something terrifying, in a dimly lit room

❌ Negative:
low quality, deformed hands, bad composition, watermark
```

#### 「Zn」ケースを引き出しから取り出す
```
✅ Positive:
cinematic, realistic, highest quality, 8K, ultra high detail, intricate details, very melancholic mood, the overall scene brightness is kept constant, fixed camera shot, an actor takes a cylindrical case with the letters 'Zn' from a drawer and puts the drawer back, in a room with low-key lighting

❌ Negative:
low quality, deformed hands, bad composition, watermark
```

### スノーリーカム系（疾走シーン）

#### バリアント1: スノーリーカム・顔中央固定
```
✅ Positive:
snorricam shot with the actor's face always in the center of the screen, cinematic, realistic, vhs screengrab, blurry vhs filter, vcr film grain effect, grainy quality, vcr tape static, bad lines, very melancholic mood, the overall scene brightness is kept constant, an actor is sprinting at full speed, in a room with low-key lighting, only the walls of the room are visible

❌ Negative:
low quality, deformed hands, bad composition, watermark
```

#### バリアント2: スノーリーカム・紺色の壁のみ
```
✅ Positive:
snorricam shot with the actor's face always in the center of the screen, cinematic, vhs screengrab, blurry vhs filter, vcr film grain effect, grainy quality, vcr tape static, bad lines, consistent quality, very melancholic mood, the overall scene brightness is kept constant, an actor is sprinting at full speed, in a room with low-key lighting, only the navy blue walls of the room are visible

❌ Negative:
low quality, deformed hands, bad composition, watermark, lighting, floor
```

#### バリアント3: スノーリーカム・距離固定・悪画質
```
✅ Positive:
snorricam shot where the distance between the actor and the camera does not change, cinematic, vhs screengrab, blurry vhs filter, vcr film grain effect, grainy quality, vcr tape static, bad lines, consistently bad and very blurry quality, very melancholic mood, the overall scene brightness is kept constant, an actor is sprinting at full speed, in a room with low-key lighting, only the navy blue walls of the room are visible

❌ Negative:
low quality, deformed hands, bad composition, watermark, lighting, floor
```

---

## 3. プロンプト設計の重要ルール

### Runway Gen-4
- 「動き（モーション）」の記述が中心
- 否定表現を避け、肯定形で指示（「動かない」→「remains completely still」）
- 「In a dimly lit room with constant, low-key lighting」を暗いシーン全般に使用
- VHS効果には画質指定を明示：`lo-fi image quality`、`VHS-grade extremely poor`
- `the overall scene brightness is kept constant` で自動輝度補正を抑制

### Pixverse V5
- 単一プロンプトフィールド（Positive/Negative分離なし）
- 最重要制約をプロンプト冒頭に置く
- 「結果・現象」を記述する（「走る」→「背景が流れる・役者は画面中央を保つ」）
- ネクタイなしの強調：`absolutely no tie` + ネガティブに `tie` 追加
- 明るさ制御には感情的な言葉も有効：`oppressively dark`、`suffocating`

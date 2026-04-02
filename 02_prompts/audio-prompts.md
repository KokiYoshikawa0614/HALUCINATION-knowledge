# Audio Prompts — HALUCINATION

音声・音楽・効果音の生成プロンプトを整理する。

---

## 1. Google AI Studio（Gemini TTS）— 台詞生成

### システムプロンプト（Geminiへの指示）

台詞生成には以下のメタプロンプトを毎回使用。`Style instructions` を英語で生成させる。

```
## 指示

あなたは、世界トップレベルの「AIボイスディレクター兼異文化翻訳家」です。
日本語で与えられた映画の台詞に関する「演出指示」と「台詞テキスト」を分析し、
Googleの先進的なテキスト音声合成モデル（Gemini APIベース）が最高のパフォーマンスを発揮できるよう、
最適な形式に変換することです。

## ルール
1. ユーザーは「演出指示:（日本語）」「台詞:（日本語）」の形式で入力する
2. 演出指示を深く分析し、声の物理的特性・感情トーン・キャラクター個性・非言語発声を特定する
3. 単純翻訳ではなく「創造的増幅」：豊かで多面的な英語の記述に変換する
   例：「厳しく」→「In a stern, unyielding, and authoritative tone. The voice should be firm and resolute, with a harsh and critical edge.」
4. 出力形式は以下を厳守（前置き・後書き不要）：
   Style instructions: [英語の演出指示]
   Text: [日本語の台詞をそのまま転記]
5. Style instructionsは英語、Textは日本語

## 例
演出指示: 恐怖に震えながら、息を殺して囁くように
台詞: …誰か、そこにいるのか…？

→ Style instructions: In a voice trembling with fear, delivered as a hushed, breathless whisper. The tone should be anxious and paranoid, conveying a deep sense of dread.
   Text: …誰か、そこにいるのか…？
```

---

### 実際に生成したStyle instructions一覧

#### キャラクター別

**結衣（10歳の少女）**

| 演出指示（日本語） | Style instructions（英語） | 台詞 |
|---|---|---|
| 子供が元気よくかつ落ち着いて話す | In a youthful and clear child's voice. The tone is bright and energetic, yet delivered with a calm and composed steadiness. The speech should be upbeat and cheerful, but not rushed, conveying a happy and confident feeling. | おじさん、いつ会える？また、サッカーしよう。 |

**女性アナウンサー（ニュース）**

| 演出指示（日本語） | Style instructions（英語） | 台詞 |
|---|---|---|
| 女性アナウンサーがはきはきと深刻なニュースを淡々と読み上げる | In a professional female announcer's voice, with clear and crisp articulation. The tone should be serious and formal, delivering the news in a calm, detached, and matter-of-fact manner without any emotional inflection. | 速報です。きょう午前、千葉市・幕張湾岸コンベンションセンターで火災と発砲がありました。 |

**コールセンター男性**

| 演出指示（日本語） | Style instructions（英語） | 台詞 |
|---|---|---|
| コールセンターの男性、はきはきと淡々と話す | In a professional male voice with clear and crisp articulation. The tone should be calm and matter-of-fact, delivered without any emotional inflection. | はい。カスタマーサポートセンターです。 |

**電話の自動音声（バリエーション）**

| 演出指示（日本語） | Style instructions（英語） | 台詞 |
|---|---|---|
| 標準的な女性の声で携帯に標準装備されている声で淡々と話す | In a standard female voice with a neutral, slightly synthetic quality, similar to a default automated phone system. The delivery should be flat, monotonous, and completely emotionless, speaking in a matter-of-fact tone. | おかけになった電話番号は現在使われておりません。 |
| 若い女性が非常に恥ずかしそうに囁くように話す | In a young female voice, delivered as a very soft and timid whisper. The tone should be extremely shy and hesitant, conveying a sense of bashfulness or embarrassment. | おかけになった電話番号は現在使われておりません。 |
| 若い女性の囁き | In a young female voice, delivered as a soft, light whisper. | おかけになった電話番号は現在使われておりません。 |
| ASMRのような若い女性の囁き | In a young female voice, delivered as a soft, intimate, and breathy whisper. The style should be very close to the microphone, with a gentle and soothing quality, similar to ASMR. | おかけになった電話番号は現在使われておりません。 |
| ASMRのような若い女性の囁き・物凄く恥ずかしそう | In a young female voice, delivered as a soft, intimate, and breathy whisper, similar to ASMR. The tone should be extremely shy and hesitant, conveying a deep sense of bashfulness and embarrassment. | おかけになった電話番号は現在使われておりません。 |

---

### Google AI Studio パラメータ設定

| パラメータ | 推奨値 | 備考 |
|---|---|---|
| **Temperature** | **0.1〜0.3** | 0.0は一貫性が最高だが処理が著しく遅い。一貫性と速度のバランスには0.1〜0.3が実用的 |
| Temperature: 0.0 | NG（実用不可） | 声の一貫性は最大だが処理に異常な時間がかかる |
| Temperature: 1.0以上 | NG（一貫性崩壊） | 毎回異なる声質・トーンになる |
| **モデル** | `gemini-2.5-pro-preview-tts` | 抑揚が少なくナレーション向き（本作で使用） |
| 代替モデル | `gemini-2.5-flash-preview-tts` | 軽量・高速。感情表現がやや弱い |
| **利用制限** | 無料枠内（1分あたりリクエスト数制限） | 1日あたりの回数制限より1分あたりのRPM制限が先に効く |

> **音声一貫性について**: Temperatureを0.0にしても完全同一の出力は保証されない。同一シーンの複数テイクは同じセッション内で連続生成することで一貫性が高まる。

---

## 2. Hailuo Audio — 台詞・感情表現

主人公・男性キャラクターの台詞を中心に使用。声の一貫性と日本語の自然な発話品質が高く、感情シーンの主力ツール。

### ツール使い分け

| シーン | ツール |
|---|---|
| 感情が強い台詞（悲しみ・怒り・恐怖）・男性キャラクター全般 | Hailuo Audio |
| ナレーション・淡々とした読み上げ・女性アナウンサー等 | Google AI Studio Gemini TTS |

---

### キャラクター別ボイスプリセット設定

| キャラクター | ボイスプリセット | pitch | volume | Premiere Pro 編集音量 |
|---|---|---|---|---|
| 主人公（八神薫） | Dominant Man | その都度調整 | その都度調整 | — |
| 佐藤 | Serious Commander | — | — | -6.0 dB |
| 鈴木 | Loyal Knight | -1 | 0.78 | -2.0 dB |
| 高橋 | Innocent Boy | -1 | — | -2.0 dB |
| 田中 | Gentle Butler | — | 0.5 | -4.5 dB |
| 結衣の母 | Odayaka na Aoi | — | — | — |
| 朝日結衣（10歳） | Odayaka na Aoi | +2 | — | — |

> **補足**: 結衣と母は同じ女性ボイス「Odayaka na Aoi」を使用し、pitch +2（結衣）vs デフォルト（母）で声質を区別する。  
> 主人公は台詞のシーンごとに音量・ピッチを微調整しており固定値なし。

---

### Emotion 機能の設定方針

| 設定 | 使用条件 |
|---|---|
| **未設定（デフォルト）** | ほぼ全シーン。抑制演出・感情を出しすぎない演技方針に合致 |
| **怒り（Anger）** | 口喧嘩シーンのみ使用 |

> **方針**: 映画全体のトーンが「感情を押し殺した男性の孤独」であるため、Emotion機能は原則オフ。Hailuo AudioのデフォルトTTSでも自然な抑制感が出るため、Emotionによる過剰な感情付与は逆効果になる場面が多い。

---

### テキスト入力の工夫

Hailuo Audioは日本語テキストをそのまま入力するが、以下の工夫でイントネーションや発音を改善できる。

| 工夫 | 例 | 効果 |
|---|---|---|
| **英単語のカタカナ化** | `AI` → `エーアイ` | 英単語をそのまま入力すると英語読みになる |
| **漢字→平仮名変換** | `合成` → `ごうせい` | 意図した読みと異なる場合に有効 |
| **語尾の記号調整** | `。`（終止）/ `？`（疑問）/ `ー`（伸び） | イントネーションの微調整に使用 |

---

### Premiere Pro との連携

- キャラクター別に音量バランスを統一する（上記テーブルの「Premiere Pro 編集音量」列を参照）
- Hailuo Audioの出力音量はプリセット・pitch・volumeの組み合わせで毎回微妙に異なるため、Premiere Pro側での音量調整で最終バランスを取る
- 複数テイクを生成した場合、最も自然な1テイクをPremiere Proで選択してから音量調整する

---

## 3. 音楽生成

### ツール別特性と使い分け

| ツール | 得意なシーン | 苦手なシーン | 費用 |
|---|---|---|---|
| **SUNO** | プロンプト理解力が高い。指示通りの曲を生成しやすい | 洗練されすぎており、暗い・不気味なインスト曲には不向き | 1,500円/月 |
| **Udio** | 不気味・実験的・つかみどころのないインスト曲。映画音楽向き | 当時は約40秒と約2分の2択で中間の長さは延長機能頼み | 1,528円/月 |
| **ElevenLabs** | 曲の長さを厳密に指定可能。プロンプト理解力も高い | 同価格帯のSuno/Udioより生成可能曲数が少ない（クレジット消費が激しい） | 842〜1,856円 |

### 本作で使用した音楽ファイル
（`raw-data/本番映画/`以下のmp3ファイルより）

| ファイル名 | 使用シーン |
|---|---|
| `Opening.mp3` | オープニング |
| `Fact.mp3` | 11日目前後のシーン |
| `Vertigo.mp3` | ホラーショット（一回・二回） |

---

## 4. 効果音生成（ElevenLabs）

ElevenLabs専用プロンプト生成ツール（GPTs）を活用してプロンプトを作成。

### 本作で使用した効果音ファイル
（`raw-data/本番映画/`以下のwavファイルより）

| ファイル名 | 内容 |
|---|---|
| `鏡を割る音重い.mp3` | 洗面台の鏡を割る効果音（重いバージョン） |
| `鏡を割る音軽い.mp3` | 洗面台の鏡を割る効果音（軽いバージョン） |
| `おかけになった.wav` | 電話の使用不能メッセージ（10日目前後） |
| `ただいま電話.wav` | 電話中のメッセージ（結衣と佐藤の死亡シーン） |
| `カスタマー.wav` | コールセンター応答音声 |
| `ご不便.wav` | コールセンター応答音声（続き） |
| `申し訳ない.wav` | コールセンター応答音声（続き） |
| `Sounds_of_doors_opening_and_closing__creating_a_rhythmic_echo..mp3` | ラストシーン：ドアが開閉するリズミカルなエコー |

---

## 5. 音声編集（Premiere Pro / Clipchamp）

### 音声を10秒ジャストにカットする方法（Premiere Pro）

1. タイムラインに音声クリップを配置
2. 選択ツール（V）でクリップ右端を左にドラッグ
3. タイムコードが `00:00:10:00` になる場所で離す
4. 書き出し：ファイル → 書き出し → メディア → MP3 320kbps

**フェードアウト追加：**
エフェクト → オーディオトランジション → クロスフェード → 「コンスタントパワー」をクリップ右端にドロップ

> **注意**: Clipchampで書き出した音声はM4A形式になる。Gen-4（Runway）はMP3またはWAVのみ対応のため、Clipchampで書き出す場合は事前にMP3変換が必要。

### Clipchamp での10秒カット
Windows標準ツール・無料。音声ファイルを10秒ジャストに加工するのに使用（Premiere Proより手軽）。

---

## 6. Suno 4.5 BGM生成プロンプト一覧

ChatGPT GPTs「Suno 4.5 Melody Music Generator」で生成。歌詞なしのインスト曲は **メタタグ形式**（`[Intro, ...]` 等）を歌詞フィールドに入力することで構成を指定する。

### 基本フォーマット

```
Title: （曲タイトル）
Style: （ジャンル、楽器、雰囲気、尺 ~X minutes）

Lyrics:
[Intro, （楽器・テクスチャ）]
[Verse, （楽器・雰囲気）]
[Chorus, （楽器・展開）]
[Bridge, （変化点）]
[Outro, （終わり方）]
```

> **ポイント**: 歌詞ではなくメタタグのみで構成すると、AIが「インスト曲」と認識して発話なしで生成する。Duration は Style フィールドに `~X minutes` で指定する。

### シーン別BGMプロンプト一覧

#### オープニング
- **Title**: Spirals of Silence
- **Style**: Minimalist cinematic instrumental, soft electronic textures, subtle orchestral layering, looping motifs, ~1 minute
- **Lyrics**: `[Intro, Low drone, Sparse piano motif] [Looping synth pulse, Soft percussive taps] [Build, Uneasy strings, Hollow echoes] [Cycle repeats, Muted bass, Shifting dissonance] [Outro, Fade into unresolved silence]`

#### 友人の死の知らせ・父の死（短いシーン転換）
- **Title**: Quiet Concern
- **Style**: Cinematic instrumental, subdued piano and light strings, minimal textures, reflective tone, 30 seconds
- **Lyrics**: `[Intro, Sparse piano chords] [Subtle string pad, Gentle pulse] [Held tones, Space for dialogue] [Outro, Soft fade, unresolved atmosphere]`

#### 主人公の疲弊・睡眠不足
- **Title**: Fractured Hours
- **Style**: Cinematic instrumental, ambient textures, distorted clock-like pulses, dark undertones, ~1 minute
- **Lyrics**: `[Intro, Low drone, Distant ticking motif] [Uneasy synth swell, Faint dissonant piano] [Looping pulse, Time-warped echoes] [Build, Hollow strings, Subtle distortion] [Outro, Fading clock motif, Unresolved chord]`

#### 主人公の不安定化（代替バージョン）
- **Title**: Omen of Sleepless Hours
- **Style**: Cinematic instrumental, ambient drones, warped clock-like pulses, subtle dissonance, uneasy textures, ~1 minute
- **Lyrics**: `[Intro, Low drone, Distant ticking echo] [Looping synth pulse, Hollow piano notes] [Build, Uneasy strings, Blurred textures] [Cycle repeats, Distorted rhythm, Tension rising quietly] [Outro, Fading echoes, Unresolved silence]`

#### 犯罪捜査・知的分析
- **Title**: Anatomy of a Crime
- **Style**: Cinematic instrumental, soft piano ostinato, light strings, subtle pulses, analytical and curious tone, ~1.5 minutes
- **Lyrics**: `[Intro, Soft piano motif, Sparse atmosphere] [Light strings enter, Gentle pulse] [Subtle variations, Clockwork-like rhythm, Quiet tension] [Cycle repeats, Expanding textures, Analytical mood] [Outro, Piano returns to simplicity, Fade into silence]`

#### コンピュータ解析・突破口
- **Title**: Blueprints of Danger
- **Style**: Cinematic instrumental, soft piano and electronic textures, subtle pulses, quiet but unsettling atmosphere, ~1 minute
- **Lyrics**: `[Intro, Sparse piano motif, Mechanical hum] [Light electronic pulse, Analytical tone] [Subtle build, Hollow synth echoes, Quiet tension] [Shift, Uneasy strings layered, Dark undertones emerge] [Outro, Fading pulse, Ominous unresolved chord]`

#### 警察記録発覚・シミュレーション
- **Title**: Simulated Truth
- **Style**: Cinematic instrumental, soft piano and electronic textures, subtle strings, quiet analytical mood with ominous undertones, ~1:50
- **Lyrics**: `[Intro, Sparse piano motif, Gentle electronic pulse] [Build, Layered textures, Computer-like rhythms, Analytical tension] [Subtle strings enter, Hollow echoes, Intellectual focus] [Shift, Uneasy synth undertone, Hint of danger creeping in] [Cycle repeats, Pulse intensifies slightly, Ominous foreshadowing] [Outro, Piano fades into silence, Lingering unease]`

#### 鈴木との口論・非人間化テーマ
- **Title**: Voices in the Machine
- **Style**: Cinematic instrumental, ambient dissonance, low drones, sparse piano and strings, unsettling yet restrained, 2:10
- **Lyrics**: `[Intro, Low drone, Sparse piano strikes, Hollow atmosphere] [Subtle pulsing motif, Faint metallic echoes] [Build, Uneasy strings, Dissonant layers, Tension rising quietly] [Middle section, Mechanical rhythms, Ominous undertones, Space for dialogue] [Shift, Hollow synth swells, Distorted echoes, Mysterious unease] [Outro, Drone fades into silence, Unresolved chord lingering]`

#### 悪夢・抑鬱シーン（美しく中毒的な暗さ）
- **Title**: Echoes of a Beautiful Nightmare（採用）/ Sweet Poison of Silence（代替）
- **Style**: Dark Ambient, Minimalist, High-register piano + sparse low drone, ~2 minutes
- **Lyrics**: `[Intro, Dissonant piano, Low drones] [Verse, Distorted strings, Pulsing sub-bass] [Chorus, Swelling synths, Metallic percussion] [Bridge, Warped guitar textures, Reverse effects] [Break, Heavy reverb, Rising tension] [Outro, Fading echoes, Hollow bells] [End, Silence]`
- **設計コンセプト**: 高音域の繊細なメロディと深いベースの空白そのものが孤独と神経症を表現する

#### 宮沢賢治「銀河鉄道の夜」ナレーション伴奏
- **Title**: Galactic Reverie（採用）/ Night on the Galactic Railroad（代替）
- **Style**: Ambient & Minimal Music, Strings and Cello Solo, Fantastical Soundscape, ~6 minutes
- **Lyrics**: `[Intro, Ambient textures, Soft strings] [Minimal piano motifs, Repetitive patterns] [Cello Solo, Melancholy] [Layered strings, Sustained harmonies] [Ethereal pads, Celestial atmosphere] [Minimal percussion, Subtle pulse like train rhythm] [Strings swell, Emotional crescendo] [Ambient breakdown, Quiet space] [Return of cello solo, Bittersweet theme] [Outro, Dissolving into silence, Cosmic resonance]`
- **楽器構成**: Ambient drone + soft organ + cello（旋律）+ celesta（アクセント）+ minimal percussion
- **設計原則**: メロディが語りを圧迫しないよう「環境音楽」+「ミニマル音楽」で構成

#### 友人・結衣の死（悲嘆）
- **Title**: Echoes of a Fading Star（採用）/ Silent Farewell（代替）
- **Style**: Ambient Instrumental, Minimal Piano & Strings, Reflective Atmosphere, 1 minute
- **Lyrics**: `[Intro, Sparse piano notes, Slow tempo] [Soft strings, Sustained harmonies] [Cello Solo, Mourning tone] [Minimal piano motif, Repetitive, fading] [Outro, Gentle resonance, Dissolving into silence]`

#### AIシステム崩壊・主人公の精神的崩壊
- **Title**: System Collapse
- **Style**: Experimental Electronic, Harsh Noise, Dissonant Soundscape
- **Lyrics**: `[Intro, Glitching static, Mechanical hum] [Build, Distorted synth layers, Dissonant chords] [Break, Harsh white noise, Metallic screeches] [Climax, Overloaded bass, Broken circuit stutters] [Outro, Fading distortion, Low sub-bass rumble] [End, Silence]`

#### 美しいピアノ独奏（悪夢の中の静寂）
- **Title**: Whispers in the Dark
- **Style**: Solo Grand Piano, Haunting, Melancholic, 120 seconds
- **Lyrics**: `[Intro, High register piano motif, Sparse bass notes] [Verse, Slow haunting melody, Upper register emphasis] [Chorus, Dissonant harmonies, Resonant sustain] [Bridge, Gradual tension, Sparse low notes] [Break, Silence between phrases, Lingering reverb] [Outro, Single low bass note echoing into silence] [End, Silence]`

### ツール運用メモ

- 同じプロンプトを **Suno / Udio / ElevenLabs** すべてで試し、最も合うツールで採用
- Udioは不気味・実験的なインスト曲に強い（`System Collapse` 等）
- Sunoはプロンプト理解力が高く幅広いシーンに対応
- ElevenLabsは長さを秒単位で厳密指定したい場合に有効

---

## 7. ElevenLabs 効果音プロンプト一覧

ChatGPT GPTs「Elevenlabs Sound Design Expert」で生成したプロンプト。

### 基本プロンプト構造

```
High-quality [主音・主アクション], [foley effect], [テクスチャ/副要素], [環境的文脈].
```

- **Duration**: 短い（3秒）〜ループ用（15秒+）
- **Prompt Influence**: High（プロンプトへの忠実度を上げる）

### 効果音別プロンプト

#### ライターの火
- **Prompt**: `"High-quality sound of a lighter igniting and flame flickering, foley effect, subtle crackling."`
- **Duration**: 3秒

#### 強烈な燃焼音（一定ボリューム・ループ用）
- **Prompt**: `"Loud, intense burning fire sound, constant in volume, high-quality, foley effect with no fluctuations."`
- **Duration**: 10〜15秒

#### 爆発・発砲・瓦礫
- **Prompt**: `"Deep booming blast with sharp debris impact at a fire scene, fire crackle, falling rubble, echoing shockwave."`
- **Duration**: 6〜10秒

#### 火の急速な広がり（シーン臨場感用）
- **Prompt**: `"Loud, aggressive sound of fire rapidly spreading at a fire scene, intense roaring flames, crackling wood and burning debris, chaotic and immersive fire soundscape."`
- **Duration**: 12〜15秒

### ElevenLabs 音響設計の原則

| 原則 | 内容 |
|---|---|
| 主音 + 副音の構成 | 「爆発音」+ 「瓦礫の落下」+ 「残響」で奥行きを出す |
| 空間的文脈を加える | `at a fire scene` 等で感情的フレーミングを強化 |
| 複数要素の順序記述 | 「点火 → 燃焼 → 燃え広がり」の時系列で記述 |
| DAW後処理想定 | 生成音をPremiere Pro等で重ねてシーン合成する |

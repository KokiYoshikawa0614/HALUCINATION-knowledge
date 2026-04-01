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

主に感情豊かなシーンに使用。Emotion機能で控えめな感情表現が可能。
日本語の自然な発話品質が高い。

プロンプトの詳細はチャット履歴に記録されていないが、以下の使い分けが確立されている：

| シーン | ツール |
|---|---|
| 感情が強い台詞（悲しみ・怒り・恐怖） | Hailuo Audio（Emotion機能使用） |
| ナレーション・淡々とした読み上げ | Google AI Studio Gemini TTS |

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

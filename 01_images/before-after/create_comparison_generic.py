"""
Before/After比較画像の汎用生成スクリプト
Usage: python create_comparison_generic.py <pair_number>

pair_number に応じて画像ファイルとラベルを自動選択する。
"""
from PIL import Image, ImageDraw, ImageFont
import os
import sys

DIR = os.path.dirname(os.path.abspath(__file__))

# --- ペアごとの設定 ---
PAIRS = {
    "1": {
        "before": "pair1_before_gemini_dataset_wrong_person.png",
        "after": "pair1_after_gemini_dataset_correct_person.png",
        "before_label": "Before",
        "after_label": "After",
        "before_sub": "照明・背景を変更",
        "after_sub": "標準条件",
        "output": "pair1_comparison_x.png",
    },
    "2": {
        "before": "pair2_before_lora_black_paint_partial_fail.png",
        "after": "pair2_after_chatgpt_black_face.png",
        "before_label": "LoRA",
        "after_label": "ChatGPT",
        "before_sub": "顔を黒く覆えない",
        "after_sub": "ツール切替で解決",
        "output": "pair2_comparison_x.png",
        "after_crop_align_x": 0.25,
        "after_crop_align_y": 0.65,
    },
    "3": {
        "before": "pair3_before_lora_correct_face.png",
        "after": "pair3_after_lora_breakdown_wrong_person.png",
        "before_label": "Before",
        "after_label": "After",
        "before_sub": "lora_scale = 0.85",
        "after_sub": "lora_scale < 0.75",
        "output": "pair3_comparison_x.png",
    },
    "4": {
        "before": "pair4_before_gemini_phone_wrong_person.png",
        "after": "pair4_after_gemini_phone_correct_face.png",
        "before_label": "1回目",
        "after_label": "2回目",
        "before_sub": "同じプロンプト",
        "after_sub": "同じプロンプト",
        "output": "pair4_comparison_x.png",
    },
    "5": {
        "before": "pair5_before_chatgpt_correct_face.png",
        "after": "pair5_after_chatgpt_face_drift.png",
        "before_label": "Before",
        "after_label": "After",
        "before_sub": "黒スーツ・白背景",
        "after_sub": "黒Tシャツ・グレー背景",
        "output": "pair5_comparison_x.png",
    },
    "6": {
        "before": "pair6_before_flux1kontext_model2_correct.png",
        "after": "pair6_after_flux1kontext_child_breakdown.png",
        "before_label": "Before",
        "after_label": "After",
        "before_sub": "通常生成",
        "after_sub": "複合指示で崩壊",
        "output": "pair6_comparison_x.png",
    },
}

def create_comparison(pair_num):
    config = PAIRS[pair_num]

    before = Image.open(os.path.join(DIR, config["before"]))
    after = Image.open(os.path.join(DIR, config["after"]))

    TARGET_W = 1920
    TARGET_H = 1080
    HALF_W = TARGET_W // 2
    GAP = 6
    BG_COLOR = (18, 22, 30)

    canvas = Image.new("RGB", (TARGET_W, TARGET_H), BG_COLOR)

    def fit_and_paste(img, x_offset, available_w, available_h, crop_align_x=0.5, crop_align_y=0.5):
        img_ratio = img.width / img.height
        area_ratio = available_w / available_h
        if img_ratio > area_ratio:
            new_h = available_h
            new_w = int(new_h * img_ratio)
        else:
            new_w = available_w
            new_h = int(new_w / img_ratio)
        img_resized = img.resize((new_w, new_h), Image.LANCZOS)
        left = int((new_w - available_w) * crop_align_x)
        top = int((new_h - available_h) * crop_align_y)
        img_cropped = img_resized.crop((left, top, left + available_w, top + available_h))
        canvas.paste(img_cropped, (x_offset, 0))

    fit_and_paste(before, 0, HALF_W - GAP // 2, TARGET_H)
    after_crop_x = config.get("after_crop_align_x", 0.5)
    after_crop_y = config.get("after_crop_align_y", 0.5)
    fit_and_paste(after, HALF_W + GAP // 2, HALF_W - GAP // 2, TARGET_H, crop_align_x=after_crop_x, crop_align_y=after_crop_y)

    # Divider
    draw = ImageDraw.Draw(canvas)
    draw.rectangle([HALF_W - GAP // 2, 0, HALF_W + GAP // 2, TARGET_H], fill=BG_COLOR)

    # Fonts
    font = None
    font_small = None
    for font_path in [
        "C:/Windows/Fonts/meiryo.ttc",
        "C:/Windows/Fonts/msgothic.ttc",
        "C:/Windows/Fonts/YuGothM.ttc",
    ]:
        try:
            font = ImageFont.truetype(font_path, 72)
            font_small = ImageFont.truetype(font_path, 44)
            break
        except:
            continue
    if font is None:
        font = ImageFont.load_default()
        font_small = font

    # Semi-transparent label backgrounds
    overlay = Image.new("RGBA", (TARGET_W, TARGET_H), (0, 0, 0, 0))
    overlay_draw = ImageDraw.Draw(overlay)
    overlay_draw.rectangle([20, 20, 520, 180], fill=(18, 22, 30, 200))
    overlay_draw.rectangle([HALF_W + GAP // 2 + 20, 20, HALF_W + GAP // 2 + 520, 180], fill=(18, 22, 30, 200))

    canvas_rgba = canvas.convert("RGBA")
    canvas_rgba = Image.alpha_composite(canvas_rgba, overlay)
    draw2 = ImageDraw.Draw(canvas_rgba)

    # Labels
    draw2.text((40, 30), config["before_label"], fill=(120, 200, 120), font=font)
    draw2.text((40, 110), config["before_sub"], fill=(200, 200, 200), font=font_small)

    after_x = HALF_W + GAP // 2 + 40
    draw2.text((after_x, 30), config["after_label"], fill=(255, 100, 100), font=font)
    draw2.text((after_x, 110), config["after_sub"], fill=(200, 200, 200), font=font_small)

    # Arrow
    arrow_y = TARGET_H // 2
    arrow_left = HALF_W - 50
    arrow_right = HALF_W + 50
    shaft_thickness = 8
    head_size = 28
    draw2.rectangle([arrow_left, arrow_y - shaft_thickness, arrow_right - head_size, arrow_y + shaft_thickness], fill=(255, 255, 255))
    draw2.polygon([
        (arrow_right, arrow_y),
        (arrow_right - head_size, arrow_y - head_size),
        (arrow_right - head_size, arrow_y + head_size),
    ], fill=(255, 255, 255))

    # Save
    output_path = os.path.join(DIR, config["output"])
    canvas_rgba.convert("RGB").save(output_path, quality=95)
    print(f"Saved: {output_path}")
    print(f"Size: {canvas_rgba.size}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python create_comparison_generic.py <pair_number>")
        print(f"Available pairs: {', '.join(PAIRS.keys())}")
        sys.exit(1)
    pair_num = sys.argv[1]
    if pair_num == "all":
        for p in PAIRS:
            create_comparison(p)
    elif pair_num in PAIRS:
        create_comparison(pair_num)
    else:
        print(f"Unknown pair: {pair_num}. Available: {', '.join(PAIRS.keys())}")
        sys.exit(1)

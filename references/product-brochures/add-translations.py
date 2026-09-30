# -*- coding: utf-8 -*-
import json
from pathlib import Path

path = Path("website/src/i18n/zh-HK.json")
data = json.loads(path.read_text(encoding="utf-8"))
before = len(data)

new = {
  # Products listing page
  "PRODUCTS": "產品",
  "Hardware you can deploy.": "可部署的硬件。",
  "Specified for your site.": "按您的工地規格配置。",
  "Selected Embuilded hardware with confirmed specifications, configurations and engineering support from supply to commissioning.": "精選 Embuilded 硬件，規格與配置經確認，並提供從供應到調試的工程支援。",
  "View product": "查看產品",
  "One platform, configured per site.": "同一平台，按工地配置。",
  "Each product connects into the wider Embuilded delivery model: field engineering for deployment, TRACI for telemetry, events and evidence, and Open4S integration with the systems your operation already uses.": "每款產品都接入 Embuilded 更廣泛的交付模式：以現場工程支持部署、以 TRACI 處理遙測、事件與證據，並通過 Open4S 與您現有的系統整合。",
  "See the related solution": "查看相關方案",
  "Need hardware specified for your site?": "需要為您的工地配置硬件？",
  "Products": "產品",
  # Product detail page
  "Built for continuous": "為持續的",
  "field monitoring.": "現場監測而設。",
  "Configurations, sensor combinations and integration scope are confirmed against your site requirements during project scoping.": "配置、感應器組合與整合範圍會在項目規劃階段按您的工地需求確認。",
  "Key features.": "主要特點。",
  "Specifications.": "規格。",
  "Specifications are based on the product datasheet for model %MODEL%. Certified ratings and suitability are confirmed per deployment.": "規格基於型號 %MODEL% 的產品數據表。認證等級與適用性按每次部署確認。",
  "Where it works.": "適用場景。",
  "Typical deployment contexts for this product family.": "此產品系列的典型部署環境。",
  "Dimensions & interfaces.": "尺寸與接口。",
  "dimension and interface diagram": "尺寸及接口圖",
  "Let’s scope your multi-gas detector requirements.": "讓我們規劃您的多氣體檢測儀需求。",
  # Product data
  "Multi-Gas Detector": "多氣體檢測儀",
  "GAS DETECTION": "氣體檢測",
  "A mobile, continuously monitoring multi-gas detector for combustible gas, oxygen, carbon monoxide and hydrogen sulfide, with on-site alarms and remote data transmission.": "移動式持續監測多氣體檢測儀，可檢測可燃氣體、氧氣、一氧化碳及硫化氫，具備現場警報與遠程數據傳輸功能。",
  "The HNAG1000-4-STX brings continuous multi-gas monitoring into field operations. It measures gas concentrations around the clock, displays readings on a 2.5-inch colour screen, raises audible and visual alarms when limits are exceeded, and transmits data remotely over cellular or low-power wireless networks. Sensor combinations can be configured for a single gas or up to four gases, using established electrochemical and catalytic-combustion sensing principles. The die-cast aluminium enclosure with fluorocarbon surface treatment is built for hazardous areas and demanding site conditions, and the rechargeable battery supports extended mobile operation without mains power.": "HNAG1000-4-STX 將持續多氣體監測帶入現場作業。它全天候測量氣體濃度，在 2.5 吋彩色屏幕上顯示讀數，超標時發出聲光警報，並通過蜂窩網絡或低功耗無線網絡遠程傳輸數據。感應器組合可按單一氣體或最多四種氣體配置，採用成熟的電化學及催化燃燒感應原理。壓鑄鋁外殼配合氟碳表面處理，適用於危險區域及嚴苛的工地環境，充電電池可在無市電供應的情況下支持長時間移動作業。",
  "Intrinsically safe circuit design with explosion-proof construction; lightning and static protection and reverse-polarity protection support reliable field operation.": "本安電路設計，防爆結構；防雷與防靜電保護及反接保護，確保現場可靠運作。",
  "Infrared remote control allows alarm-point adjustment, calibration and menu operation without opening the enclosure.": "紅外遙控器可在不開蓋的情況下調整報警點、進行校準及菜單操作。",
  "Selectable interface language and freely switchable gas concentration units, including ppm, mg/m³, %Vol and %LEL.": "可選界面語言，氣體濃度單位自由切換，包括 ppm、mg/m³、%Vol 及 %LEL。",
  "2.5-inch colour display presents one to four gas concentrations simultaneously with icon-driven menus.": "2.5 吋彩色屏幕可同時顯示一至四種氣體濃度，並以圖標驅動菜單。",
  "Automatic zero tracking with temperature compensation and multi-stage calibration keeps readings stable across site conditions.": "自動零點追蹤，配合溫度補償及多級校準，在不同工地條件下保持讀數穩定。",
  "Data recovery with automatic recognition and blocking of calibration misuse prevents configuration errors.": "數據恢復功能，並自動識別及阻止校準誤操作，避免配置錯誤。",
  "Modular gas combinations from single-gas to four-gas configurations around the same platform.": "模塊化氣體組合，同一平台可配置單一氣體至四合一氣體。",
  "Combustible gas": "可燃氣體",
  "Oxygen (O₂)": "氧氣 (O₂)",
  "Carbon monoxide (CO)": "一氧化碳 (CO)",
  "Hydrogen sulfide (H₂S)": "硫化氫 (H₂S)",
  "Gases": "檢測氣體",
  "Detection principle": "檢測原理",
  "Measuring ranges": "測量範圍",
  "Resolution": "分辨率",
  "Accuracy": "精度",
  "Response time": "響應時間",
  "Operating temperature": "工作溫度",
  "Operating humidity": "工作濕度",
  "Storage temperature": "儲存溫度",
  "Warm-up time": "預熱時間",
  "Operating current": "工作電流",
  "Operating pressure": "工作氣壓",
  "Supply voltage": "供電電壓",
  "Battery": "電池",
  "Output & connectivity": "輸出與連接",
  "Enclosure": "外殼",
  "Explosion rating": "防爆等級",
  "Dimensions": "外型尺寸",
  "Installation": "安裝方式",
  "Service life": "使用壽命",
  "Warranty": "質保期",
  "Combustible gas, oxygen, carbon monoxide, hydrogen sulfide": "可燃氣體、氧氣、一氧化碳、硫化氫",
  "Electrochemical, catalytic combustion": "電化學、催化燃燒",
  "EX 0–100% LEL · O₂ 0–30% Vol · CO 0–500 ppm · H₂S 0–100 ppm (further ranges on request)": "EX 0–100% LEL · O₂ 0–30% Vol · CO 0–500 ppm · H₂S 0–100 ppm（更多量程可按需求查詢）",
  "Rechargeable lithium 2800 mAh (24 V); over 12 h operation in four-gas mode without pump": "可充電鋰電池 2800 mAh（24 V）；四合一模式下不帶氣泵可工作超過 12 小時",
  "GPRS, 4G, Wi-Fi, LoRa, ZigBee; local audible and visual alarm with relay options": "GPRS、4G、Wi-Fi、LoRa、ZigBee；現場聲光報警，可選繼電器輸出",
  "Die-cast aluminium with fluorocarbon coating, IP66": "壓鑄鋁外殼，氟碳塗層，IP66",
  "460 × 340 × 115 mm (H × W × D)": "460 × 340 × 115 mm（高 × 寬 × 厚）",
  "Floor-standing or mobile deployment": "立地式或移動式部署",
  "3–5 years": "3–5 年",
  "1 year": "1 年",
  "Oil & petrochemical": "石油及石化",
  "Chemical & pharmaceutical plants": "化工及製藥廠房",
  "Smelting, steel & coal operations": "冶煉、鋼鐵及煤炭作業",
  "Thermal power & boiler rooms": "熱電廠及鍋爐房",
  "Environmental & emissions monitoring": "環境及排放監測",
  "Sewage and waste treatment": "污水及廢物處理",
  "Tunnel & underground construction": "隧道及地下工程",
  "Fuel stations, gas pipelines & LPG facilities": "加油站、燃氣管道及液化氣設施",
  "Indoor air quality & confined-space entry": "室內空氣質量及密閉空間作業",
  "Hazardous-area safety protection": "危險區域安全防護",
}

skipped = [k for k in new if k in data]
data.update(new)
path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"before={before} after={len(data)} added={len(new)-len(skipped)} skipped_existing={len(skipped)}")
if skipped:
    print("existing:", skipped)

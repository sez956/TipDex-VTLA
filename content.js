// Content and results transcribed from the supplied draft.
window.PROJECT = {
  "name": "TipDex-VTLA",
  "title": "Learning When to Refine Actions with Touch for Dexterous Manipulation",
  "authors": [
    "Xudi Ge*",
    "Yepeng Liu*",
    "Haifeng Liu*",
    "Enze Shi",
    "Liangqi Zhang",
    "Yongchao Xu"
  ],
  "abstract": "A change in lighting can shift a robot’s predicted actions even when the object and contact state stay the same. TipDex-VTLA addresses this during execution. Visual Action Sensitivity Estimation (VASE) learns to predict how reliable the visual input is for action by measuring a frozen policy’s sensitivity to lighting changes. Tactile Anticipation and Correction during Execution (TACE) checks time-aligned touch forecasts against measurements and uses the discrepancy, together with visual reliability, to gate bounded corrections to actions that have yet to execute. Across four physical tasks, TipDex-VTLA averages 87.5% full-task success under standard lighting and 73.8% under unseen lighting. With both modules enabled, the optical-tactile adaptation achieves 84.9% mean success on eight UniVTAC tasks.",
  "lightingDemos": [
    {"id": "egg-light-drop", "title": "Egg Transfer", "condition": "Lights dim mid-task", "label": "中途变暗", "duration": "00:29", "speed": "1.5×"},
    {"id": "egg-color-shift", "title": "Egg Transfer", "condition": "Changing colored light", "label": "彩色灯光变化", "duration": "00:43", "speed": "1×", "warning": "This clip contains flashing lights."},
    {"id": "grape-light-drop", "title": "Grape Pinching", "condition": "Lights dim mid-task", "label": "中途变暗", "duration": "00:23", "speed": "1.5×"},
    {"id": "grape-color-shift", "title": "Grape Pinching", "condition": "Changing colored light", "label": "彩色灯光变化", "duration": "00:35", "speed": "1×", "warning": "This clip contains flashing lights."},
    {"id": "tissue-side", "title": "Tissue Extraction", "condition": "Side lighting", "label": "侧光", "duration": "00:31", "speed": "3×"},
    {"id": "tissue-bright", "title": "Tissue Extraction", "condition": "Bright light", "label": "强光", "duration": "00:31", "speed": "3×"},
    {"id": "beans-low", "title": "Mung Bean Pouring", "condition": "Low light", "label": "暗光", "duration": "00:49", "speed": "3×"},
    {"id": "beans-side", "title": "Mung Bean Pouring", "condition": "Side lighting", "label": "侧光", "duration": "00:49", "speed": "3×"},
    {"id": "beans-bright", "title": "Mung Bean Pouring", "condition": "Bright light", "label": "强光", "duration": "00:49", "speed": "3×"},
    {"id": "beans-changing", "title": "Mung Bean Pouring", "condition": "Flashing color light", "label": "彩色闪光", "duration": "02:28", "speed": "1×", "warning": "This clip contains flashing lights."}
  ],
  "realDemos": [
    {
      "title": "Egg Transfer",
      "task": "Egg manipulation",
      "caption": "鸡蛋转移 · Multi-view RGB and touch",
      "src": "assets/demos/real-3.mp4",
      "poster": "assets/demos/real-3.jpg",
      "duration": "00:46"
    },
    {
      "title": "Grape Pinching",
      "task": "Grape manipulation",
      "caption": "提子抓取 · Multi-view RGB and touch",
      "src": "assets/demos/real-2.mp4",
      "poster": "assets/demos/real-2.jpg",
      "duration": "00:38"
    },
    {
      "title": "Tissue Extraction",
      "task": "Tissue pulling",
      "caption": "抽纸 · Multi-view RGB and touch",
      "src": "assets/demos/real-1.mp4",
      "poster": "assets/demos/real-1.jpg",
      "duration": "01:32"
    },
    {
      "title": "Mung Bean Pouring",
      "task": "Mung bean pouring",
      "caption": "倒绿豆 · Multi-view RGB and touch",
      "src": "assets/demos/mung-bean-h264.mp4",
      "poster": "assets/demos/mung-bean.jpg",
      "duration": "01:22"
    }
  ],
  "simulationDemos": [
    {
      "title": "Insert Hole",
      "task": "insert_hole",
      "caption": "仿真多视角 · 触觉可视化",
      "src": "assets/demos/sim-6.mp4",
      "poster": "assets/demos/sim-6.jpg",
      "duration": "02:57"
    },
    {
      "title": "Insert Tube",
      "task": "insert_tube",
      "caption": "仿真多视角 · 触觉可视化",
      "src": "assets/demos/sim-5.mp4",
      "poster": "assets/demos/sim-5.jpg",
      "duration": "00:48"
    },
    {
      "title": "Grasp & Classify",
      "task": "grasp_classify",
      "caption": "仿真多视角 · 触觉可视化",
      "src": "assets/demos/sim-8.mp4",
      "poster": "assets/demos/sim-8.jpg",
      "duration": "00:30"
    },
    {
      "title": "Insert HDMI",
      "task": "insert_HDMI_",
      "caption": "仿真多视角 · 触觉可视化",
      "src": "assets/demos/sim-4.mp4",
      "poster": "assets/demos/sim-4.jpg",
      "duration": "00:40"
    },
    {
      "title": "Lift Bottle",
      "task": "lift_bottle",
      "caption": "仿真多视角 · 触觉可视化",
      "src": "assets/demos/sim-2.mp4",
      "poster": "assets/demos/sim-2.jpg",
      "duration": "00:39"
    },
    {
      "title": "Lift Can",
      "task": "lift_can",
      "caption": "仿真多视角 · 触觉可视化",
      "src": "assets/demos/sim-3.mp4",
      "poster": "assets/demos/sim-3.jpg",
      "duration": "00:44"
    },
    {
      "title": "Pull-out Key",
      "task": "pull_out_key",
      "caption": "仿真多视角 · 触觉可视化",
      "src": "assets/demos/sim-7.mp4",
      "poster": "assets/demos/sim-7.jpg",
      "duration": "00:29"
    },
    {
      "title": "Put Bottle in Shelf",
      "task": "put_bottle_in_shelf_",
      "caption": "仿真多视角 · 触觉可视化",
      "src": "assets/demos/sim-1.mp4",
      "poster": "assets/demos/sim-1.jpg",
      "duration": "01:12"
    }
  ],
  "bibtex": "@unpublished{tipdexvtla,\n  title = {TipDex-VTLA: Learning When to Refine Actions with Touch for Dexterous Manipulation},\n  author = {Ge, Xudi and Liu, Yepeng and Liu, Haifeng and Shi, Enze and Zhang, Liangqi and Xu, Yongchao},\n  note = {Unpublished manuscript}\n}",
  "realResults": {
    "standard": [
      ["ACT", 0, 30, 20, 25, 18.8],
      ["π₀.₅", 20, 80, 40, 80, 55.0],
      ["T-Rex", 65, 80, 60, 80, 71.3],
      ["N0-VTLA", 60, 85, 70, 60, 68.8],
      ["TipDex-VTLA", 90, 95, 75, 90, 87.5]
    ],
    "unseen": [
      ["ACT", 0, 0, 0, 0, 0.0],
      ["π₀.₅", 20, 30, 25, 20, 23.8],
      ["T-Rex", 20, 30, 30, 10, 22.5],
      ["N0-VTLA", 30, 20, 35, 40, 31.3],
      ["TipDex-VTLA", 70, 90, 60, 75, 73.8]
    ]
  },
  "ablationResults": {
    "standard": [
      ["Full TipDex-VTLA", 90, 95, 75, 90, 87.5],
      ["Without VASE", 85, 95, 70, 90, 85.0],
      ["Without tactile verification", 80, 85, 60, 90, 78.8],
      ["Without gate head", 80, 85, 65, 85, 78.8]
    ],
    "unseen": [
      ["Full TipDex-VTLA", 70, 90, 60, 75, 73.8],
      ["Without VASE", 45, 40, 55, 30, 42.5],
      ["Without tactile verification", 65, 80, 45, 60, 62.5],
      ["Without gate head", 30, 45, 40, 45, 40.0]
    ]
  },
  "simulationResults": [
    {"label": "Without tactile input", "rows": [
      ["ACT (vision only)", 42, 28, 20, 28, 19, 15, 45, 50, 30.9],
      ["π₀.₅", 100, 35, 6, 34, 25, 8, 74, 49, 41.4],
      ["LingBot-VA", 0, 58, 0, 0, 42, 38, 96, 17, 31.4]
    ]},
    {"label": "With tactile input", "rows": [
      ["ACT + UniVTAC", 71, 46, 29, 31, 24, 28, 56, 99, 48.0],
      ["VITaL", 72, 47, 8, 32, 25, 6, 34, 100, 40.5],
      ["FTP-1", 97, 48, 65, 47, 64, 18, 79, 100, 64.8],
      ["T-Rex", 99, 99, 75, 79, 100, 8, 95, 95, 81.3],
      ["N0-VTLA", 99, 99, 88, 60, 95, 25, 99, 100, 83.1],
      ["TipDex-VTLA", 100, 97, 87, 80, 89, 30, 96, 100, 84.9]
    ]}
  ]
};

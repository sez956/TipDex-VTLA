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
  "abstract": "Changes in illumination can cause vision–language–action (VLA) policies to predict different actions even when the physical state is unchanged. We introduce TipDex-VTLA, a vision–tactile–language–action policy that learns when to refine actions with touch during execution. Visual Action Sensitivity Estimation (VASE) learns to estimate visual reliability from differences in predicted actions between original and lighting-perturbed observations. Tactile Anticipation and Correction during Execution (TACE) compares predicted and measured touch at matched times and combines the resulting discrepancy with visual reliability to modulate tactile corrections to unexecuted actions. We evaluate TipDex-VTLA on four real-world dexterous manipulation tasks and the UniVTAC simulation benchmark. Across the four real-world tasks, TipDex-VTLA achieves average full-task success rates of 87.5% under standard lighting and 73.8% under unseen lighting, outperforming the strongest evaluated real-world baseline.",
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
      "src": "assets/demos/mung-bean.mp4",
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
      [
        0,
        30,
        20,
        25,
        18.8
      ],
      [
        20,
        80,
        40,
        80,
        55
      ],
      [
        60,
        60,
        65,
        90,
        68.8
      ],
      [
        65,
        80,
        60,
        80,
        71.3
      ],
      [
        90,
        95,
        75,
        90,
        87.5
      ]
    ],
    "unseen": [
      [
        0,
        0,
        0,
        0,
        0
      ],
      [
        5,
        10,
        20,
        5,
        10
      ],
      [
        10,
        35,
        25,
        5,
        18.8
      ],
      [
        20,
        30,
        30,
        10,
        22.5
      ],
      [
        70,
        90,
        60,
        75,
        73.8
      ]
    ]
  },
  "methods": [
    "ACT",
    "π₀.₅",
    "AT-VLA",
    "T-Rex",
    "TipDex-VTLA"
  ]
};

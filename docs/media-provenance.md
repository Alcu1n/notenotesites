# PinyPiny 网站媒体来源与重现

更新：2026-10-15。网站图片是现有 App 作品截图或由真实原生 App 渲染的示例；未用网页仿制编辑器，未用图像生成模型重绘 App 界面。示例内容为编辑演示，不是用户评价或真实旅行经历。

## 三个场景

| 网站文件（`public/assets/pinypiny/showcase/`） | App 内来源 | 内容与限制 |
|---|---|---|
| `daily.webp` | `Assets.xcassets/OnboardingGallery2.imageset/screenshot.jpg` | 日常照片、文字、清单与照片抠图；原 App 自带截图，内部照片原作者未记录，不应宣称原创拍摄。 |
| `travel.webp` | `Assets.xcassets/OnboardingGallery5.imageset/screenshot.jpg` | 东京行程、邮票照片和宝丽来；原 App 自带截图，内部照片原作者未记录，部分照片样式需 Pro。 |
| `inspiration.webp` | `Assets.xcassets/OnboardingGallery3.imageset/screenshot.jpg` | 海边照片与文字拼贴；原 App 自带截图，内部照片原作者未记录。包含原作品中的文学引文；不要将引文抽成网站宣传语。 |

这些文件只进行 WebP 编码（质量 88），没有改变截图内容。未采用包含第三方玩具角色、体育明星或美妆品牌拼贴的其他图库图片作为新宣传主图。

## 同一示例照片，三种原生排版

`same-minimal.webp`、`same-journal.webp`、`same-collage.webp` 均在 iOS 26.5 的 390 × 844pt QA 模拟器中，由已安装的 PinyPiny 1.0.4（build 11）真实渲染后使用 `simctl io screenshot` 截取，原始像素 1170 × 2532，网站版本缩放至 780 × 1688 并编码为 WebP（质量 88）。无图片内容合成或界面重绘。

这三张是为网站准备的**示例数据**：把符合 App `SpatialNoteDocument` 的测试文档写入隔离的 `CardStackUITestStore/local-only` SQLite 后，由 App 正常打开。未修改 App 源码、商店资料或生产笔记。它们不是“20 秒手工制作全部内容”的证据。

主照片：Gabriele Niek，[Pexels 18118570](https://www.pexels.com/photo/18118570/)，来自 App `CreativeIntro/CreativeCoast.imageset/photo.jpg`。三个版本共享该源图；拼贴版使用 App `PhotoTreatmentRenderer` 预先生成并随 App 分发的 `CreativeCoast-polaroid` 派生文件。

- 主照片 SHA-256：`f5cde058916a5a705ecb381e197a97303dafba5687794831553a70b031615d4b`
- 柠檬贴纸：Lukas Blazek，[Pexels 1414110](https://www.pexels.com/photo/1414110/)，来自 `CreativeLemon-cutout`；原 App 的 Vision 抠图与描边派生资源。
- 授权：App `docs/creative-intro-assets.md` 和 `docs/creative-intro-media.json` 记录了 [Pexels License](https://www.pexels.com/license/) 与上述摄影师、来源、派生方式。照片为授权图库照片，不是公共领域素材，不代表摄影师或被摄者背书。
- 网站应称“同一张示例照片”，不称“我们的原创摄影”。拼贴中的宝丽来样式须就近注明 Pro。
- 文档证据：`docs/media-fixtures/{minimal,journal,collage}.json`。三个文档的 `photoSourceRenderPath` / 图片资产指向同一来源；`media-fixtures/capture-fixtures.py` 保留生成规则。

原生二进制 SHA-256：`b6f15054be08e3fda1fe4c9805769032bf4227c5ff81b4fb7fb6f1bc4035869b`。检查时 App 仓库 HEAD 为 `c6edbd9f3b2bbbf1b389b1f19077460f33853490`；该 HEAD 不等于已编译二进制的精确源码证明。媒体来自本地 1.0.4；网站对上架 1.0.3 的功能文案须另按商店版本核对。

### 原生截图重现

需要安装同一 App 的隔离 QA 模拟器。以下操作只应针对测试设备，会重置其中的 UI 测试笔记库；不针对真实用户设备。

```sh
DEVICE=41C66100-D627-4C4F-A1F3-6BC7A2C28717
# 设备已启动时跳过 boot；采集完成后已关闭本次启动的 QA 模拟器。
xcrun simctl boot "$DEVICE"
xcrun simctl launch "$DEVICE" com.lraistudio.notenote -ui-testing -ui-testing-persistent -ui-testing-reset -ui-testing-note-count=1
xcrun simctl terminate "$DEVICE" com.lraistudio.notenote
python3 docs/media-fixtures/capture-fixtures.py minimal "$DEVICE"
xcrun simctl launch "$DEVICE" com.lraistudio.notenote -ui-testing -ui-testing-pro -ui-testing-persistent -ui-testing-open-editor -AppleLanguages '(en)' -AppleLocale en_US
xcrun simctl io "$DEVICE" screenshot /tmp/same-minimal.png
ffmpeg -i /tmp/same-minimal.png -vf scale=780:-1 -quality 88 /tmp/same-minimal.webp
```

对 journal / collage 重复后四步，并在修改数据前终止 App。脚本中的 App 仓库与网站绝对路径需要按本地环境调整；随机对象 UUID 不影响布局与源图身份。原生打开及截图间须等待编辑器完整呈现。

## 真实操作演示

`media-fixtures/native-demo.swift` 是独立 XCTest UI runner 的操作源码，使用现有 App 而不重新编译或修改 App。起点为预置文字与柠檬贴纸的示例纸页，`media-fixtures/demo-start.json` 是起始文档；主照片从系统 Photos 选择器加入，随后通过真实 App 控件应用宝丽来、拖动缩放、选择贴纸并保存回卡片堆。

原始录制使用 `xcrun simctl io … recordVideo --codec=h264`；成品仅裁掉等待、缩放、H.264 转码与 faststart。成品 `demo.mp4` 为 20.93 秒、720 × 1558、1,550,795 字节；原始片段为 `output/playwright/native-media/demo-raw.mp4`（33.85 秒）。采用原片时间段 8.8–12.0 秒及 15.5–33.7 秒，去掉 Photos 加载等待，保留正常速度。封面 `demo-poster.webp` 是保存后重新打开同一原生文档的无选框截图；`sticker.webp` 是同次操作的原生贴纸选中状态。没有把静态截图拼成录屏，没有合成虚构 UI，没有以模拟器证明真机性能或商店版本表现。演示含 Pro 宝丽来样式，须注明 Pro。

重现基础设施：`/tmp/pinypiny-native-media/MediaRunner.app`、`media.xctestrun`，由现有 `CardStack_UIUITests-Runner.app` 复制并替换独立测试 bundle；测试目标是 `MediaTests/testNativePhotoToCardStackDemo`。回放命令：

```sh
xcodebuild test-without-building \
  -xctestrun /tmp/pinypiny-native-media/media.xctestrun \
  -destination 'platform=iOS Simulator,id=41C66100-D627-4C4F-A1F3-6BC7A2C28717' \
  -parallel-testing-enabled NO \
  -resultBundlePath /tmp/pinypiny-native-media/replay.xcresult
```

模拟器 `.app` GUI 在当前 Xcode 安装中缺失，但 CoreSimulator 与 XCTest runner 可运行。独立 inspection 测试已通过，证明可读取原生编辑器；之后的完整演示测试独立验证选图、原生照片样式入口与保存关闭编辑器。运行时相册中的测试图片与 App 权益均为受控测试边界，不能视为真实购买或云端集成验证。

实际结果：`output/playwright/native-media/demo.xcresult` 的 `MediaTests/testNativePhotoToCardStackDemo` 通过（29.718 秒）；`media-fixtures/native-demo.txt` 记录真实控件操作。读取保存后的 SQLite，确认仅新增一张海岸照片，其 `photoPresentationStyleRawValue` 为 `polaroid`，宽度为 305.2993pt，中心 y 为 345pt；`media-fixtures/demo-finish.json` 保存原生持久文档。这些证据覆盖选图、样式、缩放、拖动和保存，未验证真实 Apple 购买。


### 录屏回放准备与字幕

`docs/media-fixtures/build-native-runner.sh` 可从已有 QA App 和 XCTest runner 构建独立测试，不改 App 源码。运行 `zsh docs/media-fixtures/build-native-runner.sh`；可用 `PINYPINY_APP_BUILD_DIR` / `PINYPINY_MEDIA_WORKDIR` 覆盖本机路径。回放前按前述步骤建立仅含一张笔记的隔离 UI 测试库，把示例生成参数改成 `demo`，并用 `simctl addmedia` 将 `CreativeCoast.imageset/photo.jpg` 加入该 QA 相册，再以 `-ui-testing-pro -ui-testing-persistent -ui-testing-open-editor` 打开。测试依赖当前 QA 设备的中文相册日期标注（`9月05日`），而 App 界面为英文；更换设备语言时须调整照片选择查询。随后运行上文的 `test-without-building` 命令并同时使用 `simctl io recordVideo` 录制。

中英字幕 `demo-en.vtt` / `demo-zh.vtt` 按成品逐秒画面检查校准，保留“预置示例页”的边界；最后一条在 20.933 秒结束。图片 `demo-poster.webp` 与 `sticker.webp` 均为 780 × 1688。

## 导出说明图

`export.webp`（780 × 1688）是同一真实示例在 App 原生“Full export / Note content only”样式选择器中的截图，用于展示两种导出范围。它不是已保存的 PNG。独立导出验证已成功打开该选择器，但进一步自动点击采用的 AX 标识与已编译 App 不一致，因此这次媒体采集没有确认 PNG 保存成功；不要把这个截图当作端到端保存证据。该限制不影响上述已通过的选图、排版与保存回卡栈演示。

原片与完整 XCTest 结果包保留在已忽略的 `output/playwright/native-media/`，用于本机复核；最终站点静态资源只含交付图片、视频和字幕。

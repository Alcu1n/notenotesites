# PinyPiny／拼拼笔记：内容与关键词映射

更新：2026-10-15。网站目标是帮助有视觉记录需求的人理解产品，再前往 App Store 下载。此文档是页面分工与编辑依据，不是搜索排名、搜索量或转化效果报告。

## 证据与版本边界

- **当前产品基线**：本次官网按已上架的 1.0.3 能力发布文案。本地 App 源码为 1.0.4，阅读源码仅用于核对操作路径；没有把未上架的收藏等新功能加入宣传。设备要求为 iPhone／iPad，iOS／iPadOS 18 及以上。
- **本地 ASO 种子**：`../CardStack_UI/docs/localization/app-store-connect-metadata.json` 的 `versionString` 为 **1.0.1**。该文件含旧品牌 Pinnia、旧域名及多语言草稿，不能当作当前 App Store Connect 的实时资料。此次不改动商店资料。
- **英文草稿种子**：`diary, scrapbook, stickers, photo, memo, writing, planner, moodboard, cards, paper, fonts, memories`；旧副标题为 `Visual Notes & Collage Journal`。这些只提供相关概念，不能据此判断搜索需求大小。
- **简体中文草稿种子**：`手账、电子、记事本、便签、备忘录、贴纸、图文、排版、照片、字体、记录、心情、咕卡、日常、随笔、灵感、生活、写作、相片、素材、装饰、创作、旅行、回忆、美化、文艺`。按产品匹配度选择表达，不逐词堆砌。
- **定性搜索样本**：本次规划于 2026-10-15 检索 `digital scrapbook app`、`visual journal app` 与中文电子手帐／照片日记相关意图，阅读下列产品自有页面与 App Store 产品页。它们用于识别页面类型和语义歧义，不表示实时排名、竞争程度或流量机会，不复制其文案。
  - [Nooka 的 scrapbook app 页面](https://nookaapp.com/scrapbook-app)、[文章目录](https://nookaapp.com/blog)、[产品首页](https://nookaapp.com/)：产品解释与教程可以承接不同意图。
  - [Qalma 的 visual journal app 页面](https://www.qalmaapp.com/visual-journal-app)：`visual journal` 也可能指向绘画记录；PinyPiny 必须同时明确照片、文字与拼贴，避免暗示绘画能力。
  - [番茄手帐 App Store 页面](https://apps.apple.com/cn/app/番茄手帐-小清新电子手帐/id1621013203)：中文手帐语境同时涉及照片、记录与装饰，不能只用“笔记”概括本产品。
- **GEO 原则**：[Google 的 AI 功能与网站指南](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)。采用可抓取正文、清楚的产品事实、实用教程与相关内部链接；不承诺结构化数据、`llms.txt` 或特定字数能够获得 AI 引用。

尚未取得关键词工具的搜索量、点击费用、难度或趋势数据；表内优先级仅按产品匹配度与用户意图制定。正式上线后用 Search Console 的实际查询与着陆页数据校正，不能把以下映射称为“高流量关键词验证”。

## 页面分工

英文使用根路径，中文使用对应 `/zh` 路径；下表中的语言对承接相同任务，但分别采用自然表达。

| 路径（英文／中文） | 主意图与主词 | 自然长尾及辅助词 | 页面需要交付的答案 | 转化与关联 |
|---|---|---|---|---|
| `/` ／ `/zh` | 产品发现：visual journal app、collage notes／视觉笔记、拼贴笔记 | visual notebook for iPhone、photo and text notes／自由排版笔记、照片手帐 | 产品是什么、成品能是什么样、如何开始、设备及 Pro 边界 | 真实作品、短演示、场景页、下载 |
| `/digital-scrapbook` ／ `/zh/digital-scrapbook` | 工具选择：digital scrapbook app／电子手帐 App、拼贴手帐 | scrapbook app for iPhone and iPad、free-form scrapbook／iPhone 电子手帐、照片文字自由排版 | 用个人照片、文字和贴纸制作手帐的具体方法 | 第一篇手帐教程、照片贴纸教程、下载 |
| `/photo-journal` ／ `/zh/photo-journal` | 记录方式：photo journal app／照片日记 App、图文日记 | everyday photo diary、photo journal ideas／一张照片一句话、日常照片记录 | 照片与个人叙述如何配合；极简、日记、拼贴三种排法 | 日常案例、入门教程、下载 |
| `/travel-journal` ／ `/zh/travel-journal` | 旅行记录：travel journal app、travel scrapbook／旅行手帐 App | travel scrapbook app for iPhone、travel photo journal／旅行照片拼贴、旅行日记排版 | 选什么素材、怎样组织一页、离线及导出边界 | 旅行手帐教程、贴纸教程、下载 |
| `/guides` ／ `/zh/guides` | 学习入口：journaling guides、scrapbook ideas／手帐教程 | photo sticker tutorial、travel journal ideas／电子手帐入门、照片贴纸制作 | 各教程适合解决什么具体问题 | 三篇教程与对应场景页 |
| `/guides/iphone-digital-scrapbook` ／ `/zh/guides/iphone-digital-scrapbook` | 动手制作：how to make a digital scrapbook on iPhone／iPhone 怎么做电子手帐 | first digital scrapbook page、photo and text layout／一张照片做手帐、电子手帐排版步骤 | 选主题、摆照片、写短句、加贴纸、导出图片 | 回到电子手帐场景；按教程开始下载 |
| `/guides/photo-stickers` ／ `/zh/guides/photo-stickers` | 具体操作：turn a photo into a journal sticker／照片怎么做手帐贴纸 | photo cutout for scrapbook、camera sticker／照片主体贴纸、相册照片做贴纸 | 相册手选主体与相机自动预览的不同流程；识别失败怎么办 | 电子手帐场景、入门教程、下载 |
| `/guides/travel-journal-ideas` ／ `/zh/guides/travel-journal-ideas` | 内容与排版：what to write in a travel journal／旅行手帐写什么 | travel journal layout ideas、simple travel scrapbook／旅行日记内容、旅行手帐怎么排版 | 三类写作问题、素材选择、图文主次、成品分享 | 旅行手帐场景、照片贴纸教程、下载 |
| `/about` ／ `/zh/about` | 品牌核实：PinyPiny、拼拼笔记 | PinyPiny developer、LRAI STUDIO／拼拼笔记开发者 | 明确产品名称、开发者、产品方向和联系渠道 | 支持与下载 |
| `/support` ／ `/zh/support` | 使用帮助与购买疑问 | PinyPiny support、restore Pro／拼拼笔记帮助、恢复购买 | 设备、离线、导出、Pro、iCloud 与联系渠道 | 相关教程、支持邮箱、下载 |
| `/privacy` ／ `/zh/privacy` | 信任与数据说明 | PinyPiny privacy／拼拼笔记隐私 | 区分本地笔记、可选 iCloud 同步和网站匿名统计 | 支持与条款 |
| `/terms` ／ `/zh/terms` | 使用与购买条款 | PinyPiny terms／拼拼笔记使用条款 | 实际服务边界、购买与使用规则 | 隐私与支持 |

每个语言版本 12 页，共 24 页。标题、H1、开头定义和正文自然覆盖主要主题；不机械要求关键词密度，不为近义词另建内容重复的页面。FAQ 服务真实疑问，不把富结果展示作为验收条件。

## 内容与真实性约束

- **产品定义统一**：PinyPiny／拼拼笔记是用照片、文字、贴纸自由排版的视觉笔记与手帐 App。使用“视觉日记”时立即说明媒介，避免被理解为手绘软件。
- **免费与 Pro 清楚区分**：可免费下载，从文字、独立浮动照片与贴纸开始；高级纸张、字体、正文内嵌照片、动画与 iCloud 同步属于可选 Pro 权益。不要将 `free` 扩写成全部功能永久免费。
- **流程准确**：照片入口选择识别出的主体后生成预览；相机入口以主要识别主体自动生成预览；均在确认后加入笔记。主体识别效果依图片而异，不宣传百分之百准确。
- **导出明确**：导出为图片，保存需相应 Photos 权限；成品图片不是可编辑笔记备份。不宣传 PDF 导出、模板导入、协作、手写绘图或 Apple Pencil 绘画。
- **可独立理解**：场景页解释适合的记录方式与作品主次；教程给出实际步骤及常见问题。示例配图标为“制作示例”，不暗示模板可以下载导入。
- **内部链接有理由**：场景页到相关教程，教程到对应场景、其他所需步骤与下载；语言切换落在对应内容页。链接锚文本说清目标，不堆砌精确匹配关键词。
- **不制造社会证明**：不编写评论、用户数、奖项、榜单或搜索排名；不借竞争对手名称制作无依据的“最佳”“替代品”页面。
- **GEO 可核实**：作者、更新时间、清晰事实与实际演示由页面呈现；结构化数据只陈述可见事实，不把创作案例写成用户评价。无需为了引用凑固定段落字数。

## 上线后的校正

用搜索展示与点击判断页面是否承接了相关查询，用匿名下载点击与 Apple 活动链接观察后续动作。区分网站下载点击与 App Store 实际下载，按语言和场景看数据。关键词映射先作为假设；拿到真实查询后再调整标题、答案与内链，不因短期无数据批量新增薄内容。

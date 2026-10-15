# PinyPiny 官网改版验收

日期：2026-10-15。已完成网站代码与可审阅预览；正式域名仍为旧版，未执行生产发布。

## 版本与环境

- 网站基础提交：`1df188402a695bc65be81b778547419074dc2ca4`，当前为未提交工作区改版。
- 最终源文件及媒体 SHA-256：`f296508edde0655a31c27bc06246095462579d57c59c3f04d37dc6874687c37a`（71 个代码、测试、配置及公开媒体文件）。明细：`output/playwright/source-identity.json`；重算：`node scripts/source-identity.mjs`。
- Node v24.21.0，Next.js 16.3.3，React 19.2.8，Playwright 1.64.1；macOS arm64。
- 参考 App 源码 HEAD `c6edbd9f3b2bbbf1b389b1f19077460f33853490`，Git 工作区保持干净；未修改 App 或商店资料。
- 预览项目：alcu1ns-projects / notenotesites。预览链接：[https://notenotesites-bwoos9njm-alcu1ns-projects.vercel.app](https://notenotesites-bwoos9njm-alcu1ns-projects.vercel.app)，受项目原有 Vercel Authentication 保护，查看可能需要登录所属 Vercel 账号。

## 已验证结果

| 检查 | 结果 |
| --- | --- |
| `npm run lint` | 通过，无错误或警告；仅忽略生成的浏览器报告，不忽略产品源代码 |
| `npm run typecheck` | Next 路由类型生成及 TypeScript 通过 |
| `npm run build` | 本地与 Vercel 均通过；24 个内容页静态生成，另有图标与抓取入口 |
| `npm run test:e2e` | Chromium 7/7，WebKit 7/7；最终完整运行 14/14，24.4 秒 |
| `node scripts/capture-visuals.mjs` | 20 个真实渲染状态通过溢出、44px 页头触控目标和键盘跳转检查 |
| 无效英/中文 URL | 正确 404，带 noindex |
| 远端预览 | 受保护部署经 Vercel 连接器读取返回 HTTP 200；中文标题、正式域名 canonical、真实视频路径正确，预览未加载统计脚本 |
| Impeccable 检查 | 无机械问题；独立截图评审及暗色/教程补充评审通过 |

浏览器流程覆盖全部页面的状态、唯一标题、HTML 语言、canonical、语言对应链接、sitemap、结构化数据；所有使用中的图片、视频、字幕、图标与内链均可获取。验证从场景页进入教程、切换语言、点击下载；统计接口抛错时不阻断。另验证三种真实排版切换、二维码展开、主题刷新保持、移动菜单下载、滚动下载栏、无 JavaScript 正文与下载，以及 H.264 实际解码播放和预定义事件字段。

视觉矩阵：中英首页 × 320/390/768/1440px × 明暗主题，共16种；另有英文暗色场景页、中文移动教程、中文平板隐私页、英文窄屏支持页。390px 首屏可同时看到真实作品与完整下载入口。实际截图位于 `output/playwright/visuals/`；`checks.json` 保留断言结果。

## 重跑与工件

```sh
npm ci
npx playwright install chromium webkit
npm run lint
npm run typecheck
npm run build
npm run test:e2e
npm run start -- --port 3100
# 另一个终端：
node scripts/capture-visuals.mjs
node scripts/source-identity.mjs
```

E2E 会启动 3100 端口的生产服务器；重跑前关闭该端口旧实例，确保读取本次构建。HTML 报告 `output/playwright/report/index.html`，结构化结果 `output/playwright/results.json`，每条流程的 trace 位于 `output/playwright/results/`；可用 `npx playwright show-trace <trace.zip>` 回放。

## 模拟边界与未启用项

- App Store 真实下载/安装不由网页测试证明。WebKit 对普通 `apps.apple.com` 超链接也会在 HTTP 之前交给系统，最小无 JavaScript 页面已复现。E2E 先断言真实 Apple 目的 URL，再只在浏览器系统交接边界替换为受控接收页，验证原始目标完整传递及正常导航；没有修改产品下载地址或放宽断言来假装安装成功。
- 匿名事件测试使用受控 tracker，证明字段及容错，不证明 Umami 云端接收。实际 Umami 网站 ID 尚未提供，因此默认不加载脚本；预览始终禁用统计。
- Apple provider token 尚未提供，当前使用普通 App Store 链接。启用需真实 `pt`；不要编造 token。活动不足五名首次下载用户时，Apple 可能不展示活动数据。
- 搜索验证值尚未提供；未向 Google/Bing 提交站点，未声称已收录、关键词排名或下载增长。
- WebKit 是桌面自动化引擎的 iPhone 模拟配置，并非真实 iPhone Safari。真实设备二维码扫描、系统商店打开与安装归因留待上线验证。
- 新原生素材来自本地 1.0.4 QA 二进制；营销功能已限制为核对过的上架能力，不宣传收藏等未上架功能。21秒录屏起点是预置示例页，仅剪掉等待，未把截图拼成操作；Pro 与素材来源已说明。详见 [媒体来源](media-provenance.md) 和 `docs/media-fixtures/`。
- `export.webp` 证明原生导出选项的呈现，不证明本次另行导出 PNG 的端到端成功；网站不将它表述为此类证据。

配置项与发布步骤见 [README](../README.md) 及 `.env.example`；关键词依据和不确定性见 [关键词映射](keyword-map.md)。

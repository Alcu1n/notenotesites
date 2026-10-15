export type LegalSlug = "privacy" | "terms";

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  subsections?: { title: string; paragraphs: string[] }[];
};

export type LegalContent = {
  title: string;
  description: string;
  summary: string;
  updated: string;
  sections: LegalSection[];
};

const contact = "[alcuin.ch@gmail.com](mailto:alcuin.ch@gmail.com)";
const updated = "2026-10-15";

const privacyEn: LegalContent = {
  title: "Privacy Policy",
  description:
    "How PinyPiny handles notes, iCloud sync, media permissions, weather, and website analytics.",
  summary:
    "PinyPiny is local-first. Your notes stay on your device, with optional Pro sync through your private Apple iCloud account.",
  updated,
  sections: [
    {
      id: "overview",
      title: "1. Overview",
      paragraphs: [
        'This Privacy Policy explains how LRAI STUDIO, developed by @lemon ("LRAI STUDIO," "we," or "us"), handles information in the PinyPiny (拼拼笔记) app (the "App") and on this website. The App is a local-first notes and journaling app for iPhone and iPad running iOS 18 or iPadOS 18 or later. It does not require a separate PinyPiny account and does not operate an advertising, in-app analytics, or cross-app tracking system.',
        "Pro includes optional iCloud sync using your Apple account. Website analytics, when configured, is separate from the App and is described below.",
        `Questions about this policy can be sent to ${contact}.`,
      ],
    },
    {
      id: "data",
      title: "2. Information the App handles",
      paragraphs: [],
      subsections: [
        {
          title: "Notes and media you create",
          paragraphs: [
            "The App handles the text, photos, stickers, layouts, dates, and other content you choose to create or add. This content is stored locally in the App's storage on your device. If you use Pro iCloud sync, note content and associated media are also transferred to the App's private CloudKit database in your Apple iCloud account to sync with your other devices. We do not receive or review your notes through a content server operated by LRAI STUDIO, and we do not collect note content for analytics.",
          ],
        },
        {
          title: "Photos and camera access",
          paragraphs: [
            "If you choose to add a photo, make a sticker, or export a note, the App may request access to Photos or the camera. Photos and camera captures are used to complete the action you request. Sticker extraction is performed on the device. The App does not upload your photo library or camera captures to LRAI STUDIO. Photos or stickers you add to notes may be included in optional iCloud sync. You can decline or later change these permissions in iOS or iPadOS Settings.",
          ],
        },
        {
          title: "Location and weather context",
          paragraphs: [
            "If you grant When In Use location access, the App may use your current location while creating a new note to obtain a city/country label and a weather forecast for that time. The App does not request background location access or continuously track your movements. When available, the resulting location label and weather snapshot may be saved with that note; the App is not designed to keep a history of precise coordinates.",
          ],
        },
        {
          title: "Purchases",
          paragraphs: [
            "If you purchase an optional feature in the App through the App Store, Apple processes the transaction through StoreKit. We do not receive your payment card number. Purchase history and subscription management are handled through your Apple account and Apple's services.",
          ],
        },
        {
          title: "Support messages",
          paragraphs: [
            "If you email us, we receive the address and the information you include so that we can respond and keep a reasonable record of support communication. We do not use support messages for advertising.",
          ],
        },
      ],
    },
    {
      id: "third-parties",
      title: "3. Third-party services",
      paragraphs: [
        "The App uses Apple system services when you choose features that depend on them, including Photos, Camera, Core Location, StoreKit, and iCloud/CloudKit. Those services may process information under Apple's own terms and privacy policies. We do not sell your personal information or provide your note content to advertising networks, data brokers, or third-party analytics providers.",
      ],
      subsections: [
        {
          title: "Optional iCloud sync",
          paragraphs: [
            "Pro iCloud sync uses your private Apple iCloud account rather than a separate PinyPiny account. Sync requires network access, an available iCloud account, and sufficient iCloud storage. Apple operates the cloud infrastructure and handles that information under its own policies. Your iCloud settings and Apple's services affect its availability and storage. Sync can be delayed or interrupted; it is not a guarantee against data loss.",
            "See [Apple's Privacy Policy](https://www.apple.com/legal/privacy/) for information about Apple's processing.",
          ],
        },
        {
          title: "Weather forecasts",
          paragraphs: [
            "Weather forecasts are provided by MET Norway through a Cloudflare-hosted proxy operated for the App. Before transmission, the App rounds latitude and longitude to two decimal places. The proxy receives these approximate coordinates and the connection IP address; it does not receive note contents, account identifiers, or precise coordinates. It sends only the approximate coordinates to MET Norway and does not forward your IP address. Cloudflare processes connections under its own privacy policies. Our weather application code does not log IP addresses, coordinates, or request bodies. Public forecasts are cached by geographic grid, without user identifiers, until at most one day after their cache expiry. MET Norway may log the proxy IP address and approximate coordinates under its [privacy policy](https://www.met.no/en/About-us/privacy). Forecasts are used to provide the requested feature, not for advertising or tracking.",
            "Weather snapshots remain with their notes and are not continuously refreshed. Forecasts are not measured observations. Data is attributed to MET Norway under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); temperature units and weather icons are adapted for display. Existing Apple weather snapshots are no longer displayed; the migration does not delete stored note data.",
          ],
        },
        {
          title: "On-demand font downloads",
          paragraphs: [
            "Some fonts are downloaded when needed and cached on your device. The App contacts a routing service and font mirrors hosted through Cloudflare and Alibaba Cloud to choose an available download source. These connections expose normal network information, including your IP address and the requested font resource, to the service providers. The routing service may use the connection's approximate country or region to select a source. Font requests do not include your note text or images. The providers process connections under their own policies: [Cloudflare](https://www.cloudflare.com/privacypolicy/) and [Alibaba Cloud](https://www.alibabacloud.com/help/en/legal/latest/alibaba-cloud-international-website-privacy-policy).",
          ],
        },
        {
          title: "Website analytics and App Store links",
          paragraphs: [
            "This website can use Umami Cloud to understand which pages and examples help visitors find the App. Analytics is not loaded unless an Umami website ID is configured; without that configuration, it stays disabled. When enabled, the website sends page views and predefined interaction events, such as download clicks, demo playback, example changes, and QR-code views, with fixed page, language, and placement labels. We do not send note content, names, email addresses, or an App account identifier, and we do not set a distinct user identity or enable session recording.",
            "Umami also processes ordinary connection and browser information to produce aggregate traffic and anonymous session statistics. According to its [metric documentation](https://docs.umami.is/docs/metric-definitions), it uses the connection IP address to derive traffic metrics without storing the raw IP address. Its processing is subject to [Umami's Privacy Policy](https://umami.is/privacy). Anonymous session statistics are not recordings of your screen or browsing actions.",
            "App Store download links may contain campaign labels for the page or language. Apple handles visits, downloads, and aggregate campaign attribution under its own terms and policies. A campaign label does not include your note content or a personal identity assigned by this website. Blocking website analytics does not prevent you from using a download link.",
          ],
        },
      ],
    },
    {
      id: "retention",
      title: "4. Storage, retention, and deletion",
      paragraphs: [
        "Your notes and locally stored media remain on your device until you delete them in the App, remove the App, or otherwise clear its data. If you use Pro iCloud sync, copies may also remain in your private iCloud storage and changes or deletions may sync between your devices. Removing the App from one device does not by itself guarantee removal of cloud copies. iOS and iPadOS device backups, if enabled by you, are controlled by Apple and may contain App data according to your backup settings.",
        "You can delete individual notes and saved stickers in the App. Keep a separate export or backup for content that matters to you. If you contact us about a support message, you may ask us to delete that correspondence where we are able to do so, subject to records we must keep for legal, security, or accounting reasons.",
      ],
    },
    {
      id: "choices",
      title: "5. Your choices",
      paragraphs: [
        "You decide whether to grant Photos, Camera, and location permissions. You can change those choices in iOS or iPadOS Settings. The App does not require location, camera, or photo access for basic note writing. You may also delete content directly in the App and control the App's access to iCloud through your device's Apple account settings.",
      ],
    },
    {
      id: "children",
      title: "6. Children's privacy",
      paragraphs: [
        "The App is not directed to children under 13, or the minimum age required by applicable law in your location. We do not knowingly collect personal information from children through a PinyPiny account because the App does not require a separate PinyPiny account.",
      ],
    },
    {
      id: "changes",
      title: "7. Changes to this policy",
      paragraphs: [
        'We may update this policy when the App\'s features, services, or legal obligations change. The updated version will be posted on this page with a new "Last updated" date. If a change materially affects how we handle information, we will make that change clear where appropriate.',
      ],
    },
    {
      id: "contact",
      title: "8. Contact",
      paragraphs: [
        `Privacy questions and requests: ${contact}.`,
        "LRAI STUDIO · @lemon · PinyPiny / 拼拼笔记",
      ],
    },
  ],
};

const privacyZh: LegalContent = {
  title: "隐私政策",
  description:
    "了解拼拼笔记如何处理笔记、iCloud 同步、媒体权限、天气和网站统计。",
  summary:
    "拼拼笔记以本地保存为基础。笔记保存在设备上，Pro 用户还可选择通过自己的 Apple 私人 iCloud 账户同步。",
  updated,
  sections: [
    {
      id: "overview",
      title: "1. 概述",
      paragraphs: [
        "本隐私政策说明由 @lemon 开发的 LRAI STUDIO（下称“我们”）如何在 PinyPiny／拼拼笔记 App（下称“本 App”）及本网站中处理信息。本 App 是一款以本地保存为基础的笔记与日记工具，支持运行 iOS 18、iPadOS 18 或更高版本的 iPhone 和 iPad。本 App 不要求注册独立的拼拼笔记账户，也不运行广告、App 内分析或跨 App 跟踪系统。",
        "Pro 提供通过你的 Apple 账户使用的可选 iCloud 同步。网站统计与 App 分开，仅在配置后启用，具体见下文。",
        `如果对本政策有疑问，可发送邮件至 ${contact}。`,
      ],
    },
    {
      id: "data",
      title: "2. App 处理的信息",
      paragraphs: [],
      subsections: [
        {
          title: "你创建的笔记与媒体",
          paragraphs: [
            "本 App 处理你选择创建或添加的文字、照片、贴纸、排版、日期及其他内容。这些内容保存在你设备上的 App 存储空间中。如果使用 Pro iCloud 同步，笔记内容及相关媒体还会传输到你 Apple iCloud 账户中本 App 的私有 CloudKit 数据库，以便与你的其他设备同步。我们不会通过 LRAI STUDIO 运营的内容服务器接收或查看你的笔记，也不会收集笔记内容用于分析。",
          ],
        },
        {
          title: "照片与相机权限",
          paragraphs: [
            "当你选择添加照片、制作贴纸或导出笔记时，本 App 可能请求访问照片或相机。照片和拍摄内容仅用于完成你请求的操作，贴纸主体提取在设备上进行。本 App 不会将你的照片图库或相机拍摄内容上传至 LRAI STUDIO。你添加到笔记中的照片或贴纸可能包含在可选的 iCloud 同步中。你可以拒绝授权，也可以随后在 iOS 或 iPadOS 设置中更改权限。",
          ],
        },
        {
          title: "位置与天气信息",
          paragraphs: [
            "如果你授予“使用 App 期间”位置权限，本 App 可能在创建新笔记时使用当前位置，获取城市／国家标签和该时刻的天气预报。本 App 不请求后台位置权限，也不会持续追踪你的行踪。成功获取的位置标签和天气快照可能随笔记保存；本 App 的设计不用于保留精确坐标历史。",
          ],
        },
        {
          title: "购买",
          paragraphs: [
            "如果你通过 App Store 购买 App 内的可选功能，Apple 会通过 StoreKit 处理交易。我们不会收到你的银行卡号。购买记录和订阅管理由你的 Apple 账户及 Apple 服务处理。",
          ],
        },
        {
          title: "支持邮件",
          paragraphs: [
            "如果你向我们发送邮件，我们会收到发件地址和你提供的信息，以便回复并合理保留支持沟通记录。我们不会将支持邮件用于广告。",
          ],
        },
      ],
    },
    {
      id: "third-parties",
      title: "3. 第三方服务",
      paragraphs: [
        "当你选择依赖 Apple 系统服务的功能时，本 App 会使用照片、相机、Core Location、StoreKit 和 iCloud／CloudKit 等服务。这些服务可能按照 Apple 自身的条款和隐私政策处理信息。我们不会出售你的个人信息，也不会向广告网络、数据经纪商或第三方分析服务提供你的笔记内容。",
      ],
      subsections: [
        {
          title: "可选的 iCloud 同步",
          paragraphs: [
            "Pro iCloud 同步使用你的 Apple 私人 iCloud 账户，不需要独立的拼拼笔记账户。同步需要网络连接、可用的 iCloud 账户和足够的 iCloud 存储空间。Apple 运营云端基础设施，并依据其自身政策处理相关信息。你的 iCloud 设置及 Apple 服务会影响同步的可用性和存储。同步可能延迟或中断，不能保证数据永不丢失。",
            "Apple 如何处理信息，请参阅 [Apple 隐私政策](https://www.apple.com/legal/privacy/)。",
          ],
        },
        {
          title: "天气预报",
          paragraphs: [
            "天气预报由 MET Norway 提供，通过为本 App 运营、托管于 Cloudflare 的代理服务获取。发送前，本 App 会将经纬度四舍五入到小数点后两位。代理会收到这些近似坐标及连接 IP 地址，不会收到笔记内容、账户标识或精确坐标。代理仅向 MET Norway 发送近似坐标，不会转发你的 IP 地址。Cloudflare 根据其自身隐私政策处理连接。我们的天气应用代码不记录 IP 地址、坐标或请求正文。公共预报按地理网格缓存，不包含用户标识，保留时间最多为缓存失效后一天。MET Norway 可能按照其[隐私政策](https://www.met.no/en/About-us/privacy)记录代理 IP 地址和近似坐标。预报用于提供你请求的功能，不用于广告或跟踪。",
            "天气快照随笔记保存，不会持续刷新。预报不是实测观测数据。数据依据 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) 许可使用并注明来源为 MET Norway；显示时会调整温度单位和天气图标。已有的 Apple 天气快照不再显示，但这项迁移不会删除已保存的笔记数据。",
          ],
        },
        {
          title: "按需下载字体",
          paragraphs: [
            "部分字体会在需要时下载并缓存在设备上。本 App 会联系路由服务及通过 Cloudflare 和阿里云托管的字体镜像，以选择可用的下载源。这些连接会向服务提供商暴露正常的网络信息，包括你的 IP 地址和请求的字体资源。路由服务可能根据连接的大致国家或地区选择下载源。字体请求不包含笔记文字或图片。服务提供商根据其自身政策处理连接：[Cloudflare](https://www.cloudflare.com/privacypolicy/) 和[阿里云](https://www.alibabacloud.com/help/en/legal/latest/alibaba-cloud-international-website-privacy-policy)。",
          ],
        },
        {
          title: "网站统计与 App Store 链接",
          paragraphs: [
            "本网站可使用 Umami Cloud，了解哪些页面和示例有助于访客发现本 App。只有配置 Umami 网站 ID 后才会加载统计；未配置时保持关闭。启用后，网站会发送页面浏览及预定义的交互事件，例如点击下载、播放演示、切换示例和查看二维码，并附带固定的页面、语言和展示位置标签。我们不发送笔记内容、姓名、电子邮箱或 App 账户标识，不设置可识别个人身份的用户 ID，也不启用会话录制。",
            "Umami 还会处理普通的连接及浏览器信息，用于生成汇总流量和匿名会话统计。根据其[指标文档](https://docs.umami.is/docs/metric-definitions)，Umami 使用连接 IP 地址计算流量指标，但不保存原始 IP 地址。相关处理受 [Umami 隐私政策](https://umami.is/privacy)约束。匿名会话统计不是对你的屏幕或浏览操作进行录制。",
            "App Store 下载链接可能包含对应页面或语言的活动标签。Apple 根据其自身条款和政策处理访问、下载及汇总活动归因。这些标签不包含你的笔记内容或由本网站分配的个人身份标识。阻止网站统计不会妨碍你使用下载链接。",
          ],
        },
      ],
    },
    {
      id: "retention",
      title: "4. 存储、保留与删除",
      paragraphs: [
        "笔记和本地媒体会保留在设备上，直到你在 App 中删除、移除 App 或以其他方式清除其数据。如果使用 Pro iCloud 同步，副本也可能保留在你的私人 iCloud 存储空间中，修改和删除可能在设备之间同步。从单台设备移除 App 本身并不保证云端副本同时被删除。如果你启用 iOS 或 iPadOS 设备备份，备份由 Apple 管理，并可能根据你的备份设置包含 App 数据。",
        "你可以在 App 中删除单篇笔记和已保存的贴纸。对于重要内容，请另外保留导出文件或备份。如果你联系我们处理支持邮件，可以要求我们在能够做到的范围内删除相关通信，但我们可能需要保留法律、安全或会计要求的记录。",
      ],
    },
    {
      id: "choices",
      title: "5. 你的选择",
      paragraphs: [
        "你可以决定是否授予照片、相机和位置权限，并在 iOS 或 iPadOS 设置中更改。基本文字笔记不需要位置、相机或照片权限。你也可以直接在 App 中删除内容，并通过设备的 Apple 账户设置管理本 App 的 iCloud 访问权限。",
      ],
    },
    {
      id: "children",
      title: "6. 儿童隐私",
      paragraphs: [
        "本 App 不面向 13 岁以下儿童，或你所在地适用法律规定的最低年龄以下儿童。本 App 不要求注册独立的拼拼笔记账户，因此我们不会通过此类账户有意收集儿童的个人信息。",
      ],
    },
    {
      id: "changes",
      title: "7. 政策变更",
      paragraphs: [
        "当 App 功能、服务或法律义务变化时，我们可能更新本政策。更新版本会发布在本页，并标明新的“最后更新”日期。如果变更会对我们处理信息的方式产生重大影响，我们会在适当位置清楚说明。",
      ],
    },
    {
      id: "contact",
      title: "8. 联系我们",
      paragraphs: [
        `隐私问题与请求：${contact}。`,
        "LRAI STUDIO · @lemon · PinyPiny／拼拼笔记",
      ],
    },
  ],
};

const termsEn: LegalContent = {
  title: "Terms of Service",
  description:
    "Terms for using the PinyPiny app, optional Pro features, and this website.",
  summary:
    "These terms explain the rules for using PinyPiny, a local-first place for notes and personal moments.",
  updated,
  sections: [
    {
      id: "overview",
      title: "1. Agreement",
      paragraphs: [
        'These Terms of Service ("Terms") govern your use of the PinyPiny (拼拼笔记) app (the "App") and this website, operated by LRAI STUDIO and developed by @lemon. By using the App or website, you agree to these Terms. If you do not agree, do not use the App or website.',
        "You must be legally able to accept these Terms in your location. If you are below the age of majority, use the App with the permission and supervision of a parent or legal guardian. The App supports iPhone and iPad running iOS 18 or iPadOS 18 or later; the App Store listing controls current device compatibility.",
      ],
    },
    {
      id: "data",
      title: "2. Your content",
      paragraphs: [
        "You keep ownership of the text, photos, stickers, and other content you create or add to the App. You are responsible for having the rights and permissions needed for content you import, photograph, edit, or publish elsewhere.",
        "The App stores your notes and media locally on your device. If you choose Pro iCloud sync, content is also transferred to your private Apple iCloud account to sync with your other devices. Sync requires network access, an available Apple account, and sufficient iCloud storage, and can be delayed or interrupted. We do not promise that any content will be recoverable after device loss, App deletion, storage failure, sync problems, or a change to your device backup. Keep any separate backup or export that matters to you.",
      ],
    },
    {
      id: "third-parties",
      title: "3. Permissions and third-party services",
      paragraphs: [
        "The App may request access to Photos, Camera, or When In Use location so that you can add media, create stickers, save an export, or attach optional location and weather context to a new note. You can refuse or withdraw permission, though some features may not work without it.",
        "The App may use Apple services including StoreKit and iCloud/CloudKit. Apple services are provided by Apple under Apple's own terms. Weather forecasts are provided by MET Norway through a Cloudflare-hosted proxy; data is attributed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), with temperature units and weather icons adapted for display. Weather information is for general context only, may be delayed or inaccurate, and must not be used for emergency, safety-critical, or life-saving decisions.",
        "Some fonts require an internet connection for an initial download from Cloudflare or Alibaba Cloud delivery services. Third-party service availability can affect downloads, sync, and weather. Information handling, including optional website analytics, is described in our [Privacy Policy](/privacy).",
      ],
    },
    {
      id: "license",
      title: "4. License to use the App",
      paragraphs: [
        "Subject to these Terms, we grant you a limited, personal, non-exclusive, non-transferable, revocable license to use the App for your own lawful purposes on Apple devices that you own or control. You may not copy, resell, sublicense, rent, reverse engineer, decompile, or attempt to extract source code from the App, except where applicable law does not allow that restriction.",
      ],
    },
    {
      id: "purchases",
      title: "5. App Store purchases",
      paragraphs: [
        "Optional features may be offered as in-app purchases through Apple. The price, billing period, introductory offer, and renewal terms shown by Apple at the time of purchase control that transaction. Auto-renewable subscriptions renew unless you cancel through your Apple account before the renewal period begins. You can manage or cancel subscriptions through the App Store or your Apple account settings.",
        "Apple is responsible for payment processing, billing, and refunds for App Store purchases under Apple's applicable policies. We do not ask you to provide payment card details directly to the App.",
      ],
    },
    {
      id: "acceptable-use",
      title: "6. Acceptable use",
      paragraphs: [
        "You agree not to use the App to violate law or another person's rights, distribute malicious code, interfere with the App or website, or attempt to access systems that are not intended for you. You are responsible for the content you create and for how you use any exported material.",
      ],
    },
    {
      id: "availability",
      title: "7. Availability and updates",
      paragraphs: [
        "We may change, pause, or discontinue parts of the App or this website, and we may release updates that fix bugs, improve security, or change features. We do not guarantee that the App will be available at all times or on every device. You are responsible for installing updates when they are made available.",
      ],
    },
    {
      id: "disclaimers",
      title: "8. Disclaimers",
      paragraphs: [
        'The App is provided on an "as available" and "as is" basis to the maximum extent permitted by law. We do not warrant that the App will be uninterrupted, error-free, or that local or synced content will never be lost. The App is a personal writing and journaling tool, not a medical, legal, financial, emergency, or safety service.',
      ],
    },
    {
      id: "liability",
      title: "9. Limitation of liability",
      paragraphs: [
        "To the maximum extent permitted by applicable law, LRAI STUDIO and its developer will not be liable for indirect, incidental, special, consequential, or exemplary damages arising from your use of, or inability to use, the App or this website. Nothing in these Terms excludes liability that cannot be excluded under applicable law.",
      ],
    },
    {
      id: "changes",
      title: "10. Changes to these Terms",
      paragraphs: [
        "We may update these Terms as the App evolves. We will post the updated Terms on this page and update the date shown with the policy. Your continued use of the App after an update means you accept the revised Terms to the extent permitted by law.",
      ],
    },
    {
      id: "retention",
      title: "11. Apple as a third-party beneficiary",
      paragraphs: [
        "Apple is not responsible for the App, its content, or its support. However, where applicable under Apple's App Store terms, Apple and its subsidiaries may enforce these Terms as third-party beneficiaries.",
      ],
    },
    {
      id: "contact",
      title: "12. Contact",
      paragraphs: [
        `Questions about these Terms can be sent to ${contact}.`,
        "LRAI STUDIO · @lemon · PinyPiny / 拼拼笔记",
      ],
    },
  ],
};

const termsZh: LegalContent = {
  title: "服务条款",
  description: "使用拼拼笔记 App、可选 Pro 功能及本网站的条款。",
  summary:
    "这些条款说明使用拼拼笔记的基本规则。拼拼笔记是一款以本地保存为基础、记录笔记与生活片段的工具。",
  updated,
  sections: [
    {
      id: "overview",
      title: "1. 协议",
      paragraphs: [
        "本服务条款（下称“本条款”）适用于你使用由 LRAI STUDIO 运营、@lemon 开发的 PinyPiny／拼拼笔记 App（下称“本 App”）及本网站。使用本 App 或网站即表示你同意本条款。如果不同意，请勿使用本 App 或网站。",
        "你必须具有所在地法律要求的接受本条款的能力。如果尚未达到法定成年年龄，请在父母或法定监护人的许可与监督下使用本 App。本 App 支持运行 iOS 18、iPadOS 18 或更高版本的 iPhone 和 iPad；当前设备兼容性以 App Store 页面为准。",
      ],
    },
    {
      id: "data",
      title: "2. 你的内容",
      paragraphs: [
        "你保留在 App 中创建或添加的文字、照片、贴纸及其他内容的所有权。你有责任确保对导入、拍摄、编辑或在其他地方发布的内容拥有所需的权利和许可。",
        "本 App 在设备上本地保存笔记和媒体。如果选择 Pro iCloud 同步，内容还会传输到你的 Apple 私人 iCloud 账户，以便与你的其他设备同步。同步需要网络连接、可用的 Apple 账户及足够的 iCloud 存储空间，并可能延迟或中断。设备丢失、App 删除、存储故障、同步问题或设备备份变化后，我们不保证任何内容均可恢复。对于重要内容，请另外保留备份或导出文件。",
      ],
    },
    {
      id: "third-parties",
      title: "3. 权限与第三方服务",
      paragraphs: [
        "本 App 可能请求照片、相机或“使用 App 期间”位置权限，以便你添加媒体、制作贴纸、保存导出文件，或为新笔记附加可选的位置与天气信息。你可以拒绝或撤回授权，但部分功能可能因此无法使用。",
        "本 App 可能使用 StoreKit、iCloud／CloudKit 等 Apple 服务。Apple 服务由 Apple 按照其自身条款提供。天气预报由 MET Norway 提供，通过托管于 Cloudflare 的代理获取；数据依据 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) 许可使用并注明来源，显示时会调整温度单位和天气图标。天气信息仅用于一般记录，可能延迟或不准确，不得用于紧急情况、关系安全或救生的决策。",
        "部分字体首次使用时需要联网，从 Cloudflare 或阿里云分发服务下载。第三方服务的可用性可能影响下载、同步和天气。信息处理方式（包括可选的网站统计）见我们的[隐私政策](/zh/privacy)。",
      ],
    },
    {
      id: "license",
      title: "4. App 使用许可",
      paragraphs: [
        "在遵守本条款的前提下，我们授予你有限的、个人使用的、非独占、不可转让、可撤销的许可，允许你在拥有或控制的 Apple 设备上为自身合法目的使用本 App。你不得复制、转售、再许可、出租、逆向工程、反编译或尝试提取 App 源代码，但适用法律不允许作此限制的情形除外。",
      ],
    },
    {
      id: "purchases",
      title: "5. App Store 购买",
      paragraphs: [
        "可选功能可能通过 Apple 的 App 内购买提供。交易以购买时 Apple 显示的价格、计费周期、优惠和续订条款为准。自动续订订阅会续订，除非你在续订周期开始前通过 Apple 账户取消。你可以通过 App Store 或 Apple 账户设置管理或取消订阅。",
        "App Store 购买的付款处理、账单和退款由 Apple 按照其适用政策负责。我们不会要求你直接向 App 提供银行卡信息。",
      ],
    },
    {
      id: "acceptable-use",
      title: "6. 合理使用",
      paragraphs: [
        "你同意不使用本 App 违反法律或他人权利、传播恶意代码、干扰 App 或网站，或尝试访问并非向你开放的系统。你对自己创建的内容及导出材料的使用方式负责。",
      ],
    },
    {
      id: "availability",
      title: "7. 可用性与更新",
      paragraphs: [
        "我们可能变更、暂停或停止 App 或网站的部分功能，也可能发布修复问题、改善安全或调整功能的更新。我们不保证本 App 始终可用或适用于所有设备。你应在更新提供后自行安装。",
      ],
    },
    {
      id: "disclaimers",
      title: "8. 免责声明",
      paragraphs: [
        "在法律允许的最大范围内，本 App 按“现有状态”和“可用状态”提供。我们不保证 App 永不中断、没有错误，也不保证本地或同步内容永不丢失。本 App 是个人书写与日记工具，不是医疗、法律、金融、紧急救助或安全服务。",
      ],
    },
    {
      id: "liability",
      title: "9. 责任限制",
      paragraphs: [
        "在适用法律允许的最大范围内，LRAI STUDIO 及其开发者不对因使用或无法使用本 App 或网站而产生的间接、附带、特殊、后果性或惩罚性损害承担责任。本条款不排除适用法律不允许排除的责任。",
      ],
    },
    {
      id: "changes",
      title: "10. 条款变更",
      paragraphs: [
        "随着 App 发展，我们可能更新本条款。更新版本会发布在本页，并更新显示日期。在法律允许的范围内，你在更新后继续使用本 App，即表示接受修订后的条款。",
      ],
    },
    {
      id: "retention",
      title: "11. Apple 作为第三方受益人",
      paragraphs: [
        "Apple 不对本 App、其内容或支持负责。但在 Apple App Store 条款适用的情况下，Apple 及其子公司可以作为第三方受益人执行本条款。",
      ],
    },
    {
      id: "contact",
      title: "12. 联系我们",
      paragraphs: [
        `如对本条款有疑问，可发送邮件至 ${contact}。`,
        "LRAI STUDIO · @lemon · PinyPiny／拼拼笔记",
      ],
    },
  ],
};

const legal: Record<"en" | "zh", Record<LegalSlug, LegalContent>> = {
  en: { privacy: privacyEn, terms: termsEn },
  zh: { privacy: privacyZh, terms: termsZh },
};

export function getLegal(locale: "en" | "zh", slug: LegalSlug): LegalContent {
  return legal[locale][slug];
}
